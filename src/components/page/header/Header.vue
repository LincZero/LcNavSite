<template>
  <div id="header">
    <div class="left">
      <LeftHandle></LeftHandle>
    </div>
    <div class="mid">
      <div style="float:right">
        <HeaderSearch></HeaderSearch>
      </div>
    </div>
    <div class="right">
      <div>
        <HeaderSwitch></HeaderSwitch>
      </div>
      <div>
        <router-link to="/home" replace>></router-link>
      </div>
      <div>
        <router-link to="/engine" replace>高级引擎</router-link>
      </div>
      <div>
        <router-link to="/site" replace>网站模式</router-link>
      </div>
      <div>
        <router-link to="/bili" replace>B站模式</router-link>
      </div>
      <div>
        <router-link to="/api" replace>手册模式</router-link>
      </div>
      <div>
        <router-link to="/about" replace>网站指南</router-link>
      </div>
      <div>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <i class="el-icon-setting"></i>
        <i class="el-icon-warning-outline"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {
    LeftHandle: () => import("@/components/page/left/LeftHandle.vue"),
    HeaderSearch: () => import("./HeaderSearch"),
    HeaderSwitch: () => import("./HeaderSwitch")
  }
};
</script>

<style lang="scss">
// $header-hei: 40px;
#header {
  $font_size: 18px;
  $font_family: "Times New Roman", Georgia, Serif;
  height: $header-hei;
  width: 100%;
  display: flex;
  .left {
    width: 100px;
  }
  .right {
    float: right;
    margin-right: 20px;
  }
  .mid {
    flex: 1;
    margin: 0 auto;
  }
  div {
    height: $header-hei;
    float: left;
    margin: {
      left: 12px;
    }
  }
  a,
  p {
    line-height: $header-hei;
    font: {
      size: $font_size;
      family: $font_family;
    }
    text-decoration: none;
    margin: 0;
    padding: 0;
  }
  button {
    height: $header-hei;
  }
  .router-link-active {
    color: red;
  }
  // p {
  //   float: left;
  //   span {
  //     line-height: 1;
  //     font-size: 14px;
  //     display: inline-block;
  //     cursor: pointer;
  //     font-weight: 500;
  //     text-align: center;
  //     line-height: $header-hei;
  //   }
  // }
}
</style>
