<template>
  <div id="lefthandle">
    <el-button
      :icon="icon"
      @click="fn_cg_left"
      size="small"
      circle>
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    icon() {
      return this.$store.state.left?"el-icon-d-arrow-right":"el-icon-d-arrow-left"
    }
  },
  methods: {
    fn_cg_left() {
      this.$store.commit("fm_cg_left");
    }
  }
};
</script>

<style lang="scss">
// #lefthandle {
// }
</style>