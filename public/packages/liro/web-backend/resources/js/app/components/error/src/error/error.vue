<template>
    <div class="app-error__wrapper">
        <div class="app-error">
            <div class="app-error__image" v-if="Data.has('theme.error')">
                <img :src="Data.get('theme.error')">
            </div>
            <div class="app-error__title">
                <h1>404 Not Found</h1>
            </div>
            <div class="app-error__text">
                <p>Please try again or simply <a href="javascript:window.history.back()">go to back</a>, if the problem persists please contact the support.</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'app-error'
    }
</script>
