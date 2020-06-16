<template>
  <div class="footereach">
    <p>
      <span>“</span>
      {{eachData}}
      <span>”</span>
    </p>
  </div>
</template>

<script>
let allData = [
  "该网页用1080p/2k屏显示效果最佳 √ ",
  "站长还是单身呦，欢迎妹子私（喂喂喂，站长你要脸不）",
  "该网页不专门对IE进行适配，开发调试使用FireFox、Google浏览器",
  "嫌网站内容不够多？快点左下角进群和大家一起进行内容补充吧！",
  "你真的不考虑一下给站长买杯饮料赞助一下吗？点击左侧进行赞助哟~",
  "Lc导航，搜索从未如此便捷！ [广告语]"
];
export default {
  computed: {
    eachData() {
      let len = allData.length
      let index = Math.floor(Math.random() * (len)); // 随机后向下取整
      return allData[index]
    }
  }
};
</script>

<style lang="scss">
.footereach {
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar{
    display: none;
  }
}
</style>
