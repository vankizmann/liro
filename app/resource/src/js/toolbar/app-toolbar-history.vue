<template>
    <li :class="{ 'uk-toolbar--action': true, 'uk-disabled': disabled }">
        <a @click.prevent="clickEvent">
            <i v-if="icon" :class="icon + ' uk-margin-small-right'"></i> <slot></slot>
        </a>
    </li>
</template>
<script>
    module.exports = {
        name: 'app-toolbar-history',
        computed: {
            disabled() {
                return this.getter ? ! this.$store.getters[this.getter] : true;
            }
        },
        props: {
            icon: {
                default: '',
                type: String
            },
            getter: {
                defaukt: '',
                type: String
            },
            event: {
                defaukt: '',
                type: String
            }
        },
        methods: {
            clickEvent() {
                if ( ! this.diabled && this.event ) {
                    this.$liro.trigger(this.event);
                }
            }
        }
    }
    liro.component(module.exports);
</script>
