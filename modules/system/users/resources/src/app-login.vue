<template>
    <div class="uk-form uk-form-stacked">
        <form :action="action" method="post" style="margin: 0;">
            <fieldset class="uk-fieldset">
                <app-form-input 
                    :label="$t('user.label.email')" type="email" id="email" name="email" 
                    rules="required|email" value=""
                ></app-form-input>
                <app-form-password 
                    :label="$t('user.label.password')" type="text" id="password" name="password" 
                    rules="required|min:6" value=""
                >
                </app-form-password>
                <div class="uk-margin-top">
                    <button type="submit" class="uk-button uk-button-primary uk-width-1-1">{{ $t('user.form.login') }}</button>
                </div>
                <slot>
                    <!-- Slot -->
                </slot>
            </fieldset>
        </form>
    </div>
</template>
<script>
    module.exports = {
        name: 'app-login',
        props: {
            action: {
                default: '',
                type: String
            }
        }
    }
    liro.component(module.exports);
</script>
