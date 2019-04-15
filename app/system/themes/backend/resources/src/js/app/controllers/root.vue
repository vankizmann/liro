<template>
    <div>
        <div><router-link to="/users/users">GOGO</router-link><router-link to="/">GOGO</router-link></div>
        <div><input type="text" v-model="route"></div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({

        data() {
            return { route: '/users/users' }
        },

    });

    Vue.component('liro-root', this.default)
</script>
