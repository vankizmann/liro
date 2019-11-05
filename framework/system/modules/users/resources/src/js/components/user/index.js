import Vue from "vue";

import UserIndex from "./src/index/index"
Vue.Extension.export(UserIndex.name, UserIndex);

import UserEdit from "./src/edit/edit"
Vue.Extension.export(UserEdit.name, UserEdit);

import UserCreate from "./src/create/create"
Vue.Extension.export(UserCreate.name, UserCreate);
