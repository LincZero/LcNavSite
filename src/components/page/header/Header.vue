<template>
  <div id="header">
    <div class="left">
      <LeftHandle></LeftHandle>
    </div>
    <div class="mid">
      <div style="float:right">
        <SearchAsync></SearchAsync>
      </div>
    </div>
    <div class="right">
      <div>
        <HeaderSwitch></HeaderSwitch>
      </div>
      <div>
        <router-link to="/home" replace>简易</router-link>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {
    LeftHandle: () => import("@/components/page/left/LeftHandle.vue"),
    // HeaderSearch: () => import("@/components/search/easy/HeaderSearch"),
    SearchAsync: () => import("@/components/search/autocomplete/SearchAsync.vue"),
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
  overflow-x: hidden;
  overflow-y: hidden;
  box-shadow: 0 1px 1px $color-shadow;
  z-index: 999;
  .left {
    width: 65px;
  }
  .mid {
    flex: 1;
    margin: 0 auto;
  }
  .right {
    margin-right: 20px;
    div {
      height: $header-hei;
      float: left;
      margin-left: 12px;
    }
    a,
    p {
      line-height: $header-hei;
      font-size: $font_size;
      font-family: $font_family;
      margin: 0;
      padding: 0;
    }
    a {
      color: $color-pink;
      text-decoration: none;
    }
    button {
      height: $header-hei;
    }
    .router-link-active {
      color: $color-el-blue;
    }
  }
}
</style>
