<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="三维设计" name="first">
        <BoxSite></BoxSite>
        <BoxSite></BoxSite>
        <BoxSite></BoxSite>
        <BoxSite></BoxSite>
        <BoxSite></BoxSite>
        <BoxSite></BoxSite>
        <BoxSite></BoxSite>
        <BoxSite></BoxSite>
      </el-tab-pane>
      <el-tab-pane label="平面设计" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="影视设计" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="程序开发" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="程序开发">定时任务补偿</el-tab-pane>
      <el-tab-pane label="网页开发">定时任务补偿</el-tab-pane>
      <el-tab-pane label="游戏开发">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>



<script>
export default {
  data() {
    return {
      activeName: "second"
    };
  },
  components: {
    BoxSite: () => import("@/views/site/BoxSite.vue")
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>