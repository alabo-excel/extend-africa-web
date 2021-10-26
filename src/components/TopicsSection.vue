<template>
  <div class="topic py-5">
    <div class="row">
      <div class="col-lg-2 text-center mx-auto">
        <div class="heading">topics:</div>
        <div class="line mx-auto"></div>
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
          img: "../src/assets/topics-icons/education.png",
          title: "Education",
        },
        {
          img: "../src/assets/topics-icons/fashion.png",
          title: "Fashion",
        },
        {
          img: "../src/assets/topics-icons/tourism.png",
          title: "Tourism",
        },
        {
          img: "../src/assets/topics-icons/real-estate.png",
          title: "Real Estate",
        },
        {
          img: "../src/assets/topics-icons/games.png",
          title: "Games",
        },
        {
          img: "../src/assets/topics-icons/health.png",
          title: "Health",
        },
        {
          img: "../src/assets/topics-icons/sports.png",
          title: "NFT",
        },
        {
          img: "../src/assets/topics-icons/transportation.png",
          title: "Metaverse",
        },
      ],
    };
  },
};
</script>
<style scoped>
.topic {
  background: #04062a;
}
.topic-card {
  background-color: #030538;
  border-bottom: 5px solid #003edd;
}
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
.icon {
  width: 30px;
}
@media (max-width: 600px) {
  .topic-card {
    width: 30%;
    font-size: 10px;
  }
  .icon{
    width: 15px;
  }
}
</style>
