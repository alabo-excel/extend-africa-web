<template>
  <div class="p-5">
    <div class="row justify-content-around text-lg-left text-center">
      <div class="col-10 col-lg-3">
        <div class="count">300+</div>
        <div class="desc">Attendees</div>
      </div>
      <div class="col-10 col-lg-3">
        <div class="count">8</div>
        <div class="desc">Speakers</div>
      </div>
      <div class="col-10 col-lg-3">
        <div class="count">20+</div>
        <div class="desc">Volunteers</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.count {
  font-size: 100px;
  color: white;
  font-weight: bold;
  font-family: "Oswald";
}
.desc {
  color: #00f470;
  text-transform: uppercase;
  font-weight: bold;
}
@media (max-width: 650px) {
  .count{
    font-size: 50px;
  }
}
</style>