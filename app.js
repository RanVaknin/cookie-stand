'use strict';


function randomCustomerGenerator(min,max) {
  return Math.floor(Math.random() * (max - min) + min);
}
var shopHours = ['Location','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm', '3pm', '4pm','5pm','6pm', '7pm','8pm','Total'];
var allLocations = [];
var totalEachHour = [];

function Location(location,minCust,maxCust,avgCookie,cookieOutput,totalCookies,totalEachHour){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  allLocations.push(this);
  this.cookieOutput = [];
  this.totalCookies = 0;
}



Location.prototype.cookieOutputByLocation = function () {
  for (var i = 0; i < shopHours.length - 1 ; i++){
    this.cookieOutput.push(Math.floor(randomCustomerGenerator(this.minCust,this.maxCust) * this.avgCookie));
    this.totalCookies = this.totalCookies + this.cookieOutput[i];
  }
  this.cookieOutput.push(this.totalCookies);
};
function calculateEachHour() {
  totalEachHour = [];
  for (var j = 0 ; j < shopHours.length -1 ; j++){
    var total = 0;
    for(var k = 0; k < allLocations.length ; k++) {
      total = total + allLocations[k].cookieOutput[j];
    }
    totalEachHour.push(total);
  }
}

var seattleLocation = new Location ('Seattle',23,65,6.3);
var tokyoLocation = new Location ('Tokyo',3,24,1.2);
var dubaiLocation = new Location ('Dubai',11,38, 3.7);
var parisLoation = new Location ('Paris',20,38,2.3);
var limaLocation = new Location ('Lima',2,16,4.6);

seattleLocation.cookieOutputByLocation();
tokyoLocation.cookieOutputByLocation();
dubaiLocation.cookieOutputByLocation();
parisLoation.cookieOutputByLocation();
limaLocation.cookieOutputByLocation();

calculateEachHour();


console.log(seattleLocation);

// function renderLocations (){
//   for (var i = 0; i < allLocations.length ; i++){
//     var locationRow = document.createElement('tr');
//     locationRow.textContent = allLocations[i].location;
//     document.getElementById('tableId').appendChild(locationRow);
//   }
// }


function renderHeader() {
  for (var i = 0; i < shopHours.length ; i++){
    var tableCol = document.createElement('td');
    tableCol.textContent = shopHours[i];
    document.getElementById('tableId').appendChild(tableCol);
  }
}

// total for column
function renderHour () {
  for(var i = 0; i < allLocations.length ; i++){
    var newTr = document.createElement('tr');
    document.getElementById('tableId').appendChild(newTr);

    var titleEl = document.createElement('td');
    titleEl.textContent = allLocations[i]['location'];

    document.getElementById('tableId').appendChild(titleEl); // Title of the row

    for (var j = 1 ; j < allLocations[i].cookieOutput.length; j++) {
      var tableRow = document.createElement('td');
      tableRow.textContent = allLocations[i].cookieOutput[j];
      document.getElementById('tableId').appendChild(tableRow);

    }
  }
}


function renderTotalEachHour() {
  var newTr = document.createElement('tr');
  newTr.setAttribute('id', 'totalsRow')
  document.getElementById('tableId').appendChild(newTr);
  for (var i = 0; i < totalEachHour.length ; i++) {
    var bottomLine = document.createElement('td');
    bottomLine.setAttribute('class', 'total');
    bottomLine.textContent = totalEachHour[i];
    newTr.appendChild(bottomLine);
  }
  document.getElementById('tableId').appendChild(newTr);
}



var submitForm = document.getElementById("userForm");
submitForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var location = event.target.locationId.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;

  var newLocation = new Location(location,min,max,avg);
  newLocation.cookieOutputByLocation();



  console.log(allLocations);
  document.getElementById('tableId').innerHTML = "";
  
  calculateEachHour();
  renderHeader();
  renderHour();
  renderTotalEachHour();
  
  event.target.locationId.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
}



renderHeader();
renderHour();
renderTotalEachHour();
console.log(totalEachHour);