<script>
export default {};
</script>
<template>
  <div class="header-nav">
    <nav class="navbar px-lg-5 mx-lg-5 mx-3 navbar-expand-lg">
      <router-link to="/">
        <img class="logo" src="../assets/logo.png  " />
      </router-link>
      <button
        class="navbar-toggler text-white mt-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg fill="white" viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="5"></rect>
          <rect y="20" width="100" height="5"></rect>
          <rect y="40" width="100" height="5"></rect>
        </svg>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto p-2">
          <router-link to="/conference">
            <li>Conference</li>
          </router-link>
          <router-link to="/academy">
            <li>Academy</li>
          </router-link>
          <a target="blank" href="https://opensea.io/ExtendAfrica22">
            <li>NFT</li>
          </a>
          <router-link to="/donate">
            <li>Donate</li>
          </router-link>
          <!-- <router-link to="/story">
            <li>our story</li>
          </router-link>
          <router-link to="/speakers">
            <li>speakers</li>
          </router-link>
          <router-link to="/sponsors">
            <li>sponsors</li>
          </router-link>
          <router-link to="/team">
            <li>team</li>
          </router-link>
          <router-link to="/contact">
            <li>contact us</li>
          </router-link> -->

          <!-- <a
            target="blank"
            href="https://www.eventbrite.com/e/extend-africa-tickets-194647244147"
          >
            <li class="register px-4 ml-lg-5">register</li>
          </a> -->
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  background: transparent !important;
  padding-left: 60px !important;
  padding-right: 60px !important;
  position: absolute;
  top: 0;
  z-index: 10;
  width: 95%;
}
ul li {
  text-transform: uppercase;
  color: white;
  padding-left: 30px !important;
  padding-right: 30px !important;
  font-weight: 700;
  font-size: 14px;
  padding: 10px;
}

.register {
  border: 1px solid #00f470;
}
a:hover {
  text-decoration: none;
}

@media (max-width: 600px) {
  .navbar {
    padding: 10px !important;
  }
  ul li {
    padding: 10px !important;
    padding-left: 0px !important;
  }
  .register {
    text-align: center;
  }
  .logo {
    width: 40px;
  }
  .collapse {
    background: #010216;
  }
}
</style>
