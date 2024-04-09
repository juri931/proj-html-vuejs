<script>
import { footerMenu, socials } from "../../assets/data/store";
export default {
  data() {
    return {
      footerMenu,
      socials,
    };
  },
  computed: {
    col1() {
      return this.footerMenu.col1;
    },
    col2() {
      return this.footerMenu.col2;
    },
    col3() {
      return this.footerMenu.col3;
    },
    addLogos() {
      return this.socials.logos;
    },
  },
};
</script>

<template>
  <body>
    <div class="container top">
      <div class="left col-4">
        <img src="/public/img/white-logo-2.png" alt="Logo" />
        <p>
          When, while lovely valley teems vapour aroundmeand meridian sun
          strikes the upper impenetrable
        </p>
      </div>

      <div class="right col-8">
        <ul>
          <li v-for="(item, index) in col1" :key="index">
            {{ item.text }}
            <a :href="item.href">{{ item.link }}</a>
          </li>
        </ul>

        <ul>
          <li v-for="(item, index) in col2" :key="index">
            {{ item.text }}
            <a :href="item.href">{{ item.link }}</a>
          </li>
        </ul>

        <ul>
          <li v-for="(item, index) in col3" :key="index">
            {{ item.text }}
            <p>
              {{ item.type }}
              <span>
                {{ item.span }}
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div class="line"></div>

    <div class="container bottom">
      <div class="left">© 2020 Phlox. All Rights Reserved.</div>

      <div class="logos">
        <ul>
          <li v-for="(item, index) in addLogos" :key="index">
            <a :href="item.href">
              <i :class="item.text"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </body>
</template>

<style lang="scss" scoped>
@use "/src/assets/scss/footer";
</style>
