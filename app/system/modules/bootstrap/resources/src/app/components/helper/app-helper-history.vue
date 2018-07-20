<script>
var History = require('../../../liro/libraries/history.js');

export default {

    props: {

        value: {
            required: true
        }

    },

    data() {

        return {
            item: Object.assign({}, this.value)
        }

    },

    render() {

        return this.$scopedSlots.default({
            item: this.item, canUndo: this.history.canUndo, canRedo: this.history.canRedo, 
            undo: () => this.item = this.history.undo(), redo: () => this.item = this.history.redo(), reset: () => this.item = this.history.reset()
        });

    },

    created() {
        this.history = new History(this.item);
    },

    mounted() {

        this.$watch('item', _.debounce(() => {
            this.history.save(this.item); this.$forceUpdate(); this.$emit('input', this.item);
        }, 600), { deep: true });

    }

}

liro.vue.$component('app-helper-history', this.default);
</script>