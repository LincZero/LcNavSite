<template>
  <!-------------------------------------------------搜索部分--------------------------------------------------------->
  <div class="search">
    <!-------------------------------------------------搜索部分2--------------------------------------------------------->
    <div class="searchInput">
      <select id>
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
      <input type="hidden" />
      <input type="text" placeholder="输入内容，回车进行ai智能搜索" />
      <button type="button">Ai Search</button>
    </div>
  </div>
</template>

<style lang="scss">
.search {
  width: 900px;
  margin: 0 auto 0;///////////
  div {
    margin: 0 auto;
  }
}
.searchInput {
  height: 50px;
  width: 900px;
  box-sizing: border-box;
  border: 0;
  margin: 0;
  position: relative;
  select {
    height: 50px;
    width: 60px;
    padding-left: 12px;
    box-sizing: border-box;
    line-height: 50px;
    font-size: 15px;
    background-color: white;
    border: none;
    border-right: 1px #ddd solid;
    border-radius: 10px 0 0 10px;
    position: absolute;
    left: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; /*去掉下拉箭头*/
  }
  input[type="text"] {
    height: 50px;
    width: 740px;
    box-sizing: border-box;
    font-size: 18px;
    border: none;
    padding-left: 10px;
    padding-right: 0;
    margin: 0;
    position: absolute;
    left: 60px;
  }
  button {
    height: 50px;
    width: 100px;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 50px;
    border: none;
    border-left: 1px #aaa solid;
    border-radius: 0 10px 10px 0;
    padding: 0;
    margin: 0;
    position: absolute;
    left: 800px;
  }
}
/*********************************颜色管理器DCAB74,黑#505050*********************************/
/*应该设置无内容时ai search为灰色*/
.searchInput button {
  background-color: #dca374;
  color: white;
}
.searchExpert input[type="button"] {
  background-color: #dca374;
  color: white;
}
</style>
