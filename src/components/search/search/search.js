import store from '@/store/index.js'
import {
  request
} from "@/network/request.js";

function reg(input) {
  let m = input.match(/(.*?) -(.*)/)
  return m
}

function translate(q) {
  return request({
    url: "/translate",
    params: {
      // api: 'baidu',
      api: 'baidu',
      q: q
    }
  })
}

export default function search(input, callback) {
  let abroad = store.state.abroad
  let m = reg(input)
  if (!m) {
    let googleurl = 'https://www.google.com.hk/search?q='
    let baiduurl = 'https://www.baidu.com/baidu?wd='
    let url = abroad ? googleurl : baiduurl
    window.open(url + String(input))
  } else {
    let reStr = m[2]
    if (reStr === 't') {
      translate(m[1]).then(res => {
        callback(res.data);
      });
    } else {
      console.log("语法错误")
    }
  }
}
