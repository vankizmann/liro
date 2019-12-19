import Vue from "vue";

import WebPageIndex from "./components/WebPageIndex";
Vue.component(WebPageIndex.name, WebPageIndex);

import WebPageEdit from "./components/WebPageEdit";
Vue.component(WebPageEdit.name, WebPageEdit);

if ( console && console.log ) {
    console.log('web-page ready.');
}
