import DOM from './Essentials/dom';
import Element from './Essentials/element';
import NavElement from './Elements/nav';

DOM.ready(function () {

    require('./Extends/jquery');

    Element.bind('nav', function (el, options) {
        new NavElement(el, options).bind();
    });

    console.log('Ready!');

});
