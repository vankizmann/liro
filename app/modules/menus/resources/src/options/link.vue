<template>
    <div>
        <app-form-input :label="$t('liro-menus.form.link')" v-model="value.link"></app-form-input>
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
    liro.vue.$component('app-menus-option-link', this.default);
}
</script>

