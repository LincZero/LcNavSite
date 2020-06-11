<template>
  <!--With Async SuggestDisplay-->
  <div @keydown="handleKey($event)">
    <el-autocomplete
      style="margin-top:4px;width:220px"
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
import { dealDbDate } from "@/components/search/autocomplete/autocomplete.js";
import search from "@/components/search/search/search.js";
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
    loadAll() {
      return request({
        url: "/nav/site"
      });
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;
      // clearTimeout(this.timeout);
      cb(results);
      // this.timeout = setTimeout(() => {
      //   cb(results);
      // }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      window.open(item.href);
    },
    handleChange(input) {
      
    },
    handleKey(event) {
      var evt = window.event || e;
      if (evt.keyCode === 13) {
        search(this.state, (input) => {
          this.state = input
        });
      }
    }
  },
  mounted() {
    this.loadAll().then(res => {
      this.restaurants = dealDbDate(res.data);
    });
    // this.restaurants = this.loadAll();
  }
};
</script>

<style lang="scss">
.autocomplete {
  // popper-class才是
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
</style>
