<template>

<div class="app-list-pagination uk-width-1-1 uk-flex uk-flex-middle">

    <!-- Limit start -->
    <div class="app-list-pagination-limit uk-margin-auto-right">

        <!-- Select start -->
        <select class="uk-select" v-model="limit" @change="paginate(null, limit)">
            <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
        </select>
        <!-- Select end -->

    </div>
    <!-- Limit end -->

    <!-- Pages start -->
    <div class="app-list-pagination-pages uk-margin-auto-left">
        <ul class="uk-pagination uk-flex-middle uk-margin-remove-bottom">

            <!-- Prev start -->
            <li :class="{ 'uk-disabled': config.paginate.page == 1 }">
                <a href="#" @click.prevent="paginate(config.paginate.page - 1)"><i uk-icon="chevron-left"></i></a>
            </li>
            <!-- Prev end -->

            <!-- Pages start -->
            <li v-for="page in Liro.helpers.range(config.paginate.pages, 1)" :key="page" :class="{ 'uk-active': page == config.paginate.page }">
                <a href="#" @click.prevent="paginate(page)">{{ page }}</a>
            </li>
            <!-- Pages end -->

            <!-- Next start -->
            <li :class="{ 'uk-disabled': config.paginate.page == config.paginate.pages }">
                <a href="#" @click.prevent="paginate(config.paginate.page + 1)"><i uk-icon="chevron-right"></i></a>
            </li>
            <!-- Next end -->

        </ul>
    </div>
    <!-- Pages end -->
    
</div>

</template>
<script>

export default {

    inject: [
        'config', 'methods'
    ],

    props: {

        options: {
            default: function () {
                return [10, 25, 50, 100, 250, 500];
            },
            type: Array
        }

    },

    data: function () {
        return {
            limit: this.config.paginate.limit
        };
    },

    methods: {

        paginate: function (page, limit) {
            this.methods.paginate(page || this.config.paginate.page, limit || this.config.paginate.limit);
        }

    }
    
}

if (window.Liro) {
    Liro.vue.component('app-list-pagination', this.default);
}

</script>
