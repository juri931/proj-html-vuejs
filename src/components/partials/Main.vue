<script>
import { card } from "../../assets/data/cards";
import { carousel } from "../../assets/data/carousel";
import { priceCard } from "../../assets/data/prices";
export default {
  data() {
    return {
      card,
      carousel,
      priceCard,
    };
  },
  computed: {
    cardProps() {
      return card.props;
    },
    carouselProps() {
      return carousel.props;
    },
    priceCardProps() {
      return priceCard.props;
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

  <!-- Grow Your Business -->
  <section class="planning">
    <div class="container">
      <div class="image">
        <img class="primary" src="/img/men-data.png" alt="" />
      </div>

      <div class="text">
        <p>Start Your Project</p>
        <h1>Grow Your Business</h1>
        <h2>With Our Strategy</h2>
        <p>
          When, while the lovely valley teems with vapour around meand the
          meridian sun strikes the upper surface. of the impenetrable foliage of
          my trees, and but a few stray gleams steal into the inner sanctuary.
        </p>
        <div class="btn try">Try it Now</div>
        <div class="btn more">Explore More</div>
      </div>
    </div>
  </section>
  <!-- /Grow Your Business -->

  <!-- Portfolio -->
  <section class="portfolio">
    <div
      style="
        height: 400px;
        text-align: center;
        line-height: 400px;
        font-size: 50px;
      "
      class="container"
    >
      SLIDER
    </div>
  </section>
  <!-- /Portfolio -->

  <!-- Prices -->
  <section class="prices">
    <div class="container wrapper">
      <!-- Top Section -->
      <div class="top">
        <p>Price List</p>
        <h1><strong>Our</strong> Pricing</h1>
        <p>
          When, while the lovely valley teems with vapour around meand the
          meridian sun strikes the uper surface.
        </p>
      </div>

      <!-- Middle Section -->
      <div class="main container">
        <ul>
          <div
            v-for="(item, index) in priceCardProps"
            :key="index"
            class="card row"
          >
            <h3>{{ item.title }}</h3>
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
  <!-- /Prices -->
</template>

<style lang="scss" scoped>
@use "/src/assets/scss/main.scss";
</style>
