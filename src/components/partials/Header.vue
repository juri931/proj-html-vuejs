<script>
import { headerMenu } from "../data/store";
export default {
  components: {},
  data() {
    return {
      headerMenu,
    };
  },
};
</script>

<template>
  <nav>
    <div class="container">
      <img src="/public/img/white-logo-2.png" alt="Logo" />
      <ul>
        <li v-for="item in headerMenu" :key="item.index"></li>
        <!-- <li><a id="home" href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a class="btn" id="sign-in" href="#">Sign In</a></li> -->
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "src/assets/scss/header";
</style>
