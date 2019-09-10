import NewsServices from '@/services/NewsServices.js'

export const state = () => ({
  articles: [],
  restTotal: [],
  articleTotal: 0,
  perPage: 3
})
export const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
  ADD_REST_COUNTRIES(state, restTotal) {
    state.restTotal = restTotal
  },
  SET_ARTICLES_TOTAL(state, articleTotal) {
    state.articleTotal = articleTotal
  }
}
export const actions = {
  getAllArticles({ commit }) {
    NewsServices.showArticles()
      .then((response) => {
        commit('SET_ARTICLES', response)
        commit('SET_ARTICLES_TOTAL', response.length)
      })
      .catch((error) => {
        /* eslint-disable no-console */
        console.log('There was an error:', error.response)
      })
  },
  getAllRestCountries({ commit }) {
    NewsServices.showCountries().then((response) => {
      commit('ADD_REST_COUNTRIES', response)
    })
  }
}

export const getters = {
  getArticleById: (state) => (id) => {
    return state.articles.find((article) => article.id === id)
  },
  getArticleByCategory: (state) => (category) => {
    return state.articles.filter((article) => {
      return article.category.includes(category)
    })
  },
  extractOutCategory: (state, getters) => (id) => {
    return getters.filterCategory.filter((item) => {
      return item !== id
    })
  },
  filterCategory: (state) => {
    const categories = []
    for (let i = 0; i < state.articles.length; i++) {
      categories.push(state.articles[i].category)
    }
    return categories.filter(
      (category, index) => categories.indexOf(category) === index
    )
  },
  artclCountry: (state) => {
    let countries = []
    for (let i = 0; i < state.articles.length; i++) {
      countries.push(state.articles[i].country)
    }
    countries = countries.filter(
      (category, index) => countries.indexOf(category) === index
    )
    return countries.map(function(e) {
      return e.toUpperCase()
    })
  },
  artclLanguage: (state) => {
    const languages = []
    for (let i = 0; i < state.articles.length; i++) {
      languages.push(state.articles[i].language)
    }
    return languages.filter(
      (language, index) => languages.indexOf(language) === index
    )
  },
  restAlpha2: (state) => {
    const res = []
    for (let i = 0; i < state.restTotal.length; i++) {
      res.push(state.restTotal[i].alpha2Code)
    }
    return res.filter((item, index) => res.indexOf(item) === index)
  },
  restLang: (state) => {
    const res = []

    for (let i = 0; i < state.restTotal.length; i++) {
      res.push(state.restTotal[i].languages)
    }
    const ress = []
    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j < res[i].length; j++) {
        ress.push(res[i][j])
      }
    }
    return ress
  },
  getAllL: (state, getters) => {
    const matchingLangs = []
    for (let i = 0; i < getters.restLang.length; i++) {
      for (let j = 0; j < getters.artclLanguage.length; j++) {
        if (getters.restLang[i].iso639_1 === getters.artclLanguage[j]) {
          matchingLangs.push(getters.restLang[i].name)
        }
      }
    }
    return matchingLangs.filter(
      (item, index) => matchingLangs.indexOf(item) === index
    )
  },
  getAllC: (state, getters) => {
    const matchingCountries = []
    for (let i = 0; i < getters.restAlpha2.length; i++) {
      for (let j = 0; j < getters.artclCountry.length; j++) {
        if (getters.restAlpha2[i] === getters.artclCountry[j]) {
          matchingCountries.push(state.restTotal[i].name)
        }
      }
    }
    return matchingCountries
  },
  getArticleBy3: (state, getters) => (category, country, language) => {
    if (country && language) {
      const b = getters.restLang.findIndex((i) => i.name === language)
      language = getters.restLang[b].iso639_1

      const a = state.restTotal.findIndex((i) => i.name === country)
      country = state.restTotal[a].alpha2Code.toLowerCase()

      return state.articles.filter((article) => {
        return (
          article.category.includes(category) &&
          article.country.includes(country) &&
          article.language.includes(language)
        )
      })
    } else if (country) {
      const a = state.restTotal.findIndex((i) => i.name === country)
      country = state.restTotal[a].alpha2Code.toLowerCase()
      return state.articles.filter((article) => {
        return (
          article.category.includes(category) &&
          article.country.includes(country)
        )
      })
    } else if (language) {
      const b = getters.restLang.findIndex((i) => i.name === language)
      language = getters.restLang[b].iso639_1
      return state.articles.filter((article) => {
        return (
          article.category.includes(category) &&
          article.country.includes(country)
        )
      })
    } else {
      return getters.getArticleByCategory(category)
    }
  },
  getPage: (state) => {
    return state.articleTotal
  }
}
