<template>

<li class="app-select-group">
    <ul>
        <li class="app-select-title">
            <span class="uk-text-small" v-html="label"></span>
        </li>
        <slot></slot>
    </ul>
</li>

</template>
<script>

export default {

    props: {

        label: {
            required: true,
            type: [String, Number]
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-select-group', this.default);
}

</script>
