<template>
  <div class="insertSiteDrawer">
    <el-drawer
      title="添加新网站"
      :visible.sync="$store.state.drawerSite"
      direction="rtl"
      :before-close="handleClose"
    >
      <li>
        <h4>提交者与提交权限</h4>
      </li>
      <li>
        <p>用户名</p>
        <input type="text" v-model="submitData.up" placeholder="游客：demo" />
      </li>
      <li>
        <p>密码</p>
        <input type="text" v-model="submitData.password" placeholder="游客：demo" />
      </li>
      <li>
        <span>不定期清理游客提交的网站，加群可成为正式用户</span>
      </li>
      <hr />
      <li>
        <h4>网站信息（必填）</h4>
      </li>
      <li>
        <p>网站名</p>
        <input type="text" v-model="submitData.webName" placeholder="首字母大写" />
      </li>
      <li>
        <p>网站url</p>
        <input type="text" v-model="submitData.href" placeholder="请输入完整路径" />
      </li>
      <li>
        <p>领域分类</p>
        <select v-model="submitData.webType">
          <option value="_all">通用</option>
          <option value="_model">三维建模</option>
          <option value="_plane">平面设计</option>
          <option value="_video">影视设计</option>
          <option value="_develop">程序开发</option>
          <option value="_web">网页开发</option>
          <option value="_game">游戏开发</option>
          <option value="_science">自然科学</option>
          <option value="_live">生活类</option>
          <option value="_play">娱乐类</option>
          <option value="_other">其他</option>
        </select>
      </li>
      <li>
        <p>性质分类</p>
        <select v-model="submitData.webKind">
          <option value="api">官方手册</option>
          <option value="tool">在线工具</option>
          <option value="official">软件/组织官网</option>
          <option value="serve">服务平台</option>
          <option value="engine">搜索引擎</option>
          <option value="bbs">博客论坛</option>
          <option value="gallery">作品库/画廊</option>
          <option value="sucai">素材</option>
          <option value="teach">教程</option>
          <option value="other">其他</option>
        </select>
      </li>
      <li>
        <p>网站语言</p>
        <select v-model="submitData.lang">
          <option value="zh">中文</option>
          <option value="en">英语</option>
          <option value="mul">多语言</option>
          <option value="other">其他</option>
        </select>
      </li>
      <hr />
      <li>
        <h4>网站信息（非必填）</h4>
      </li>
      <li>
        <p>网站图标</p>
        <input type="text" v-model="submitData.favicon" placeholder="空则自动寻找网站图标（几率失败）" />
      </li>
      <li>
        <p>查询url</p>
        <input type="text" v-model="submitData.hrefSlash" placeholder="请先查阅后台手册" />
      </li>
      <li>
        <p>网站描述</p>
        <input type="text" v-model="submitData.detail" placeholder="25字以内" />
      </li>
      <li>
        <p>网站标签</p>
        <input type="text" v-model="submitData.tag" placeholder="如：前端|css|动画" />
      </li>
      <li>
        <p>花费/版权</p>
        <select v-model="submitData.cost">
          <option value="null">— 未选择 —</option>
          <option value="CC0">CC0</option>
          <option value="free">全免费</option>
          <option value="pay">全付费</option>
          <option value="mul">混合</option>
        </select>
      </li>
      <li>
        <p>大陆禁访</p>
        <input type="checkbox" v-model="submitData.abroad" value="1" />
      </li>
      <hr />
      <li>
        <h4>游客禁止填写</h4>
      </li>
      <li>
        <p>搜索指令</p>
        <input type="text" v-model="submitData.command" />
      </li>
      <li>
        <p>游客屏蔽</p>
        <input type="checkbox" v-model="submitData.ban" value="1" />
      </li>
      <hr />
      <li>
        <h4>自动生成数据</h4>
      </li>
      <li>
        <span>id、分数*、点击率</span>
      </li>
      <li class="last">
        <button type="button" @click="clear">清空</button>
        <button type="button" :disabled="!submitAble" @click="submit">提交</button>
        <button type="button" @click="$store.state.drawerSite=false">取消</button>
      </li>
    </el-drawer>
  </div>
</template>

<script>
import submitSite from "@/network/submitSite.js";
export default {
  data() {
    return {
      submitData: {
        // 不能为NULL，不然后端那边很麻烦（不传、又不能给数据类型赋值NULL）
        up: "",
        webName: "",
        href: "",
        webType: "",
        webKind: "",
        lang: "",
        // 非必填
        favicon: "",
        hrefSlash: "",
        detail: "",
        tag: "",
        cost: "",
        abroad: 0,
        // 游客禁填
        command: "",
        ban: 0,
        // 非数据库
        password: ""
      }
    };
  },
  computed: {
    submitAble() {
      return (
        this.submitData.lang &&
        this.submitData.up &&
        this.submitData.webName &&
        this.submitData.webType &&
        this.submitData.webKind &&
        this.submitData.href &&
        this.submitData.password
      );
    }
  },
  methods: {
    handleClose(done) {
      // this.$confirm("确认关闭？")
      //   .then(_ => {
      //     done();
      //   })
      //   .catch(_ => {});
      done();
    },
    clear() {
      for (let i in this.submitData) {
        if (i !== "up" && i !== "password") {
          if (i === "abroad" || i === "ban") {
            this.submitData[i] = 0;
          } else {
            this.submitData[i] = "";
          }
        }
      }
      this.password = "";
    },
    submit() {
      submitSite(this.submitData, this).then(res => {
        let resdata = res.data;
        console.log(resdata, typeof resdata);
        if (resdata === "success") {
          this.$message.success("提交成功");
        } else if (resdata === "user err") {
          this.$message.error("账号或密码失败");
        } else {
          this.$message.error("提交失败");
        }
      });
    }
  }
};
</script>

<style lang="scss">
.insertSiteDrawer {
  $hei: 28px;
  .el-drawer {
    // 框
    width: 450px !important;
    padding: 8px 20px;
    background-color: $color-bg;
    overflow-y: auto;
    .el-drawer__header {
      // 标题
      margin-bottom: 10px;
      padding-top: 10px;
    }
    h4 {
      float: left;
    }
    li {
      height: $hei;
      margin: 10px 0;
      clear: both;
    }
    span {
      line-height: $hei;
      text-align: left;
      float: left;
    }
    p {
      line-height: $hei;
      text-align: left;
      width: 85px;
      float: left;
    }
    p::after {
      content: "：";
    }
    input,
    select {
      height: $hei;
      width: calc(100% - 40px - 85px);
      float: left;
      margin-left: 0;
      padding: 0 6px;
      border: none;
      box-sizing: border-box;
      box-shadow: 0 0 1px $color-shadow;
      &:hover {
        box-shadow: 0 0 2px $color-deep-shadow;
        transition: box-shadow 0.5s;
      }
      &:focus {
        border: 1px solid $color-el-blue;
      }
    }
    input[type="checkbox"] {
      width: 28px;
      float: left;
    }
    hr {
      clear: both;
      height: 1px;
      border: none;
      background-color: $color-shadow;
      margin-top: 20px;
    }
    .last {
      margin: 30px 0 80px;
      button {
        height: 30px;
        width: 80px;
        color: $color-light;
        background-color: $color-el-blue;
        border-radius: 5px;
        margin: 0 10px;
        float: right;
        &:first-child {
          float: left;
        }
        &:disabled {
          background-color: $color-el-gray;
        }
      }
    }
  }
}
</style>