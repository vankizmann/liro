import Vue from 'vue';

declare module "*.vue" {
    export default Vue;
}

declare global {
    interface Vue {
        ux: any;
    }
}

// declare global {
//     interface VueConstructor {
//         $ux: any;
//     }
// }
