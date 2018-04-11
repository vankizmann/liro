<template>
    <li :class="{ 'uk-toolbar--action': true, 'uk-disabled': disabled }">
        <a :href="href" @click="submitAction">
            <i v-if="icon" :class="icon+' uk-margin-small-right'"></i> <slot></slot>
        </a>
    </li>
</template>
<script>
    module.exports = {
        name: 'app-toolbar-action',
        props: {
            href: {
                default: '',
                type: String
            },
            icon: {
                default: '',
                type: String
            },
            action: {
                default: '',
                type: String
            },
            disabled: {
                default: false,
                type: Boolean
            }
        },
        methods: {
            submitAction(event) {

                if ( this.disabled == true ) {
                    event.preventDefault();
                }

                if ( this.action != '' ) {
                    this.$root.$emit(this.action, event);
                }

            }
        }
    }
    liro.component(module.exports);
</script>
