<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <div class="row hero1 px-lg-3">
      <div class="col-11 col-lg-5 mt-5">
        <h1>Learn the emerging skills of the future.</h1>
        <div class="desc my-4 text-white">
          Specialized XR design and development courses taught by industry
          leading experts.
        </div>
        <a href="https://forms.gle/VgE9Jc4zgsCMWe2t8" target="blank">
          <button class="btn p-3">APPLY NOW</button>
        </a>
        <a href="https://forms.gle/JfTVM8uBa68N4QaC9" target="blank">
          <button class="btn3 btn p-3">APPLY FOR SCHOLARSHIP</button>
        </a>
      </div>
      <div class="col-11 col-lg-5 mt-lg-0 mt-5">
        <img class="img" src="../assets/xa/hero-bg.png" alt="" />
      </div>
    </div>
    <div class="row stacks">
      <div class="col-10 p-4 col-lg-3 card mb-lg-3 mb-3">
        <h4 class="heading mb-4">AR/VR Dev</h4>
        <p>
          The average salary of The salaries of an AR/VR developer ranges from a
          low of $160,000 to a high of $210,000, with a median salary of
          $180,000.
        </p>
      </div>
      <div class="col-10 p-4 col-lg-3 card mb-lg-3 mb-3">
        <h4 class="heading mb-4">Game Dev</h4>
        <p>
          According to ZipRecruiter, the national average salary for a Game
          Developer is $101,644. The national hourly rate is $49. On average, a
          Game Developer’s pay typically ranges from $36.06 per hour to $62.02
          per hour.
        </p>
      </div>
      <div class="col-10 p-4 col-lg-3 card mb-lg-3 mb-3">
        <h4 class="heading mb-4">3D Modeling</h4>
        <p>
          The average 3D Modeler salary is $71,154 per year, or $34.21 per hour,
          in the United States. People on the lower end of that spectrum, the
          bottom 10% to be exact, make roughly $40,000 a year, while the top 10%
          makes $125,000.
        </p>
      </div>
    </div>
    <div class="row justify-content-center yo p-lg-5 p-3">
      <div class="col-lg-3 col-10">
        <img class="img" src="../assets/xa/img.png" alt="" />
      </div>
      <div
        class="
          col-lg-6 col-12
          text-white text-lg-left text-center
          pr-lg-5
          my-lg-auto my-3
        "
      >
        <p>
          We specialize in immersive technology education for the XR industry.
          Our courses, workshops and events provide learners with an in-depth
          skill set in XR design and development.
        </p>
      </div>
    </div>
    <div class="text-center cert mx-auto text-white my-5 py-5">
      <h2 class="text-white mb-4">Learning XR Skills is an Advantage</h2>
      <p class="pb-4">
        A Unity accreditation can overhaul your resume, assisting you with
        securing your opportunity to an XR vocation or make the following stride
        from your ongoing job. Procure a Unity Programmer, Developer, or Artist
        Certificate with Extend Africa academy.
      </p>
      <div class="row my-lg-5 py-lg-3">
        <div class="col-lg-4 col-12 my-lg-0 my-3">
          <p class="text-title">AR/VR JOB GROWTH FROM 2019 TO 2030</p>
          <h1>1400%</h1>
        </div>
        <div class="col-lg-4 col-12 my-lg-0 my-3">
          <p class="text-title">INCREASE YOUR SALARY WITH UNITY SKILLS</p>
          <h1>+$20k</h1>
        </div>
        <div class="col-lg-4 col-12 my-lg-0 my-3">
          <p class="text-title">DEMAND GROWTH FOR UNITY & UNREAL SKILLS</p>
          <h1>601%</h1>
        </div>
      </div>
    </div>
    <div class="discord p-5 text-center">
      <div>
        <img class="discord-img" src="../assets/discord.png" alt="" />
      </div>
      <h1>Join our discord community</h1>
      <a href="https://discord.gg/m9KA5TFGWw" target="blank">
        <button class="btn p-2 mt-4">JOIN NOW</button>
      </a>
    </div>
    <Footer />
  </div>
</template>

<style>
#app {
  background-color: #010216 !important;
  font-family: "Poppins" !important;
}
.row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.img {
  width: 100% !important;
}
a {
  text-decoration: none;
}
a.hover {
  text-decoration: none;
}
h1 {
  color: white;
  text-transform: capitalize;
  font-size: 60px;
  font-weight: 700;
  font-family: "oswald";
  line-height: 90px;
}
.hero1 {
  padding-top: 10%;
  justify-content: space-evenly;
}
.desc {
  font-size: 20px;
}
/* .btn3 {
  font-weight: 700;
  width: auto !important;
  background-color: #04062a !important;
  color: #00f470 !important;
} */
.btn {
  background-color: #00f470;
  color: #010216;
  font-weight: 700;
  width: 250px;
  margin: 4px;
}
.card {
  background-color: #04062a;
  color: white;
}
.discord {
  background-color: #04062a;
}
.heading {
  color: #00f470;
}
.stacks {
  justify-content: space-evenly;
  margin: 10%;
}
.discord-img {
  width: 200px;
}
.cert {
  width: 80%;
}
.cert h2 {
  font-size: 50px;
  font-family: "oswald";
}
.text-title {
  color: #00f470;
  font-weight: 700;
  width: 180px;
  margin: auto;
}
.yo {
  background-color: #04062a;
}
@media (max-width: 600px) {
  .row {
    font-size: 14px;
  }
  h1 {
    font-size: 40px !important;
    line-height: 50px;
  }
  h2 {
    font-size: 36px !important;
  }
  .btn {
    width: 100%;
  }
}
</style>