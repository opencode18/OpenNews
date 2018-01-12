const app = new Vue({
  el: '#app',
  data: {
    messages: [],
    articles: [],
    hackers: [],
    crypto: [],
    techradar: [],
    web: [],
    wired: [],
    new_scientist: [],
    talksport: [],
    recode: []
  },
  created() {
    fetch('https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=c4df6c22455b4179861eb40cd6e02aba')
      .then(response => response.json())
      .then(json => {
        this.hackers = json.articles
      })

    fetch('https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=c4df6c22455b4179861eb40cd6e02aba')
      .then(response => response.json())
      .then(json => {
        this.techradar = json.articles
      })

    fetch('https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=c4df6c22455b4179861eb40cd6e02aba')
      .then(response => response.json())
      .then(json => {
        this.crypto = json.articles
      })

    fetch('https://newsapi.org/v2/top-headlines?sources=recode&apiKey=c4df6c22455b4179861eb40cd6e02aba')
      .then(response => response.json())
      .then(json => {
        this.recode = json.articles
      })

    fetch('https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey=c4df6c22455b4179861eb40cd6e02aba')
      .then(response => response.json())
      .then(json => {
        this.web = json.articles
      })
    fetch('https://newsapi.org/v2/top-headlines?sources=wired&apiKey=3b8ddf82272448b78af730765191fdfa')
      .then(response => response.json())
      .then(json => {
        this.wired = json.articles
      })
    fetch('https://newsapi.org/v2/top-headlines?sources=new-scientist&apiKey=3b8ddf82272448b78af730765191fdfa')
      .then(response => response.json())
      .then(json => {
        this.new_scientist = json.articles
      })
    fetch('https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=3b8ddf82272448b78af730765191fdfa')
      .then(response => response.json())
      .then(json => {
        this.talksport = json.articles
      })
  }
})