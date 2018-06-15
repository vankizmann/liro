<script>
var List = require('../../../liro/libraries/list.js');

export default {

    props: {

        value: {
            required: true
        }

    },

    data() {

        return {
            items: this.value, pages: 1, options: {}
        }

    },

    render() {

        return this.$scopedSlots.default({
            items: this.items, pages: this.pages, options: this.options, 
            order: this.order, search: this.search, filter: this.filter, paginate: this.paginate, 
        });

    },

    created() {
        this.list = new List(this.items);
    },

    mounted() { 
        this.refresh();
    },

    methods: {

        refresh() {

            this.items = this.list.getItems(), this.pages = this.list.getPages(), this.options = {
                order: this.list.orderData(), search: this.list.searchData(), filter: this.list.filterData(), paginate: this.list.paginateData()
            };

        },

        order(column, direction) {
            this.list.order(column, direction); this.refresh();
        },

        search(query, columns) {
            this.list.search(query, columns); this.refresh();
        },

        filter(column, values) {
            this.list.filter(column, values); this.refresh();
        },

        paginate(page, limit) {
            this.list.paginate(page, limit); this.refresh();
        }

    }

}

liro.vue.$component('app-helper-list', this.default);
</script>