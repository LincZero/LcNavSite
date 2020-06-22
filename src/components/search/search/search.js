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
  switch (reCommand) { // 判断指令类型
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
        let url = null
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