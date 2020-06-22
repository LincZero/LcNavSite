import {
  request
} from "@/network/request";
// _this用于打印信息
export default function submitSite(submitData, _this) {
  // 前端校验
  if (submitData.up === "demo" && submitData.password === "demo") { // 游客，不允许提交“游客禁填”
    submitData.command = null
    submitData.ban = 0
    _this.$message.info('正在提交...');
    return request({
      url: "/nav/site/insert",
      params: submitData
    })
  } else {
    _this.$message.error('请输入正确的账户和密码');
  }
}
