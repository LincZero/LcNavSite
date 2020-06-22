<template>
  <div class="siteConta">
    <div v-for="item in dbData" :key="item.id">
      <BoxSite :item="item" />
    </div>
    <div @click="drawer">
      <BoxSite :item="addData" style="opacity:0.4" />
    </div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
    <div class="null"></div>
  </div>
</template>

<script>
import { request } from "@/network/request";
export default {
  name: "ContaSite",
  components: {
    BoxSite: () => import("@/views/site/BoxSite.vue")
  },
  data() {
    return {
      dbData: null,
      addData: {
        webName: "New Site",
        favicon: "img/add.png"
      }
    };
  },
  props: {
    typekind: String
  },
  computed: {
    tk() {
      return this.$store.state.typekind;
    }
  },
  watch: {
    // 监听this.$store.state.typekind，还要computed配合
    tk(val) {
      this.$store.state.siteDb.then(res => {
        if (val === "type") {
          this.dbData = res.filter(item => {
            // 领域分类
            return item.webType === this.typekind;
          });
        } else {
          this.dbData = res.filter(item => {
            // 性质分类
            return item.webKind === this.typekind;
          });
        }
      });
    }
  },
  methods: {
    drawer() {
      this.$store.commit("fm_cg_live2d", false);
      window.document.documentElement.setAttribute("data-live2d", false);
      this.$store.state.drawerSite = true;
    }
  },
  mounted() {
    this.$store.state.siteDb.then(res => {
      // 前端筛选，但这里要解决一下所以组件同步加载的问题
      // 还要解决一下v-for循环不显示组件的问题（官方不推荐v-for和v-if一起用）
      if (this.$store.state.typekind === "type") {
        this.dbData = res.filter(item => {
          // 领域分类
          return item.webType === this.typekind;
        });
      } else {
        this.dbData = res.filter(item => {
          // 性质分类
          return item.webKind === this.typekind;
        });
      }
    });
  }
};
</script>

<style lang="scss">
.siteConta {
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  // justify-content: left;
  justify-content: center;
}
// .add {
//   width: 178px;
//   height: 70px;
//   margin: 9px 8px;
//   background-color: #fff;
// }
.null {
  // 防止最后一行居中
  width: 178px;
  height: 0px;
  margin: 0 8px;
}
</style>