<template>
  <div id="team" class="topic py-5">
    <div class="row">
      <div class="col-lg-2 text-center mx-auto">
        <div class="heading">speakers</div>
        <div class="line mx-auto"></div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div
        v-for="(team, index) in teams"
        :key="index"
        class="col-lg-2 m-4 team-card d-flex justify-content-center"
      >
        <img class="team-img" :src="team.img" alt="" />
        <div class="team-overlay"></div>
        <div class="team-content text-left p-3">
          <div class="name">{{ team.name }}</div>
          <!-- <div class="stack">{{ team.stack }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      teams: [
        {
          name: "Albright Tejiri Onodje",
          img: "../src/assets/speakers/albright.png",
          stack: "XA lead",
        },
        {
          name: "Arome Ibrahim",
          img: "../src/assets/speakers/arome.png",
          stack: "XA lead",
        },
        {
          name: "Gospel Ononwi",
          img: "../src/assets/speakers/gospel.png",
          stack: "XA lead",
        },
        {
          name: "Brant Hindman",
          img: "../src/assets/speakers/hindman.png",
          stack: "XA lead",
        },
        {
          name: "Judith Okonkwo",
          img: "../src/assets/speakers/judith.png",
          stack: "XA lead",
        },
        {
          name: "Oscar Michael",
          img: "../src/assets/speakers/michael.png",
          stack: "XA lead",
        },
        {
          name: "Ryan Raphael",
          img: "../src/assets/speakers/raphael.png",
          stack: "XA lead",
        },
        {
          name: "Zaid Zaim",
          img: "../src/assets/speakers/zaid.png",
          stack: "XA lead",
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
.team-card {
  position: relative;
}
.team-img {
  width: 200px;
  height: 250px;
  /* border-bottom: 6px solid #00f470; */
  border-radius: 5px;
}
.team-overlay {
  background-color: #000;
  width: 200px;
  height: 52px;
  position: absolute;
  bottom: 6px;
}
.team-content {
  position: absolute;
  top: 185px;
  /* left: 28px; */
  color: white;
}
.name {
  font-family: "oswald";
  text-transform: capitalize;
}
.stack {
  font-size: 10px;
}
@media (max-width: 600px) {
}
</style>
