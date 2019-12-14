import Vue from "vue";

import WebAuthLogin from "./components/WebAuthLogin";
Vue.component(WebAuthLogin.name, WebAuthLogin);

import WebAuthLogout from "./components/WebAuthLogout";
Vue.component(WebAuthLogout.name, WebAuthLogout);

if ( console && console.log ) {
    console.log('web-auth ready.');
}
