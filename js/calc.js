var operations;

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

function addToOperations(op){

	operations += op;	
}

function bindResult(e) {

//Only invoked when = is pressed
//Break up operations around +, -, /, x
//Parse the substrings and run operations
//Output final result

}

$(document).ready(function(){


});