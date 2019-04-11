import DOM from "./liro/dom"
import Element from "./liro/element"

DOM.ready(function () {

    Element.setPrefix('sx');

    Element.bind('test', function (el, options) {
        el.innerHTML += options.text || '';
    });

});

