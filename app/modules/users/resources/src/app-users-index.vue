<template>
    <div class="uk-form uk-form-stacked">
        <portal to="app-toolbar-left">
            <app-toolbar-link class="uk-icon-success" icon="fa fa-plus" :href="createRoute">
                {{ $t('menus.module.menus-create') }}
            </app-toolbar-link>
        </portal>
        <portal to="app-toolbar-right">
            <app-toolbar-link icon="fa fa-info-circle" href="#" uk-toggle="target: #app-module-help">
                {{ $t('theme.help') }}
            </app-toolbar-link>
        </portal>
        <portal to="app-module-help">
            <h1>Help</h1>
        </portal>

        <app-list-filter-search column="name,email" placeholder="Search"></app-list-filter-search>

        <div class="uk-table-list">
            <div class="uk-table-list-head">
                <div class="uk-table-list-td uk-width-1-3">
                    <app-list-filter-direction column="name">
                        {{ $t('theme.name') }}
                    </app-list-filter-direction>
                </div>
                <div class="uk-table-list-td uk-width-1-3">
                    <app-list-filter-direction column="email">
                        {{ $t('theme.email') }}
                    </app-list-filter-direction>
                </div>
                <div class="uk-table-list-td uk-width-1-3">
                    <app-list-filter-filter column="roles" :filters="roles" filters-key="id" filters-label="title">
                        {{ $t('theme.roles') }}
                    </app-list-filter-filter>
                </div>
                <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                    {{ $t('theme.state') }}
                </div>
                <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                    <app-list-filter-direction column="id" :numeric="true">
                        {{ $t('theme.id') }}
                    </app-list-filter-direction>
                </div>
            </div>
            <div class="uk-table-list-row" v-for="user in list" :key="user.id">
                <div class="uk-table-list-td uk-width-1-3">
                    <a :href="user.edit_route">{{ user.name }}</a>
                </div>
                <div class="uk-table-list-td uk-width-1-3">
                    <span>{{ user.email }}</span>
                </div>
                <div class="uk-table-list-td uk-width-1-3">
                    <a v-for="role in user.roles" :key="role.id" :href="role.id">{{ role.title }}</a>
                </div>
                <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                    <app-list-state :active="user.state == 1" href="#"></app-list-state>
                </div>
                <div class="uk-table-list-td uk-table-list-td-s uk-text-center">
                    <span>{{ user.id }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-users-index',
        computed: {
            list() {
                return this.$store.getters['list/get'];
            }
        },
        props: {
            baseRoute: {
                default: '',
                type: String
            },
            createRoute: {
                default: '',
                type: String
            },
            roles: {
                default: [],
                type: Array
            },
            users: {
                default: [],
                type: Array
            }
        },
        mounted() {
            this.$store.commit('list/init', this.users);
        }
    }
    liro.component(module.exports);
</script>
