<template>
  <div id="right">
    <div>
      <el-button icon="el-icon-user-solid" circle data-title="登录" />
    </div>
    <div>
      <el-button icon="el-icon-s-promotion" circle data-title="SSR" />
    </div>
    <div>
      <el-button icon="el-icon-s-tools" circle data-title="设置" />
    </div>
    <div>
      <el-button icon="el-icon-s-home" circle data-title="官网主页" />
    </div>
    <div>
      <el-button icon="el-icon-s-open" circle data-title="皮肤主题" />
    </div>
    <div>
      <el-button icon="el-icon-menu" circle data-title="详细模式" />
    </div>
    <div>
      <el-button icon="el-icon-monitor" circle data-title="显示适配" @click="fn_cg_thin" />
    </div>
    <div>
      <el-button icon="el-icon-s-custom" circle data-title="Live2D" @click="fn_cg_live2d" />
    </div>
    <div>
      <el-button icon="el-icon-star-on" circle data-title="收藏本站" />
    </div>
    <div>
      <el-button icon="el-icon-share" circle data-title="分享本站" />
    </div>
    <div>
      <el-button icon="el-icon-warning" circle data-title="使用指南" />
    </div>
    <div>
      <el-button icon="el-icon-caret-top" circle data-title="回到顶部" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fn_cg_thin() {
      this.$store.commit("fm_cg_thin");
      window.document.documentElement.setAttribute(
        "data-thin",
        this.$store.state.thin
      );
    },
    fn_cg_live2d() {
      this.$store.commit("fm_cg_live2d");
      window.document.documentElement.setAttribute(
        "data-live2d",
        this.$store.state.live2d
      );
    }
  },
  mounted() {
    if (this.$store.state.live2d === true) {
      let assetsName = "haru_2"
      setTimeout(() => {
        window.L2Dwidget.init({
          pluginRootPath: "live2dw/",
          pluginJsPath: "lib/",
          pluginModelPath: `live2d-widget-model-${assetsName}/assets/`,
          tagMode: false,
          debug: false,
          model: {
            jsonPath:
              `../live2dw/live2d-widget-model-${assetsName}/assets/${assetsName}.model.json`
          },
          display: { position: "right", width: 180, height: 495 },
          mobile: { show: true },
          log: false
        });
      }, 300);
    }
  }
};
</script>

<style lang="scss">
#live2d-widget {
  @include live2d-widget();
}

// $header-hei
#right {
  height: 100%;
  float: right;
  box-sizing: border-box;
  padding-right: 10px;
  > div {
    margin-top: 10px;
    position: relative;
    > button:hover::before {
      content: attr(data-title);
      position: absolute;
      padding: 0 5px;
      width: auto;
      height: 24px;
      line-height: 24px;
      right: 43px;
      top: 8px;
      background-color: #ecf5ff;
      border-radius: 10px;
    }
  }
}
</style>
