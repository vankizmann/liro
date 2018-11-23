<template>

<tr>
    <td class="uk-text-center">
        <app-list-switch class="is-state" :active="value.state" @click="updateUser"></app-list-switch>
    </td>
    <td>
        <a :href="Liro.routes.get('liro-users.user.edit', { user: value.id })">
            {{ value.name }}
        </a>
    </td>
    <td>
        <span>
            {{ value.email }}
        </span>
    </td>
    <td>
        <span class="uk-label uk-margin-small-right" v-for="(role, index) in Liro.helpers.map(value.role_ids, 'id', $parent.$parent.roles)" :key="index">
            {{ role.title }}
        </span>
    </td>
    <td class="uk-text-center">
        <span>
            {{ value.id }}
        </span>
    </td>
</tr>

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

