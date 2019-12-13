import Vue from "vue";

import WebAuthLogin from "./components/WebAuthLogin";
Vue.component(WebAuthLogin.name, WebAuthLogin);

if ( console && console.log ) {
    console.log('web-auth ready.');
}
