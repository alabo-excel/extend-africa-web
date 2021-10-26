<template>
  <div class="row justify-content-center px-lg-5 pt-lg-5 pt-3">
    <div class="col-lg-2 m-3">
      <img src="../assets/footer-logo.png" alt="" />
      <div class="text-white name my-2">extend africa</div>
    </div>
    <div class="col-lg-2 m-3">
      <div class="heading">quick links</div>
      <div class="links pt-2">
        <a
          target="blank"
          href="https://www.eventbrite.com/e/extend-africa-tickets-194647244147"
        >
          <div class="py-1">Register for free</div>
        </a>
        <div class="py-1">become a partner</div>
        <div class="py-1">Donate</div>
      </div>
    </div>
    <div class="col-lg-2 m-3">
      <div class="heading">other links</div>
      <div class="links pt-2">
        <router-link to="/story">
          <div class="py-1">Our Story</div>
        </router-link>
        <div class="py-1">Speakers</div>
        <router-link to="/team">
          <div class="py-1">Team</div>
        </router-link>
        <router-link to="/contact">
          <div class="py-1">Contact Us</div>
        </router-link>
      </div>
    </div>
    <div class="col-lg-2 m-3">
      <div class="heading">social media</div>
      <div class="pt-3">
        <img class="px-2" src="../assets/icons/Youtube.png" alt="" />
        <img class="px-2" src="../assets/icons/Instagram.png" alt="" />
        <img class="px-2" src="../assets/icons/Facebook.png" alt="" />
        <img class="px-2" src="../assets/icons/Twitter.png" alt="" />
      </div>
    </div>
    <div class="col-12 line mt-5"></div>
    <div class="col-12 text-center text-white p-3 footer">
      copyright @ ExtendAfrica 2021
    </div>
  </div>
</template>
<style scoped>
.name {
  font-size: 13px;
  font-family: "oswald";
  text-transform: uppercase;
}
.heading {
  color: #00f470;
  font-family: "oswald";
  text-transform: uppercase;
}
.links {
  color: white;
  text-transform: capitalize;
  font-size: 15px;
}
.line {
  background-color: #00f470;
  height: 1px;
}
.footer {
  font-size: 12px;
}
a {
  color: white;
}
a:hover{
  text-decoration: none;
}
@media (max-width: 600px) {
  .line {
    height: 1px;
  }
  .links {
    font-size: 12px;
  }
}
</style>