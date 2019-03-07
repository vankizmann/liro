<template>

    <div class="liro-user-edit">

        <el-form :model="user">

            <el-form-item :label="trans('liro-users::form.user.name')">
                <el-radio-group v-model="user.state">
                    <el-radio :label="3">Option A</el-radio>
                    <el-radio :label="6">Option B</el-radio>
                    <el-radio :label="9">Option C</el-radio>
                </el-radio-group>

            </el-form-item>
            <el-form-item :label="trans('liro-users::form.user.name')">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item :label="trans('liro-users::form.user.password')">
                <el-input type="password" v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item :label="trans('liro-users::form.user.password_confirm')">
                <el-input type="password" v-model="user.password_confirm"></el-input>
            </el-form-item>
        </el-form>

    </div>

</template>
<script>

    window.liro.modules.export('liro-user-edit', this.default = {

        data: function () {
            return {
                ...this.liro.vue.bind('states', this),
                ...this.liro.vue.bind(['user-edit', 'user'], this),
                ...this.liro.vue.bind(['role-index', 'roles'], this)
            }
        },

        methods: {

            updateUser: function () {

                var url = Liro.routes.get('liro-users.ajax.user.update', {
                    user: this.user.id
                });

                this.http.put(url, this.user).then(this.updateUserResponse);
            },

            updateUserResponse: function (res) {
                var message = Liro.messages.get('liro-users::message.user.saved');
            }

        }

    });

</script>

