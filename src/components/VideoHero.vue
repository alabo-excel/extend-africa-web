<script>
import Header from "./Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
<template>
  <div class="video">
    <video autoplay loop muted id="background-video">
      <source src="../assets/bg.mp4" type="video/mp4" />
    </video>
    <div class="hero">
      <Header />
      <div class="text text-left">
        <div class="bigger">Extend Africa</div>

        Building a sustainable tech friendly ecosystem in africa and beyond
        using extended reality (AR, VR, MR).
      </div>
      <img class="pattern" src="../assets/pattern.png" alt="" />
    </div>
    <div class="overlay"></div>
  </div>
</template>
<style scoped>
#background-video {
  width: 100%;
}
.hero {
  background: url(../assets/mian-africa.svg);
  size: cover;
  height: 124vh;
  color: white;
  font-weight: bolder;
  font-size: 40px;
  text-align: center;
  position: absolute;
  top: 0;
  z-index: 10;
}
.overlay {
  background-color: #010216;
  width: 100%;
  height: 124vh;
  opacity: 70%;
  position: absolute;
  top: 0;
}
.text {
  width: 40%;
  padding-top: 6%;
  text-transform: uppercase;
  font-family: "oswald";
  margin-left: 13%;
}
.date {
  color: #00f470;
  font-size: 15px;
  font-weight: 700 !important;
}
.bigger {
  font-size: 80px;
  background-color: #00f470;
  color: #010216;
}
input {
  font-size: 16px;
  background-color: #00f470;
  border: none;
  color: #010216;
  font-weight: 700;
}
.pattern {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh !important;
  width: 7%;
}
@media (max-width: 600px) {
  #background-video {
    margin-top: 20%;
  }
  .hero {
    font-size: 23px;
    height: 36vh;
    font-weight: bolder !important;
  }
  .text {
    width: 85%;
    padding-top: 5%;
    /* text-align: center !important; */
    margin-left: 8%;
  }
  .bigger {
    font-size: 30px;
  }
  .overlay{
    height: 36vh;
  }
}
</style>
