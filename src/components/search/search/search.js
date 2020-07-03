import store from '@/store/index.js'

import {
  request
} from "@/network/request.js";

// 正则提取指令
function reg(input) {
  let m = input.match(/(.*?) -(.*)/)
  return m // m[0]是整个原始input，若无匹配m返回null
}

// 反向代理翻译
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

export default function search(input, _this) {
  let abroad = store.state.abroad
  let m = reg(input)
  let reConta = null
  let reCommand = null
  if (!m) { // 无指令时，使用默认指令
    reConta = input
    reCommand = abroad ? 'gg' : 'bd'
  } else { // 有指令时使用指令
    reConta = m[1]
    reCommand = m[2]
  }

  switch (reCommand) { // 判断指令类型/默认指令
    case 'bd': // 虽然数据库有该指令，但要防止无法连接时搜索框不能用的问题
      let bdurl = reConta ? ('https://www.baidu.com/s?wd=' + reConta) : 'https://www.baidu.com/'
      window.open(bdurl) // 注意这里的let在switch里没作用域
      break;
    case 'gg': // 虽然数据库有该指令，但要防止无法连接时搜索框不能用的问题
      let ggurl = reConta ? ('https://www.google.com.hk/search?q=' + reConta) : 'https://www.google.com.hk/'
      window.open(ggurl) // 注意这里的let在switch里没作用域
      break;
    case 't':
      translate(reConta).then(res => {
        _this.state = res.data;
        _this.$store.commit("fm_cg_input", res.data);
      });
      break;

    case 'c':
      _this.state = '';
      _this.$store.commit("fm_cg_input", '');
      break;

    default: // 在数据库Promise对象中匹配带指令的网站
      _this.$store.state.siteDb.then(res => {
        let url = null // 开关变量，数据库有无匹配项，无则空
        for (let item of res) {
          if (reCommand === item.command) {
            url = reConta ? (item.hrefSlash + reConta) : item.href
            break;
          }
        }
        if (url) { // 数据库对象中有匹配
          window.open(url)
        } else {
          console.log("指令错误")
        }
      })
      break;

  }

}