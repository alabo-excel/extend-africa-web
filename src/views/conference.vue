<script>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import AboutSection from "../components/AboutSection.vue";
import TopicsSection from "../components/TopicsSection.vue";
import RegisterSection from "../components/RegisterSection.vue";
import Footer from "../components/Footer.vue";
import Team from "../components/Team.vue";
import Sponsors from "../components/Sponsors.vue";
import Attendees from "../components/Attendees.vue";
import Speakers from "../components/Speakers.vue";
import Gallary from "../components/Gallary.vue";

export default{
  components: {
    Header,
    Hero,
    AboutSection,
    AboutSection,
    RegisterSection,
    TopicsSection,
    Footer,
    Gallary,
    Team,
    Sponsors,
    Attendees,
    Speakers
}
}
</script>

<template>
  <div id="app">
    <Header />
    <Hero />
    <AboutSection />
    <TopicsSection />
    <Gallary />
    <Attendees />
    <!-- <Speakers /> -->
    <Sponsors />
    <Team />
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
a{
  text-decoration: none;
}
a.hover{
  text-decoration: none;
}
@media (max-width: 600px) {
  .row {
    font-size: 14px;
  }
}
</style>