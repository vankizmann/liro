<template>
<div>

    <div class="uk-flex uk-flex-wrap">

        <div v-if="label != ''" class="uk-width-1-1">
            <label class="uk-form-label">{{ label }}</label>
        </div>

        <div class="app-media-preview uk-flex uk-flex-wrap uk-width-1-1">

            <div class="app-media-preview-item uk-flex uk-flex-middle uk-flex-center" v-for="(item, index) in values" :key="index">
                <img v-if="['image/jpeg', 'image/png'].indexOf(item.type) != -1" :src="item.url" :alt="item.name" :title="item.name" uk-cover>
                <span v-else uk-icon="question"></span>
            </div>

            <div class="app-media-preview-button">
                <button class="uk-button uk-button-primary" uk-toggle="#app-media-browser">
                    <span uk-icon="pencil"></span>
                </button>
            </div>
            
        </div>
        
    </div>

    <div id="app-media-browser" class="app-media-browser uk-modal-container" ref="modal" uk-modal>

        <!-- Close -->
        <button class="uk-modal-close-default uk-close-large" type="button" uk-close>
            <!-- Cross -->
        </button>
        <!-- Close end -->

        <div class="uk-modal-dialog uk-margin-auto-vertical">

            <div class="uk-modal-body">

                <div class="app-media-breadcrumb">
                    <ul class="app-media-breadcrumb-list uk-flex">
                        <app-media-breadcrumb 
                            v-for="(directory, index) in breadcrumb" :key="index" :directory="directory" :disabled="parent ? path == directory.path : true"
                        ></app-media-breadcrumb>
                    </ul>
                </div>

                <div class="app-media-index uk-flex uk-flex-wrap">

                    <app-media-directory 
                        v-if="parent" :directory="parent" :disabled="true" icon="chevron-left"
                    ></app-media-directory>

                    <app-media-directory 
                        v-for="directory in active.directories" :key="directory.path" :directory="directory" :disabled="files" :selected="isActive(directory.path)"
                    ></app-media-directory>

                    <app-media-file 
                        v-for="file in active.files" :key="file.path" :file="file" :disabled="!files || mimes.indexOf(file.type) == -1" :selected="isActive(file.path)"
                    ></app-media-file>

                </div>

            </div>

            <div class="uk-modal-footer uk-flex">
                <button class="uk-button uk-button-danger uk-margin-auto-right" type="button" :disabled="value.length == 0" @click="removeImage">{{ $t('liro-media.browser.remove') }}</button>
                <button class="uk-button uk-button-success uk-margin-auto-left" type="button" :disabled="selected.length == 0" @click="setImage">{{ $t('liro-media.browser.select') }}</button>
            </div>

        </div>

    </div>
</div>
</template>
<script>
import MediaUpload from "./components/upload.vue";
import MediaCreate from "./components/create.vue";
import MediaBreadcrumb from "./components/breadcrumb.vue";
import MediaDirectory from "./components/directory.vue";
import MediaFile from "./components/file.vue";

export default {
    props: {
        value: {
            default() {
                return [];
            },
            type: Array
        },
        label: {
            default() {
                return '';
            },
            type: String
        },
        multiple: {
            default() {
                return false;
            },
            type: Boolean
        },
        browser: {
            default() {
                return false;
            },
            type: Boolean
        },
        files: {
            default() {
                return true;
            },
            type: Boolean
        },
        mimes: {
            default() {
                return ['image/jpeg', 'image/png'];
            },
            type: Array
        }
    },
    computed: {
        breadcrumb() {
            return this.liro.func.ladderRecursive(this.media, "path", this.path, "directories", []);
        },
        active() {
            return _.nth(this.breadcrumb, -1);
        },
        parent() {
            return _.nth(this.breadcrumb, -2);
        },
        values() {
            return _.reduce(this.value, (result, path) => {

                var fullPath = path;

                if ( path.match(/\/+/) ) {
                    path = path.substr(0, path.lastIndexOf("/"));
                }

                var directory = this.liro.func.findRecursive(this.media, 'path', path, 'directories');

                if ( ! directory ) {
                    return result;
                }

                var file = _.find(directory.files, ['path', fullPath]);

                if ( file ) {
                    return _.concat(result, [file]);
                }
                
                return result;
            }, []);
        }
    },
    data() {
        return {
            path: this.value,
            selected: [],
            media: this.liro.data.get("media", {})
        };
    },
    mounted() {

        this.$on('media.goto', (event, directory) => {
            this.path = directory.path; this.selected = [];
        });

        this.$on("media.select", (event, item) => {

            if ( this.multiple == false ) {
                return this.selected = [item];
            }

            var index = _.findIndex(this.selected, ['path', item.path]);

            if ( index == -1 ) {
                return this.selected.push(item);
            }

            return this.selected.splice(index, 1);
        });


    },

    methods: {
        setImage() {
            this.$emit("input", _.map(this.selected, item => item.path));
            window.UIkit.modal(this.$refs.modal).hide();
        },
        removeImage() {
            this.$emit("input", []);
            window.UIkit.modal(this.$refs.modal).hide();
        },
        isActive(path) {
            return _.findIndex(this.selected, ['path', path]) != -1;
        }
    }
};

if (window.liro) {
    liro.vue.$component("app-media-browser", this.default);
}
</script>
