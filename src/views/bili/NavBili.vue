<template>
  <div>
    <div style="height:30px;width:100%">
      <p style="float:left;line-height:30px">【{{type}}】</p>
    </div>
    <Conta></Conta>
  </div>
</template>

<script>
import { request } from "@/network/request.js";
export default {
  name: "NavBili",
  components: {
    Conta: () => import("@/views/bili/ContaBili.vue")
  },
  computed: {
    type() {
      return this.$route.params.type;
    }
  }
};
</script>
