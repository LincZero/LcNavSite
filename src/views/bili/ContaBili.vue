<template>
  <div class="biliConta">
    <div class="text" v-show="dbLoading">
      <img src="img/loading.gif" />
      <p>加载中......请稍等......</p>
    </div>
    <div class="text" v-show="!dbLoading&&dbError">
      <p style="color:#f56c6c">加载超时，请稍后重试</p>
    </div>
    <div class="text" v-show="!dbLoading&&!dbError&&dbNull">
      <p>该板块暂无内容</p>
    </div>
    <div v-show="!dbLoading" v-for="item in dbData" :key="item.id">
      <BoxBili :item="item"></BoxBili>
    </div>
  </div>
</template>

<script>
// 原 :label="item.label"
// let biliData = [
//   { label: "3D", tk: "3D" },
//   { label: "Blender", tk: "Blender" },
//   { label: "3dmax", tk: "3dmax" },
//   { label: "Maya", tk: "Maya" },
//   { label: "C4d", tk: "C4d" },
//   { label: "Zbrush", tk: "Zbrush" },
//   { label: "水杉", tk: "水杉" },
//   { label: "Mix", tk: "Mix" },
//   { label: "MMD", tk: "MMD" },
//   { label: "Houdini", tk: "Houdini" },
//   { label: "MD", tk: "MD" },
//   { label: "SD", tk: "SD" },
//   { label: "SP", tk: "SP" },
//   { label: "Marmoset", tk: "Marmoset" },
//   { label: "Render", tk: "Render" },
//   { label: "UE4", tk: "UE4" },
//   { label: "Unity", tk: "Unity" },
//   { label: "手办", tk: "Shouban" },
//   { label: "Draw", tk: "Draw" },
//   { label: "Math", tk: "Math" },
//   { label: "Other", tk: "Other" }
// ];
import { request } from "@/network/request.js";
export default {
  name: "ContaBili",
  components: {
    BoxBili: () => import("@/views/bili/BoxBili.vue")
  },
  data() {
    return {
      dbData: [], // 改进：字典，从而实现keep-alive效果
      dbLoading: false, // db状态1
      dbError: false // db状态2
    };
  },
  computed: {
    type() {
      return this.$route.params.type;
    },
    dbNull() {
      // db状态3
      return  this.dbData === null || this.dbData.length === 0;
    }
  },
  watch: {
    type(val) {
      // 每次请求前重置db状态
      this.dbLoading = true;
      this.dbError = false;
      this.dbData = null;
      request({
        url: "/nav/bili",
        params: {
          class: val
        }
      })
        .then(res => {
          this.dbLoading = false;
          if (res.data.length) {
            this.dbData = res.data;
          } else {
            this.dbData = res.data;
            // let message = `【${this.type}】该板块暂无内容`;
            // this.$message({
            //   message: message,
            //   type: "warning"
            // });
          }
        })
        .catch(() => {
          this.dbLoading = false;
          this.dbError = true;
          // this.$message({
          //   message: "加载超时，请重试",
          //   type: "warning"
          // });
        });
    }
  },
  created() {
    // 每次请求前重置db状态
    this.dbLoading = true;
    this.dbError = false;
    request({
      url: "/nav/bili",
      params: {
        class: this.type
      }
    })
      .then(res => {
        this.dbLoading = false;
        if (res.data.length) {
          this.dbData = res.data;
        } else {
          this.dbData = res.data;
          // let message = `【${this.type}】该板块暂无内容`;
          // this.$message({
          //   message: message,
          //   type: "warning"
          // });
        }
      })
      .catch(() => {
        this.dbLoading = false;
        this.dbError = true;
        // this.$message({
        //   message: "加载超时，请重试",
        //   type: "warning"
        // });
      });
  }
};
</script>

<style lang="scss">
.biliConta {
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  > .text {
    width: 100%;
    text-align: left;
    margin-top: 20px;
    > p {
      float: left;
      color: #409eff;
      line-height: 32px;
      font-size: 18px;
      padding: 0;
      margin: 0 10px;
    }
    > img {
      float: left;
      width: 32px;
      height: 32px;
    }
  }
}
</style>