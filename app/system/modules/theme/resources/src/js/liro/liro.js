

import Events from './components/event';
import Data from './components/data';
import Messages from './components/message';
import Routes from './components/route';
import Vue from './components/vue';
import Helpers from './components/helper';

var LiroEvents = new Events;
var LiroData = new Data;
var LiroMessages = new Messages;
var LiroRoutes = new Routes;
var LiroHelpers = new Helpers;
var LiroVue = new Vue(LiroEvents, LiroRoutes);

export default {
    data:           LiroData,
    events:         LiroEvents,
    messages:       LiroMessages,
    routes:         LiroRoutes,
    helpers:        LiroHelpers,
    vue:            LiroVue
}
