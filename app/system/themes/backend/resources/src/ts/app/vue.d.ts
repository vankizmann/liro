import Vue from 'vue';

declare module "*.vue" {
    export default Vue;
}

declare global {
    interface Vue {
        $window: any;
    }
}

declare global {
    interface VueConstructor {
        $window: any;
    }
}
