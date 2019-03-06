<script>

import List from './../libraries/list.js'

export default {

    model: {
        prop: 'model',
        event: 'input'
    },

    props: {

        database: {
            required: true
        },

        model: {
            required: true
        }

    },

    watch: {

        model: function () {
            this.library.setInitial(this.model);
        }

    },

    render: function () {
        return this.$scopedSlots.default(this);
    },

    provide: function () {
        return {
            list: this
        };
    },

    data: function () {

        var library = new List(this.model, this.database, (library) => {
            this.items = library.items;
        });

        return {
            library: library, items: library.items
        };
    }

}

</script>
