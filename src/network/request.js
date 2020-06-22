import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8002',
    // baseURL: 'http://94.191.75.224:8002',
    timeout: 8000
  })
  return instance(config)
}
