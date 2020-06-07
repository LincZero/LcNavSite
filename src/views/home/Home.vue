<template>
  <div class="home">
    <transition>
      <div>
        <Search></Search>
        <div class="advanced">
          <a @click="more">进入高级模式</a>
        </div>
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
  margin-top: 160px;
  .advanced {
    margin-top: 30px;
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