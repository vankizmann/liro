

export default function (el, options) {

    if ( el === null || el === undefined ) {
        console.error('Element not found in menu module.');
        return;
    }

    options = $.assign({ delay: 200, duration: 1000 }, options);

    $(document.body).on('mouseenter', el, function() {
        $(this).velocity({ display: 'block', 'opacity': 1 }, options);
    });

    $(document.body).on('mouseleave', el, function() {
        $(this).velocity({ display: 'block', 'opacity': 1 }, options);
    });

    return el;
}
