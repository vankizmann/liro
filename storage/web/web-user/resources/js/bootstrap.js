import Vue from "vue";

import WebUserIndex from "./components/WebUserIndex";
Vue.component(WebUserIndex.name, WebUserIndex);

if ( console && console.log ) {
    console.log('web-user ready.');
}
