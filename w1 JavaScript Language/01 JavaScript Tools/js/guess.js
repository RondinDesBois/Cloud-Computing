let targetNumber;
var rep = true
var n=0;

function init () {
	console.log("You have to code this!");
	console.log(targetNumber);
	targetNumber = Math.floor(Math.random() * 10) + 1;
	document.getElementById("form").addEventListener("submit", function(e) { e.preventDefault(); check(document.getElementById("number").value) });
}


function check (value) {
  if ( value == targetNumber ) showWin();
  else if ( value != targetNumber && n<5) showError();
  else showLoss();
}

function showWin () {
	document.getElementById("result").innerHTML = "win";
	alert("win" + targetNumber);
	rep = false;
	targetNumber = Math.floor(Math.random() * 10) + 1;
	n=0;
	}

function showError () {
	//alert("err" + targetNumber);
		document.getElementById("result").innerHTML = "err";
	n++;
}

function showLoss () {
	document.getElementById("form").style.display="none";
	document.getElementById("result").innerHTML = "defeat";
	n=0;
	rep = true;
}

init();
