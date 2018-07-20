<template>
    <div class="app-list-pagination uk-flex uk-flex-middle">

        <!-- Limit start -->
        <div class="app-list-pagination-limit uk-flex-left">

            <!-- Select start -->
            <select class="uk-select" v-model="limit">
                <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
            </select>
            <!-- Select end -->

        </div>
        <!-- Limit end -->

        <!-- Pages start -->
        <div class="app-list-pagination-pages uk-flex-right" style="margin-left: auto;">
            <ul class="uk-pagination uk-flex-middle">

                <!-- Last start -->
                <li :class="{ 'uk-disabled': config.page == 1 }">
                    <a href="#" @click.prevent="paginate(1)"><i class="fa fa-angle-double-left"></i></a>
                </li>
                <!-- Last end -->

                <!-- Prev start -->
                <li :class="{ 'uk-disabled': config.page == 1 }">
                    <a href="#" @click.prevent="paginate(config.page - 1)"><i class="fa fa-angle-left"></i></a>
                </li>
                <!-- Prev end -->

                <!-- Pages start -->
                <li v-for="page in $liro.func.range(pages, 1)" :key="page" :class="{ 'uk-active': page == config.page }">
                    <a href="#" @click.prevent="paginate(page)">{{ page }}</a>
                </li>
                <!-- Pages end -->

                <!-- Next start -->
                <li :class="{ 'uk-disabled': config.page == pages }">
                    <a href="#" @click.prevent="paginate(config.page + 1)"><i class="fa fa-angle-right"></i></a>
                </li>
                <!-- Next end -->

                <!-- Last start -->
                <li :class="{ 'uk-disabled': config.page == pages }">
                    <a href="#" @click.prevent="paginate(pages)"><i class="fa fa-angle-double-right"></i></a>
                </li>
                <!-- Last end -->

            </ul>
        </div>
        <!-- Pages end -->
        
    </div>
</template>
<script>
    export default {

        props: {

            pages: {
                default() {
                    return 1;
                },
                type: Number
            },

            config: {
                default() {
                    return {
                        page: 1, limit: 25
                    };
                },
                type: Object
            },

            options: {
                default() {
                    return [25, 50, 100, 250, 500];
                },
                type: Array
            }
        },

        data() {
            
            return {
                limit: this.config.limit
            };

        },

        mounted() {

            this.$watch('limit', () => {
                this.paginate(this.config.page, this.limit);
            });

            this.$watch('config', () => {
                this.limit = this.config.limit;
            }, { deep: true });

        },

        methods: {

            paginate(page, limit) {
                this.$emit('paginate', page || this.config.page, limit || this.config.limit);
            }

        }
        
    }
    liro.vue.$component('app-list-pagination', this.default);
</script>
