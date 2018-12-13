<template>

<div class="app-select">

    <div :class="{ 'uk-select uk-flex uk-flex-middle': true, 'uk-disabled': disabled }" v-if="multiple == false && actives.length != 0">
        <span v-for="(active, index) in actives" :key="index">
            {{ active.label }}
        </span>
    </div>

    <div :class="{ 'uk-select uk-flex uk-flex-middle': true, 'uk-disabled': disabled }" v-if="multiple == true && actives.length != 0">
        <div class="uk-label uk-flex-inline uk-flex-middle" v-for="(active, index) in actives" :key="index">
            <span>{{ active.label }}</span> <i class="uk-icon-small" uk-icon="times" @click.stop="select(active.value)"></i>
        </div>
    </div>

    <div class="uk-select" v-if="actives.length == 0">
        <span class="uk-text-muted">
            {{ placeholder }}
        </span>
    </div>

    <div ref="dropdown" uk-dropdown="mode: click; pos: bottom-justify;">
        <ul class="uk-nav uk-dropdown-nav">
            <slot></slot>
        </ul>
    </div>

</div>

</template>
<script>

export default {

    model: {
        prop: 'model',
        event: 'input'
    },

    inject: {
        id: { default: null }
    },

    props: {

        model: {
            required: true
        },

        multiple: {
            default: function () {
                return false;
            },
            type: [Boolean, Number]
        },

        name: {
            default: function () {
                return '';
            },
            type: [String, Number]
        },

        placeholder: {
            default: function () {
                return '';
            },
            type: [String, Number]
        },

        disabled: {
            default: function () {
                return false;
            },
            type: [Boolean, Number]
        }

    },

    data: function () {
        return {
            ghost: this.model,
            options: []
        };
    },

    computed: {

        actives: function () {
            return _.filterMap(this.ghost, (value) => {
                return _.find(this.options, { value: value });
            });
        }

    },

    watch: {

        ghost: function () {
            this.$emit('input', this.ghost);
        }

    },

    methods: {

        select: function (value) {

            if ( this.multiple == false ) {
                UIkit.toggle(this.$refs.dropdown);
            }

            this.ghost = _.changeValue(this.ghost, value);
        }

    },

    provide: function () {
        return {
            select: this
        };
    }

}

if (window.Liro) {
    Liro.vue.component('app-select', this.default);
}

</script>
