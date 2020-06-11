<template>
  <div class="searchInput">
    <div class="left">
      <select>
        <option value="web">网页</option>
        <option value="pic">图片</option>
        <option value="muise">音乐</option>
        <option value="video">视频</option>
        <option value="tieba">贴吧</option>
        <option value="zhidao">知道</option>
        <option value="news">新闻</option>
        <option value="map">地图</option>
        <option value="more">更多...</option>
      </select>
    </div>
    <div class="mid">
      <input type="text" :placeholder="placeholder" />
    </div>
    <div class="right">
      <button type="button">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name:"Search",
  components: {
    // SearchAsync: () => import("@/components/search/autocomplete/SearchAsync.vue")
  },
  computed: {
    placeholder() {
      return this.$store.state.abroad ? "谷歌搜索" : "百度搜索";
    }
  }
};
</script>

<style lang="scss">
$search-hei: 50px;
$search-wid: 900px;
$search-left-wid: 60px;
$search-right-wid: 100px;

.searchInput {
  height: $search-hei;
  width: $search-wid;
  box-sizing: border-box;
  border: 0;
  margin: 0 auto 0;
  display: flex;
  .left > select {
    height: $search-hei;
    width: $search-left-wid;
    box-sizing: border-box;
    padding-left: 12px;
    background-color: white;
    border: none;
    border-right: 1px #ddd solid;
    border-radius: 10px 0 0 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; /*去掉下拉箭头*/
    line-height: $search-hei;
    font-size: 15px;
  }
  .mid {
    flex: 1;
    > input {
      height: $search-hei;
      width: 100%;
      box-sizing: border-box;
      font-size: 18px;
      border: none;
      padding-left: 10px;
      padding-right: 0;
      margin: 0;
    }
  }
  .right > button {
    height: $search-hei;
    width: $search-right-wid;
    box-sizing: border-box;
    border: none;
    border-left: 1px #ddd solid;
    border-radius: 0 10px 10px 0;
    padding: 0;
    margin: 0;
    background-color: white;
    font-size: 18px;
    font-weight: normal;
    line-height: $search-hei;
  }
}
</style>
