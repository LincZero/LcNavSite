<template>
  <div>
    <el-autocomplete
      class="inline-input"
      v-model="state"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    >
    </el-autocomplete>
  </div>
</template>

<script>
import { request } from "@/network/request";
import { dealDbDate } from "@/common/search/search/completeData.js";
export default {
  name: "SearchS",
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null
    };
  },
  methods: {
    loadAll() {
      return request({
        url: "/nav/site"
      });
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;
      cb(results);
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
    }
  },
  mounted() {
    this.loadAll().then(res => {
      this.restaurants = dealDbDate(res.data);
    });
  }
};
</script>
