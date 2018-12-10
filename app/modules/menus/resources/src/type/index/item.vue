<template>

<div class="th-table-tr uk-flex uk-flex-middle">
    <div class="uk-width-1-3">
        <a :href="Liro.routes.get('liro-menus.admin.type.edit', { type: value.id })">
            {{ value.title }}
        </a>
    </div>
    <div class="uk-width-1-3">
        <span>
            {{ value.route }}
        </span>
    </div>
    <div class="uk-width-1-3">
        <span>
            {{ value.theme }}
        </span>
    </div>
    <div class="th-table-td-m uk-text-center">
        <app-list-switch class="is-state" :active="value.state" @click="updateTypeState"></app-list-switch>
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

        updateTypeState: function () {

            var url = Liro.routes.get('liro-menus.ajax.type.update', {
                type: this.value.id
            });

            var menu = _.merge(this.value, {
                state: this.value.state ? 0 : 1
            });

            Axios.put(url, menu).then(this.updateTypeResponse);
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

