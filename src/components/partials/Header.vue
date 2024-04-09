<script>
import { headerMenu } from "../../assets/data/store";
export default {
  data() {
    return {
      headerMenu,
    };
  },
  computed: {
    headerMenuList() {
      return headerMenu.list;
    },
  },
  mounted() {
    console.log(headerMenu);
  },
};
</script>

<template>
  <nav>
    <div class="container">
      <img src="/img/white-logo-2.png" alt="Logo" />
      <ul>
        <li v-for="(item, index) in headerMenuList" :key="index">
          <a :href="item.href" :class="item.class" :id="item.id">{{
            item.text
          }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "src/assets/scss/header";
</style>
