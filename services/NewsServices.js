import axios from 'axios'

const apiClient1 = axios.create({
  baseURL: `https://newsapi.org/v2/sources?apiKey=2697f86cc03243e0ba8252e2bc35096f`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
const apiClient2 = axios.create({
  baseURL: `https://restcountries.eu/rest/v2/all`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  showArticles() {
    return apiClient1.get().then((response) => {
      return response.data.sources
    })
  },
  showCountries() {
    return apiClient2.get().then((response) => {
      return response.data
    })
  }
}
