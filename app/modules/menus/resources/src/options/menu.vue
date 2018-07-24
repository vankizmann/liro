<template>
    <div>
        <app-form-input :label="$t('liro-menus.form.menu')" v-model="value.menu"></app-form-input>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            default() {
                return {};
            },
            type: Object
        }
    }
}

if (window.liro) {
    liro.vue.$component('app-menus-option-menu', this.default);
}
</script>

