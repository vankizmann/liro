import Vue from "vue";

import WebMenuTree from "./components/WebMenuTree";
Vue.component(WebMenuTree.name, WebMenuTree);

import WebMenuTreeItem from "./components/WebMenuTreeItem";
Vue.component(WebMenuTreeItem.name, WebMenuTreeItem);

import WebMenuTreeContext from "./components/WebMenuTreeContext";
Vue.component(WebMenuTreeContext.name, WebMenuTreeContext);

import WebMenuIndex from "./components/WebMenuIndex";
Vue.component(WebMenuIndex.name, WebMenuIndex);

import WebMenuEdit from "./components/WebMenuEdit";
Vue.component(WebMenuEdit.name, WebMenuEdit);

if ( console && console.log ) {
    console.log('web-menu ready.');
}
