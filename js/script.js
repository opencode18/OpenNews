let i=1;
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
    recode: [],
    buzzfeed: []
  },
  created() {
    fetch('https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=c4df6c22455b4179861eb40cd6e02aba')
      .then(response => response.json())
      .then(json => {
        this.hackers = json.articles;
        for (i=1;i<=5;i++){
            if (this.hackers[i].urlToImage===null){
                this.hackers[i].urlToImage = "images/hacker_news.jpg";
            }
        }
      });

    fetch('https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=c4df6c22455b4179861eb40cd6e02aba')
      .then(response => response.json())
      .then(json => {
        this.techradar = json.articles;
        for (i=1;i<=5;i++){
            if (this.techradar[i].urlToImage===null){
                this.techradar[i].urlToImage = "images/tech_radar.png";
            }
        }
      });

    fetch('https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=c4df6c22455b4179861eb40cd6e02aba')
      .then(response => response.json())
      .then(json => {
        this.crypto = json.articles;
        for (i=1;i<=5;i++){
            if (this.crypto[i].urlToImage===null){
                this.crypto[i].urlToImage = "images/the_verge.png";
            }
        }
      });

    fetch('https://newsapi.org/v2/top-headlines?sources=recode&apiKey=c4df6c22455b4179861eb40cd6e02aba')
      .then(response => response.json())
      .then(json => {
        this.recode = json.articles;
        for (i=1;i<=5;i++){
            if (this.recode[i].urlToImage===null){
                this.recode[i].urlToImage = "images/recode.png";
            }
        }
      });
      
    fetch('https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey=c4df6c22455b4179861eb40cd6e02aba')
      .then(response => response.json())
      .then(json => {
        this.web = json.articles;
        for (i=1;i<=5;i++){
            if (this.web[i].urlToImage===null){
                this.web[i].urlToImage = "images/the_next_web.png";
            }
        }
      });
      
    fetch('https://newsapi.org/v2/top-headlines?sources=wired&apiKey=3b8ddf82272448b78af730765191fdfa')
      .then(response => response.json())
      .then(json => {
        this.wired = json.articles;
        for (i=1;i<=5;i++){
            if (this.wired[i].urlToImage===null){
                this.wired[i].urlToImage = "images/wired.png";
            }
        }
      });
      
    fetch('https://newsapi.org/v2/top-headlines?sources=new-scientist&apiKey=3b8ddf82272448b78af730765191fdfa')
      .then(response => response.json())
      .then(json => {
        this.new_scientist = json.articles;
        for (i=1;i<=5;i++){
            if (this.new_scientist[i].urlToImage===null){
                this.new_scientist[i].urlToImage = "images/new_scientist.png";
            }
        }
      });
      
    fetch('https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=3b8ddf82272448b78af730765191fdfa')
      .then(response => response.json())
      .then(json => {
        this.talksport = json.articles;
        for (i=1;i<=5;i++){
            if (this.talksport[i].urlToImage===null){
                this.talksport[i].urlToImage = "images/talksport.png";
            }
        }
      });
      
    fetch('https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=3b8ddf82272448b78af730765191fdfa')
      .then(response => response.json())
      .then(json => {
        this.buzzfeed = json.articles;
        for (i=1;i<=5;i++){
            if (this.buzzfeed[i].urlToImage===null){
                this.buzzfeed[i].urlToImage = "images/buzzfeed.jpg";
            }
        }
      });
  }
    
});

