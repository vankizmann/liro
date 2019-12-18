<template>
    <NLoader class="web-menu__tree" :visible="load">
        <NDraggableTree :items="menus" :cascade.sync="cascade" use="WebMenuTreeItem" use-after="WebMenuTreeContext" />
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
            this.fetchMenus();
        },

        methods: {

            fetchMenus()
            {
                let route = this.Route.get('module.web-menu.menu.tree');

                let options = {
                    onLoad: () => this.load = true,
                    onDone: () => this.load = false
                };

                this.$http.get(route, options)
                    .then(res => this.menus = res.data)
            }

        }
    }
</script>
