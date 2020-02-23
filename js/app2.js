  
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
    time:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '],
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
        for(var i = 0 ; i < this.purchased.length ; i++){
          this.total += this.purchased[i];
          var liEl = document.createElement('li');
          liEl.textContent =  this.time[i] + this.purchased[i]+" cookies";
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

branch.name ="Tokyo"
branch.maxHourlyCustomers = 24
branch.minHourlyCustomers= 3
branch.avgCookiesPerCustomer= 1.2
branch.randomcustumer= 0
branch.numberCookiesBerHour= 0
branch.img=""
branch.purchased=[]
branch.total=0

branch.getTotalArray();
branch.render();

branch.name ="Dubai"
branch.maxHourlyCustomers = 38
branch.minHourlyCustomers= 11
branch.avgCookiesPerCustomer= 3.7
branch.randomcustumer= 0
branch.numberCookiesBerHour= 0
branch.img=""
branch.purchased=[]
branch.total=0

branch.getTotalArray();
branch.render();

branch.name ="Paris"
branch.maxHourlyCustomers = 38
branch.minHourlyCustomers= 20
branch.avgCookiesPerCustomer= 2.3
branch.randomcustumer= 0
branch.numberCookiesBerHour= 0
branch.img=""
branch.purchased=[]
branch.total=0

branch.getTotalArray();
branch.render();

branch.name ="Lima"
branch.maxHourlyCustomers = 16
branch.minHourlyCustomers= 2
branch.avgCookiesPerCustomer= 4.6
branch.randomcustumer= 0
branch.numberCookiesBerHour= 0
branch.img=""
branch.purchased=[]
branch.total=0

branch.getTotalArray();
branch.render();