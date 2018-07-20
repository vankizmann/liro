<template>
    <li class="app-menu-item">
        <div class="app-menu-display uk-table-list-row">
            <div class="uk-table-list-td uk-table-list-td-xs uk-text-center">
                <app-list-collapse :disabled="item.children.length == 0" :active="! collapse && item.children.length != 0 " @click="collapse = !collapse"></app-list-collapse>
            </div>
            <div class="uk-table-list-td uk-table-list-td-auto">
                <a :href="item.edit_route">{{ item.title_fix }}</a>
            </div>
            <div class="uk-table-list-td uk-table-list-td-m uk-text-center">
                <app-list-hidden :active="item.hidden == 1" @click.prevent="item.hidden == 1 ? visible(item) : hidden(item)"></app-list-hidden>
            </div>
            <div class="uk-table-list-td uk-table-list-td-m uk-text-center">
                <app-list-state :active="item.state == 1" @click.prevent="item.state == 1 ? disable(item) : enable(item)"></app-list-state>
            </div>
            <div class="uk-table-list-td uk-table-list-td-m uk-text-center">
                <span>{{ item.id }}</span>
            </div>
        </div>
        <app-menu-index-list v-show="! collapse || item.children.length == 0" v-model="item.children"></app-menu-index-list>
    </li>
</template>
<script>
    module.exports = {

        computed: {
            children() {
                return this.item.children || []
            }
        },

        props: {
            value: {
                type: Object
            }
        },

        data() {
            return {
                collapse: true,
                item: this.value
            }
        },

        mounted() {

            this.$watch('item', () => {
                this.$emit('input', this.item);
            });

            this.$watch('value', () => {
                this.item = this.value;
            });

        },

        methods: {
            enable(item) {
                this.$http.post(item.enable_route, {}).then(() => {
                    item.state = 1;
                });
            },
            disable(item) {
                this.$http.post(item.disable_route, {}).then(() => {
                    item.state = 0;
                });
            },
            visible(item) {
                this.$http.post(item.visible_route, {}).then(() => {
                    item.hidden = 0;
                });
            },
            hidden(item) {
                this.$http.post(item.hidden_route, {}).then(() => {
                    item.hidden = 1;
                });
            }
        }

    }
    liro.vue.$component('app-menu-index-item', module.exports);
</script>

