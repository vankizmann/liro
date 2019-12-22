<template>
    <NLoader class="web-menu-tree" :visible="load">
        <div class="web-menu-tree__search">
            <NInput :placeholder="trans('Search')" icon="fa fa-search"/>
        </div>
        <div class="web-menu-tree__list">
        <NDraggableTree :items="menus" :cascade.sync="cascade" use="WebMenuTreeElement" use-after="WebMenuTreeContext" @move="moveEntity" />
        </div>
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
