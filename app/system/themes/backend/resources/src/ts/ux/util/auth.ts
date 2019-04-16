import { get, has } from 'lodash';
import Data from './data';


export abstract class Auth
{
    public static user(key : string = null, fallback : any = null)
    {
        let user = Data.get('auth', null);

        if ( key !== null ) {
            return get(user, key, fallback)
        }

        return user;
    }

    public static guest()
    {
        return this.user('id') === null;
    }

    public static can(key)
    {
        let policies = this.user('policy_modules', [
            'liro-users-auth-login'
        ]);

        return policies.indexOf(key) !== -1 || policies.indexOf('*') !== -1;
    }
}

export default Auth;
