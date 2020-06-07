<template>
  <div class="navsite">
    <TabBar>
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
    </TabBar>
  </div>
</template>

<script>
export default {
  name: "NavSite",
  components: {
    TabBar: () => import("@/components/menu/TabBar.vue"),
    BoxSite: () => import("@/views/site/BoxSite.vue")
  }
};
</script>
