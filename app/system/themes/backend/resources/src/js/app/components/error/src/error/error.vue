<template>
    <div class="app__error">
        <div class="app__error-image">
            <div></div>
        </div>
        <div class="app__error-text">
            <h1>Whoops, page not found.</h1>
            <p>Please try again or simply <router-link to="/">go to home</router-link>, if the problem persists please contact the support.</p>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'app-error'
    }
</script>
