<template>
  <div class="headerswitch">
    <div style="float:left">
      <p>
        <span v-show="!$store.state.abroad">大陆</span>
        <span v-show="$store.state.abroad" style="color:#e482a3">国外</span>
      </p>
    </div>
    <el-switch
      style="margin-right:2px;margin-left:6px;float:left"
      v-model="$store.state.abroad"
      active-color="#e482a3"
      inactive-color="#888888"
      @change="fn_cg_abroad"
    ></el-switch>
  </div>
</template>

<script>
// import h from "@/network/home.js"; // 
import checkNet from "@/network/checkNet.js";
export default {
  data() {
    return {
      // value: true
    };
  },
  created() {
    checkNet(bool => {
      this.$store.commit("fm_cg_abroad", bool);
    });
  },
  methods: {
    fn_cg_abroad(abroad) {
      this.$store.commit("fm_cg_abroad", abroad);
    }
  }
};
</script>

<style lang="scss">
</style>
