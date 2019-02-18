<template>
    <div class="layout grid grid--col grid--stretch">

        <div
            v-show="showMenubarLeft || showMenubarRight"
            class="layout__menubar col--flex-0 grid grid--row grid--wrap"
        >
            <portal-target
                ref="MenubarLeft" v-show="showMenubarLeft" tag="ul"
                class="nav col--auto col col--left grid grid--20 grid--row grid--middle"
                name="menubar-left" :multiple="true" @change="onMenubarLeft"
            />
            <portal-target
                ref="MenubarRight" v-show="showMenubarRight" tag="ul"
                class="nav col--auto col--right grid grid--20 grid--row grid--middle"
                name="menubar-right" :multiple="true" @change="onMenubarRight"
            />
        </div>

        <div
            v-show="showToolbarLeft || showToolbarRight"
            class="layout__toolbar col--flex-0 col--1-1 grid grid--row"
        >
            <portal-target
                ref="ToolbarLeft" v-show="showToolbarLeft" tag="ul"
                class="nav col--auto col--left grid grid--10 grid--row grid--middle"
                name="toolbar-left" :multiple="true" @change="onToolbarLeft"
            />
            <portal-target
                ref="ToolbarRight" v-show="showToolbarRight" tag="ul"
                class="nav col--auto col--right grid grid--10 grid--row grid--middle"
                name="toolbar-right" :multiple="true" @change="onToolbarRight"
            />
        </div>

        <div class="layout__content col--1-1 col--flex-1">
            <slot></slot>
        </div>

    </div>
</template>
<script>
    export default {

        data: function () {
            return {
                showMenubarLeft: false,
                showMenubarRight: false,
                showToolbarLeft: false,
                showToolbarRight: false,
            }
        },

        methods: {

            onMenubarLeft: function (portal) {
                this.showMenubarLeft = portal.length !== 0;
            },

            onMenubarRight: function (portal) {
                this.showMenubarRight = portal.length !== 0;
            },

            onToolbarLeft: function (portal) {
                this.showToolbarLeft = portal.length !== 0;
            },

            onToolbarRight: function (portal) {
                this.showToolbarRight = portal.length !== 0;
            }

        }

    }
</script>
