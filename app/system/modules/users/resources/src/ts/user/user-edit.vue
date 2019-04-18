<template>
    <div>
        <el-form :model="entity" label-position="top">
            <el-form-item prop="name" :label="trans('liro-users::form.user.name')" :error="error.name">
                <el-input v-model="entity.name" />
            </el-form-item>

            <el-form-item prop="email" :label="trans('liro-users::form.user.email')" :error="error.email">
                <el-input v-model="entity.email" />
            </el-form-item>

            <el-form-item prop="password" :label="trans('liro-users::form.user.password')" :error="error.password">
                <el-input v-model="entity.password" autocomplete="new-password" show-password />
            </el-form-item>

            <el-form-item prop="password_confirm" :label="trans('liro-users::form.user.password_confirm')" :error="error.password_confirm">
                <el-input v-model="entity.password_confirm" autocomplete="new-password" show-password />
            </el-form-item>

            <el-form-item>
                <el-button @click="updateUser">Update</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts">

    declare var _ : any;

    let errors = {
        state: null, name: null, email: null, password: null, password_confirm: null
    };

    export default {

        props: ['user'],

        data() {
            return { entity: {}, error: errors }
        },

        mounted() {

            let entity = this.ux.data.find('users.data', {
                id: this.user
            }, null);

            if ( entity !== null ) {
                return this.entity = entity;
            }

            this.ux.ajax.call(['user-show', 'user'], true, { id: this.user })
                .then((res) => this.entity = res.data);
        },

        methods: {
            updateUser() {
                this.ux.ajax.call('user-update', false, this.entity)
                    .then(this.updateUserDone, this.updateUserError);
            },
            updateUserDone(res : any) {

                this.$message.success(
                    this.trans('liro-users::message.user.saved')
                );

                this.ux.data.replace('users.data', res.data);
            },
            updateUserError(res : any) {
                this.error = _.assign({}, errors, res.data.errors);
            }
        }
    }
</script>
