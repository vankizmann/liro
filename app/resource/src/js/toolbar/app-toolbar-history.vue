<template>
    <li :class="{ 'uk-toolbar--action': true, 'uk-disabled': disabled }">
        <a @click.prevent="runCommitOrDispatch">
            <i v-if="icon" :class="icon+' uk-margin-small-right'"></i> <slot></slot>
        </a>
    </li>
</template>
<script>
    module.exports = {
        name: 'app-toolbar-history',
        computed: {
            disabled() {
                return this.getter ? !this.$store.getters[this.getter] : true;
            }
        },
        props: {
            icon: {
                default: '',
                type: String
            },
            commit: {
                default: '',
                type: String
            },
            dispatch: {
                default: '',
                type: String
            },
            getter: {
                default: '',
                type: String
            }
        },
        methods: {
            runCommitOrDispatch(event) {
                if ( this.commit != '' ) {
                    this.$store.commit(this.commit);
                }
                if ( this.dispatch != '' ) {
                    this.$store.dispatch(this.dispatch);
                }
            }
        }
    }
    liro.component(module.exports);
</script>
