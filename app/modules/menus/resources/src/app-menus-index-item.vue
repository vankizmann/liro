<template>
    <li :id="'menuItem_' + item.id">
        <div class="uk-table-list-row">
            <div class="uk-table-list-td uk-table-list-td-xs uk-text-center">
                <app-list-collapse :disabled="children.length == 0" :active="!collapse && children.length != 0" @click="collapse = !collapse"></app-list-collapse>
            </div>
            <div class="uk-table-list-td uk-table-list-td-auto">
                <a :href="item.edit_route">{{ item.title_fix }}</a><br>
                <span>{{ item.package }}</span>
            </div>
            <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                <app-list-hidden :active="item.hidden == 1" href="#" @click.prevent="item.hidden == 1 ? visible() : hidden()"></app-list-hidden>
            </div>
            <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                <app-list-state :active="item.state == 1" href="#" @click.prevent="item.state == 1 ? disable() : enable()"></app-list-state>
            </div>
            <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                <span>{{ item.id }}</span>
            </div>
        </div>
        <app-menu-index-list v-show="!collapse || children.length == 0" v-model="item.children"></app-menu-index-list>
    </li>
</template>
<script>
    module.exports = {

        name: 'app-menu-index-item',

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
                this.item = value;
            });

        },

        methods: {
            enable() {
                this.$http.post(this.item.enable_route, {}).then(() => {
                    this.item.state = 1;
                });
            },
            disable() {
                this.$http.post(this.item.disable_route, {}).then(() => {
                    this.item.state = 0;
                });
            },
            visible() {
                this.$http.post(this.item.visible_route, {}).then(() => {
                    this.item.hidden = 0;
                });
            },
            hidden() {
                this.$http.post(this.item.hidden_route, {}).then(() => {
                    this.item.hidden = 1;
                });
            }
        }

    }
    liro.component(module.exports);
</script>

