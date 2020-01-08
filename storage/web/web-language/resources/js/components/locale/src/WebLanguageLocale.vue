<template>
    <NLoader :visible="load" size="small" class="web-language-locale">

        <NButton :link="true" :icon="icons.angleDown" icon-position="right">
            {{ activeLocale.title }}
        </NButton>

        <NPopover ref="popover" type="select" trigger="click" position="bottom-start" :width="120">
            <template v-for="(item, index) in locales">
                <NButton :key="index" class="n-popover-option" :link="true" :disabled="locale === item.locale" @click="setLocale(item.locale)" >
                    {{ item.title }}
                </NButton>
            </template>
        </NPopover>

    </NLoader>
</template>
<script>
    export default {

        name: 'WebLanguageLocale',

        computed: {

            activeLocale()
            {
                return this.Arr.find(this.locales, {
                    locale: this.locale
                });
            }

        },

        data()
        {
            let locale = this.Obj.get(document,
                'documentElement.lang', 'en');

            let locales = [
                { locale, title: this.trans('Loading') }
            ];

            return { locales, locale, load: true, popover: false };
        },

        mounted()
        {
            this.fetchLocales();
        },

        methods: {

            fetchLocales()
            {
                let route = this.Route.get('module.web-language.locale.index');

                let options = {
                    onLoad: () => this.load = true,
                    onDone: () => this.load = false
                };

                this.$http.get(route, options)
                    .then(res => this.Data.set('WebLocales', this.locales = res.data));
            },

            setLocale(locale)
            {
                this.Event.fire('setLocale', this.locale = locale);

                this.$refs.popover.close();
            }

        }

    }
</script>
