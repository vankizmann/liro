
import Vue from './components/vue';
import Data from './components/data';
import Events from './components/event';
import Messages from './components/message';
import Routes from './components/route';
import Helpers from './components/helper';

export default {
    vue:            new Vue,
    data:           new Data,
    events:         new Events,
    messages:       new Messages,
    routes:         new Routes,
    helpers:        new Helpers
}
