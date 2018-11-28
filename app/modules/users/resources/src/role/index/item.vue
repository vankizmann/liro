<template>

<div class="th-table-tr uk-flex uk-flex-middle">
    <div class="uk-width-1-3">
        <a :href="Liro.routes.get('liro-users.role.edit', { role: value.id })">
            {{ value.title }}
        </a>
    </div>
    <div class="uk-width-1-3">
        <span>
            {{ value.description }}
        </span>
    </div>
    <div class="uk-width-1-3">
        <span>
            {{ value.route_names.length }}
        </span>
    </div>
    <div class="uk-width-small uk-text-center">
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

    }

}

if (window.Liro) {
    Liro.vue.component('liro-role-index-item', this.default);
}


</script>

