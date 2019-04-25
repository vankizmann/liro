import event from "./util/event";
import element from "./util/element";
import nav from "./element/nav";

event.bind('element:bind', () => {

    element.bind('nav', function (el, options) {
        new nav(el, options).bind();
    });

});
