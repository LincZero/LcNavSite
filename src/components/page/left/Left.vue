<template>
  <div id="navmenu" v-show="$store.state.left">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="!$store.state.left"
    >
      <el-submenu index="dev">
        <span slot="title">开发类</span>
        <el-submenu index="dev-lan">
          <span slot="title">开发类-语言</span>
          <el-menu-item index="dev-java">Java</el-menu-item>
          <el-menu-item index="dev-c">C/C++</el-menu-item>
          <el-menu-item index="dev-js">JavaScript</el-menu-item>
          <el-menu-item index="dev-python">Python</el-menu-item>
        </el-submenu>
        <el-submenu index="dev-area">
          <span slot="title">开发类-领域</span>
          <el-menu-item index="dev-all">通用</el-menu-item>
          <el-menu-item index="dev-pro">程序开发</el-menu-item>
          <el-menu-item index="dev-web">网络开发</el-menu-item>
          <el-menu-item index="dev-game">游戏开发</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="des">
        <span slot="title">设计类</span>
        <el-submenu index="model">
          <span slot="title">三维设计-软件</span>
          <el-menu-item index="model-Mix">Mix</el-menu-item>
          <el-menu-item index="model-Maya">Maya</el-menu-item>
          <el-menu-item index="model-3dmax">3dsMax</el-menu-item>
          <el-menu-item index="model-C4d">C4d</el-menu-item>
          <el-menu-item index="model-Zbrush">Zbrush</el-menu-item>
          <el-menu-item index="model-Blender">Blender</el-menu-item>
          <el-menu-item index="model-Houdini">Houdini</el-menu-item>
          <el-menu-item index="model-MD">MD</el-menu-item>
        </el-submenu>
        <el-submenu index="modelrender">
          <span slot="title">三维设计-Render</span>
          <el-menu-item index="model-Marmoset">八猴</el-menu-item>
          <el-menu-item index="model-SD">SD</el-menu-item>
          <el-menu-item index="model-SP">SP</el-menu-item>
          <el-menu-item index="model-RedShift">RedShift</el-menu-item>
          <el-menu-item index="model-Arnold">Arnold</el-menu-item>
          <el-menu-item index="model-VRay">VRay</el-menu-item>
        </el-submenu>
        <el-menu-item index="plane">平面设计</el-menu-item>
        <el-menu-item index="video">影视设计</el-menu-item>
        <el-menu-item index="animate">动画设计</el-menu-item>
      </el-submenu>
      <el-submenu index="sci">
        <span slot="title">自然科学</span>
        <el-menu-item index="sci-math">数学</el-menu-item>
        <el-menu-item index="sci-phy">物理</el-menu-item>
        <el-menu-item index="sci-che">化学</el-menu-item>
        <el-menu-item index="sci-bio">生物</el-menu-item>
        <el-menu-item index="sci-geo">地理</el-menu-item>
        <el-menu-item index="sci-law">法律</el-menu-item>
      </el-submenu>
      <span style="color:red">
        该部分
        <br />开发中
      </span>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      // this.$store.commit("fm_cg_left");
    },
    handleClose(key, keyPath) {
      // this.$store.commit("fm_cg_left");
    },
    select(index, indexPath) {
      console.log(index, indexPath);
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
  box-sizing: border-box;
  .el-menu-vertical-demo {
    height: 100%;
  }
  .el-submenu__title,
  .el-menu-item {
    height: 45px;
    line-height: 45px;
    text-align: left;
  }
  .el-submenu__title {
    // color: $color_light;
    background-color: rgba($color: $color-el-blue, $alpha: 0.3);
    border-bottom: 1px solid $color-deep-shadow;
    // box-shadow: 0 -1px 1px $color-shadow;
  }
}
</style>