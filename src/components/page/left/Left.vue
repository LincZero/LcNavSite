<template>
  <div id="navmenu" v-show="$store.state.left">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="!$store.state.left"
      :router="true"
    >
      <el-submenu index="Dev">
        <span slot="title">开发类</span>
        <el-menu-item index="Dev-Java">Java</el-menu-item>
        <el-menu-item index="Dev-C">C/C++</el-menu-item>
        <el-menu-item index="Dev-Js">JavaScript</el-menu-item>
        <el-menu-item index="Dev-Python">Python</el-menu-item>
        <el-menu-item index="Dev-Computer">计算机常识</el-menu-item>
        <el-menu-item index="Dev-Code">编程-通用</el-menu-item>
        <el-menu-item index="Dev-Hack">浸透/小把戏</el-menu-item>
        <el-menu-item index="Dev-Pro">程序开发</el-menu-item>
        <el-menu-item index="Dev-Web">网络开发</el-menu-item>
        <el-menu-item index="Dev-Unity">游戏开发-Untiy</el-menu-item>
        <el-menu-item index="Dev-UE4">游戏开发-UE4</el-menu-item>
      </el-submenu>
      <el-submenu index="Model">
        <span slot="title">三维设计</span>
        <el-menu-item index="Model-3D">3D</el-menu-item>
        <el-menu-item index="Model-Mix">Mix</el-menu-item>
        <el-menu-item index="Model-Maya">Maya</el-menu-item>
        <el-menu-item index="Model-3dsmax">3dsMax</el-menu-item>
        <el-menu-item index="Model-C4d">C4d</el-menu-item>
        <el-menu-item index="Model-Zbrush">Zbrush</el-menu-item>
        <el-menu-item index="Model-Blender">Blender</el-menu-item>
        <el-menu-item index="Model-Houdini">Houdini</el-menu-item>
        <el-menu-item index="Model-MMD">MMD</el-menu-item>
        <el-menu-item index="Model-ShuiShan">水杉</el-menu-item>
        <el-menu-item index="Model-MD">MD</el-menu-item>
        <el-menu-item index="Model-Marmoset">八猴</el-menu-item>
        <el-menu-item index="Model-SD">SD</el-menu-item>
        <el-menu-item index="Model-SP">SP</el-menu-item>
        <el-menu-item index="Model-Render">Render</el-menu-item>
        <el-menu-item index="Model-RedShift">RedShift</el-menu-item>
        <el-menu-item index="Model-Arnold">Arnold</el-menu-item>
        <el-menu-item index="Model-VRay">VRay</el-menu-item>
        <el-menu-item index="Model-ShouBan">手办</el-menu-item>
        <el-menu-item index="Model-Graph">图形学</el-menu-item>
        <el-menu-item index="Model-DiaoKe">雕刻</el-menu-item>
      </el-submenu>
      <el-submenu index="Plane">
        <span slot="title">平面设计</span>
        <el-menu-item index="Plane-Default">默认</el-menu-item>
        <el-menu-item index="Plane-Office">Office系列</el-menu-item>
        <el-menu-item index="Plane-Draw">绘画类</el-menu-item>
        <el-menu-item index="Plane-Camera">摄影</el-menu-item>
      </el-submenu>
      <el-submenu index="Video">
        <span slot="title">影视设计</span>
        <el-menu-item index="Video-Animate">动画</el-menu-item>
        <el-menu-item index="Video-Movie">影视</el-menu-item>
      </el-submenu>
      <el-submenu index="Voice">
        <span slot="title">音频设计</span>
        <el-menu-item index="Voice-Default">默认</el-menu-item>
      </el-submenu>
      <el-submenu index="Make">
        <span slot="title">制作类</span>
        <el-menu-item index="Make-EleSCM">单片机</el-menu-item>
        <el-menu-item index="Make-Hand">手工</el-menu-item>
      </el-submenu>
      <el-submenu index="Sci">
        <span slot="title">自然科学</span>
        <el-menu-item index="Sci-Knowledge">知识</el-menu-item>
        <el-menu-item index="Sci-College">大学</el-menu-item>
        <el-menu-item index="Sci-Math">数学</el-menu-item>
        <el-menu-item index="Sci-MathStat">统计</el-menu-item>
        <el-menu-item index="Sci-Physics">物理</el-menu-item>
        <el-menu-item index="Sci-Chemistry">化学</el-menu-item>
        <el-menu-item index="Sci-Biology">生物</el-menu-item>
        <el-menu-item index="Sci-Geography">地理</el-menu-item>
        <el-menu-item index="Sci-Language">语言类</el-menu-item>
        <el-menu-item index="Sci-Law">法律</el-menu-item>
      </el-submenu>
      <el-submenu index="Other">
        <span slot="title">其他</span>
        <el-menu-item index="Other">默认</el-menu-item>
      </el-submenu>
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
  width: $left-wid;
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