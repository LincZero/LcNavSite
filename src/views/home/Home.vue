<template>
  <div class="home">
    <transition>
      <div>
        <Search></Search>
        <button @click="more">点击高级</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {
    Search: () => import("@/views/home/search/Search.vue")
  },
  methods: {
    more() {
      this.$router.replace("/site");
    }
  }
};
</script>

<style lang="scss">
.home {
  // height: 100%;
  // display: flex;
  Serach {
    // flex: 1;
  }
}
.v-enter,
.v-leave-to {
  // opactity: 0;
  transform: translateZ(-200px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}
</style>