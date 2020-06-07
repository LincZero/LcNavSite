<template>
  <div>
    <TabBar>
      <el-tab-pane label="ky" name="first">
        <div v-for="item in dbData" :key="item.id">
          <BoxBili :item="item"></BoxBili>
        </div>
      </el-tab-pane>
      <el-tab-pane label="三维设计"></el-tab-pane>
      <el-tab-pane label="平面设计">配置管理</el-tab-pane>
      <el-tab-pane label="影视设计">角色管理</el-tab-pane>
      <el-tab-pane label="程序开发">定时任务补偿</el-tab-pane>
      <el-tab-pane label="程序开发">定时任务补偿</el-tab-pane>
      <el-tab-pane label="网页开发">定时任务补偿</el-tab-pane>
      <el-tab-pane label="游戏开发">定时任务补偿</el-tab-pane>
    </TabBar>
  </div>
</template>

<script>
import { request } from "@/network/request.js";
export default {
  name: "NavBili",
  components: {
    TabBar: () => import("@/components/menu/TabBar.vue"),
    BoxBili: () => import("@/views/bili/BoxBili.vue")
  },
  data() {
    return {
      dbData: null
    };
  },
  created() {
    request({
      url: "/nav/bili"
    }).then(res => {
      console.log(res.data);
      this.dbData = res.data;
    });
  }
};
</script>
