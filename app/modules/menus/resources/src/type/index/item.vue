<template>

<tr>
    <td class="uk-text-center">
        <app-list-switch class="is-state" :active="value.state" @click="updateTypeState"></app-list-switch>
    </td>
    <td>
        <a :href="Liro.routes.get('liro-menus.type.edit', { type: value.id })">
            {{ value.title }}
        </a>
    </td>
    <td>
        <span>
            {{ value.route }}
        </span>
    </td>
    <td>
        <span>
            {{ value.theme }}
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

        updateTypeState: function () {

            var url = Liro.routes.get('liro-menus.type.edit', {
                type: this.value.id
            });

            var menu = _.merge(this.value, {
                state: this.value.state ? 0 : 1
            });

            Axios.post(url, menu).then(this.updateTypeResponse);
        },

        updateTypeResponse: function (res) {

            var message = Liro.messages.get('liro-menus::message.type.saved');
            UIkit.notification(message, 'success');

            this.$emit('input', res.data.user);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-type-index-item', this.default);
}


</script>

