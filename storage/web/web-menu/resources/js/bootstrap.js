import Vue from "vue";

import WebMenuTree from "./components/WebMenuTree";
Vue.component(WebMenuTree.name, WebMenuTree);

import WebMenuIndex from "./components/WebMenuIndex";
Vue.component(WebMenuIndex.name, WebMenuIndex);

if ( console && console.log ) {
    console.log('web-menu ready.');
}
