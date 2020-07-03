<template>
  <div id="app">
    <Header></Header>
    <MidV>
      <Left v-if="$route.name!=='Home'"></Left>
      <MidH style="flex:1;margin:0 20px 0 30px">
        <div style="height:30px;"></div>
        <keep-alive>
          <router-view />
        </keep-alive>
      </MidH>
      <Right></Right>
    </MidV>
    <Footer></Footer>
  </div>
</template>

<script>
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
  created() {
    window.document.documentElement.setAttribute(
      "data-thin",
      this.$store.state.thin
    );
  },
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
