<template>
  <!--With Async SuggestDisplay-->
  <div
    @keydown="handleKey($event)"
    :class="{'searchAsync':true,'home':true,'tab':this.$store.state.inputLock}"
  >
    <el-autocomplete
      style="width:850px"
      ref="homeSearch"
      popper-class="autocomplete"
      class="inline-input"
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      :placeholder="placeholder"
      :trigger-on-focus="false"
      @select="handleSelect"
      @change="handleChange"
    >
      <template slot-scope="{ item }">
        <div class="left">
          <img :src="item.favicon" alt="Erroe" />
        </div>
        <div class="right">
          <div>{{ item.value }}</div>
          <span>{{ item.href }}</span>
        </div>
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
import { request } from "@/network/request";
import searchEvent from "@/components/search/search/searchEvent.js";
import siteDbPromise from "@/network/home.js";
export default {
  name: "SearchAsync",
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null
    };
  },
  computed: {
    placeholder() {
      return this.$store.state.abroad ? "谷歌搜索" : "百度搜索";
    }
  },
  methods: {
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;
      cb(results);
    },
    createStateFilter(queryString) {
      return state => {
        return (
          // state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0 // 匹配开头相同
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) >= 0 // 匹配包含
        );
      };
    },

    handleSelect(item) {
      request({
        url: "/nav/site/clickRate",
        params: {
          id: item.id
        }
      });
      if (this.$store.state.inputLock && item.hrefSlash) {
        // 若有锁存内容且网站可搜索，则搜索锁存内容
        window.open(item.hrefSlash + this.$store.state.inputLock);
      } else {
        window.open(item.href);
      }
    },
    handleChange(input) {
      // 失去焦点或回车
      searchEvent(this);
    },
    handleKey(event) {
      // 键盘事件
      searchEvent(this, event);
      setTimeout(() => {
        this.$refs.homeSearch.$el.children[0].children[0].focus();
      }, 150); // 这里的重新聚焦有点问题，如果不延迟会聚焦失败
    }
  },
  mounted() {
    this.$refs.homeSearch.$el.children[0].children[0].focus(); // 手动聚焦
    siteDbPromise().then(res => {
      // 拿到异步数据库对象
      if (!this.$store.state.abroad) { // 但有BUG，初始这里使用的是初始abroad
        this.restaurants = res.filter((item) => {return !item.abroad});
      } else {
        this.restaurants = res;
      }
    });
  }
};
</script>

<style lang="scss">
.autocomplete {
  // popper-class才是定义class的，class是其他作用
  li {
    line-height: normal;
    padding: 7px;
    display: flex;
    .left {
      margin-right: 8px;
      img {
        height: 28px;
        width: 28px;
      }
    }
    .right {
      width: auto;
      overflow: hidden;
      div {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      span {
        font-size: 12px;
        color: #b4b4b4;
      }
      .highlighted .span {
        color: #ddd;
      }
    }
  }
}
.searchAsync.home {
  // 大搜索框独占，以免干扰另一个
  .el-input__inner {
    height: 46px;
    font: 16px arial, sans-serif;
    box-shadow: 0 0 2px $color-shadow;
    border-radius: 18px;
  }
}
.searchAsync.tab .el-input__inner {
  border-color: $color-el-green !important;
}
</style>
