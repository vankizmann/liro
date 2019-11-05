<template>

    <div class="table__tr grid grid--row grid--middle">
        <div class="table__td table__td--xs">
            <app-list-select :value="value.id" />
        </div>
        <div class="table__td col--1-3">
            <a :href="routes.get('liro-users.admin.user.edit', { user: value.id })">
                {{ value.name }}
            </a>
        </div>
        <div class="table__td col--1-3">
            <span>
                {{ value.email }}
            </span>
        </div>
        <div class="table__td col--1-3">

        </div>
        <div class="table__td table__td--md text--center">
            {{ value.state }}
        </div>
        <div class="table__td table__td--md text--center">
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

