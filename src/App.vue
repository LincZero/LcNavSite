<template>
  <div id="app">
    <Header></Header>
    <MidV>
      <Left style="margin-right:20px"></Left>
      <MidH style="flex:1">
        <div style="height:30px;"></div>
        <keep-alive>
          <router-view />
        </keep-alive>
      </MidH>
      <Right style="margin-left:20px"></Right>
    </MidV>
    <Footer></Footer>
  </div>
</template>

<script>
import { getHomeMultidata } from "@/network/home.js";
export default {
  name: "Home",
  components: {
    Header: () => import("@/components/page/header/Header.vue"),
    MidV: () => import("@/components/page/layout/MidV.vue"),
    Footer: () => import("@/components/page/footer/Footer.vue"),
    Left: () => import("@/components/page/left/Left.vue"),
    MidH: () => import("@/components/page/layout/MidH.vue"),
    Right: () => import("@/components/page/right/Right.vue")
    // Live2d: () => import("@/components/live2d/Live2d.vue")
  },
  computed: {
    easy() {
      return this.$route.name == "Home";
    }
  },
  methods: {
    more() {
      this.$router.replace("/site");
    }
  },
  // created() {
  // getHomeMultidata().then(res => {
  //   this.banners = res.data.data.banner.list // 测试用...................................................
  // })
  // }
  mounted() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: "live2dw/",
        pluginJsPath: "lib/",
        pluginModelPath: "live2d-widget-model-haru_2/assets/",
        tagMode: false,
        debug: false,
        model: {
          jsonPath:
            "../live2dw/live2d-widget-model-haru_2/assets/haru_2.model.json"
        },
        display: { position: "right", width: 180, height: 495 },
        mobile: { show: true },
        log: false
      });
    }, 1000);
  }
};
</script>

<style lang="scss">
@import "~@/assets/css/base.scss";
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
