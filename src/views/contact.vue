<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Sponsors from "../components/Sponsors.vue";
export default {
  components: {
    Header,
    Footer,
    Sponsors,
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <div class="my-lg-5">
      <div class="row my-5">
        <div class="col-lg-2 text-center mx-auto">
          <div class="heading2">contact us</div>
          <div class="line mx-auto"></div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-3">
          <div class="m-4 p-5 contact-card">
            <img src="../../src/assets/mail.png" alt="" />
          </div>
          <div class="px-4">
            <div class="title">email</div>
            <div class="text-white sub py-2">Xtendafric@gmailcom</div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="m-4 p-5 contact-card">
            <img src="../../src/assets/call.png" alt="" />
          </div>
          <div class="px-4">
            <div class="title">Phone Number</div>
            <div class="text-white sub py-2">+23481-0851-0085</div>
            <div class="text-white sub">+23490-5444-0206</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
.line {
  background-color: #00f470;
  width: 60px;
  height: 5px;
}
.heading2 {
  color: white;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "oswald";
}
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
.contact-card {
  border: 1px solid #00f470;
  text-align: center;
  border-radius: 6px;
}
.contact-card img {
  width: 80px;
  height: 60px;
}
.title {
  color: #f4b000;
  font-family: "oswald";
  text-transform: uppercase;
}
.sub {
  font-size: 14px;
}
@media (max-width: 600px) {
  .row {
    font-size: 14px;
  }
}
</style>
