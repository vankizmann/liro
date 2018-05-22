
var LiroLocale = require('./components/locale.js');
var LiroMessage = require('./components/message.js');
var LiroData = require('./components/data.js');
var LiroEvent = require('./components/event.js');
var LiroVue = require('./components/vue.js');
var LiroHistory = require('./libraries/history.js');
var LiroList = require('./components/list.js');


module.exports = {
    locale: new LiroLocale,
    message: new LiroMessage,
    data: new LiroData,
    event: new LiroEvent,
    vue: new LiroVue,
    history: LiroHistory,
    list: LiroList
}
