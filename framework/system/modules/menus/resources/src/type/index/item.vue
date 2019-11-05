<template>

<div class="th-table-tr uk-flex uk-flex-middle">
    <div class="th-table-td-xs">
        <app-list-select :value="value.id"></app-list-select>
    </div>
    <div class="uk-width-1-2 uk-flex uk-flex-middle">
        <a class="uk-margin-right" :href="Liro.routes.get('liro-menus.admin.type.edit', { type: value.id })">
            {{ value.title }}
        </a>
        <span class="uk-label">
            {{ value.route }}
        </span>
    </div>
    <div class="uk-width-1-2">
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

