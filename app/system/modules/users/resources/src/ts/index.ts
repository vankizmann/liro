declare var ux : any;

require('./ajax/auth');

let UserIndex = require('./controllers/foo.vue');
ux.ext.export('liro-users-user-index', UserIndex);

let AuthLogin = require('./auth/auth-login.vue');
ux.ext.export('liro-users-auth-login', AuthLogin);

