import Vue from "vue";

import AuthLogin from "./src/login/login"
Vue.Extension.export(AuthLogin.name, AuthLogin);

import AuthLogout from "./src/logout/logout"
Vue.Extension.export(AuthLogout.name, AuthLogout);
