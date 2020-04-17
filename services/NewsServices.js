import axios from 'axios'

const apiNews = axios.create({
  baseURL: `https://newsapi.org/v2/sources?${process.env.APIKEY}`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
const apiCountries = axios.create({
  baseURL: `https://restcountries.eu/rest/v2/all`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
export default {
  showArticles() {
    return apiNews.get().then((response) => {
      return response.data.sources
    })
  },
  showCountries() {
    return apiCountries.get().then((response) => {
      return response.data
    })
  },
}
