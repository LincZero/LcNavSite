import {
  request
} from "@/network/request";
import dealSiteDbDate from "@/network/dealSiteDbDate.js"

export default function siteDbPromise() { // 最终返回Promise对象
  console.log("[home请求次数校验]")
  return request({
      url: "/nav/site"
    })
    .then((res) => {
      if(res==="err"){
        console.error('[SERVER ERROR]')
        return(null)
      }
      res = dealSiteDbDate(res.data)
      return new Promise((resolve, reject) => {
        resolve(res)
      })
    })
}
