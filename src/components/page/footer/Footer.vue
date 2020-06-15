<template>
  <div id="Footer">
    <div class="float">
      <a href="http://www.beian.miit.gov.cn/">网站备案：粤ICP备30004544号-1</a>
      <p>加群交流：[Q群] 372229261</p>
      <p href>
        <el-button
          type="text"
          @click="open"
          style="line-height:25px;padding:0;border:0;font-size:15px;float:left;color:aliceblue"
        >开发维护不易，来为开发者赞助一杯冰阔落呗~</el-button>
      </p>
      <a>官网首页</a>
      <Each></Each>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {
    Each: () => import("@/components/page/footer/Each.vue")
  },
  methods: {
    open() {
      console.log("click");
      this.$alert(
        `<img src="pay/ZfbPay.png" alt="Error" style="width:300px;height:300px;margin-right:15px"><img src="pay/WeChatPay.png" alt="Error" style="width:300px;height:300px">`,
        "捐助作者",
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText: "我已捐助"
        }
      ).then(() => {
        this.$message({
          type: 'success',
          message: "万分感谢您的慷慨"
        });
      });
    }
  }
};
</script>

<style lang="scss">
.el-message-box {
  width: 647px;
}
#Footer {
  // $footer-hei: 25px;
  // $color_dark: #333333;
  // $color_light: aliceblue;
  height: $footer-hei;
  background: $color_dark;
  width: 100%;
  position: fixed;
  bottom: 0;
  div {
    height: $footer-hei;
  }
  .float {
    padding: 0 20px;
    a,
    p {
      line-height: $footer-hei;
      color: $color_light;
      float: left;
      margin: 0 50px 0 0;
      padding: 0;
      font-size: 15px;
    }
  }
}
</style>
