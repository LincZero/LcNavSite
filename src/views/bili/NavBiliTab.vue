<template>
  <div>
    <TabBar>
      <el-tab-pane
        v-for="(item,index) in biliData"
        :key="index"
        :label="item.label"
        :name="index===0?'first':null"
      >
        <Conta :type="item.tk"></Conta>
      </el-tab-pane>
    </TabBar>
  </div>
</template>

<script>
// 原 :label="item.label"
let biliData = [
  { label: "3D", tk: "3D" },
  { label: "Blender", tk: "Blender" },
  { label: "3dmax", tk: "3dmax" },
  { label: "Maya", tk: "Maya" },
  { label: "C4d", tk: "C4d" },
  { label: "Zbrush", tk: "Zbrush" },
  { label: "水杉", tk: "水杉" },
  { label: "Mix", tk: "Mix" },
  { label: "MMD", tk: "MMD" },
  { label: "Houdini", tk: "Houdini" },
  { label: "MD", tk: "MD" },
  { label: "SD", tk: "SD" },
  { label: "SP", tk: "SP" },
  { label: "Marmoset", tk: "Marmoset" },
  { label: "Render", tk: "Render" },
  { label: "UE4", tk: "UE4" },
  { label: "Unity", tk: "Unity" },
  { label: "手办", tk: "Shouban" },
  { label: "Draw", tk: "Draw" },
  { label: "Math", tk: "Math" },
  { label: "Other", tk: "Other" }
];
import { request } from "@/network/request.js";
export default {
  name: "NavBili",
  data() {
    return {
      biliData
    };
  },
  components: {
    TabBar: () => import("@/components/menu/TabBar.vue"),
    Conta: () => import("@/views/bili/ContaBili.vue")
  }
};
</script>
