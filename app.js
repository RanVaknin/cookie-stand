'use strict';

//creating the h1 tags
var hSeattle = document.createElement('h1');
hSeattle.textContent = 'Seattle';
document.getElementById('Seattlelist').appendChild(hSeattle);

var hTokyo = document.createElement('h1');
hTokyo.textContent = 'Tokyo';
document.getElementById('TokyoList').appendChild(hTokyo);

var hDubai = document.createElement('h1');
hDubai.textContent = 'Dubai';
document.getElementById('DubaiList').appendChild(hDubai);

var hParis = document.createElement('h1');
hParis.textContent = 'Paris';
document.getElementById('ParisList').appendChild(hParis);

var hLima = document.createElement('h1');
hLima.textContent = 'Lima';
document.getElementById('LimaList').appendChild(hLima);

//object literal for each location

var seattleLocation = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  shopHours: ['06:00am','07:00am','08:00am','09:00am','10:00am','11:00am','12:00pm','01:00pm','02:00pm', '03:00pm', '04:00pm','05:00pm','06:00pm', '07:00pm','08:00pm']
};

var tokyoLocation = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  shopHours: ['06:00am','07:00am','08:00am','09:00am','10:00am','11:00am','12:00pm','01:00pm','02:00pm', '03:00pm', '04:00pm','05:00pm','06:00pm', '07:00pm','08:00pm']

};

var dubaiLocation = {
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  shopHours: ['06:00am','07:00am','08:00am','09:00am','10:00am','11:00am','12:00pm','01:00pm','02:00pm', '03:00pm', '04:00pm','05:00pm','06:00pm', '07:00pm','08:00pm']

};

var parisLoation =  {
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  shopHours: ['06:00am','07:00am','08:00am','09:00am','10:00am','11:00am','12:00pm','01:00pm','02:00pm', '03:00pm', '04:00pm','05:00pm','06:00pm', '07:00pm','08:00pm']

};

var limaLocation = {
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  shopHours: ['06:00am','07:00am','08:00am','09:00am','10:00am','11:00am','12:00pm','01:00pm','02:00pm', '03:00pm', '04:00pm','05:00pm','06:00pm', '07:00pm','08:00pm']

};

//random number generator to represent random amount of customers
function randomCustomerGenerator(min,max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// cookie output by location. random number generator * avgCookie perhour.
function cookieOutputByLocation(location,min,max) {
  location.cookieOutput = [];
  var hoursOfOperation = 15;
  for (var i = 0; i < hoursOfOperation ; i++){
    location.cookieOutput.push(Math.floor(randomCustomerGenerator(min,max) * location.avgCookie));
  }
}
// function calls for ^^^ function
cookieOutputByLocation(seattleLocation,65,23);
cookieOutputByLocation(tokyoLocation,24,3);
cookieOutputByLocation(dubaiLocation,38,11);
cookieOutputByLocation(parisLoation,38,20);
cookieOutputByLocation(limaLocation,16,2);

// creating variables = reference to the id value of UL element.
var ulSeattle = document.getElementById('Seattlelist');
var ulTokyo = document.getElementById('TokyoList');
var ulDubai = document.getElementById('DubaiList');
var ulParis = document.getElementById('ParisList');
var ulLima = document.getElementById('LimaList');


//function that sets up the JS code inside the HTML Page.
function stageStoreHours(location,listName) {
  for (var i = 0; i < location.shopHours.length ; i++){
    var li = document.createElement('li');
    li.textContent = `${location.shopHours[i]} : ${location.cookieOutput[i]}  cookies.`;
    listName.appendChild(li);
  }
}
stageStoreHours(seattleLocation,ulSeattle);
stageStoreHours(tokyoLocation,ulTokyo);
stageStoreHours(dubaiLocation,ulDubai);
stageStoreHours(parisLoation,ulParis);
stageStoreHours(limaLocation,ulLima);





function totalCookiesDay (location,listName){
  var total = 0;
  for (var i = 0; i < location.cookieOutput.length ; i++){
    total = total + location.cookieOutput[i];
  }
  var li = document.createElement('li');
  li.textContent = `Total: ${total}`;
  listName.appendChild(li);

  return total;
}
totalCookiesDay(seattleLocation,ulSeattle);
totalCookiesDay(tokyoLocation,ulTokyo);
totalCookiesDay(dubaiLocation,ulDubai);
totalCookiesDay(parisLoation,ulParis);
totalCookiesDay(limaLocation,ulLima);
