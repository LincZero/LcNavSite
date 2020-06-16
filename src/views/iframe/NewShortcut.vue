<template>
  <div class="mask">
    <div class="base"></div>
    <div class="box">
      <div>
        <h4>添加快捷访问方式</h4>
      </div>
      <div>
        <p>网站名称</p>
        <input v-model="newData.webName" type="text" />
      </div>
      <div>
        <p>网站url</p>
        <input v-model="newData.href" type="text" placeholder="请输入完整路径"/>
      </div>
      <div>
        <p>网站查询url（可选）</p>
        <input v-model="newData.hrefSlash" type="text" />
      </div>
      <div>
        <p>自定义图标（可选)</p>
        <input v-model="newData.favicon" type="text" placeholder="空则自动寻找网站图标（几率失败）" />
      </div>
      <div style="margin-top:20px">
        <button @click="addDiy" style="float:right" :disabled="disabled">确定</button>
        <button @click="cancel" style="float:right;margin-right:15px">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
// let textData = 
//   {
//     webName: "xxx",
//     favicon: "img/Pixiv.ico",
//     href: "https://www.pixiv.net/",
//     hrefSlash: null
//   }
export default {
  name: "NewShortcut",
  data() {
    return {
      newData: {
        webName: null,
        favicon: null,
        href: null,
        hrefSlash: null
      }
    };
  },
  computed: {
    disabled() {
      return (this.newData.webName&&this.newData.href)?null:'disabled'
    }
  },
  methods: {
    addDiy() {
      this.$emit("addDiy", this.newData);
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style lang="scss">
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.2);
  .base {
    margin-top: 0;
    width: 100%;
    height: 50%;
    opacity: 1;
  }
  .box {
    width: 350px;
    height: 350px;
    margin: auto;
    transform: translate(0, -50%);
    padding: 10px 28px 20px;
    background-color: $color_bg;
    z-index: 999;
    border-radius: 15px;
    div {
      margin-top: 10px;
      h4,
      p {
        text-align: left;
        width: auto;
        margin-left: 10px;
        margin-bottom: 8px;
      }
      input {
        border-radius: 3px;
      }
      button {
        width: 60px;
        height: 35px;
        border-radius: 4px;
        color: $color_light;
        background-color: $color-el-blue;
        &[disabled=disabled]{
          background-color:$color-el-gray;
        }
      }
    }
  }
}
input {
  height: 30px;
  width: 100%;
  padding-left: 8px;
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
</style>
