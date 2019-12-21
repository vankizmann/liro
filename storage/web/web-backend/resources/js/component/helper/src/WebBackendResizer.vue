<template>
    <div class="web-backend-resizer">
        <div class="web-backend-resizer__inner">
            <span></span>
        </div>
    </div>
</template>
<script>
    export default {

        name: 'WebBackendResizer',

        props: {

            minWidth: {
                default()
                {
                    return 0;
                },
                type: [Number]
            },

            maxWidth: {
                default()
                {
                    return 0;
                },
                type: [Number]
            }

        },

        mounted()
        {
            this.bindEnter();
        },

        methods: {

            bindEnter()
            {
                let callback = (event) => {

                    event.preventDefault();
                    event.stopPropagation();

                    this.bindMove();
                    this.bindLeave();
                };

                this.Dom.find(this.$el).on('mousedown', callback,
                    { _uid: this._uid });
            },

            unbindEnter()
            {
                this.Dom.find(this.$el).off('mousedown', null,
                    { _uid: this._uid });
            },

            bindMove()
            {
                let callback = (event) => {

                    let left = this.Dom.find(this.$el).parent().offsetLeft();

                    let css = {
                        width: (event.clientX - left) + 'px'
                    };

                    if ( ! this.Any.isEmpty(this.minWidth) ) {
                        css['min-width'] = this.minWidth + 'px';
                    }

                    if ( ! this.Any.isEmpty(this.maxWidth) ) {
                        css['max-width'] = this.maxWidth + 'px';
                    }

                    this.Dom.find(this.$el).parent().css(css);
                };

                this.Dom.find(window).on('mousemove', callback,
                    { _uid: this._uid });
            },

            unbindMove()
            {
                this.Dom.find(window).off('mousemove', null,
                    { _uid: this._uid });
            },

            bindLeave()
            {
                let callback = (event) => {
                    this.unbindMove();
                    this.unbindLeave();
                };

                this.Dom.find(window).on('mouseup', callback, { _uid: this._uid });
            },

            unbindLeave()
            {
                this.Dom.find(window).off('mouseup', null,
                    { _uid: this._uid });
            },

        }

    }
</script>
