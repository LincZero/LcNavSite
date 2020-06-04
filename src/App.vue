<template>
  <div id="app">
    <Header></Header>
    <Left style="margin-right:20px"></Left>
    <Right></Right>
    <div>
      <Search></Search>
      <div style="height:40px;"></div>
      <router-view />
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
// import Header from '@/components/Page_Header.vue'
export default {
  name: "Home",
  components: {
    Search: () => import("@/components/search/Search.vue"),
    Header: () => import("@/components/page/header/Header.vue"),
    Footer: () => import("@/components/page/footer/Footer.vue"),
    Left: () => import("@/components/page/left/Left.vue"),
    Right: () => import("@/components/page/right/Right.vue")
  }
};
</script>
<style lang="scss">
@import "./assets/css/base.css";
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
