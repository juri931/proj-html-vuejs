<script>
import { card } from "../../assets/data/cards";
export default {
  data() {
    return {
      card,
    };
  },
  computed: {
    cardProps() {
      return card.props;
    },
  },
};
</script>

<template>
  <!-- Jumbotron -->
  <section class="jumbo">
    <div class="container">
      <div class="left">
        <h1>Business Planning</h1>
        <h2>Digital Technology</h2>
        <h1>Modern Solution !</h1>
        <p>
          When, while the lovely valley teems with vapour around meand the
          meridian sun strikes the upper surface.
        </p>
        <div class="btn try">Try it Now</div>
        <div class="btn more">Explore More</div>
      </div>

      <div class="right">
        <img src="/img/header.png" alt="" />
      </div>
    </div>
  </section>
  <!-- /Jumbotron -->

  <!-- What We Do -->
  <section class="what-we-do">
    <div class="container wrapper">
      <!-- Top Section -->
      <div class="top">
        <p>Our Services</p>
        <h1><strong>What</strong> We Do</h1>
        <p>When, while the lovely valley teems with vapour around meand the</p>
      </div>

      <!-- Middle Section -->
      <div class="main container">
        <ul>
          <div v-for="(item, index) in cardProps" :key="index" class="card row">
            <img class="col" :src="item.img" />
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
            <a class="btn" href="#">
              <i class="fa fa-arrow-right"></i>
            </a>
          </div>
        </ul>
      </div>

      <!-- Bottom  Section -->
      <div class="bottom">
        <div class="container">
          <div class="btn">View All Services</div>
        </div>
      </div>
    </div>
  </section>
  <!-- /What We Do -->
</template>

<style lang="scss" scoped>
@use "/src/assets/scss/main.scss";
</style>
