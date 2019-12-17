import Vue from "vue";

import WebMenuTree from "./components/WebMenuTree";
Vue.component(WebMenuTree.name, WebMenuTree);

import WebMenuTreeItem from "./components/WebMenuTreeItem";
Vue.component(WebMenuTreeItem.name, WebMenuTreeItem);

import WebMenuIndex from "./components/WebMenuIndex";
Vue.component(WebMenuIndex.name, WebMenuIndex);

if ( console && console.log ) {
    console.log('web-menu ready.');
}
