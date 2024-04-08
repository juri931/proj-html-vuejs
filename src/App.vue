<script>
import Header from "./components/partials/Header.vue";
import Main from "./components/partials/Main.vue";
import Footer from "./components/partials/Footer.vue";
export default {
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<template>
  <Header />
  <Main />
  <Footer />
</template>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
