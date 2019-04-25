
declare var $ : any;

/**
 * Get real height from element.
 */
$.fn.realHeight = function (display : string = 'block') {

    // Store current styles
    let style = $(this).eq(0).attr('style');

    // Clear styles
    $(this).eq(0).attr('style', 'display: ' + display);

    // Store height without styles
    let height = $(this).eq(0).outerHeight();

    // Reappend styles
    $(this).eq(0).attr('style', style);

    return height;
};

/**
 * Get real width from element.
 */
$.fn.realWidth = function (display : string = 'block') {

    // Store current styles
    let style = $(this).eq(0).attr('style');

    // Clear styles
    $(this).eq(0).attr('style', 'display: ' + display);

    // Store height without styles
    let width = $(this).eq(0).outerWidth();

    // Reappend styles
    $(this).eq(0).attr('style', style);

    return width;
};

