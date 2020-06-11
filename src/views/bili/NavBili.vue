<template>
  <div>
    <TabBar>
      <el-tab-pane label="ky" name="first">
        <Conta type="ky"></Conta>
      </el-tab-pane>
      <el-tab-pane label="3D">
        <Conta type="3D"></Conta>
      </el-tab-pane>
      <el-tab-pane label="3dmax">
        <Conta type="3dmax"></Conta>
      </el-tab-pane>
      <el-tab-pane label="Blender">
        <Conta type="Blender"></Conta>
      </el-tab-pane>
      <el-tab-pane label="C4D">
        <Conta type="C4D"></Conta>
      </el-tab-pane>
      <el-tab-pane label="Houdini">
        <Conta type="Houdini"></Conta>
      </el-tab-pane>
      <el-tab-pane label="MMD">
        <Conta type="MMD"></Conta>
      </el-tab-pane>
      <el-tab-pane label="SD">
        <Conta type="SD"></Conta>
      </el-tab-pane>
      <el-tab-pane label="SP">
        <Conta type="SP"></Conta>
      </el-tab-pane>
      <el-tab-pane label="渲染器">
        <Conta type="渲染器"></Conta>
      </el-tab-pane>
      <el-tab-pane label="水杉">
        <Conta type="水杉"></Conta>
      </el-tab-pane>
      <el-tab-pane label="雕刻">
        <Conta type="雕刻"></Conta>
      </el-tab-pane>
    </TabBar>
  </div>
</template>

<script>
import { request } from "@/network/request.js";
export default {
  name: "NavBili",
  components: {
    TabBar: () => import("@/components/menu/TabBar.vue"),
    Conta: () => import("@/views/bili/ContaBili.vue")
  }
};
</script>
