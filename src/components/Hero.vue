<template>
  <div class="hero">
    <div class="text mx-auto">
      Building a sustainable tech friendly ecosystem in africa and beyond using
      extended reality (AR, VR, MR).
      <!-- <div class="date my-2">DATE: SATURDAY 4TH DECEMBER 2021.</div>
      <div class="my-2">
        <a
          target="blank"
          href="https://www.eventbrite.com/e/extend-africa-tickets-194647244147"
        >
          <input class="p-2 px-3" type="button" value="REGISTER HERE" />
        </a>
      </div> -->
    </div>
    <img class="pattern" src="../assets/pattern.png" alt="" />
  </div>
</template>
<style scoped>
.hero {
  background: url(../assets/mian-africa.svg);
  size: cover;
  height: 90vh;
  color: white;
  font-weight: bolder;
  font-size: 40px;
  text-align: center;
}
.text {
  width: 40%;
  padding-top: 13%;
  text-transform: uppercase;
  font-family: 'oswald';
}
.date {
  color: #00f470;
  font-size: 15px;
  font-weight: 700 !important;
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
  .hero {
    font-size: 23px;
    height: 55vh;
    font-weight: bolder !important;
  }
  .text {
    width: 85%;
    padding-top: 35%;
  }
}
</style>
