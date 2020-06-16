<template>
  <div class="searchToolSet">
    <ul>
      <p>LcNav内置</p>
      <button>百度翻译</button>
      <button>有道翻译</button>
      <button>锁存</button>
      <button>站外搜索</button>
      <button>清空</button>
    </ul>
    <ul>
      <p>关键词匹配</p>
      <button>完整匹配</button>
      <button>并行匹配</button>
      <button>搜索排除</button>
      <button>包含搜索</button>
      <button>关键词位置</button>
    </ul>
    <ul>
      <p>通用过滤器</p>
      <button>更新时间</button>
      <button>文档格式</button>
      <button>指定网站</button>
    </ul>
    <ul>
      <p>谷歌过滤器</p>
      <button>数值区间</button>
      <button>指定语言结果</button>
      <button>指定地区</button>
      <button>安全搜索开关</button>
      <button>网站版权</button>
    </ul>
  </div>
</template>

<script>
export default {
  name:"SearchToolSet",
  methods:{

  }
}
</script>

<style lang="scss">
.searchToolSet {
  box-sizing: border-box;
  width: 850px;
  height: 300px;
  margin: 10px auto 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #DCDFE6;
  box-shadow: 0 0 2px #cccccc;
  border-radius: 18px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  &:hover {
    border: 1px solid #c0c4cc;
  }
  ul {
    display: block;
    clear: both;
    height: 30px;
    margin-bottom: 10px;
  }
  button {
    float: left;
    margin-left: 20px;;
  }
}
</style>