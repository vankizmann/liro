<script>

import List from './../libraries/list.js'

export default {

    props: {

        database: {
            required: true
        },

        value: {
            required: true
        }

    },

    data() {

        return {
            items:          this.value,
            pages:          1,
            config:         {}
        }

    },

    render() {

        return this.$scopedSlots.default({
            items:          this.items,
            pages:          this.pages,
            config:         this.config,
            order:          this.order,
            search:         this.search,
            filter:         this.filter,
            paginate:       this.paginate
        });

    },

    created() {
        this.list = new List(this.items, this.database);
    },

    mounted() {
        this.refresh();
    },

    watch: {

        value: function () {
            this.list = new List(this.value, this.database); this.refresh();
        }

    },

    methods: {

        refresh() {

            this.config = {
                order:          this.list.orderData(), 
                search:         this.list.searchData(), 
                filter:         this.list.filterData(), 
                paginate:       this.list.paginateData()
            };

            this.items = this.list.getItems();
            this.pages = this.list.getPages();
        },

        order(column, direction) {
            this.list.order(column, direction);
            this.refresh();
        },

        search(query, columns) {
            this.list.search(query, columns);
            this.refresh();
        },

        filter(column, values) {
            this.list.filter(column, values);
            this.refresh();
        },

        paginate(page, limit) {
            this.list.paginate(page, limit);
            this.refresh();
        }

    }

}

if (window.Liro) {
    Liro.vue.component('app-list', this.default);
}

</script>