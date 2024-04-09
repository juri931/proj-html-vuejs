<script>
import { footerMenu, socials } from "../../assets/data/store";
export default {
  data() {
    return {
      footerMenu,
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
  },
  mounted() {
    console.log(footerMenu);
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
          <!-- <li>Contact Us</li>
          <li>
            <p>
              <span>Address: </span> Patricia C. Amedee 4401 Waldeck Street
              Grapevine Nashville, Tx 76051
            </p>
          </li>
          <li>
            <p><span>Phone: </span>+99 (0) 101 0000 888</p>
          </li>
          <li>
            <p><span>Email: </span>info@yourdomain.com</p>
          </li> -->
        </ul>
      </div>
    </div>

    <div class="line"></div>

    <div class="container bottom">
      <div class="left">© 2020 Phlox. All Rights Reserved.</div>

      <div class="logos">
        <ul>
          <!-- <li>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
          </li> -->
        </ul>
      </div>
    </div>
  </body>
</template>

<style lang="scss" scoped>
@use "/src/assets/scss/footer";
</style>
