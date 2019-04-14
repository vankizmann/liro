import DOM from './Essentials/dom';
import Module from './Essentials/module';
import Event from './Essentials/event';
import Element from './Essentials/element';
import NavElement from './Elements/nav';

DOM.ready(function () {

    require('./Extends/jquery');

    Module.bind('foo', {
        styles: [
            // 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css'
        ],
        scripts: [
            'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js'
        ],
        modules: ['bar']
    });

    Module.export('foo', {});

    // Module.load('foo', () => {
    //     console.log('foo loaded!');
    // }, () => {
    //     console.log('NIX OK');
    // });

    Module.import('bar', () => {
        console.log('bar loaded!');
    }, () => {
        console.log('iwas ist schief gelaufen :(');
    });

    Event.bind('foobar', () => {
        console.log('foobar not triggered!');
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
