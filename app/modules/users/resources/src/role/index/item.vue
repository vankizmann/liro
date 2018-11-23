<template>

<tr>
    <td>
        <a :href="Liro.routes.get('liro-users.role.edit', { role: value.id })">
            {{ value.title }}
        </a>
    </td>
    <td>
        <span>
            {{ value.description }}
        </span>
    </td>
    <td>
        <span>
            {{ value.route_names.length }}
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

    }

}

if (window.Liro) {
    Liro.vue.component('liro-role-index-item', this.default);
}


</script>

