<template>
    <app-helper-history v-model="RoleModel">
        <div slot-scope="{ item, canUndo, canRedo, undo, redo, reset }">

            <!-- Infobar start -->
            <portal to="app-infobar-right">
                <app-toolbar-button :disabled="true" uk-toggle="target: #app-module-help">
                    {{ $t('liro-users.toolbar.help') }}
                </app-toolbar-button>
            </portal>
            <!-- Infobar end -->

            <!-- Toolbar start -->
            <portal to="app-toolbar-left">
                <app-toolbar-button icon="check" @click.prevent="create()">
                    {{ $t('liro-users.toolbar.create') }}
                </app-toolbar-button>
                <app-toolbar-button icon="close" :href="indexRoute">
                    {{ $t('liro-users.toolbar.close') }}
                </app-toolbar-button>
                <app-toolbar-spacer>
                    <!-- Spacer -->
                </app-toolbar-spacer>
                <app-toolbar-button @click.prevent="undo()" :disabled="!canUndo">
                    {{ $t('liro-users.toolbar.undo') }}
                </app-toolbar-button>
                <app-toolbar-button @click.prevent="redo()" :disabled="!canRedo">
                    {{ $t('liro-users.toolbar.redo') }}
                </app-toolbar-button>
            </portal>
            <portal to="app-toolbar-right">
                <app-toolbar-button @click.prevent="reset()" :disabled="!canUndo">
                    {{ $t('liro-users.toolbar.discard') }}
                </app-toolbar-button>
            </portal>
            <!-- Toolbar end -->

            <!-- Help start -->
            <portal to="app-module-help">
                <h1>Help</h1>
            </portal>
            <!-- Help end -->

            <!-- Title start -->
            <div class="uk-margin-large">
                <h1 class="uk-heading-primary uk-margin-remove">{{ $t('liro-users.backend.roles.create') }}</h1>
            </div>
            <!-- Title end -->

            <!-- Form start -->
            <div class="uk-form uk-form-stacked">
                <fieldset class="uk-fieldset">

                    <app-form-input
                        name="title" rules="required|min:4" v-model="item.title"
                        :label="$t('liro-users.form.title')"
                    ></app-form-input>
                    
                    <app-form-input
                        name="description" v-model="item.description"
                        :label="$t('liro-users.form.description')"
                    ></app-form-input>

                </fieldset>
            </div>

            <div class="uk-form uk-form-stacked" v-for="(group, index) in routes" :key="index">
                <fieldset class="uk-fieldset">
                    <div class="uk-width-1-1">
                        <h5>{{ group.label }}</h5>
                    </div>
                    <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l">
                        <label v-for="route in group.children" :key="route.id" class="uk-display-inline-block">
                            <input name="route_names" type="checkbox" class="uk-checkbox" style="margin-right: 4px;" :value="route.value" v-model="item.route_names"> <span>{{ route.label }}</span>
                        </label>
                    </div>
                </fieldset>
            </div>
            <!-- Form end -->

        </div>
    </app-helper-history>
</template>
<script>
export default {

    props: {

        createRoute: {
            default() {
                return '';
            },
            type: String
        },

        indexRoute: {
            default() {
                return '';
            },
            type: String
        },

        role: {
            default() {
                return this.$liro.data.get('role', {});
            },
            type: Object
        },

        routes: {
            default() {
                return this.$liro.data.get('routes', {});
            },
            type: [Array, Object]
        }

    },

    data() {
        
        return {
            RoleModel: this.role
        };
        
    },

    methods: {

        create() {
            this.$http.post(this.createRoute, this.RoleModel);
        }

    }

}

if (window.liro) {
    liro.vue.$component('app-roles-create', this.default);
}

</script>