//Crystal Collector! Game script

//Global Vars

var randomGoal = 0;
var crystalTotal = 0;
var crystalANumber;
var crystalBNumber;
var crystalCNumber;
var crystalDNumber;
var tallyHeader = "Let's play!";
var wins = 0;
var losses = 0;


	//Set up game-->
		// Generate a random number for the goal to be matched by user-->
		randomGoal = Math.floor(Math.random() * 100) + 19;
		$("#randomnumberdisplay").text(randomGoal);
		// Generate random numbers for each of four crystals selected by user -->
		crystalANumber = setcrystalanumber();
		crystalBNumber = setcrystalbnumber();
		crystalCNumber = setcrystalcnumber();
		crystalDNumber = setcrystaldnumber();

		$("#winlossmsg").text(tallyHeader);
		$("#winct").text("Wins = " + wins);
		$("#lossct").text("Losses = " + losses);


	// Enter round playing with user -->

		// Play a round -->
			// Listen for user to click on one of the four crystals -->

			$("#crystala").on("click", function(){
			    crystalTotal = crystalTotal + crystalANumber;
				$("#usersumdisplay").text(crystalTotal);
				checkroundstatus();			    
			});

			$("#crystalb").on("click", function(){
			    crystalTotal = crystalTotal + crystalBNumber;
				$("#usersumdisplay").text(crystalTotal);
				checkroundstatus();							    
			});

			$("#crystalc").on("click", function(){
			    crystalTotal = crystalTotal + crystalCNumber;
				$("#usersumdisplay").text(crystalTotal);
				checkroundstatus();				
			});

			$("#crystald").on("click", function(){
			    crystalTotal = crystalTotal + crystalDNumber;
				$("#usersumdisplay").text(crystalTotal);
				checkroundstatus();				
			});


function resetgame(){
		randomGoal = Math.floor(Math.random() * 100) + 19;
		$("#randomnumberdisplay").text(randomGoal);

		crystalANumber = setcrystalanumber();
		crystalBNumber = setcrystalbnumber();
		crystalCNumber = setcrystalcnumber();
		crystalDNumber = setcrystaldnumber();
}


function checkroundstatus(){
	
	if(crystalTotal < randomGoal) {
		//Do nothing - wait for more crystal clicks

	} else if (crystalTotal === randomGoal) {
		wins++;
		tallyHeader = "You won!!! Play again.";
		$("#winlossmsg").text(tallyHeader);
		$("#winct").text("Wins = " + wins);
		$("#lossct").text("Losses = " + losses);
		crystalTotal = 0;
		$("#usersumdisplay").text(crystalTotal);		
		resetgame();

	} else if (crystalTotal > randomGoal){
		losses++;
		tallyHeader = "You lost. Play again.";
		$("#winlossmsg").text(tallyHeader);
		$("#winct").text("Wins = " + wins);
		$("#lossct").text("Losses = " + losses);
		crystalTotal = 0;
		$("#usersumdisplay").text(crystalTotal);		
		resetgame();				
	}
}


function setcrystalanumber() {
	var number = Math.floor(Math.random() * 12) + 1;
	return number;
}

function setcrystalbnumber() {
	    var number = crystalANumber;
	    while(number === crystalANumber) {
	    	number = Math.floor(Math.random() * 12) + 1;
	    }
	    return number
}

function setcrystalcnumber() {
	    var number = crystalANumber;
	    while(number === crystalANumber || number === crystalBNumber){ 
	    	number = Math.floor(Math.random() * 12) + 1;
	    }
	    return number
}

function setcrystaldnumber() {
	    var number = crystalANumber;
	    while(number === crystalANumber || number === crystalBNumber || number === crystalCNumber){ 
	    	number = Math.floor(Math.random() * 12) + 1;
	    }
	    return number
}