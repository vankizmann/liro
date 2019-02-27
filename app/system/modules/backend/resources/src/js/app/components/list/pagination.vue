<template>

<div class="app-list-pagination uk-width-1-1 uk-flex uk-flex-middle">

    <!-- Limit start -->
    <div class="app-list-pagination-limit uk-margin-auto-right">

        <!-- Select start -->
        <select class="uk-select uk-form-small" v-model="limit" @change="paginate(null, limit)">
            <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
        </select>
        <!-- Select end -->

    </div>
    <!-- Limit end -->

    <!-- Pages start -->
    <div class="app-list-pagination-pages uk-margin-auto-left">
        <ul class="uk-pagination uk-flex-middle uk-margin-remove-bottom">

            <!-- Prev start -->
            <li :class="{ 'uk-disabled': config.page == 1 }">
                <a href="#" @click.prevent="paginate(config.page - 1)"><i class="uk-icon-small" uk-icon="chevron-left"></i></a>
            </li>
            <!-- Prev end -->

            <!-- Pages start -->
            <!--<li v-for="page in Liro.helpers.range(config.pages, 1)" :key="page" :class="{ 'uk-active': page == config.page }">-->
                <!--<a href="#" @click.prevent="paginate(page)">{{ page }}</a>-->
            <!--</li>-->
            <!-- Pages end -->

            <!-- Next start -->
            <li :class="{ 'uk-disabled': config.page == config.pages }">
                <a href="#" @click.prevent="paginate(config.page + 1)"><i class="uk-icon-small" uk-icon="chevron-right"></i></a>
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
        'list'
    ],

    computed: {

        config: function () {
            return this.list.library.config.paginate;
        }

    },

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
            limit: this.list.library.config.paginate.limit
        };
    },

    methods: {

        paginate: function (page, limit) {
            this.list.library.setPaginateData(page || this.config.page, limit || this.config.limit);
        }

    }
    
}

if (window.Liro) {
    Liro.vue.component('app-list-pagination', this.default);
}

</script>
