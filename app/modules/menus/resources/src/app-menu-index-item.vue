<template>
    <ul class="uk-list">
        <li v-for="(parent, index) in value" :key="index" :id="'menuItem_' + parent.id">
            <div class="uk-menu-item uk-flex uk-flex-middle">
                <div class="uk-menu-item-id uk-width-auto">
                    <span>{{ parent.id }}</span>
                </div>
                <div :class="{ 'uk-menu-item-state': true, 'uk-active': parent.state }">
                    <span></span>
                </div>
                <div class="uk-menu-item-title uk-flex-1">
                    <a href="#">{{ parent.title_fix }}</a><br>
                    <span>{{ parent.package }}</span>
                </div>
            </div>
            <app-menu-index-item v-model="parent.children"></app-menu-index-item>
        </li>
    </ul>
</template>
<script>
    module.exports = {
        name: 'app-menu-index-item',
        props: {
            value: {
                type: Array
            }
        }
    }
    liro.component(module.exports);
</script>
<style>

.uk-list, .uk-list li {
    margin: 0 !important;
}

.uk-menu-item {
    border-radius: 3px;
    padding: 15px;
    background-color: #fff;
}

.uk-menu-item {
    border-bottom: 1px solid #eee;
}

.ui-sortable-helper .uk-menu-item {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.uk-menu-item-id {
    padding-right: 15px;
}

.uk-menu-item-id span {
    color: #999;
}

.uk-menu-item-state {
    padding-right: 15px;
}

.uk-menu-item-state span {
    display: block;
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 999px;
}

.uk-menu-item-state.uk-active span {
    background-color: green;
}

.uk-menu-item-title a {
    font-weight: 500;
}

.uk-menu-item-title span {
    font-size: 0.8rem;
}

</style>

