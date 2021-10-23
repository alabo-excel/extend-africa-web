<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Team from "../components/Team.vue";
export default{
  components: {
    Header,
    Footer,
    Team
  }
}
</script>

<template>
  <div id="app">
    <Header />
    <Team />
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
