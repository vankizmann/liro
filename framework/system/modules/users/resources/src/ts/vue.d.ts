declare var Vue : any;

declare module '*.vue' {
    export default Vue
}

declare module 'vue/types/vue' {
    interface VueConstructor {
        $router: any,
    }
}
