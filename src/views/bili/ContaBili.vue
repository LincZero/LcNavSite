<template>
  <div class="conta">
    <div v-for="item in dbData" :key="item.id">
      <BoxBili :item="item"></BoxBili>
    </div>
  </div>
</template>

<script>
import { request } from "@/network/request.js";
export default {
  name: "ContaBili",
  components: {
    BoxBili: () => import("@/views/bili/BoxBili.vue")
  },
  data() {
    return {
      dbData: null
    };
  },
  props: {
    type: String
  },
  created() {
    request({
      url: "/nav/bili",
      params: {
        class: this.type
      }
    }).then(res => {
      console.log(res.data);
      this.dbData = res.data;
    });
  }
};
</script>