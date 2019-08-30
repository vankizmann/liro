require('./ajax/auth');
require('./ajax/user');

let UserIndex = require('./user/user-index.vue');
Nano.Extension.export('liro-users-user-index', UserIndex);

// let UserEdit = require('./user/user-edit.vue');
// Nano.Extension.export('liro-users-user-edit', UserEdit);

let AuthLogin = require('./auth/auth-login.vue');
Nano.Extension.export('liro-users-auth-login', AuthLogin);

