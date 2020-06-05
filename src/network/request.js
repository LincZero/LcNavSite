import axios from 'axios'
export function request(config) {
  const instance1 = axios.create({
    baseURL: 'http://127.207.32.32:8000',
    timeout: 5000
  })
  instance1(config).then(res => {
    console.log(res);
  })
}