var operations = [];
var current_input;

//Add
function sum(a, b){

	return a+b;
}

//Subtract
function sub(a, b){

	return a-b;
}

//Divide
function div(a, b){

	return a/b;
}

//Multiply
function mult(a, b){

	return a*b;
}

function toggleSign(a){

return -1 * a;
}

//Figure out what kind of key was clicked

// a = all the buttons a user clicked
// a = "1+4 x 0"
// console.log(a)
function getOperation(e){

	var btn = e.target.innerHTML;

	// var op;

	// switch(btn){

	// 	case "0":
	// 	case "1":
	// 	case "2":
	// 	case "3":
	// 	case "4":
	// 	case "5":
	// 	case "6":
	// 	case "7":
	// 	case "8":
	// 	case "9":
	// 		return 
	// 	case "+":
	// 	case "-":
	// 	case "/":
	// 	case "x":
	// 	case "=":
	// 	case "SQ":
	// 	case "C":
	// 	case "CE":
	// 	case ".":
	// 	case "+/-":
	// }

	return btn;
}

// For capturing operations in the form of a running string
function addToOperations(op){

	operations.push(op);	
}

//Separate the operations based on order and precedence (BOMDAS principle) and process until final input achieved
function processOperations(){

}


// Capture numbers (and the decimal point) in a running string
function captureNumbers(num){

	current_input+=num;
}

function bindResultClickedEvent(e) {

//Only invoked when = is pressed
//Break up operations around +, -, /, x
//Parse the substrings and run operations
//Output final result

}

// When an operator is clicked the current_input should be captured, cleared and the operator added to the operations list
function bindOperatorClickedEvent(e){

	addToOperations(current_input);
	current_input = "";
	addToOperations(e.target.innerHTML);
	//Set #output-main's innerHTML to 0


}

// When an operand is clicked, capture the number
function bindOperandClickedEvent(e){

	captureNumbers(e.target.innerHTML);

}

// Clear the input screen (reset to 0) and operations array
function clearAll(){

	operations = [];
	//Set #output-record's innerHTML to an empty string

}

// Clear the last entered digit or operator and reset input screen to 0 (history maintained)
function clearLast(){

	operations.pop();
	//Set #output-record's innerHTML to the new array (stringified)
}

$(document).ready(function(){


});