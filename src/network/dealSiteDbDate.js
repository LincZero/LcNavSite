export default function dealSiteDbDate(siteDb) {
  for (let obj of siteDb) {
    obj.value = obj.webName
  }
  return siteDb
}
