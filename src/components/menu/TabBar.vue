<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <slot>
      </slot>
    </el-tabs>
  </div>
</template>



<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab);
    }
  }
};
</script>