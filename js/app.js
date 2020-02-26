time1 =['6am ','7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];
function Branch(name, maxHourlyCustomers, minHourlyCustomers, avgCookiesPerCustomer) {//first we put every probarities variable in the opject to the function structor
    this.name = name;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.minHourlyCustomers = minHourlyCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.randomcustumer = 0;
    this.numberCookiesBerHour = 0;
    this.purchased = [];
    this.total = 0;
    this.time =['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '];
    this.getTotalArray();// to active the function just on branch 1
    this.render();
}
Branch.prototype.getTotalArray = function () {//we  use prototype to write the function out of function stractor
    for (var i = 6; i < 20; i++) {
        this.randomcustumer = getRandomInt(this.minHourlyCustomers, this.maxHourlyCustomers);
        this.numberCookiesBerHour = Math.floor(this.randomcustumer * this.avgCookiesPerCustomer);
        this.purchased.push(this.numberCookiesBerHour);       
    }
}
Branch.prototype.render = function () {
    var container = document.getElementById('cookies');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    
    var h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    
    for (var i = 0; i < this.time.length; i++) {
        this.total += this.purchased[i];
        var liEl = document.createElement('li');
        liEl.textContent = this.time[i] + this.purchased[i] + " cookies";
        ulEl.appendChild(liEl);
    }
    var liTotalEl = document.createElement('li');
    liTotalEl.textContent = "Total: " + this.total + " cookies";
    ulEl.appendChild(liTotalEl);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var branch1 = new Branch('Seattle', 65, 23, 6.3);//we use new to use th stactor 
var branch2 = new Branch('Tokyo', 24, 3, 1.2);//we use new to use th stactor 
var branch3 = new Branch('Dubai', 38, 11, 3.7);//we use new to use th stactor 
var branch4 = new Branch('Paris', 38, 20, 2.3);//we use new to use th stactor 
var branch5 = new Branch('Lima', 16, 2, 4.6);//we use new to use th stactor 

//####The table#####
 var branchDivCon = document.getElementById('cookies');
 var tableEl = document.createElement('table');
 branchDivCon.appendChild(tableEl);

 // //th other lines
var totalArray=[];// the sum of the column will be her 
 for(var i = 0; i < branch1.purchased.length; i++) { // we can use any barnch for this
totalArray.push(branch1.purchased[i]+branch2.purchased[i]+branch3.purchased[i]+branch4.purchased[i]+branch5.purchased[i])
}

 function fell(namo,arr,tota,str){
 var tr2El = document.createElement('tr');
 tableEl.appendChild(tr2El);
 var th2El = document.createElement('td');
 th2El.textContent = namo ;
 tr2El.appendChild(th2El);
 for(var i = 0; i < arr.length+1; i++) { 
 var th2El = document.createElement('td');
 th2El.textContent = arr[i] ;
 tr2El.appendChild(th2El);
 }
 var th2El = document.createElement('td');
 th2El.textContent =tota ;
 tr2El.appendChild(th2El);

}
fell('',time1,'Daily Location Total','th');
fell('Seattle',branch1.purchased,branch1.total,'td');
fell('Tokyo',branch2.purchased,branch2.total,'td');
fell('Dubai',branch3.purchased,branch3.total,'td');
fell('Paris',branch4.purchased,branch4.total,'td');
fell('Lima',branch5.purchased,branch5.total,'td');
fell('Total',totalArray,branch1.total+branch2.total+branch3.total+branch4.total+branch5.total,'td');

//pass for the sale bage:-
var pass = prompt("Type the pass");
  while (pass !== "easy") {
      if (pass === "easy") {
      } else {
        alert('you can ask me for the  bass');
        var pass = prompt("Type the pass");   
      }
} 
