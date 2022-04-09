<script>
import Header from "../components/Header.vue";
import RegisterSection from "../components/RegisterSection.vue";
import Footer from "../components/Footer.vue";
import Video from "../components/VideoHero.vue";
import ComingSoon from "../components/ComingSoon.vue";
import Gallary from "../components/Gallary.vue";
import Sponsors from "../components/Sponsors.vue";

export default {
  components: {
    Header,
    RegisterSection,
    Footer,
    Video,
    ComingSoon,
    Gallary,
    Sponsors,
  },
};
</script>

<template>
  <div id="app">
    <!-- <Header /> -->
    <Video />
    <ComingSoon />
    <Sponsors />
    <Gallary />
    <RegisterSection />
    <Footer />
  </div>
</template>

<style>
#app {
  background: #010216;
  font-family: "Poppins" !important;
}
.row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
a {
  text-decoration: none;
}
a.hover {
  text-decoration: none;
}
@media (max-width: 600px) {
  .row {
    font-size: 14px;
  }
}
</style>