<template>
    <NLoader :visible="load" class="web-translation-edit">

        <div class="web-body-item">
            <WebBackendTitle :info="trans('Last updated at :updated', { updated })" :goto="closeEntity">

                <div class="grid grid--row grid--10">

                    <div class="col--auto">
                        <NButton type="primary" :icon="icons.save" @click="updateEntity">
                            {{ trans('Apply') }}
                        </NButton>
                    </div>

                </div>

            </WebBackendTitle>
        </div>

        <div class="web-body-item">
            <NForm :errors="errors">

                <NFormItem prop="source" :label="trans('Source')">
                    <NTextarea v-model="entity.source" :auto-rows="true" />
                </NFormItem>

                <NFormItem prop="target" :label="trans('Target')">
                    <NTextarea v-model="entity.target" :auto-rows="true" />
                </NFormItem>

            </NForm>
        </div>

    </NLoader>
</template>
<script>
    export default {

        name: 'WebTranslationEdit',

        computed: {

            updated()
            {
                return this.Now.make(this.entity.updated_at || 'now')
                    .get().fromNow();
            }

        },

        data()
        {
            return { entity: {}, errors: {}, load: true };
        },

        mounted() {
            this.fetchEntity();
        },

        methods: {

            closeEntity()
            {
                this.$router.push({
                    name: this.findRoute('WebTranslationIndex')
                });
            },

            doneEntity(res)
            {
                if ( ! this.Any.isEmpty(this.entity) ) {
                    this.Event.fire('translation.updated');
                }

                this.entity = this.Obj.get(res, 'data.data', {});
            },

            errorEntity(res)
            {
                this.errors = this.Obj.get(res, 'data.errors', {});
            },

            fetchEntity()
            {
                let route = this.Route.get('module.web-language.translation.edit',
                    this.$route.params);

                let options = {
                    onLoad: () => this.load = true,
                    onDone: () => this.load = false
                };

                this.$http.get(route, options)
                    .then(this.doneEntity, this.errorEntity);
            },

            updateEntity()
            {
                this.Data.unset('web-translation-index');

                let route = this.Route.get('module.web-language.translation.update',
                    this.$route.params);

                let options = {
                    onLoad: () => this.load = true,
                    onDone: () => this.load = false
                };

                this.$http.post(route, this.entity, options)
                    .then(this.doneEntity, this.errorEntity);
            }

        }
    }
</script>
