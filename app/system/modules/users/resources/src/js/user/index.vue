<template>

<app-list class="liro-user-index" v-model="users" database="users.user.index">
    <div slot-scope="{ items }">

        <portal to="toolbar-right">
            <app-nav-item>
                <app-nav-link :href="routes.get('liro-users.admin.user.create')">
                    <el-button type="primary">{{ trans('liro-users::admin.user.create') }}</el-button>
                </app-nav-link>
            </app-nav-item>
        </portal>

        <!-- Table start -->
        <div class="th-form is-reset">
            <div class="table">

                <!-- Table head -->
                <div class="table__head">
                    <div class="table__tr grid grid--row">
                        <div class="table__td table__td--xl col--left">
                            <app-list-search :columns="['name', 'email']" :placeholder="trans('form.search.placeholder')" />
                        </div>
                        <div class="table__td col--right">
                            <a :href="routes.get('liro-users.admin.user.create')">
                                <el-button type="success">{{ trans('liro-users::admin.user.create') }}</el-button>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- Table head end -->

                <!-- Table filter -->
                <div class="table__filter">
                    <div class="table__tr grid grid--row grid--middle">
                        <div class="table__td table__td--xs">
                            <app-list-select-all />
                        </div>
                        <div class="table__td col--1-3">
                            <app-list-sort column="name">
                                {{ trans('liro-users::form.user.name') }}
                            </app-list-sort>
                        </div>
                        <div class="table__td col--1-3">
                            <app-list-sort column="email">
                                {{ trans('liro-users::form.user.email') }}
                            </app-list-sort>
                        </div>
                        <div class="table__td col--1-3">
                            <app-list-filter column="role_ids" :filters="roles" filters-value="id" filters-label="title">
                                {{ trans('liro-users::form.user.role') }}
                            </app-list-filter>
                        </div>
                        <div class="table__td table__td--md text--center">
                            <app-list-filter column="state" :filters="states">
                                {{ trans('liro-users::form.user.state') }}
                            </app-list-filter>
                        </div>
                        <div class="table__td table__td--md text--center">
                            <app-list-sort column="id">
                                {{ trans('liro-users::form.user.id') }}
                            </app-list-sort>
                        </div>
                    </div>
                </div>
                <!-- Table filter end -->

                <!-- Table body -->
                <div class="table__body" v-show="items.length !== 0">
                    <liro-user-index-item v-for="(item, index) in items" :value="item" :key="index"></liro-user-index-item>
                </div>
                <!-- Table body end -->

                <!-- Table body -->
                <div class="table__body" v-show="items.length === 0">
                    <div class="table__tr grid grid--row grid--middle">
                        <div class="table__td col--1-1 text--center text--muted">
                            {{ trans('form.list.empty') }}
                        </div>
                    </div>
                </div>
                <!-- Table body end -->

                <div class="table__footer">
                    <div class="table__tr grid grid--row grid--middle">
                        <div class="table__td col--1-1">
                            <app-list-pagination></app-list-pagination>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <!-- Table end -->

    </div>
</app-list>

</template>
<script>

import IndexItem from './index/item';

window.liro.modules.export('liro-user-index', this.default = {

    components: {
        'liro-user-index-item': IndexItem
    },

    data: function () {
        return {
            ...this.liro.vue.bind('states', this),
            ...this.liro.vue.bind(['user-index', 'users'], this),
            ...this.liro.vue.bind(['role-index', 'roles'], this)
        }
    }

});

</script>

