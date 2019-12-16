import Vue from "vue";

import WebPageIndex from "./components/WebPageIndex";
Vue.component(WebPageIndex.name, WebPageIndex);

if ( console && console.log ) {
    console.log('web-page ready.');
}
