<template>
  <div class="row text-white text-center">
    <!-- <div class="col-lg-6 register p-lg-5 p-4 d-flex justify-content-center">
      <a
        class="d-flex justify-content-center"
        target="blank"
        href="https://www.eventbrite.com/e/extend-africa-tickets-194647244147"
      >
        <div class="px-2">
          register <br />
          here
        </div>
        <img src="/assets/register.png" />
      </a>
    </div> -->
    <div class="col-lg-12 d-flex justify-content-center donate p-lg-5 p-4">
      <a href="https://paystack.com/pay/Thanks4Donating" target="blank">
        <div class="px-2">
          donate <br />
          here
        </div>
      </a>
      <a href="https://paystack.com/pay/Thanks4Donating" target="blank">
        <img src="/assets/doante.png" />
      </a>
    </div>
  </div>
</template>
<style scoped>
.register {
  background-color: #003edd;
  text-transform: uppercase;
  font-family: "oswald";
  font-size: 23px;
}
.donate {
  background-color: #04062a;
  text-transform: uppercase;
  font-family: "oswald";
  font-size: 23px;
}
img {
  width: 70px;
  height: 70px;
}
a {
  color: white;
}
a:hover {
  text-decoration: none;
}
@media (max-width: 600px) {
  img {
    width: 50px;
    height: 50px;
  }
  .donate,
  .register {
    font-size: 18px;
  }
}
</style>
