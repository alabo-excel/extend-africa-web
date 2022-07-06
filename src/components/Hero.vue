<template>
  <div>
    <div class="hero">
      <iframe
        src="https://my.spline.design/untitled-963a2c5b4fc0978e0fea41e1da5170fa/"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
      <div class="text mx-auto top">
        Extend Africa 22' <br />
        <div class="metaverse">The Metaverse</div>
        <div id="demo"></div>
      </div>
      <img class="pattern" src="/assets/pattern.png" alt="" />
    </div>
    <div class="d-lg-flex my-5 justify-content-center text-center">
      <a href="https://forms.gle/X976cCeNn3yC7qHu6" target="black">
        <button class="btn px-4 p-2" alt="">Call for Speakers</button>
      </a>
      <a href="https://forms.gle/NzKCCVEHJ2JsfX6C8" target="black">
        <button class="btn px-4 p-2" alt="">Call for Sponsors</button>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    var countDownDate = new Date("Dec 1, 2022 08:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML =
        days +
        " days " +
        hours +
        " hours " +
        minutes +
        " minutes " +
        seconds +
        " seconds";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "D-DAY";
      }
    }, 1000);
  },
};
</script>
<style scoped>
@font-face {
  font-family: "Neutrons";
  src: url("/assets/NeutronsDemoRegular.ttf");
}
.hero {
  /* background: url(/assets/mian-africa.svg); */
  size: cover;
  height: 90vh;
  color: white;
  font-weight: bolder;
  font-size: 40px;
  text-align: center;
}
.top {
  position: absolute;
  top: 5px;
}
.metaverse {
  font-size: 80px;
  letter-spacing: 3px;
  font-family: "Neutrons";
}
.text {
  width: 100%;
  padding-top: 13%;
  text-transform: uppercase;
  font-family: "oswald";
  text-align: center;
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
  height: 112vh !important;
  width: 7%;
}

@media (max-width: 600px) {
  .hero {
    font-size: 23px;
    height: 55vh;
    font-weight: bolder !important;
  }
  .pattern {
    height: 55vh !important;
  }
  .text {
    padding-top: 35%;
  }
  .metaverse {
    font-size: 45px;
  }
  .btn {
    width: 80%;
  }
  iframe{
    display: none;
  }
}
</style>
