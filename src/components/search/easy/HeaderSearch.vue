<template>
  <div id="headersearch">
    <el-input
      style="margin-top:4px;width:300px"
      :placeholder="placeholder"
      v-model="input"
      prefix-icon="el-icon-search"
      size="small"
      clearable
    >
    </el-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  computed: {
    placeholder() {
      return this.$store.state.abroad?"谷歌搜索":"百度搜索"
    }
  }
};
</script>