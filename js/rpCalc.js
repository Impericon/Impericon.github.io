function calculate() {
	var rp = $("#rpInput").val();
	var value = {
		"1" : {
			value: 2.5,
			rp: 400
		},
		
		"2" : {
			value: 5,
			rp: 840
		},
		
		"3" : {
			value: 10,
			rp: 1780
		},
		
		"4" : {
			value: 20,
			rp: 3620
		},
		
		"5" : {
			value: 35,
			rp: 6450
		},
		
		"6" : {
			value: 50,
			rp: 9300
		}
	};
	
	var rp6 = Math.floor(rp / value[6].rp);
	rp = rp - (value[6].rp * rp6);
	
	var rp5 = Math.floor(rp / value[5].rp);
	rp = rp - (value[5].rp * rp5);
	
	var rp4 = Math.floor(rp / value[4].rp);
	rp = rp - (value[4].rp * rp4);
	
	var rp3 = Math.floor(rp / value[3].rp);
	rp = rp - (value[3].rp * rp3);
	
	var rp2 = Math.floor(rp / value[2].rp);
	rp = rp - (value[2].rp * rp2);
	
	var rp1 = Math.floor(rp / value[1].rp);
	rp = rp - (value[1].rp * rp1);
	
	if (rp > 0) {
		rp1 = rp1 + 1;
	}
	
	var gesamtEuro = (rp6 * value[6].value) + (rp5 * value[5].value) + (rp4 * value[4].value) + + (rp3 * value[3].value) + (rp2 * value[2].value + (rp1 * value[1].value));
	var gesamtEuro = gesamtEuro.toLocaleString();
	
	var number1;
	if (rp1 == 1) {
		number1 = rp1 + " x " + value[1].value + "€<br>";
	} else if (rp1 == 2) {
		number1 = "";
		rp2 = rp2 + 1;
	} else if ((rp1 == 3) && (2 * value[1].rp < 2 * value[1].rp + rp) && ((2 * value[1].rp + rp) < value[2].rp)) {
		number1 = "";
		rp2 = rp2 + 1;
	} else if (rp1 == 3){
		number1 = "test<br>"
		/*number1 = "1 x " + value[1].value + "€<br>";*/
		rp2 = rp2 + 1;
	} else {
		number1 = "";
	}
	
	var number2;
	if (rp2 == 1) {
		number2 = rp2 + " x " + value[2].value + "€<br>";
	} else if (rp2 == 2) {
		number2 = "";
		rp3 = rp3 + 1;
	} else if (rp2 == 3 && (2 * value[2].rp < 2 * value[2].rp + rp) && ((2 * value[2].rp + rp) < value[3].rp)) {
		number2 = "";
		rp3 = rp3 + 1;
	} else if (rp2 == 3) {
		number2 = "1 x " + value[2].value + "€<br>";
		rp3 = rp3 + 1;
	} else {
		number2 = "";
	}
	
	var number3;
	if (rp3 == 1) {
		number3 = rp3 + " x " + value[3].value + "€<br>";
	} else if (rp3 == 2) {
		number3 = "";
		rp4 = rp4 + 1;
	} else if (rp3 == 3 && (2 * value[3].rp < 2 * value[3].rp + rp) && ((2 * value[3].rp + rp) < value[4].rp)) {
		number3 = "";
		rp4 = rp4 + 1;
	} else if (rp3 == 3) {
		number3 = "1 x " + value[3].value + "€<br>";
		rp4 = rp4 + 1;
	} else {
		number3 = "";
	}
	
	var number4;
	if (rp4 == 1) {
		number4 = rp4 + " x " + value[4].value + "€<br>";
	} else if (rp4 == 2) {
		number4 = "";
		rp5 = rp5 + 1;
	} else if (rp4 == 3 && (2 * value[4].rp < 2 * value[4].rp + rp) && ((2 * value[4].rp + rp) < value[5].rp)) {
		number4 = "";
		rp5 = rp5 + 1;
	} else if (rp4 == 3) {
		number4 = "1 x " + value[4].value + "€<br>";
		rp5 = rp5 + 1;
	} else {
		number4 = "";
	}
	
	var number5;
	if (rp5 == 1) {
		number5 = rp5 + " x " + value[5].value + "€<br>";
	} else if (rp5 == 2) {
		number5 = "";
		rp6 = rp6 + 1;
	} else if (rp5 == 3 && (2 * value[5].rp < 2 * value[5].rp + rp) && ((2 * value[5].rp + rp) < value[6].rp)) {
		number5 = "";
		rp6 = rp6 + 1;
	} else if (rp5 == 3) {
		number5 = "1 x " + value[5].value + "€<br>";
		rp6 = rp6 + 1;
	} else {
		number5 = "";
	}
	
	var number6;
	if (rp6 !== 0) {
		rp6 = rp6.toLocaleString();
		number6 = rp6 + " x " + value[6].value + "€<br>";
	} else {
		number6 = "";
	}
	
	/* Output */
	$("#money").html(number6 + number5 + number4 + number3 + number2 + number1);
	$("#moneyFull").html(gesamtEuro + "€ Gesamt");
	$("#leftover").html(rp + " RP Rest");
	
	/* animation */
	var playonce = 0;
	if (playonce == 0) {
		$("#result").animate({opacity: 1.9},500);
		$("#box").animate({borderRadius: 0.0},500);
		$("#send").animate({borderRadius: 0.0},500);
		playonce = 1;
	};
}
	
// Stop the form from refreshing the page after it's been sent
$("form").submit(function(e) {
    e.preventDefault();
});