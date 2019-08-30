import { Arr, Obj, Str, Data } from "nanojs";


export class Auth
{
    static user(key = null, fallback = null)
    {
        let user = Data.get('auth', null);

        if ( key !== null ) {
            return Obj.get(user, key, fallback)
        }

        return user;
    }

    static guest()
    {
        return Auth.user('id') === null;
    }

    static can(key)
    {
        let policies = Auth.user('policy_modules', []);

        policies = Arr.concat(policies, ['app-*']);

        policies = policies.filter((policy) => {

            let regex = new RegExp('^' + Str.regexEscape(policy)
                .replace(/\\\*/g, '(.*?)') + '$');

            return key.match(regex);
        });

        console.log(key, policies);

        return policies.length !== 0 || key === '';
    }
}

export default Auth;
