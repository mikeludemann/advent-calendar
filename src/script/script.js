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

/**
	* Month and Day validator
	* 
	* Modal with external JSON data
	*/

$(function(){

	var today = new Date(),
	day = today.getDate(),
	month = today.getMonth();

	var title = document.getElementById("title");
	var description = document.getElementById("body");

	$('.number').click(function(){

		var selectDay = Number(this.innerText);

		loadJSON("./src/script/data.json", function(response) {

			var data = JSON.parse(response);

				if(month == 12){
		
					if (day === selectDay || day > selectDay) {

						if(selectDay == 1){
							
							title.innerHTML = data.gifts.one.title;
							description.innerHTML = data.gifts.one.description;

						} else if(selectDay == 2){
							
							title.innerHTML = data.gifts.two.title;
							description.innerHTML = data.gifts.two.description;

						} else if(selectDay == 3){
							
							title.innerHTML = data.gifts.three.title;
							description.innerHTML = data.gifts.three.description;

						} else if(selectDay == 4){
							
							title.innerHTML = data.gifts.four.title;
							description.innerHTML = data.gifts.four.description;

						} else if(selectDay == 5){
							
							title.innerHTML = data.gifts.five.title;
							description.innerHTML = data.gifts.five.description;

						} else if(selectDay == 6){
							
							title.innerHTML = data.gifts.six.title;
							description.innerHTML = data.gifts.six.description;

						} else if(selectDay == 7){
							
							title.innerHTML = data.gifts.seven.title;
							description.innerHTML = data.gifts.seven.description;

						} else if(selectDay == 8){
							
							title.innerHTML = data.gifts.eight.title;
							description.innerHTML = data.gifts.eight.description;

						} else if(selectDay == 9){
							
							title.innerHTML = data.gifts.nine.title;
							description.innerHTML = data.gifts.nine.description;

						} else if(selectDay == 10){
							
							title.innerHTML = data.gifts.ten.title;
							description.innerHTML = data.gifts.ten.description;

						} else if(selectDay == 11){
							
							title.innerHTML = data.gifts.eleven.title;
							description.innerHTML = data.gifts.eleven.description;

						} else if(selectDay == 12){
							
							title.innerHTML = data.gifts.twelve.title;
							description.innerHTML = data.gifts.twelve.description;

						} else if(selectDay == 13){
							
							title.innerHTML = data.gifts.thirteen.title;
							description.innerHTML = data.gifts.thirteen.description;

						} else if(selectDay == 14){
							
							title.innerHTML = data.gifts.fourteen.title;
							description.innerHTML = data.gifts.fourteen.description;

						} else if(selectDay == 15){
							
							title.innerHTML = data.gifts.fivteen.title;
							description.innerHTML = data.gifts.fivteen.description;

						} else if(selectDay == 16){
							
							title.innerHTML = data.gifts.sixteen.title;
							description.innerHTML = data.gifts.sixteen.description;

						} else if(selectDay == 17){
							
							title.innerHTML = data.gifts.seventeen.title;
							description.innerHTML = data.gifts.seventeen.description;

						} else if(selectDay == 18){
							
							title.innerHTML = data.gifts.eighteen.title;
							description.innerHTML = data.gifts.eighteen.description;

						} else if(selectDay == 19){
							
							title.innerHTML = data.gifts.nineteen.title;
							description.innerHTML = data.gifts.nineteen.description;

						} else if(selectDay == 20){
							
							title.innerHTML = data.gifts.twenty.title;
							description.innerHTML = data.gifts.twenty.description;

						} else if(selectDay == 21){
							
							title.innerHTML = data.gifts.twentyone.title;
							description.innerHTML = data.gifts.twentyone.description;

						} else if(selectDay == 22){
							
							title.innerHTML = data.gifts.twentytwo.title;
							description.innerHTML = data.gifts.twentytwo.description;

						} else if(selectDay == 23){
							
							title.innerHTML = data.gifts.twentythree.title;
							description.innerHTML = data.gifts.twentythree.description;

						} else if(selectDay == 24){
							
							title.innerHTML = data.gifts.twentyfour.title;
							description.innerHTML = data.gifts.twentyfour.description;

						} else {
							
							title.innerHTML = data.gifts.default.title;
							description.innerHTML = data.gifts.default.description;

						}

					}

				} else {

					title.innerHTML = data.gifts.notavailable.title;
					description.innerHTML = data.gifts.notavailable.description;

				}

			});

		});
		
	});

/**
	* Close Modal with Event Click outside of the content
	*/

/*
var dw = document || window;

dw.onclick = function (event) {

	var modal = document.getElementById("modalDate");

	if (event.target == modal) {

		modal.fadeOut();
		$("body").css("position", "");

	}

}
*/