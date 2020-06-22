export default function dealSiteDbDate(siteDb) {
  let siteDb2 = siteDb.filter((item) => { // ban掉屏蔽项
    return item.ban !== 1
  })
  for (let obj of siteDb2) {
    obj.value = obj.webName
  }
  return siteDb2
}