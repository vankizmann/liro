import Vue from "vue";

import WebDashboardIndex from "./components/WebDashboardIndex";
Vue.component(WebDashboardIndex.name, WebDashboardIndex);

if ( console && console.log ) {
    console.log('web-dashboard ready.');
}
