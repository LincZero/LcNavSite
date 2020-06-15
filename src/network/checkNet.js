import axios from 'axios'
export default function checkNet(callback) {
  axios({
    url: 'https://www.youtube.com/',
    timeout: 2000
  }).then(res => {
    callback(true)
  }).catch(err => {
    err = String(err)
    console.log('edata -', err)
    if(err.indexOf("Network Error")+1) {
      callback(true)
    } else if(err.indexOf("timeout of")+1) {
      callback(false)
    } else {
      callback(false)
    }
  })
}