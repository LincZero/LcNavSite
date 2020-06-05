<template>
  <div id="Footer">
    <div class="float">
      <p>网站备案： 粤ICP备20004544号-1</p>
      <p>加群交流：[Q群] 372229261</p>
      <p>开发不易，来为开发者众筹一杯冰阔落呗~</p>
      <p>官网首页</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
#Footer {
  // $footer-hei: 25px;
  // $color_dark: #333333;
  // $color_light: aliceblue;
  height: $footer-hei;
  background: $color_dark;
  width: 100%;
  position: fixed;
  bottom: 0;
  div {
    height: $footer-hei;
  }
  .float {
    margin-left: 20px;
    p {
      color: $color_light;
      float: left;
      margin: 0 50px 0 0;
      padding: 0;
    }
  }
}
</style>