<template>
  <div id="right">
    <div>
      <div>
        <el-button :icon="handleIcon" circle :data-title="handleTitle" @click="fn_cg_right" />
      </div>
    </div>
    <div v-show="$store.state.right">
      <!-- <div>
        <el-button icon="el-icon-user-solid" circle data-title="登录" />
      </div>
      <div>
        <el-button icon="el-icon-s-promotion" circle data-title="外网说明" />
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
      </div> -->
      <div>
        <el-button icon="el-icon-refresh" circle data-title="切换类型" @click="fn_cg_typekind" />
      </div>
      <div>
        <el-button icon="el-icon-monitor" circle data-title="显示适配" @click="fn_cg_thin" />
      </div>
      <div>
        <el-button icon="el-icon-s-custom" circle data-title="Live2D" @click="fn_cg_live2d" />
      </div>
      <div>
        <el-button icon="el-icon-star-on" circle data-title="收藏本站" @click="collect" />
      </div>
      <div>
        <el-button icon="el-icon-share" circle data-title="分享本站" @click="copyShare" />
      </div>
      <div>
        <el-button icon="el-icon-warning" circle data-title="使用指南" @click="window.open('http://nav.lingchu.xyz/readme')" />
      </div>
    </div>
  </div>
</template>

<script>
// text: 要复制的内容， callback: 回调
function copyText(text, callback) {
  var tag = document.createElement("input");
  tag.setAttribute("id", "cp_hgz_input");
  tag.value = text;
  document.getElementsByTagName("body")[0].appendChild(tag);
  document.getElementById("cp_hgz_input").select();
  document.execCommand("copy");
  document.getElementById("cp_hgz_input").remove();
  if (callback) {
    callback(text);
  }
}
let shareStr = `lcNav | 创作者导航 ；\n
界面简易且功能强大，超好用的便捷导航 ；\n
点击网址访问：http://www.lingchu.xyz/readme`;
export default {
  computed: {
    handleIcon() {
      return this.$store.state.right
        ? "el-icon-caret-top"
        : "el-icon-caret-bottom";
    },
    handleTitle() {
      return this.$store.state.right
        ? "折叠"
        : "展开";
    }
  },
  methods: {
    fn_cg_right() {
      this.$store.commit("fm_cg_right", !this.$store.state.right);
    },
    fn_cg_thin() {
      this.$store.commit("fm_cg_thin");
      window.document.documentElement.setAttribute(
        "data-thin",
        this.$store.state.thin
      );
    },
    fn_cg_typekind() {
      this.$store.commit("fm_cg_typekind");
    },
    fn_cg_live2d() {
      this.$store.commit("fm_cg_live2d");
      window.document.documentElement.setAttribute(
        "data-live2d",
        this.$store.state.live2d
      );
    },
    collect() {
      this.$notify({
        title: "收藏本站",
        message: "Ctrl+D 快速收藏本站",
        position: "top-right",
        offset: 40,
        duration: 3500
      });
    },
    copyShare() {
      copyText(shareStr, () => {
        this.$notify({
          title: "分享本站",
          message:
            "【复制成功】分享信息已复制到您的剪切板上, 快去粘贴分享给你的好友吧",
          position: "top-right",
          offset: 40,
          duration: 3500
        });
      });
    }
  },
  created() {
    this.$store.commit("fm_cg_right", this.$route.name!='Home');
  },
  mounted() {
    if (this.$store.state.live2d === true && this.$route.name != "Home") {
      let assetsName = "haru_2";
      setTimeout(() => {
        window.L2Dwidget.init({
          pluginRootPath: "live2dw/",
          pluginJsPath: "lib/",
          pluginModelPath: `live2d-widget-model-${assetsName}/assets/`,
          tagMode: false,
          debug: false,
          model: {
            jsonPath: `../live2dw/live2d-widget-model-${assetsName}/assets/${assetsName}.model.json`
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
  @include live2d-widget(); // 取巧地使用html属性来影响其显示隐藏
}
// $header-hei
#right {
  height: 100%;
  float: right;
  box-sizing: border-box;
  padding-right: 10px;
  overflow: visible;
  // overflow-x: auto;
  // overflow-y: scroll;
  // 很难想明白这里为什么x和y都不能设置，否则左侧方向溢出的伪元素就会被溢出隐藏
  z-index: 0;
  > div > div {
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
      z-index: 999;
    }
  }
}
.el-notification.right {
  right: 58px !important;
}
</style>
