<template>
    <div>
        <div v-for="entity in entities.data" :key="entity.id">
            <router-link :to="{ name: 'liro-users-user-edit', params: { user: entity.id } }">
                {{ entity.name }}
            </router-link>
        </div>
    </div>
</template>
<script lang="ts">

    declare var _ : any;

    export default {

        props: ['id'],

        data() {
            return { entities: {} }
        },

        mounted() {
            this.ux.ajax.call(['user-index', 'users'], true)
                .then((res) => this.entities = res.data);
        },

        watch: {
            $route() {
                this.entities = this.ux.data.get('users', {})
            }
        }
    }

</script>
