var operations = [];
var current_input = "";
var resultClicked=0; //check if the result button was last clicked
var operandClicked=0; //check if operand was last clicked
var operatorClicked=0; //check if an operator was last clicked
var result = 0; //Keep track of last result

//Add
function sum(a, b){

	return parseFloat(a)+ parseFloat(b);
}

//Subtract
function sub(a, b){

	return a-b;
}

//Divide
//Remember to disallow div by 0
function div(a, b){

	return a/b;
}

//Multiply
function mult(a, b){

	return a*b;
}

function toggleSign(a){

return -1*a;
}

function printOperations(){

	return operations.join("");
}

// For capturing operations in the form of a running string
function addToOperations(op){

	operations.push(op);	
}

//Separate the operations based on order and process until final input achieved
function processOperations(){

	addToOperations(current_input);
	document.getElementById("output-record").innerHTML = printOperations();

	var i;
	result = operations[0];
	//for each element, check if it's not '=', check i+2 then verify operation at i+1
	for(i = 0; i < operations.length; i++){

		if(operations[i+1] != "="){
			console.log("Result is currently " + result);
			//console.log("Next operator: " + operations[i+1] + " Next operand: " + operations[i+2]);
			//var num1 = operations[i];
			var num2 = operations[i+2];
			switch (operations[i+1]){
				
				case "X":
					result=mult(result, num2);
					break;
				case "/":
					result=div(result, num2);
					break;
				case "+":
					result=sum(result, num2);
					break;
				case "-":
					result=sub(result, num2);
					break;
				
			}
			i+=1;
		}

		document.getElementById("output-main").innerHTML = result;
	}



}


// Capture numbers (and the decimal point) in a running string
function captureNumbers(num){

	current_input+=num;
}

function bindResultClickedEvent(e) {
	e.preventDefault();
//Only invoked when = is pressed
//Break up operations around +, -, /, x
//Parse the substrings and run operations
//Output final result
	resultClicked = 1;
	operatorClicked=0;
	operandClicked=0;
	processOperations();


}

// When an operator is clicked the current_input should be captured, cleared and the operator added to the operations list
function bindOperatorClickedEvent(e){

	e.preventDefault();
	operatorClicked=1;
	operandClicked=0;
	//If the result is still in play, clear the current ops queue and set the current_input var to result
	if(resultClicked){

		operations = [];
		current_input = result;
		resultClicked = 0;
	}	
	addToOperations(current_input);
	current_input = "";
	addToOperations(e.target.innerHTML);
	//Set #output-main's innerHTML to 0
	document.getElementById("output-main").innerHTML = "0";
	document.getElementById("output-record").innerHTML = printOperations();


}

// When an operand is clicked, capture the number
function bindOperandClickedEvent(e){

	e.preventDefault();
	operandClicked=1;
	operatorClicked=0;
	captureNumbers(e.target.innerHTML);
	document.getElementById("output-main").innerHTML = current_input;
	
	if(printOperations()){
		document.getElementById("output-record").innerHTML = printOperations() + current_input; // do not modify ops array until operator or result is clicked
	} else {
		document.getElementById("output-record").innerHTML = current_input;
	}

}

//When the sign of an operand is changed, add the requisite sign to the front of current_input.
function bindToggleSign(e){

	e.preventDefault();

	if(!resultClicked){
		
		if(operandClicked && (current_input.charAt(0) != "-")){
			
			current_input = "-" + current_input;
		} else {

			current_input = current_input.substr(1);
		}

		document.getElementById("output-main").innerHTML = current_input;
		
		if(printOperations()){
			document.getElementById("output-record").innerHTML = printOperations() + current_input; // do not modify ops array until operator or result is clicked
		} else {
			document.getElementById("output-record").innerHTML = current_input;
		}
	}

}

// Clear the input screen (reset to 0) and operations array
function clearAll(e){

	e.preventDefault();
	operations = [];
	result = 0;
	resultClicked=0;
	//Set #output-record's innerHTML to an empty string
	document.getElementById("output-main").innerHTML = "0";
	document.getElementById("output-record").innerHTML = "0";
}

// Clear the last entered digit or operator and reset input screen to 0 (history maintained)
function clearLast(e){

	e.preventDefault();
	
	//Set #output-record's innerHTML to the new array (stringified)
	document.getElementById("output-main").innerHTML = "0";
	
	if(resultClicked){

		clearAll(e);
		
	} else{

		operations.pop();
		current_input="";

		if(printOperations()){
			document.getElementById("output-record").innerHTML = printOperations(); // do not modify ops array until operator or result is clicked
		} else {
			document.getElementById("output-record").innerHTML = "0";
		}
	}
}

// Bind all click events
function bindClickEvents(){

	$(".operand").click(bindOperandClickedEvent);
	$(".operator").click(bindOperatorClickedEvent);
	$("#result").click(bindResultClickedEvent);
	$("#clearLast").click(clearLast);
	$("#clearAll").click(clearAll);
	$("#toggleSign").click(bindToggleSign);
}

$(document).ready(function(){

	bindClickEvents();

});