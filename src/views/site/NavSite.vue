<template>
  <div class="navsite">
    <TabBar>
      <el-tab-pane
        v-for="(item,index) in typekind"
        :key="index"
        :label="item.label"
        :name="index===0?'first':null"
      >
        <Conta :typekind="item.tk"></Conta>
      </el-tab-pane>
      <!-- <el-tab-pane label="三维设计" name="first">
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
      <el-tab-pane label="通用">
        <Conta webType="_all"></Conta>
      </el-tab-pane>
      <el-tab-pane label="生活类">
        <Conta webType="_live"></Conta>
      </el-tab-pane>
      <el-tab-pane label="其他">
        <Conta webType="_other"></Conta>
      </el-tab-pane>-->
    </TabBar>
    <!-- <el-button @click="$refs.InsertSiteDrawer.drawer=true" type="primary" style="margin-left: 16px;">点我打开</el-button> -->
    <InsertSiteDrawer></InsertSiteDrawer>
  </div>
</template>

<script>
import { request } from "@/network/request.js";
let webTypeData = [
  { label: "三维设计", tk: "_model" },
  { label: "平面设计", tk: "_plane" },
  { label: "影视设计", tk: "_video" },
  { label: "程序开发", tk: "_develop" },
  { label: "网页开发", tk: "_web" },
  { label: "游戏开发", tk: "_game" },
  { label: "通用", tk: "_all" },
  { label: "生活类", tk: "_live" },
  { label: "其他", tk: "_other" }
];
let webKindData = [
  { label: "官方手册", tk: "api" },
  { label: "在线工具", tk: "tool" },
  { label: "软件/组织官网", tk: "official" },
  { label: "搜索引擎", tk: "engine" },
  { label: "博客论坛", tk: "bbs" },
  { label: "作品库/画廊", tk: "gallery" },
  { label: "素材", tk: "sucai" },
  { label: "教程", tk: "teach" },
  { label: "其他", tk: "other" }
];
export default {
  name: "NavSite",
  computed: {
    typekind() {
      return this.$store.state.typekind === "type" ? webTypeData : webKindData;
    }
  },
  components: {
    TabBar: () => import("@/components/menu/TabBar.vue"),
    Conta: () => import("@/views/site/ContaSite.vue"),
    InsertSiteDrawer: () => import("@/views/iframe/InsertSiteDrawer.vue")
  }
};
</script>

<style lang="scss">
</style>