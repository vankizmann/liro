import Vue from "vue";

import AppRoot from "./src/root/root";
Vue.component(AppRoot.name, AppRoot);

import AppRootSystem from "./src/system/system";
Vue.component(AppRootSystem.name, AppRootSystem);

import AppModuleSystem from "./src/module/module";
Vue.component(AppModuleSystem.name, AppModuleSystem);
