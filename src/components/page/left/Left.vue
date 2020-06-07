<template>
  <div id="navmenu">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="!$store.state.left"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      this.$store.commit("fm_cg_left");
    },
    handleClose(key, keyPath) {
      this.$store.commit("fm_cg_left");
    }
  }
};
</script>

<style lang="scss">
// $left-wid;
// $header-hei
.el-menu-vertical-demo:not(.el-menu--collapse) {
  // width: calc($left-wid - 15px);
  min-height: 400px;
}
#navmenu {
  // margin-top: -$header-hei;
  // width: $left-wid;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  float: left;
  box-shadow: 1px 0 1px $color-shadow;
}
</style>