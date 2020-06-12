<template>
  <div class="navsite">
    <TabBar>
      <el-tab-pane label="三维设计" name="first">
        <Conta webType="_model"></Conta>
      </el-tab-pane>
      <el-tab-pane label="平面设计" name="second">
        <Conta webType="_plane"></Conta>
      </el-tab-pane>
      <el-tab-pane label="影视设计" name="third">
        <Conta webType="_video"></Conta>
      </el-tab-pane>
      <el-tab-pane label="程序开发" name="fourth">
        <Conta webType="_develop"></Conta>
      </el-tab-pane>
      <el-tab-pane label="网页开发">
        <Conta webType="_web"></Conta>
      </el-tab-pane>
      <el-tab-pane label="游戏开发">
        <Conta webType="_game"></Conta>
      </el-tab-pane>
      <el-tab-pane label="手册">
        <Conta webType="_api"></Conta>
      </el-tab-pane>
      <el-tab-pane label="其他">
        <Conta webType="_other"></Conta>
      </el-tab-pane>
    </TabBar>
  </div>
</template>

<script>
import { request } from "@/network/request.js";
export default {
  name: "NavSite",
  components: {
    TabBar: () => import("@/components/menu/TabBar.vue"),
    Conta: () => import("@/views/site/ContaSite.vue")
  }
};
</script>

<style lang="scss">
</style>