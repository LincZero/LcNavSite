<template>
  <!--With Async SuggestDisplay-->
  <div @keydown="handleKey($event)" :class="{'searchAsync':true,'tab':$store.state.inputLock}">
    <el-autocomplete
      style="margin-top:4px;width:220px"
      ref="search"
      size="small"
      popper-class="autocomplete"
      class="inline-input"
      v-model="state"
      prefix-icon="el-icon-search"
      :fetch-suggestions="querySearchAsync"
      :placeholder="placeholder"
      :trigger-on-focus="false"
      @select="handleSelect"
      @change="handleChange"
      clearable
    >
      <template slot-scope="{ item }">
        <div class="left">
          <img v-lazy="item.favicon" alt="Erroe" />
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
export default {
  name: "SearchAsync",
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null,
      allowKey: true
    };
  },
  computed: {
    placeholder() {
      return this.$store.state.abroad ? "谷歌搜索" : "百度搜索";
    },
    siteDb() {
      return this.$store.state.siteDb;
    }
  },
  watch: {
    // siteDb会被abroad重置，从而重置这里的备选项目
    siteDb(val) {
      val.then(res => {
        this.restaurants = res;
      });
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
      this.allowKey = false; // 阻止回车搜索
      request({
        url: "/nav/site/clickRate",
        params: {
          id: item.id
        }
      });
      if (this.$store.state.Lock && item.hrefSlash) {
        // 若有锁存内容且网站可搜索，则搜索锁存内容
        window.open(item.hrefSlash + this.$store.state.Lock);
      } else {
        window.open(item.href);
      }
    },
    handleChange(input) {
      // 失去焦点或回车
      searchEvent(this);
    },
    handleKey(event) {
      if (this.allowKey) {
        // 键盘事件
        searchEvent(this, event);
        setTimeout(() => {
          this.$refs.search.$el.children[0].children[0].focus();
        }, 150); // 这里的重新聚焦有点问题，Tab默认会跳转到下一个表单元素中，如果不延迟会聚焦失败
      } else {
        // 若回车选择网站，则锁按键并进入按键事件进行解锁
        this.allowKey = true;
      }
    }
  },
  mounted() {
    this.siteDb.then(res => {
      // 拿到异步数据库对象
      if (res.length === 0) {
        // 超时未避免报错这里返回了空数组，这里为catch判断
        this.$message({
          message: "网站资源库加载超时",
          type: "warning"
        });
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
  ul {
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
}
.searchAsync.tab .el-input__inner {
  border-color: $color-el-green !important;
}
</style>
