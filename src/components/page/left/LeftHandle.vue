<template>
  <div id="lefthandle">
    <el-button
      style="width:65px"
      :icon="icon"
      @click="fn_cg_left"
      >
    </el-button>
  </div>
</template>

<script>
export default {
  computed: {
    icon() {
      return this.$store.state.left?"el-icon-d-arrow-left":"el-icon-d-arrow-right"
    },
  },
  methods: {
    fn_cg_left() {
      this.$store.commit("fm_cg_left");
    }
  }
};
</script>

<style lang="scss">
#lefthandle {
  box-shadow: 1px 0 1px $color-shadow;
}
</style>