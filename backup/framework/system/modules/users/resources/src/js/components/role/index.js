import Vue from "vue";

import RoleIndex from "./src/index/index"
Vue.Extension.export(RoleIndex.name, RoleIndex);

import RoleEdit from "./src/edit/edit"
Vue.Extension.export(RoleEdit.name, RoleEdit);

import RoleCreate from "./src/create/create"
Vue.Extension.export(RoleCreate.name, RoleCreate);
