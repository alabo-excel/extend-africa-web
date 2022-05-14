<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  date() {
    return {
      name: "",
      email: "",
      number: "",
      amount: "",
      currency: "",
    };
  },
  methods: {
    donate() {
      this.$launchFlutterwave({
        tx_ref: Date.now(),
        amount: this.amount,
        currency: this.currency,
        payment_options: "card,mobilemoney,ussd",
        customer: {
          email: this.email,
          phonenumber: this.number,
          name: this.name,
        },
        callback: function (data) {
          // specified callback function
          console.log(data);
        },
        customizations: {
          title: "Donation for Extend Africa",
          logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQEFu0XiX5qptQ/company-logo_200_200/0/1636368682904?e=2147483647&v=beta&t=apXAlcWqXA1mnZ2w32G9w_6RAkX9PQl0NsPaP7exak8",
        },
      });
    },
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <!-- <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target=".bd-example-modal-xl"
    >
      Large modal
    </button> -->

    <div
      class="modal fade bd-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content p-4">
          <div class="text-center">
            <div class="my-3">
              <input
                type="text"
                v-model="name"
                class="p-2"
                placeholder="Enter your Name"
              />
            </div>
            <div class="my-3">
              <input
                type="email"
                v-model="email"
                class="p-2"
                placeholder="Enter your Email"
              />
            </div>
            <div class="my-3">
              <input
                type="number"
                class="p-2"
                v-model="number"
                placeholder="Enter your Phone Number"
              />
            </div>
            <div class="my-3">
              <input
                type="number"
                class="p-2"
                v-model="amount"
                placeholder="Enter The Amount "
              />
            </div>
            <div class="my-3">
              <select class="p-2 w-80 " v-model="currency">
                <option value="USD">USD</option>
              </select>
            </div>
            <button class="btn btn1 p-3" @click="donate">Donate Now</button>
          </div>
        </div>
      </div>
    </div>

    <section class="first">
      <div class="d-flex justify-content-center pt-5">
        <div class="col-lg-5">
          <img class="w-1/5" src="../assets/G3.png" alt="" />
        </div>
        <div class="col-lg-5">
          <div class="text-container p-4">
            <div class="heading">Partner with us</div>
            <div class="body">
              We partner with individuals, brands and organizations to enable us
              achieve our goals.
            </div>
            <div class="mt-4">
              <button class="btn btn2 p-2">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="">
      <div class="d-flex justify-content-center">
        <div class="col-lg-5">
          <div class="text-container p-4">
            <div class="heading">Donate funds</div>
            <div class="body">
              We partner with individuals, brands and organizations to enable us
              achieve our goals.
            </div>
            <div class="mt-4">
              <button
                class="btn btn2 p-2"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <img class="w-1/5" src="../assets/G5.png" alt="" />
        </div>
      </div>
    </section>
    <section class="first">
      <div class="d-flex justify-content-center">
        <div class="col-lg-5">
          <img class="w-1/5" src="../assets/G2.png" alt="" />
        </div>
        <div class="col-lg-5">
          <div class="mt-4 p-4">
            <div class="heading">Donate a Laptop</div>
            <div class="body">
              We partner with individuals, brands and organizations to enable us
              achieve our goals.
            </div>
            <div class="mt-4">
              <button class="btn btn2 p-2">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="last">
      <div class="d-flex justify-content-center">
        <div class="col-lg-5">
          <div class="text-container p-4">
            <div class="heading">Sponsor an event</div>
            <div class="body">
              We partner with individuals, brands and organizations to enable us
              achieve our goals.
            </div>
            <div class="mt-4">
              <button class="btn btn1 p-2">Contact Us</button>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <img class="w-1/5" src="../assets/G1.png" alt="" />
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
}
</style>