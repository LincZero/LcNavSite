<template>
  <div id="app">
    <Header></Header>
    <MidV>
      <Left style="margin-right:20px"></Left>
      <MidH style="flex:1">
        <div style="height:40px;"></div>
        <router-view />
      </MidH>
      <Right  style="margin-left:20px"></Right>
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
  created() {
    // getHomeMultidata().then(res => {
    //   this.banners = res.data.data.banner.list // 测试用...................................................
    // })
  }
};
</script>
<style lang="scss">
@import "~@/assets/css/base.css";
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
