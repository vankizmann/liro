export default {

    bind: function (el, binding) {

        var config = {
            message: _.get(binding, 'value.message', ''),
            disabled: _.get(binding, 'value.disabled', false)
        };

        if ( config.disabled ) {
            return;
        }

        $(el).on('mousedown', function (event) {

            if ( event.which != 1 ) {
                return event.stopPropagation();
            }

            UIkit.modal.confirm(config.message).then(() => el.click(), () => null);
        });

    }

}

if (window.Liro) {
    Liro.vue.directive('confirm', this.default);
}