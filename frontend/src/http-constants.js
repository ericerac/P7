import axios from 'axios'

let baseURL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = 'http://127.0.0.1/'
} else {
  baseURL = 'http://49.13.3.226:3000'
}

export const HTTP = axios.create(
  {
    baseURL: baseURL
  })