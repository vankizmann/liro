import { get, has } from 'lodash';
import Data from './data';

export function regexEscape (value : string) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

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
        console.log(key);

        let policies = this.user('policy_modules', [
            'liro-users-auth-login'
        ]);

        policies = policies.filter((policy) => {

            let regex = new RegExp('^' + regexEscape(policy)
                .replace(/\\\*/g, '(.*?)') + '$');

            return key.match(regex);
        });

        return policies.length !== 0 || key === '';
    }
}

export default Auth;
