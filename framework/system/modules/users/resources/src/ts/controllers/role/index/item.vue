<template>

<div class="th-table-tr uk-flex uk-flex-middle">
    <div class="th-table-td-xs">
        <app-list-select :value="value.id"></app-list-select>
    </div>
    <div class="uk-width-1-2">
        <a :href="route('liro-users.admin.role.edit', { role: value.id })">
            {{ value.title }}
        </a>
    </div>
    <div class="uk-width-1-2">
        <span class="uk-text-muted">
            {{ value.description }}
        </span>
    </div>
    <div class="th-table-td-l uk-text-center">
        <span>
            {{ value.route_names.length }}
        </span>
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

    }

}

if (window.Liro) {
    Liro.vue.component('liro-role-index-item', this.default);
}


</script>

