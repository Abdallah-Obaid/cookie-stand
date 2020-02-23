  
var branch = {
    name:'seattle',
    maxHourlyCustomers: 65,
    minHourlyCustomers: 23,
    avgCookiesPerCustomer: 6.3,
    randomcustumer: 0,
    numberCookiesBerHour:0,
    img:"https://pblog.dollar.com/wp-content/uploads/2018/06/img-article-2-48HRSSEATTLE.jpg",
    purchased:[],
    total:0,
    getTotalArray: function () {
        for (var i = 6; i< 20; i++) {
        this.randomcustumer = getRandomInt(this.minHourlyCustomers, this.maxHourlyCustomers);
        this.numberCookiesBerHour=Math.floor(this.randomcustumer * this.avgCookiesPerCustomer);
        this.purchased.push(this.numberCookiesBerHour);
        }
        console.log(this.purchased);
        return this.numberCookiesBerHour;
    },
    render : function(){
        var container = document.getElementById('cookies');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var imgEl = document.createElement('img');
        imgEl.setAttribute('src' , this.img);
        articleEl.appendChild(imgEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for(var i = 0 ; i < this.purchased.length  ; i++){

          this.total += this.purchased[i];
          var liEl = document.createElement('li');
          if (i < 6){
            liEl.textContent =  i+6 + "am: " + this.purchased[i] +" cookies";
          }else if (i === 6){
            liEl.textContent =  i+6 + "pm: " + this.purchased[i] +" cookies";
          }else{
            liEl.textContent =  (i+6-12) + "pm: " + this.purchased[i] +" cookies";
          }
          ulEl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = "Total: "+ this.total+" cookies";
        ulEl.appendChild(liEl);
      }
    }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
branch.getTotalArray();
branch.render();

var Tokyo = {
    name:'Tokyo',
    maxHourlyCustomers: 24,
    minHourlyCustomers: 3,
    avgCookiesPerCustomer: 1.2,
    randomcustumer: 0,
    numberCookiesBerHour:0,
    img:"https://res.cloudinary.com/duu3v9gfg/image/fetch/t_fit_1920/https://78884ca60822a34fb0e6-082b8fd5551e97bc65e327988b444396.ssl.cf3.rackcdn.com/up/2019/08/Mount-Fuji-1565615301-1565615301.jpg",
    purchased:[],
    total:0,
    getTotalArray: function () {
        for (var i = 6; i< 20; i++) {
        this.randomcustumer = getRandomInt(this.minHourlyCustomers, this.maxHourlyCustomers);
        this.numberCookiesBerHour=Math.floor(this.randomcustumer * this.avgCookiesPerCustomer);
        this.purchased.push(this.numberCookiesBerHour);
        }
        console.log(this.purchased);
        return this.numberCookiesBerHour;
    },
    render : function(){
        var container = document.getElementById('cookies');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var imgEl = document.createElement('img');
        imgEl.setAttribute('src' , this.img);
        articleEl.appendChild(imgEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for(var i = 0 ; i < this.purchased.length  ; i++){

          this.total += this.purchased[i];
          var liEl = document.createElement('li');
          if (i < 6){
            liEl.textContent =  i+6 + "am: " + this.purchased[i] +" cookies";
          }else if (i === 6){
            liEl.textContent =  i+6 + "pm: " + this.purchased[i] +" cookies";
          }else{
            liEl.textContent =  (i+6-12) + "pm: " + this.purchased[i] +" cookies";
          }
          ulEl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = "Total: "+ this.total+" cookies";
        ulEl.appendChild(liEl);
      }
    }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
Tokyo.getTotalArray();
Tokyo.render();
  
var Dubai = {
    name:"Dubai",
    maxHourlyCustomers: 38,
    minHourlyCustomers: 11,
    avgCookiesPerCustomer: 3.7,
    randomcustumer: 0,
    numberCookiesBerHour:0,
    img:"https://smemagazine.asia/en/wp-content/uploads/2019/04/20190408-SME-Magazine-Website-Dubai-Assisting-SME-Payment-Image.jpg",
    purchased:[],
    total:0,
    getTotalArray: function () {
        for (var i = 6; i< 20; i++) {
        this.randomcustumer = getRandomInt(this.minHourlyCustomers, this.maxHourlyCustomers);
        this.numberCookiesBerHour=Math.floor(this.randomcustumer * this.avgCookiesPerCustomer);
        this.purchased.push(this.numberCookiesBerHour);
        }
        console.log(this.purchased);
        return this.numberCookiesBerHour;
    },
    render : function(){
        var container = document.getElementById('cookies');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var imgEl = document.createElement('img');
        imgEl.setAttribute('src' , this.img);
        articleEl.appendChild(imgEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for(var i = 0 ; i < this.purchased.length  ; i++){

          this.total += this.purchased[i];
          var liEl = document.createElement('li');
          if (i < 6){
            liEl.textContent =  i+6 + "am: " + this.purchased[i] +" cookies";
          }else if (i === 6){
            liEl.textContent =  i+6 + "pm: " + this.purchased[i] +" cookies";
          }else{
            liEl.textContent =  (i+6-12) + "pm: " + this.purchased[i] +" cookies";
          }
          ulEl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = "Total: "+ this.total+" cookies";
        ulEl.appendChild(liEl);
      }
    }

Dubai.getTotalArray();
Dubai.render();


var Paris = {
    name :"Paris",
    maxHourlyCustomers : 38,
    minHourlyCustomers: 20,
    avgCookiesPerCustomer: 2.3,
    randomcustumer: 0,
    numberCookiesBerHour:0,
    img:"https://turkishairlines.ssl.cdn.sdlmedia.com/637110514333635321TW.jpg",
    purchased:[],
    total:0,
    getTotalArray: function () {
        for (var i = 6; i< 20; i++) {
        this.randomcustumer = getRandomInt(this.minHourlyCustomers, this.maxHourlyCustomers);
        this.numberCookiesBerHour=Math.floor(this.randomcustumer * this.avgCookiesPerCustomer);
        this.purchased.push(this.numberCookiesBerHour);
        }
        console.log(this.purchased);
        return this.numberCookiesBerHour;
    },
    render : function(){
        var container = document.getElementById('cookies');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var imgEl = document.createElement('img');
        imgEl.setAttribute('src' , this.img);
        articleEl.appendChild(imgEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for(var i = 0 ; i < this.purchased.length  ; i++){

          this.total += this.purchased[i];
          var liEl = document.createElement('li');
          if (i < 6){
            liEl.textContent =  i+6 + "am: " + this.purchased[i] +" cookies";
          }else if (i === 6){
            liEl.textContent =  i+6 + "pm: " + this.purchased[i] +" cookies";
          }else{
            liEl.textContent =  (i+6-12) + "pm: " + this.purchased[i] +" cookies";
          }
          ulEl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = "Total: "+ this.total+" cookies";
        ulEl.appendChild(liEl);
      }
    }
    


    Paris.getTotalArray();
    Paris.render();

    var Lima = {
        name :"Lima",
        maxHourlyCustomers : 16,
        minHourlyCustomers: 2,
        avgCookiesPerCustomer: 4.6,
        randomcustumer: 0,
        numberCookiesBerHour:0,
        img:"https://www.winmr.com/wp-content/uploads/2019/08/Lima.jpg",
        purchased:[],
        total:0,
        getTotalArray: function () {
            for (var i = 6; i< 20; i++) {
            this.randomcustumer = getRandomInt(this.minHourlyCustomers, this.maxHourlyCustomers);
            this.numberCookiesBerHour=Math.floor(this.randomcustumer * this.avgCookiesPerCustomer);
            this.purchased.push(this.numberCookiesBerHour);
            }
            console.log(this.purchased);
            return this.numberCookiesBerHour;
        },
        render : function(){
            var container = document.getElementById('cookies');
            var articleEl = document.createElement('article');
            container.appendChild(articleEl);
            var imgEl = document.createElement('img');
            imgEl.setAttribute('src' , this.img);
            articleEl.appendChild(imgEl);
            var h2El = document.createElement('h2');
            articleEl.appendChild(h2El);
            h2El.textContent = this.name;
            var ulEl = document.createElement('ul');
            articleEl.appendChild(ulEl);
            for(var i = 0 ; i < this.purchased.length  ; i++){
    
              this.total += this.purchased[i];
              var liEl = document.createElement('li');
              if (i < 6){
                liEl.textContent =  i+6 + "am: " + this.purchased[i] +" cookies";
              }else if (i === 6){
                liEl.textContent =  i+6 + "pm: " + this.purchased[i] +" cookies";
              }else{
                liEl.textContent =  (i+6-12) + "pm: " + this.purchased[i] +" cookies";
              }
              ulEl.appendChild(liEl);
            }
            var liEl = document.createElement('li');
            liEl.textContent = "Total: "+ this.total+" cookies";
            ulEl.appendChild(liEl);
          }
        }

        Lima.getTotalArray();
        Lima.render();
