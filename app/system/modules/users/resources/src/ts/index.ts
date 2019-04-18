declare var ux : any;

require('./ajax/auth');
require('./ajax/user');

let UserIndex = require('./user/user-index.vue');
ux.ext.export('liro-users-user-index', UserIndex);

let UserEdit = require('./user/user-edit.vue');
ux.ext.export('liro-users-user-edit', UserEdit);

let AuthLogin = require('./auth/auth-login.vue');
ux.ext.export('liro-users-auth-login', AuthLogin);

