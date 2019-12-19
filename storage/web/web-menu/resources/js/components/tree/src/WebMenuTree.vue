<template>
    <NLoader class="web-menu__tree" :visible="load">
        <NDraggableTree :items="menus" :cascade.sync="cascade" use="WebMenuTreeElement" use-after="WebMenuTreeContext" @move="moveEntity" />
    </NLoader>
</template>
<script>
    export default {

        name: 'WebMenuTree',

        data()
        {
            return { menus: [], cascade: [], load: true };
        },

        mounted()
        {
            this.fetchEntities();
        },

        methods: {

            fetchEntities()
            {
                let route = this.Route.get('module.web-menu.menu.tree');

                let options = {
                    onLoad: () => this.load = true,
                    onDone: () => this.load = false
                };

                this.$http.get(route, options)
                    .then(res => this.menus = res.data)
            },

            moveEntity(...args)
            {
                console.log(...args); this.fetchEntities();
            }

        }
    }
</script>
