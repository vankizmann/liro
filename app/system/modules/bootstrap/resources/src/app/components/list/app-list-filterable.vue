<script>
export default {

    props: {
        value: {
            required: true
        }
    },

    provide() {
        return {

            order: {
                column: 'id', direction: 'desc'
            },

            search: {
                query: '', columns: []
            },

            filter: {
                // 
            },

            paginate: {
                page: 1, pages: 1, limit: 25
            }

        }
    },

    render() {
        return this.$scopedSlots.default({
            items: this.value,
            search: this.search,
            
        });
    },

    mounted() {

        this.$on('search', (options) => {
            this.search = _.merge(this.search, options);
        });

        this.$on('order', (options) => {
            this.order = _.merge(this.order, options);
        });

        this.$on('filter', (options) => {
            this.filter = _.merge(this.filter, options);
        });

        this.$on('paginate', (options) => {
            this.paginate = _.merge(this.paginate, options);
        });

        this.$watch(['order', 'search', 'filter', 'paginate'], () => this.update());

    },

    methods: {

        update() {
            console.log('update');
        }

    }
}
</script>