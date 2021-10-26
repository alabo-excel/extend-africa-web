<template>
  <div>
    <div class="row first-section">
      <div class="col-lg-6">
        <img src="../assets/story.png" alt="" />
        <div class="overlay"></div>
      </div>
      <div class="col-lg-6">
        <div class="p-5 m-lg-5">
          <div class="green heading">OUR STORY</div>
          <div class="mt-5">
            Extend Africa is a community for the immersive tech ecosystem in
            Africa.
          </div>
          <div class="mt-3">
            Over the years, various industries have adapted the use of extended
            reality to enhance their operations. As we have seen in many
            instances, the works of creators here in Africa are yet to be
            pronounced to a global audience.
          </div>
          <div class="mt-3">
            We believe that with this platform, we can strategically project the
            works of extended reality creators in Africa to the world. We are
            also certain that through this platform, more people will find use
            cases of extended reality in ways that will immensely improve their
            lives.
          </div>
          <div class="mt-3">
            There are amazing XR creators here in Africa, and it's time for us
            to join our hands for the world feel our magic!
          </div>
          <div class="mt-4 green">Extend Africa!</div>
        </div>
      </div>
    </div>

    <div class="py-lg-5">
      <div class="row text-center justify-content-center text-white py-5">
        <div class="col-lg-3 m-4 mx-lg-5">
          <div class="green heading">Mission</div>
          <div>
            we are solely focusing on how to strategically project Africa to the
            world through the utilization of extended reality technology.
          </div>
        </div>
        <div class="col-lg-3 m-4 mx-lg-5">
          <div class="green heading">vision</div>
          <div>
            through the use of this technology, we want to create awareness of
            extended reality and how it can be applied to all sectors and
            individual lives.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.overlay {
  background-color: #003edda8;
  height: 105vh;
  width: 100%;
  position: relative;
  top: 0px;
}
img {
  width: 100%;
  position: absolute;
  height: 105vh;
}
.col-lg-6 {
  padding: 0px !important;
  color: white;
}
.first-section {
  background: #04062a;
}
.green {
  color: #00f470;
}
.heading {
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  font-family: 'oswald';
}
@media (max-width: 600px) {
  img,
  .overlay {
    height: 50vh;
  }
  div{
    font-size: 12px;
  }
}
</style>
