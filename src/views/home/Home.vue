<template>
  <div class="home">
    <transition>
      <div>
        <Search></Search>
        <div class="advanced">
          <a @click="this.$router.replace('/engine')">高级模式</a>
          <a @click="this.$router.replace('/site')">网站模式</a>
          <a @click="this.$router.replace('/bili')">B站模式</a>
          <a v-show="$store.state.inputLock">锁存内容：{{$store.state.inputLock}}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      textData: null
    };
  },
  components: {
    Search: () => import("@/components/search/easy/HomeSearchAsync.vue")
  },
  methods: {}
};
</script>

<style lang="scss">
.home {
  margin-top: 160px;
  .advanced {
    margin-top: 30px;
    a {
      margin: 0 15px;
      color: $color-pink;
    }
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
