<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  date() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div id="app">
    <Header />
    <section>
      <div class="row">
        <div class="desc col-lg-9 text-center my-5 mx-auto">
          At Extend Africa, we have impacted hundreds of people to get started
          in Tech Careers and sustain their Tech careers in Africa and beyond.
          Through your donations, sponsorships and partnerships, we'll be able
          to impact more people in Africa through data support, laptops, and
          trainings.
        </div>
      </div>
    </section>
    <section class="first">
      <div class="d-lg-flex justify-content-center pt-5">
        <div class="col-lg-5">
          <img class="w-1/5" src="/assets/G3.png" alt="" />
        </div>
        <div class="col-lg-5">
          <div class="text-container p-4">
            <div class="heading">Partner with us</div>
            <div class="body">
              We partner with individuals, brands and organizations to enable us
              achieve our goals.
            </div>
            <div class="mt-4">
              <a href="mailto:xtendafrica@gmail.com">
                <button class="btn btn2 p-2">Contact Us</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="">
      <div class="d-lg-flex justify-content-center">
        <div class="col-lg-5 order-lg-last">
          <img class="w-1/5" src="/assets/G5.png" alt="" />
        </div>

        <div class="col-lg-5 order-lg-firs">
          <div class="text-container p-4">
            <div class="heading">Donate funds</div>
            <div class="body">
              We partner with individuals, brands and organizations to enable us
              achieve our goals.
            </div>
            <div class="mt-4">
              <a href="https://paystack.com/pay/Thanks4Donating">
                <button class="btn btn2 p-2">Donate Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="first">
      <div class="d-lg-flex justify-content-center">
        <div class="col-lg-5">
          <img class="w-1/5" src="/assets/G2.png" alt="" />
        </div>
        <div class="col-lg-5">
          <div class="mt-4 p-4">
            <div class="heading">Donate a Laptop</div>
            <div class="body">
              We partner with individuals, brands and organizations to enable us
              achieve our goals.
            </div>
            <div class="mt-4">
              <a href="mailto:academy@extend.africa">
                <button class="btn btn2 p-2">Contact Us</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="last">
      <div class="d-lg-flex justify-content-center">
        <div class="col-lg-5">
          <div class="text-container p-4">
            <div class="heading">Sponsor an event</div>
            <div class="body">
              We partner with individuals, brands and organizations to enable us
              achieve our goals.
            </div>
            <div class="mt-4">
              <a href="mailto:hello@extend.africa">
                <button class="btn btn1 p-2">Contact Us</button>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <img class="w-1/5" src="/assets/G1.png" alt="" />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<style scoped>
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
section {
  padding-top: 7% !important;
  padding-bottom: 7% !important;
}
img {
  width: 100%;
}
.heading {
  font-family: "oswald";
  font-size: 20px;
}
.first {
  background-color: #04062a;
}
.desc {
  font-size: 35px;
  color: white;
  font-family: "oswald";
}
.body {
  font-size: 30px;
  color: white;
}
.btn1 {
  background-color: #04062a;
  color: white;
}
.btn2 {
  background-color: #00f470;
  color: #04062a;
}
.text-container {
  padding-top: 15% !important;
}
.last {
  background-color: #00f470;
}
.last .heading,
.last .body {
  color: #04062a !important;
}
@media (max-width: 600px) {
  .row {
    font-size: 14px;
  }
  .desc {
    font-size: 25px;
    padding-top: 50px !important;
  }
}
</style>