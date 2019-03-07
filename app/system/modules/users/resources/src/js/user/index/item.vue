<template>

    <div class="grid grid--row grid--middle">
        <div class="th-table-td-xs">

        </div>
        <div class="col--1-3">
            <a :href="routes.get('liro-users.admin.user.edit', { user: value.id })">
                {{ value.name }}
            </a>
        </div>
        <div class="col--1-3">
            <span>
                {{ value.email }}
            </span>
        </div>
        <div class="col--1-3">

        </div>
        <div class="th-table-td-m uk-text-center">

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

</script>

