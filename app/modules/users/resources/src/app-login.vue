<template>
    <div class="uk-form uk-form-stacked">
        <form :action="action" method="post" style="margin: 0;">
            <fieldset class="uk-fieldset">
                <app-form-input 
                    :label="$t('liro-users.form.email')" type="email" id="email" name="email" value=""
                ></app-form-input>
                <app-form-password 
                    :label="$t('liro-users.form.password')" type="text" id="password" name="password" value=""
                >
                </app-form-password>
                <div class="uk-margin-top">
                    <button type="submit" class="uk-button uk-button-primary uk-width-1-1">{{ $t('liro-users.form.login') }}</button>
                </div>
                <slot>
                    <!-- Slot -->
                </slot>
            </fieldset>
        </form>
    </div>
</template>
<script>
    export default {
        props: {
            action: {
                default: '',
                type: String
            }
        }
    }
    liro.vue.$component('app-login', this.default);
</script>
