import DOM from './Essentials/dom';
import Event from './Essentials/event';
import Element from './Essentials/element';
import NavElement from './Elements/nav';

DOM.ready(function () {

    require('./Extends/jquery');

    Event.bind('foobar', () => {
        console.log('foobar triggered!');
    });

    Element.bind('nav', function (el, options) {
        new NavElement(el, options).bind();
    });

    Event.clear('foobar');

    Event.bind('foobar', () => {
        console.log('foobar now triggered :)');
    });

    Event.fire('foobar');

    console.log('Ready!');

});
