<template>

<div class="liro-role-edit-module">
    <div class="th-form" v-for="(routes, group) in items" :key="group">
        <legend class="uk-legend">
            <span>{{ group }}</span>
        </legend>
        <div class="uk-margin">
            <div class="uk-grid-small uk-child-width-1-2@m uk-child-width-1-3@l" uk-grid>
                <div v-for="(name, index) in routes" :key="index">
                    <app-checkbox :label="name" :value="index" v-model="ghost" @input="updateValue"></app-checkbox>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script>

export default {

    model: {
        prop: 'model',
        event: 'input'
    },

    props: {

        model: {
            required: true,
            type: Array
        },

        items: {
            required: true,
            type: [Object, Array]
        }

    },

    data: function () {
        return {
            ghost: this.model
        }
    },

    watch: {

        model: function () {
            this.ghost = this.model;
        }

    },

    methods: {

        updateValue: function (value) {
            this.$emit('input', value);
        }

    }

}

if (window.Liro) {
    Liro.vue.component('liro-role-edit-module', this.default);
}

</script>

