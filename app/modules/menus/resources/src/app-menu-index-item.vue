<template>
    <li :id="'menuItem_' + value.id">
        <div class="uk-table-list-row">
            <div class="uk-table-list-td uk-table-list-td-xs uk-text-center">
                <app-list-collapse :disabled="value.children.length == 0" :active="!collapse" @click="collapse = !collapse"></app-list-collapse>
            </div>
            <div class="uk-table-list-td uk-table-list-td-auto">
                <a :href="value.edit_route">{{ value.title_fix }}</a><br>
                <span>{{ value.package }}</span>
            </div>
            <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                <app-list-hidden :active="value.hidden == 1" href="#"></app-list-hidden>
            </div>
            <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                <app-list-state :active="value.state == 1" href="#"></app-list-state>
            </div>
            <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                <span>{{ value.id }}</span>
            </div>
        </div>
        <app-menu-index-list v-show="collapse == false" v-model="value.children"></app-menu-index-list>
    </li>
</template>
<script>
    module.exports = {
        name: 'app-menu-index-item',
        props: {
            value: {
                type: Object
            }
        },
        data() {
            return {
                collapse: true
            }
        }
    }
    liro.component(module.exports);
</script>

