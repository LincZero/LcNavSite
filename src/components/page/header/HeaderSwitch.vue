<template>
  <div>
    <p>
      <span v-show="!$store.state.abroad">大陆</span>
      <span v-show="$store.state.abroad" style="color:#e482a3">国外</span>
    </p>
    <el-switch
      style="margin-right:20px;margin-left:6px;float:left"
      v-model="$store.state.abroad"
      active-color="#e482a3"
      inactive-color="#888888"
      @change="fn_cg_abroad"
    ></el-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // value: true
    };
  },
  methods: {
    fn_cg_abroad(abroad) {
      this.$store.commit('fm_cg_abroad', abroad)
    }
  }
};
</script>