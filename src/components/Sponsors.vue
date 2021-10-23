<template>
  <div class="topic py-5">
    <div class="row">
      <div class="col-lg-2 text-center mx-auto">
        <div class="heading">sponsors</div>
        <div class="line mx-auto"></div>
      </div>
    </div>
    <div class="row justify-content-center m-4">
      <div
        v-for="(sponsor, index) in sponsors"
        :key="index"
        class="col-lg-2 topic-card  m-lg-4 m-2 p-lg-5 p-2 text-center text-white"
      >
        <img class="icon" :src="sponsor.img" alt="" />
        <!-- <div class="py-2">{{ sponsor.desc }}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sponsors: [
        {
          img: "..//src/assets/sponsors/accelerate.png",
          desc: "lorem ipsum",
        },
        {
          img: "..//src/assets/sponsors/experis-immersive.png",
          desc: "lorem ipsum",
        },
        {
          img: "..//src/assets/sponsors/sds-06.png",
          desc: "lorem ipsum",
        },
        {
          img: "..//src/assets/sponsors/Techrity.png",
          desc: "lorem ipsum",
        },
         {
          img: "..//src/assets/sponsors/gandmasters.png",
          desc: "lorem ipsum",
        },
         {
          img: "..//src/assets/sponsors/ata.jpg",
          desc: "lorem ipsum",
        },
         {
          img: "..//src/assets/sponsors/urban-dev.png",
          desc: "lorem ipsum",
        },
      ],
    };
  },
};
</script>
<style scoped>
.line {
  background-color: #00f470;
  width: 60px;
  height: 5px;
}
.heading {
  color: white;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "oswald";
}
img{
  width: 100%;
}
.topic {
  background: #04062a;
}
.topic-card {
  background-color: #030538;
  border-bottom: 5px solid #003edd;
}
@media (max-width: 600px) {
  .topic-card{
    width: 40%;
  }
}
</style>