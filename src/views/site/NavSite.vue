<template>
  <div class="navsite">
    <TabBar>
      <el-tab-pane label="三维设计" name="first">
        <Conta webType="_model"></Conta>
      </el-tab-pane>
      <el-tab-pane label="平面设计" name="second">
        <div class="conta">
          <Conta webType="_plane"></Conta>
        </div>
      </el-tab-pane>
      <el-tab-pane label="影视设计" name="third">
        <div class="conta">
          <Conta webType="_video"></Conta>
        </div>
      </el-tab-pane>
      <el-tab-pane label="程序开发" name="fourth">
        <div class="conta">
          <Conta webType="_develop"></Conta>
        </div>
      </el-tab-pane>
      <el-tab-pane label="网页开发">
        <div class="conta">
          <Conta webType="_web"></Conta>
        </div>
      </el-tab-pane>
      <el-tab-pane label="游戏开发">
        <div class="conta">
          <Conta webType="_game"></Conta>
        </div>
      </el-tab-pane>
      <el-tab-pane label="手册">
        <div class="conta">
          <Conta webType="_api"></Conta>
        </div>
      </el-tab-pane>
      <el-tab-pane label="其他">
        <div class="conta">
          <Conta webType="_other"></Conta>
        </div>
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
}
</script>

<style lang="scss">
.navsite {
  // height: 100%;
}
</style>