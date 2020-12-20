<template>
    <div id="app">
        <NavBar></NavBar>

        <router-view />
    </div>
</template>
<script>
import NavBar from "./components/nav-bar.vue";
export default {
    components: {
        NavBar
    }
};
</script>
<style lang="scss">
// @import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.scss";
@import "~bootstrap-vue/dist/bootstrap-vue.css";
@import "~bootstrap/dist/css/bootstrap.css";
</style>
