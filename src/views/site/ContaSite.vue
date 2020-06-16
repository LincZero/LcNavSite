<template>
  <div class="siteConta">
    <div v-for="item in dbData" :key="item.id">
      <BoxSite :item="item" />
    </div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
  </div>
</template>

<script>
import siteDbPromise from "@/network/home.js";
export default {
  name: "ContaSite",
  components: {
    BoxSite: () => import("@/views/site/BoxSite.vue")
  },
  data() {
    return {
      dbData: null
    };
  },
  props: {
    webType: String
  },
  mounted() {
    siteDbPromise().then(res => {
      // 前端筛选，但这里要解决一下所以组件同步的问题
      // 还要解决一下v-for循环不显示组件的问题（官方不推荐v-for和v-if一起用）
      // console.log(res)
      this.dbData = res.filter((item) => {
        return (item.webType == this.webType);
      });
    });
  }
};
</script>

<style lang="scss">
.siteConta {
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  // justify-content: left;
  justify-content: center;
}
.null {
  // 防止最后一行居中
  height: 0px;
  width: 178px;
  margin: 0 8px;
}
</style>