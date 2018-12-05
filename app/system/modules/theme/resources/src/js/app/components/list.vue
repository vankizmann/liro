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

    provide: function () {
        return this.listData;
    },

    render: function () {
        return this.$scopedSlots.default(this.listData);
    },

    data: function () {

        var list = new List(this.value, this.database, (list) => {
            this.listData = list.getData();
        });

        return {
            list: list , listData: list.getData()
        };
    }

}

if (window.Liro) {
    Liro.vue.component('app-list', this.default);
}

</script>