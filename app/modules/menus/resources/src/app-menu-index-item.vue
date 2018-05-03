<template>
    <li :id="'menuItem_' + value.id">
        <div class="uk-menu-item uk-flex uk-flex-middle">
            <div :class="{ 'uk-menu-item-collapse': true, 'uk-active': value.children.length }">
                <a :class="{ 'fa': true, 'fa-angle-right': collapse, 'fa-angle-down': !collapse }" href="#" @click="collapse = !collapse"></a>
            </div>
            <div class="uk-menu-item-title uk-flex-1">
                <a :href="value.edit_route">{{ value.title_fix }}</a><br>
                <span>{{ value.package }}</span>
            </div>
            <div :class="{ 'uk-menu-item-hidden': true, 'uk-active': value.hidden == 1 }">
                <span class="fa fa-eye-slash"></span>
            </div>
            <div :class="{ 'uk-menu-item-state': true, 'uk-active': value.state == 1 }">
                <span></span>
            </div>
            <div class="uk-menu-item-id uk-width-auto">
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

