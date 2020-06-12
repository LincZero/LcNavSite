<template>
  <div class="conta">
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
import { request } from "@/network/request.js";
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
    request({
      url: "/nav/site",
      params: {
        webType: this.webType
      }
    }).then(res => {
      console.log(res.data);
      this.dbData = res.data;
    });
  }
};
</script>

<style lang="scss">
.conta {
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  // justify-content: left;
  justify-content: center;
}
.null { // 防止最后一行居中
  height: 0px;
  width: 178px;
  margin: 0 8px;
}
</style>