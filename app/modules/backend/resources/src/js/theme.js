var Icons = require('../icons/index.json');

if (window.UIkit) {
    UIkit.icon.add(Icons);
}

liro.event.$watch('axios.load', function(name, res) {
    $('.uk-ajax-load').queue(() => {
        $('.uk-ajax-load').addClass('uk-active').dequeue();
    }).animate({
        opacity: 1
    }, 300);
});

liro.event.$watch('axios.done', function(name, res) {
    $('.uk-ajax-load').animate({
        opacity: 0
    }, 300).queue(() => {
        $('.uk-ajax-load').removeClass('uk-active').dequeue();
        UIkit.notification(res.data.message, 'success');
    });
});

liro.event.$watch('axios.error', function(name, res) {
    $('.uk-ajax-load').animate({
        opacity: 0
    }, 300).queue(() => {
        $('.uk-ajax-load').removeClass('uk-active').dequeue();
        UIkit.notification(res.data.message, 'danger');
    });
});
