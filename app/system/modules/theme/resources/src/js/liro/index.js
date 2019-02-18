
import Assets from "./libs/assets"
export { Assets };

import Queue from "./libs/queue"
export { Queue };

import EventsObject from "./libs/events"
export const Events = new EventsObject();

import ModulesObject from "./libs/modules"
export const Modules = new ModulesObject();

import StorageObject from "./libs/storage"
export const Storage = new StorageObject();

import RoutesObject from "./libs/routes"
export const Routes = new RoutesObject();

import LocalesObject from "./libs/locales"
export const Locales = new LocalesObject();

import AjaxObject from "./libs/ajax"
export const Ajax = new AjaxObject();

import VueObject from "./libs/vue"
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
