<template>
    <div class="app-list-pagination uk-flex uk-flex-middle">

        <!-- Limit start -->
        <div class="app-list-pagination-limit uk-flex-left">

            <!-- Select start -->
            <select class="uk-select" v-model="limit">
                <option v-for="(option, index) in options" :key="index" :value="option" :selected="option == limit">{{ option }}</option>
            </select>
            <!-- Select end -->

        </div>
        <!-- Limit end -->

        <!-- Pages start -->
        <div class="app-list-pagination-pages uk-flex-right" style="margin-left: auto;">
            <ul class="uk-pagination uk-flex-middle">

                <!-- Last start -->
                <li :class="{ 'uk-disabled': active == 1 }">
                    <a href="#" @click.prevent="setPaginate(1)"><i class="fa fa-angle-double-left"></i></a>
                </li>
                <!-- Last end -->

                <!-- Prev start -->
                <li :class="{ 'uk-disabled': active == 1 }">
                    <a href="#" @click.prevent="setPaginate(active - 1)"><i class="fa fa-angle-left"></i></a>
                </li>
                <!-- Prev end -->

                <!-- Pages start -->
                <li v-for="page in $liro.func.range(pages, 1)" :key="page" :class="{ 'uk-active': page == active }">
                    <a href="#" @click.prevent="setPaginate(page)">{{ page }}</a>
                </li>
                <!-- Pages end -->

                <!-- Next start -->
                <li :class="{ 'uk-disabled': active == pages }">
                    <a href="#" @click.prevent="setPaginate(active + 1)"><i class="fa fa-angle-right"></i></a>
                </li>
                <!-- Next end -->

                <!-- Last start -->
                <li :class="{ 'uk-disabled': active == pages }">
                    <a href="#" @click.prevent="setPaginate(pages)"><i class="fa fa-angle-double-right"></i></a>
                </li>
                <!-- Last end -->

            </ul>
        </div>
        <!-- Pages end -->
        
    </div>
</template>
<script>
    export default {

        /**
         * Computed properties
         */
        computed: {
            active() {
                return this.$store.getters['list/page'];
            },
            pages() {
                return this.$store.getters['list/pages'];
            },
            limit: {
                get() {
                    return this.$store.getters['list/limit']
                },
                set(value) {
                    this.$store.commit('list/paginate', { page: this.active, limit: value });
                }
            }
        },

        /**
         * Changable properties
         */
        props: {
            defaultLimit: {
                default: 25,
                type: Number
            },
            options: {
                default: () => [25, 50, 100, 250, 500],
                type: Array
            }
        },

        /**
         * Component methods
         */
        methods: {
            setPaginate(page) {
                this.$store.commit('list/paginate', { page: page, limit: this.limit });
            }
        }
        
    }
    liro.vue.$component('app-list-pagination', this.default);
</script>
