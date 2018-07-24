<template>
    <div class="uk-form uk-form-stacked">
        <form :action="action" method="post" style="margin: 0;">
            <fieldset class="uk-fieldset">

                <app-form-input
                    type="email" name="email" value=""
                    :label="$t('liro-users.form.email')"
                ></app-form-input>

                <app-form-password 
                    name="password" value=""
                    :label="$t('liro-users.form.password')"
                ></app-form-password>

                <div class="uk-margin-top">
                    <button type="submit" class="uk-button uk-button-primary uk-width-1-1">{{ $t('liro-users.form.login') }}</button>
                </div>
                
                <slot>
                    <!-- CSRF Token -->
                </slot>
                
            </fieldset>
        </form>
    </div>
</template>
<script>
export default {
    props: {

        action: {
            default() {
                return '';
            },
            type: String
        }
        
    }
}

if (window.liro) {
    liro.vue.$component('app-login', this.default);
}
</script>
