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
