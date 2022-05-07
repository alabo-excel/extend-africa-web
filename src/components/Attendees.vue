<template>
  <div class="topic py-5">
    <div class="row">
      <div class="col-lg-3 text-center mx-auto">
        <div class="heading">who attended</div>
        <div class="line text-center mx-auto"></div>
      </div>
    </div>
    <div class="row justify-content-center m-4">
      <div
        v-for="(topic, index) in topics"
        :key="index"
        class="col-lg-2 topic-card m-lg-4 m-2 p-lg-5 p-2 text-center text-white"
      >
        <img class="icon" :src="topic.img" alt="" />
        <div class="py-3">{{ topic.title }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topics: [
        {
          img: "../src/assets/attendees/media.png",
          title: "Media Partners",
        },
        {
          img: "../src/assets/attendees/educationist.png",
          title: "Educationist",
        },
        {
          img: "../src/assets/attendees/media.png",
          title: "Telecom Providers",
        },
        {
          img: "../src/assets/attendees/stat.png",
          title: "Media Partners",
        },
        {
          img: "../src/assets/attendees/designers.png",
          title: "Designers",
        },
        {
          img: "../src/assets/attendees/developers.png",
          title: "Web Developers",
        },
        {
          img: "../src/assets/attendees/arvr.png",
          title: "AR/VR Developers",
        },
        {
          img: "../src/assets/attendees/designers.png",
          title: "Media Partners",
        },
        {
          img: "../src/assets/attendees/business.png",
          title: "Business Moguls",
        },
        {
          img: "../src/assets/attendees/researchers.png",
          title: "Researchers",
        },
        {
          img: "../src/assets/attendees/investors.png",
          title: "Investors",
        },
        {
          img: "../src/assets/attendees/automobile.png",
          title: "Automobile Companies",
        },
      ],
    };
  },
};
</script>
<style scoped>
/* .topic {
    background: #04062a;
    } */
.topic-card {
  background-color: #030538;
  border-bottom: 5px solid #003edd;
}
.line {
  background-color: #00f470;
  width: 100px;
  height: 5px;
}
.heading {
  color: white;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "oswald";
}
.icon {
  width: 30px;
}
@media (max-width: 600px) {
  .topic-card {
    width: 25%;
    font-size: 10px;
  }
  .icon {
    width: 15px;
  }
}
</style>
