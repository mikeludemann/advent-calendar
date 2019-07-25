/**
 * Month and Day validator
 * 
 * Modal with external data
 */

$(function(){

	var today = new Date(),
	day = today.getDate(),
	month = today.getMonth();

	$('.number').click(function(){

		var selectDay = Number(this.innerText);

		if(month == 12){

			if (day === selectDay || day > selectDay) {

				console.log("Visible at: " + selectDay);

			} else {

				console.log("Not available");

			}

		} else {

			console.log("December is not to be started at the moment.");

		}

	});

});

// Load external JSON-File

function loadJSON(url, callback) { 

  var xmlHTTP = new XMLHttpRequest();

  xmlHTTP.overrideMimeType("application/json");
  xmlHTTP.open('GET', url, true);
  xmlHTTP.onreadystatechange = function () {

    if (xmlHTTP.readyState == 4 && xmlHTTP.status == "200") {

      callback(xmlHTTP.responseText);

    }

  };

  xmlHTTP.send(null); 

}

// Get external JSON data

$(document).ready(function(){

  loadJSON("./src/script/data.json", function(response) {
    
    var data = JSON.parse(response);

    console.log(data);
      
  });

});