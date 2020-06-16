<template>
  <div class="home">
    <div>
      <Search></Search>
      <div class="advanced">
        <a @click="$router.replace('/engine')">高级模式</a>
        <a @click="$router.replace('/site')">网站模式</a>
        <a @click="$router.replace('/bili')">B站模式</a>
        <a @click="diyWindow=true">
          <i class="el-icon-circle-plus-outline"></i>
        </a>
        <a @click="editable=!editable" :class="{'green':editable}" style="margin-left:0px">
          <i :class="editable?'el-icon-circle-check':'el-icon-remove-outline'"></i>
        </a>
        <a style="margin-left:0px">
          <i class="el-icon-s-operation"></i>
        </a>
        <a v-show="$store.state.inputLock">锁存内容：{{$store.state.inputLock}}</a>
      </div>
      <div class="shortcutConta" style="margin-top:15px">
        <ShortcutItem
          v-for="(item, index) in diy"
          :key="index"
          :index="index"
          :item="item"
          :editable="editable"
          @deleteDiy="deleteDiy"
        ></ShortcutItem>
      </div>
      <SearchToolSet></SearchToolSet>
    </div>
    <div v-if="diyWindow">
      <NewShortcut @cancel="cancel" @addDiy="addDiy"></NewShortcut>
    </div>
  </div>
</template>

<script>
let textData = [
  {
    webName: "Pixiv(P站)2",
    favicon: "img/Pixiv.ico",
    href: "https://www.pixiv.net/",
    hrefSlash: null
  },
  {
    webName: "2223",
    favicon: "img/Pixiv.ico",
    href: "https://www.pixiv.net/",
    hrefSlash: null
  }
];
export default {
  name: "Home",
  components: {
    Search: () => import("@/components/search/easy/HomeSearchAsync.vue"),
    SearchToolSet: () => import("@/components/search/tool/SearchToolSet.vue"),
    ShortcutItem: () => import("@/views/home/ShortcutItem.vue"),
    NewShortcut: () => import("@/views/iframe/NewShortcut.vue")
  },
  data() {
    return {
      textData: null,
      diy: {},
      diyWindow: false,
      editable: false
    };
  },
  computed: {},
  methods: {
    // storageSet() {
    //   if (typeof Storage !== "undefined") {
    //     localStorage.setItem("diySite", JSON.stringify(textData)); // .diySite赋值也行
    //   } else {
    //     console.log("[Error - Storage] 您的浏览器不支持");
    //   }
    // },
    // storageGet() {
    //   if (typeof Storage !== "undefined") {
    //     this.diy = JSON.parse(localStorage.getItem("diySite")); // .diySite获取也行
    //     console.log(this.diy);
    //   } else {
    //     console.log("[Error - Storage] 您的浏览器不支持");
    //   }
    // },
    addDiy(newData) {
      this.diy ? this.diy.push(newData) : (this.diy = [newData]);
      localStorage.setItem("diySite", JSON.stringify(this.diy));
      this.diyWindow = false;
    },
    cancel() {
      this.diyWindow = false;
    },
    deleteDiy(index) {
      this.diy ? this.diy.splice(index, 1) : {};
      localStorage.setItem("diySite", JSON.stringify(this.diy));
    }
  },
  created() {
    if (localStorage.getItem("diySite")) {
      // 如果之前自定义过网站（本地存储过数据）
      this.diy = JSON.parse(localStorage.getItem("diySite"));
    }
  }
};
</script>

<style lang="scss">
.home {
  margin-top: 160px;
  .advanced {
    margin-top: 30px;
    a {
      margin: 0 15px;
      color: $color-pink;
    }
  }
}

.shortcutConta {
  width: 720px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.green {
  color: #67c23a !important;
}
// .v-enter,
// .v-leave-to {
//   // opactity: 0;
//   transform: translateZ(-200px);
// }
// .v-enter-active,
// .v-leave-active {
//   transition: all 0.4s ease;
// }
</style>
