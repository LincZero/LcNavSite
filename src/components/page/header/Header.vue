<template>
  <div id="header">
    <div class="left">
      <LeftHandle v-if="$route.name!=='Home'"></LeftHandle>
    </div>
    <div class="mid">
      <div style="float:right;margin:0 10px">
        <SearchAsync></SearchAsync>
      </div>
    </div>
    <div class="right">
      <div>
        <HeaderSwitch></HeaderSwitch>
      </div>
      <li>
        <router-link to="/home" replace>简易</router-link>
      </li>
      <li>
        <router-link to="/engine" replace>高级引擎</router-link>
      </li>
      <li>
        <router-link to="/site" replace>网站模式</router-link>
      </li>
      <li>
        <router-link to="/bili" replace>B站模式</router-link>
      </li>
      <li @click="readme">
        <a>网站指南</a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {
    LeftHandle: () => import("@/components/page/left/LeftHandle.vue"),
    // HeaderSearch: () => import("@/components/search/easy/HeaderSearch"),
    SearchAsync: () =>
      import("@/components/search/autocomplete/SearchAsync.vue"),
    HeaderSwitch: () => import("./HeaderSwitch")
  },
  methods: {
    readme() {
      window.open("http://www.lingchu.xyz/readme");
    }
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
    div,
    ul,
    li {
      float: left;
      height: $header-hei;
    }
    li {
      margin-left: 12px;
    }
    a,
    p {
      line-height: $header-hei;
      font-family: $font_family;
      font-size: $font_size;
    }
    a {
      color: $color-pink;
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
