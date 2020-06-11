<template>
  <div class="conta">
    <div v-for="item in dbData" :key="item.id">
      <BoxSite :item="item" />
    </div>
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
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  > div {
    // flex-grow:1;
  }
}
</style>