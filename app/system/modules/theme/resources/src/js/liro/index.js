
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

import Assets from "./libs/assets"
export { Assets };

import Queue from "./libs/queue"
export { Queue };

export default { Modules, Events, Storage, Routes, Locales, Ajax, Vue, Assets, Queue }
