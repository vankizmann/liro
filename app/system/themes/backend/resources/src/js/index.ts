import DOM from "./liro/Essentials/dom"
import Element from "./liro/Essentials/element"

DOM.ready(function () {

    Element.bind('test', function (el, options) {
        el.innerHTML += options.text || '';
    });

});

