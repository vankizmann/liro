import Vue from "vue";

import WebMenuIndex from "./components/WebMenuIndex";
Vue.component(WebMenuIndex.name, WebMenuIndex);

if ( console && console.log ) {
    console.log('web-menu ready.');
}
