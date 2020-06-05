<template>
  <div class="searchEngine">
    <select id>
      <option value>网页引擎</option>
      <option value>学术引擎</option>
      <option value>web引擎</option>
      <option value>博客引擎</option>
      <option value>设计引擎</option>
      <option value>三维引擎</option>
      <option value>视频引擎</option>
      <option value>音乐引擎</option>
      <option value>翻译引擎</option>
      <option value>自定义</option>
      <option value>更多...</option>
    </select>
    <ul>
      <button type="submit" onclick="engineChoice('baidu')" style="background-color: #3388FF">
        <span style="color:white">百度</span>
      </button>
      <button type="submit" onclick="engineChoice('google')">
        <span style="color:#4285F4">G</span>
        <span style="color:#EA4335">o</span>
        <span style="color:#FBBC05">o</span>
        <span style="color:#4285F4">g</span>
        <span style="color:#34A853">l</span>
        <span style="color:#EA4335">e</span>
      </button>
      <button type="submit" onclick="engineChoice('wikipedia')" style="background-color:#F6F6F6">
        <span style="color:black">维基</span>
      </button>
      <button type="submit" onclick="engineChoice('bing')" style="background-color: #0C8484">
        <span style="color:white">必应</span>
      </button>
      <button type="submit" onclick="engineChoice('zhihu')" style="background-color: #0E88EB">
        <span style="color:white">知乎</span>
      </button>
      <button type="submit" onclick="engineChoice('sogo')" style="background-color:#FF8F2E">
        <span style="color:white">搜狗</span>
      </button>
      <button type="submit" onclick="engineChoice('google')">
        <span style="color:#4285F4">G</span>
        <span style="color:#EA4335">o</span>
        <span style="color:#FBBC05">o</span>
        <span style="color:#4285F4">g</span>
        <span style="color:#34A853">l</span>
        <span style="color:#EA4335">e</span>
        <span style="color:#FBBC05">高级</span>
      </button>
      <button type="button" onclick="inputTranslate(this)">搜索前翻译</button>
    </ul>
  </div>
</template>
<style lang="scss">
.searchEngine {
  width: 900px;
  height: 40px;
  line-height: 40px;
  * {
    float: left;
  }
  select {
    height: 30px;
    margin-bottom: 6px;
    margin-right: 10px;
    font-size: 15px;
    border: none;
    border-radius: 15px;
    padding: 0 10px 0;
  }
  ul {
    width: auto;
    margin: 0;
  }
  ul button {
    height: 30px;
    border: none;
    font-size: 15px;
    font-weight: bold;
    border-radius: 15px;
    padding: 0 10px 0;
    margin-right: 10px;
  }
}
.searchEngine button {
  color: white;
  background-color: #404040;
}
.searchEngine button:last-child {
  background-color: #dcb374;
}
</style>