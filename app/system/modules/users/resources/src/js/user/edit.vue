<template>

    <div class="liro-user-edit" v-loading="load">

        <portal to="toolbar-right">
            <app-nav-item>
                <a :href="routes.get('liro-users.admin.user.index')">
                    <el-button type="primary">
                        {{ trans('form.toolbar.close') }}
                    </el-button>
                </a>
            </app-nav-item>
            <app-nav-item>
                <el-button type="success" @click="updateUser">
                    {{ trans('form.toolbar.save') }}
                </el-button>
            </app-nav-item>
        </portal>

        <el-form :model="user" label-position="top" v-shortkey="['meta', 's']" @shortkey.native="updateUser">

            <div class="grid grid--wrap grid--row">

                <div class="form form__title col--1-1 col--order-0">
                    <a :href="routes.get('liro-users.admin.user.index')">
                        <el-button type="primary">
                            {{ trans('form.toolbar.close') }}
                        </el-button>
                    </a>
                    <el-button type="success" @click="updateUser">
                        {{ trans('form.toolbar.save') }}
                    </el-button>
                </div>

                <div class="form__sidebar col--1-1 col--4-10@lg col--order-2@lg col--4-12@xl">
                    <div class="form">

                        <el-form-item prop="state" :label="trans('form.state.label')" :error="error.state">
                            <el-radio-group v-model="user.state">
                                <el-radio-button v-for="(state) in states" :key="state.label" :label="state.value">
                                    {{ trans(state.label) }}
                                </el-radio-button>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item prop="state" :label="trans('liro-users::form.user.roles')" :error="error.state">
                            <el-select :multiple="true" v-model="user.role_ids" :placeholder="trans('liro-users::form.user.select_roles')">
                                <el-option v-for="(role) in roles" :key="role.id" :value="role.id" :label="role.title" />
                            </el-select>
                        </el-form-item>

                    </div>
                </div>


                <div class="form__body col--1-1 col--6-10@lg col--order-1@lg col--8-12@xl">
                    <div class="form">

                        <el-form-item prop="name" :label="trans('liro-users::form.user.name')" :error="error.name">
                            <el-input v-model="user.name" />
                        </el-form-item>

                        <el-form-item prop="email" :label="trans('liro-users::form.user.email')" :error="error.email">
                            <el-input v-model="user.email" />
                        </el-form-item>

                        <el-form-item prop="password" :label="trans('liro-users::form.user.password')" :error="error.password">
                            <el-input v-model="user.password" show-password />
                        </el-form-item>

                        <el-form-item prop="password_confirm" :label="trans('liro-users::form.user.password_confirm')" :error="error.password_confirm">
                            <el-input v-model="user.password_confirm" show-password />
                        </el-form-item>

                    </div>
                </div>

            </div>

        </el-form>

    </div>

</template>
<script>

    let errors = {
        state: null, name: null, email: null, password: null, password_confirm: null
    };

    export default {

        data: function () {
            return {
                load: false, error: errors,
                ...this.liro.vue.bind('states', this),
                ...this.liro.vue.bind(['user-edit', 'user'], this),
                ...this.liro.vue.bind(['role-index', 'roles'], this)
            }
        },

        methods: {

            updateUser: function () {

                let url = this.routes.get('liro-users.ajax.user.update', {
                    user: this.user.id
                });

                this.http.put(url, this.user)
                    .then(this.updateUserResponse, this.updateUserError);

                this.error = errors;
                this.load = true;
            },

            updateUserResponse: function (res) {
                this.$message.success(this.trans('liro-users::message.user.saved'));
                this.load = false;
            },

            updateUserError: function (res) {

                this.error = $.extend(
                    {}, errors, res.data.errors
                );

                this.load = false;
            }

        }

    }

</script>

