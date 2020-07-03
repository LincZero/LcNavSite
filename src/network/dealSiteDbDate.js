import findFavicon from "@/common/findFavicon.js";

export default function dealSiteDbDate(siteDb) {
  let siteDb2 = siteDb
    .filter(item => { // ban掉屏蔽项
      return item.ban !== 1
    })
    .map(item => { // 处理图标
      if (!item.favicon) {
        item.favicon = findFavicon(item.href);
      }
      return item;
    });
  for (let obj of siteDb2) {
    obj.value = obj.webName
  }
  return siteDb2
}