import AuthLogin from './auth/login';
import UserIndex from './user/index';

window.liro.ajax.set('users', window.liro.routes.get('liro-users.ajax.user.index'));
