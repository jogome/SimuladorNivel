
var  waterProduction = {
    // Units in production line and total production flow.
    counter_1: false,
    counter_2: false,
    counter_3: false, 
    
    // UNITS IN PRODUCTION LINE AND THE PRODUCTION SUM.
    production: function(groups) {
	var placeToText = document.getElementById("displayText");
	var placeToText3 = document.getElementById("displayText3");
	var productions = "Units in Action and Actual Production is: "; 
  	var inProductionLine = []; 
	this.counter_1 = 0;
  	var unitiesNumber = 0;
        // Cicles throw input boxes searching for production values
	// of each Units production, and push the values to an array: the inProductionLine.
  	for (var i = 0; i < groups.elements.length; i++) {
	    inProductionLine.push(+groups.elements[i].value);
	    // Makes a sum of each units production value in the array.
	    this.counter_1 += inProductionLine[i];
	    // Finds the number or Units in Production line.
	    if (inProductionLine[i] !== 0) {
		unitiesNumber += 1
	    }                                 
	}
	// Singular/plural case when 0 or only one Unit is in Line Production, or more than one.
	if (unitiesNumber <= 1) {
	    productions = productions.replace("Units", "Unit");
	}

	if (isNaN(this.counter_1)) {
	    placeToText.innerHTML = "Check field RO!";
	}
	else {
	placeToText.innerHTML = "&nbsp" + unitiesNumber + " " + productions + this.counter_1 + " t/h" + "<br><p>"; 
	    }
    },

    // PUMPS AVAILABLE FOR WATER TRANSFER AND CHECKED PUMPS AND RESPECTIVE FLOW.
    activePumps: function(group) {                          	
	// Pumps available to transfer the water
	var pump1, pump2, pump3, pump4, pump5, pump6, pump7, pump8, pump9, pump10, pump11, pump12, pump13, pump14, pump15, pump16, pump17;  
	 // End of pumps availabe for water transfer
	this.counter_2 = 0;
	// This is the array that contains the pumps in activity, 
	//each selected checkBox/pumpFlow is pushed to this array. 
	var pumpInAction = [];
	// 
	var formatText = "Selected pumps: ".bold().fontcolor("#7A7A7A");
	var totalFlowText = "Total flow: ".bold().italics().fontcolor("#7A7A7A"); 
	document.getElementById("novo").innerHTML = "";
	document.getElementById("novo2").innerHTML = "";
	document.getElementById("novo3").innerHTML = "";
	document.getElementById("img").innerHTML = "";
	var textOutput = document.getElementById("displayText2");
	var textOutput3 = document.getElementById("displayText3");
	var textOutput4 = document.getElementById("displayText4");
		  
	// Making an array of the checkBoxes/pumps		
	for (var i = 0; i < group.elements.length; i++) {
	    // Searching for checked boxes
	    if (group.elements[i].checked) {
		// Assigning a value to corresponding pump number of the checked 
		//box value number and adding that value to the array pumpInAction.
		if (group.elements[i].value === "Pump number 01a flow = 060") {
		    pump1 = 60;
		    pumpInAction.push(pump1);}
		if (group.elements[i].value === "Pump number 02a flow = 060") {
		    pump2 = 60;
		    pumpInAction.push(pump2);}
		if (group.elements[i].value === "Pump number 03a flow = 060") {
		    pump3 = 60;
		    pumpInAction.push(pump3);}
		if (group.elements[i].value === "Pump number 04a flow = 070") {
		    pump4 = 70;
		    pumpInAction.push(pump4);}
		if (group.elements[i].value === "Pump number 05a flow = 080") {
		    pump5 = 80;
		    pumpInAction.push(pump5);}
		if (group.elements[i].value === "Pump number 06a flow = 075") {
		    pump6 = 75;
		    pumpInAction.push(pump6);}
		if (group.elements[i].value === "Pump number 07a flow = 110") {
		    pump7 = 110;
		    pumpInAction.push(pump7);}
		if (group.elements[i].value === "Pump number 08a flow = 110") {
		    pump8 = 110;
		    pumpInAction.push(pump8);}
		// novo grupo
		if (group.elements[i].value === "Pump number 01b flow = 110") {
		    pump9 = 110;
		    pumpInAction.push(pump9);}
		if (group.elements[i].value === "Pump number 02b flow = 110") {
		    pump10 = 110;
		    pumpInAction.push(pump10);}
		if (group.elements[i].value === "Pump number 03b flow = 110") {
		    pump11 = 110;
		    pumpInAction.push(pump11);}
		if (group.elements[i].value === "Pump number 04b flow = 110") {
		    pump12 = 110;
		    pumpInAction.push(pump12);}
		if (group.elements[i].value === "Pump number 05b flow = 110") {
		    pump13 = 110;
		    pumpInAction.push(pump13);}
		if (group.elements[i].value === "Pump number 06b flow = 110") {
		    pump14 = 110;
		    pumpInAction.push(pump14);}
		if (group.elements[i].value === "Pump number 07b flow = 065") {
		    pump15 = 65;
		    pumpInAction.push(pump15);}
		if (group.elements[i].value === "Pump number 08b flow = 065") {
		    pump16 = 65;
		    pumpInAction.push(pump16);}
		if (group.elements[i].value === "Pump number 09b flow = 065") {
		    pump17 = 65;
		    pumpInAction.push(pump17);}

		var pumpNumberAndFlow = "<br>" + "<br>" + group.elements[i].value + " " + "t/h";
		formatText += pumpNumberAndFlow;  
	    }
	         
	}
	// Looping throw pumpInAction array and making a sum of all elements, this sum 
        //corresponds to the water flow pumped from the storage tank to distribution tanks
	for (var i = 0; i < pumpInAction.length; i++) {
	   this.counter_2 += pumpInAction[i];
	}
	
	// Formating text
	
	textOutput.innerHTML = formatText + " " + "<br><hr width='250em' align='left' color='#171715'>" + totalFlowText + this.counter_2.toString().bold() + " t/h" + "<p>";
	 
    },

      
    // SIMULATING LEVEL EVOLUTION IN RELATION WITH PRODUCTION AND PUMPING.
    simulator: function(){
	var totalProduction = this.counter_1;
	var totalPumpFlow = this.counter_2;
	var max = document.getElementById("max");
	var storageTankMaxLevel = max.options[max.selectedIndex].value;
	var min = document.getElementById("min");
	var storageTankMinLevel = min.options[min.selectedIndex].value; 
	var levelIs = "Actual level: ";
	var willTargetMaxOrMin = "  Maximum Level in: ";
	var timeRange = " hours."
	var actualLevel = Number(actualevel.getlevel.value);
	var placeToText5 = document.getElementById("displayText5");

	this.counter_3 = 0;
	var increasingLevelPerHour = totalProduction - totalPumpFlow;
	var i;

	// Increasing level
	if (totalProduction > totalPumpFlow) {
	   
	    for (i = actualLevel; i <= storageTankMaxLevel; i += increasingLevelPerHour) {
		this.counter_3 += 1;
	    } 
	    
	
	    if (this.counter_3 <=1) {
		timeRange = " hour.";
	    }

	    if (i >= storageTankMaxLevel) {
		var exceededTones = i - storageTankMaxLevel;
		var enoughTones = increasingLevelPerHour - exceededTones;
		var suplementarTime = (enoughTones / increasingLevelPerHour) * 60;
		this.counter_3 = this.counter_3 - 1;
	    }
	}
        
        // Descreasing level
	else if (totalProduction < totalPumpFlow) {
	    increasingLevelPerHour = totalPumpFlow - totalProduction;
	    for (i = actualLevel; i >= storageTankMinLevel; i -= increasingLevelPerHour) {
		this.counter_3 += 1;
		willTargetMaxOrMin =  willTargetMaxOrMin.replace("Maximum", "Minimum");
	    }
	    if (this.counter_3 <=1) {
		timeRange = " hour.";
	    } 
    
	    if (i <= storageTankMinLevel) {
		exceededTones = storageTankMinLevel - i;
		enoughTones = increasingLevelPerHour - exceededTones;
		suplementarTime = (enoughTones / increasingLevelPerHour) * 60;
		
		this.counter_3 = this.counter_3 - 1;  
	    }  
	}

	// VALIDATES FIELDS 
	if (actualLevel == "") {
	    placeToText5.innerHTML = "Field actual Level is empty!".fontcolor("#991F00");
	}
	else if (isNaN(actualLevel)) {
	    placeToText5.innerHTML = "This field accepts only numbers!".fontcolor("#991F00");
	}
	else if (actualLevel < storageTankMinLevel) {
	    placeToText5.innerHTML = "Actual level must be equal or higher than Min level!".fontcolor("#991F00");
	}
	else if (isNaN(this.counter_1)) {
	    placeToText5.innerHTML = "Fields RO accepts only Numbers!".fontcolor("#991F00");
	}
	else if (isNaN(suplementarTime)) {
	    placeToText5.innerHTML = "Please, select at least one pump!".fontcolor("#991F00");
	}
	else {
	placeToText5.innerHTML = "&nbsp" + levelIs + actualLevel + " m3. " + willTargetMaxOrMin + this.counter_3 + "h " + Math.round(suplementarTime) + "m";
	    }
    },
   
     // Calling all methods               	               
    generalCall: function() {
	//waterProduction.minLevel();
	waterProduction.production(document.textfields);
	waterProduction.activePumps(document.boxes);
	waterProduction.simulator();
    },

    resetCall: function() {
	textfields.reset();
	actualevel.reset();
	boxes.reset();
    }

}; 

