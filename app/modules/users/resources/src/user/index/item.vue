<template>

<div class="th-table-tr uk-flex uk-flex-middle">
    <div class="th-table-td-xs">
        <slot name="checkbox"></slot>
    </div>
    <div class="uk-width-1-3">
        <a :href="Liro.routes.get('liro-users.user.edit', { user: value.id })">
            {{ value.name }}
        </a>
    </div>
    <div class="uk-width-1-3">
        <span>
            {{ value.email }}
        </span>
    </div>
    <div class="uk-width-1-3">
        <span class="uk-label uk-label-primary uk-margin-small-right" v-for="(role, index) in Liro.helpers.map(value.role_ids, 'id', $parent.$parent.roles)" :key="index">
            {{ role.title }}
        </span>
    </div>
    <div class="th-table-td-m uk-text-center">
        <app-list-switch class="is-state" :active="value.state" @click="updateUser"></app-list-switch>
    </div>
    <div class="th-table-td-m uk-text-center">
        <span>
            {{ value.id }}
        </span>
    </div>
</div>

</template>
<script>

export default {

    props: {

        value: {
            required: true,
            type: Object
        }

    },

    methods: {

        updateUser: function () {

            var url = Liro.routes.get('liro-users.user.edit', {
                user: this.value.id
            });

            var user = _.merge(this.value, {
                state: this.value.state ? 0 : 1
            });

            Axios.post(url, user).then(this.updateUserResponse);
        },

        updateUserResponse: function (res) {

            var message = Liro.messages.get('liro-users::message.user.saved');
            UIkit.notification(message, 'success');

            this.$emit('input', res.data.user);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-user-index-item', this.default);
}


</script>

