function checkurl(rul) {  // 异步，可能不可行
  var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  xmlhttp.open("GET", url, false);
  xmlhttp.send();
  if (xmlhttp.readyState == 4) {
    if (xmlhttp.Status != 200) alert("不存在");
    return xmlhttp.Status == 200;
  }
  return false;
}

export default function findFavicon(url) {
  let m = url.match(/h(.*?)\/\/(.*?)\//)
  if (m) { // 后面有'/'
    url = m[0]
    url += 'favicon.ico'
  } else {
    url += '/favicon.ico'
  }
  return url
}