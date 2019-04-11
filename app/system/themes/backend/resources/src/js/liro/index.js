
import Assets from "./libraries/assets"
export { Assets };

import Queue from "./libraries/queue"
export { Queue };

import EventsObject from "./libraries/events"
export const Events = new EventsObject();

import ModulesObject from "./libraries/modules"
export const Modules = new ModulesObject();

import StorageObject from "./libraries/storage"
export const Storage = new StorageObject();

import RoutesObject from "./libraries/routes"
export const Routes = new RoutesObject();

import LocalesObject from "./libraries/locales"
export const Locales = new LocalesObject();

import AjaxObject from "./libraries/ajax"
export const Ajax = new AjaxObject();

import VueObject from "./libraries/vue"
export const Vue = new VueObject();

export default {

    modules: Modules,
    Modules: Modules,

    events: Events,
    Events: Events,

    storage: Storage,
    Storage: Storage,

    routes: Routes,
    Routes: Routes,

    locales: Locales,
    Locales: Locales,

    ajax: Ajax,
    Ajax: Ajax,

    vue: Vue,
    Vue: Vue,

    assets: Assets,
    Assets: Assets,

    queue: Queue,
    Queue: Queue

}
