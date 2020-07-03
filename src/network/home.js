import {
  request
} from "@/network/request";
import dealSiteDbDate from "@/network/dealSiteDbDate.js"

export function fn_siteDbPromise() { // 最终返回Promise对象
  console.log("[home请求次数校验]")
  return request({
      url: "/nav/site"
    })
    .then(res => {
      if(res==="err"){
        console.error('[SERVER ERROR]')
        return(null)
      }
      res = dealSiteDbDate(res.data)
      return new Promise((resolve, reject) => {
        resolve(res)
      })
    })
    .catch(err => {
      console.error('请求资源超时')
      return new Promise((resolve, reject) => {
        resolve([])
      })
    })
}

// 必须导出一个对象而非导出一个函数，不然会重复请求
// 两个搜索框的建议数据、网页内容块、搜索时搜索指令、四个地方都用到、重复请求开销太大。
const siteDbPromise = fn_siteDbPromise(); // 这个Promise对象给Vuex，不用每次都需要导入js
export default siteDbPromise