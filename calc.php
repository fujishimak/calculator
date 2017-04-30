<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initialscale=1">
	
	<title>Arithmomichani</title>

	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/calc.css">

</head>
<body>

<!-- Hold the body of the calculator -->
<div id="wrapper">

<div id="calc-elements" class="container-fluid">

	<div id="banner">freeCodeCamp Calculator!</div>

<!-- Output div to show record or operations, actual input from the user and results -->
	<div id="output" class="row">
		<div id="output-record">0</div>
		<div id="output-main">0</div>
	</div>

	<div class="row keypad">
		<div class="col-md-3"><button class="btn btn-default">CE</button></div>
		<div class="col-md-3"><button class="btn btn-default">C</button></div>
		<div class="col-md-3"><button class="btn btn-default operator">SQ</button></div>
		<div class="col-md-3"><button id="divide" class="btn btn-default operator">/</button></div>
	</div>

	<div class="row keypad">
		<div class="col-md-3"><button class="btn btn-default">7</button></div>
		<div class="col-md-3"><button class="btn btn-default">8</button></div>
		<div class="col-md-3"><button class="btn btn-default">9</button></div>
		<div class="col-md-3"><button id="multiply" class="btn btn-default operator">X</button></div>		
	</div>

	<div class="row keypad">
		<div class="col-md-3"><button class="btn btn-default">4</button></div>
		<div class="col-md-3"><button class="btn btn-default">5</button></div>
		<div class="col-md-3"><button class="btn btn-default">6</button></div>
		<div class="col-md-3"><button id="subtract" class="btn btn-default operator">-</button></div>
	</div>

	<div class="row keypad">
		<div class="col-md-3"><button class="btn btn-default">1</button></div>
		<div class="col-md-3"><button class="btn btn-default">2</button></div>
		<div class="col-md-3"><button class="btn btn-default">3</button></div>
		<div class="col-md-3"><button  id="add" class="btn btn-default operator">+</button></div>		
	</div>

	<div class="row keypad">
		<div class="col-md-3"><button class="btn btn-default">+/-</button></div>
		<div class="col-md-3"><button class="btn btn-default">0</button></div>
		<div class="col-md-3"><button class="btn btn-default">.</button></div>
		<div id="sum" class="col-md-3"><button class="btn btn-default operator">=</button></div>		
	</div>

</div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script> -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
<script src="js/calc.js"></script>
</body>
</html>