// Function called whenever user tab on any box
function game() {

	// Setting DOM to all boxes or input field
  var winner = document.getElementById("winner")
  var box1, box2, box3, box4, box5, box6, box7, box8, box9;
	box1 = document.getElementById("box1").value;
	box2 = document.getElementById("box2").value;
	box3 = document.getElementById("box3").value;
	box4 = document.getElementById("box4").value;
	box5 = document.getElementById("box5").value;
	box6 = document.getElementById("box6").value;
	box7 = document.getElementById("box7").value;
	box8 = document.getElementById("box8").value;
	box9 = document.getElementById("box9").value;

	// Checking if Player x won or not and after
	// that disabled all the other fields
	if ((box1 == 'x') && (box2 == 'x') && (box3 == 'x')) {
		document.getElementById('message')
			.innerHTML = "Player x won";
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
    winner.classList.add("show")
	}
	else if ((box1 == 'x') && (box4 == 'x') && (box7 == 'x')) {
		document.getElementById('message')
			.innerHTML = "Player x won";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
    winner.classList.add("show")

	}
	else if ((box7 == 'x') && (box8 == 'x') && (box9 == 'x')) {
		document.getElementById('message')
			.innerHTML = "Player x won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
    winner.classList.add("show")
	}
	else if ((box3 == 'x') && (box6 == 'x') && (box9 == 'x')) {
		document.getElementById('message')
			.innerHTML = "Player x won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
    winner.classList.add("show")
	}
	else if ((box1 == 'x') && (box5 == 'x') && (box9 == 'x')) {
		document.getElementById('message')
			.innerHTML = "Player x won";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
    winner.classList.add("show")
	}
	else if ((box3 == 'x') && (box5 == 'x') && (box7 == 'x')) {
		document.getElementById('message')
			.innerHTML = "Player x won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
    winner.classList.add("show")
	}
	else if ((box2 == 'x') && (box5 == 'x') && (box8 == 'x')) {
		document.getElementById('message')
			.innerHTML = "Player x won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box9").disabled = true;
    winner.classList.add("show")
	}
	else if ((box4 == 'x') && (box5 == 'x') && (box6 == 'x')) {
		document.getElementById('message')
			.innerHTML = "Player x won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
    winner.classList.add("show")
	}

	// Checking of Player x finsh
	// Checking for Player o starts, Is player o won or
	// not and after that disabled all the other fields
	else if ((box1 == 'o') && (box2 == 'o') && (box3 == 'o')) {
		document.getElementById('message')
			.innerHTML = "Player o won";
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
    winner.classList.add("show")
	}
	else if ((box1 == 'o') && (box4 == 'o') && (box7 == 'o')) {
		document.getElementById('message')
			.innerHTML = "Player o won";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
    winner.classList.add("show")
	}
	else if ((box7 == 'o') && (box8 == 'o') && (box9 == 'o')) {
		document.getElementById('message')
			.innerHTML = "Player o won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box6").disabled = true;
    winner.classList.add("show")
	}
	else if ((box3 == 'o') && (box6 == 'o') && (box9 == 'o')) {
		document.getElementById('message')
			.innerHTML = "Player o won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box5").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
    winner.classList.add("show")
	}
	else if ((box1 == 'o') && (box5 == 'o') && (box9 == 'o')) {
		document.getElementById('message')
			.innerHTML = "Player o won";
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
    winner.classList.add("show")
	}
	else if ((box3 == 'o') && (box5 == 'o') && (box7 == 'o')) {
		document.getElementById('message')
			.innerHTML = "Player o won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
    winner.classList.add("show")
	}
	else if ((box2 == 'o') && (box5 == 'o') && (box8 == 'o')) {
		document.getElementById('message')
			.innerHTML = "Player o won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box4").disabled = true;
		document.getElementById("box6").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box9").disabled = true;
    winner.classList.add("show")
	}
	else if ((box4 == 'o') && (box5 == 'o') && (box6 == 'o')) {
		document.getElementById('message')
			.innerHTML = "Player o won";
		document.getElementById("box1").disabled = true;
		document.getElementById("box2").disabled = true;
		document.getElementById("box3").disabled = true;
		document.getElementById("box7").disabled = true;
		document.getElementById("box8").disabled = true;
		document.getElementById("box9").disabled = true;
    winner.classList.add("show")
	}

	// Checking of Player o finsh
	// Here, Checking about Tie
	else if ((box1 == 'x' || box1 == 'o') && (box2 == 'x'
		|| box2 == 'o') && (box3 == 'x' || box3 == 'o') &&
		(box4 == 'x' || box4 == 'o') && (box5 == 'x' ||
		box5 == 'o') && (box6 == 'x' || box6 == 'o') &&
		(box7 == 'x' || box7 == 'o') && (box8 == 'x' ||
		box8 == 'o') && (box9 == 'x' || box9 == 'o')) {
			document.getElementById('message')
				.innerHTML = "Match Tie";
        winner.classList.add("show")
      }
	else {

		// Here, messageing Result
		if (flag == 1) {
			document.getElementById('message')
				.innerHTML = "Player x Turn";
		}
		else {
			document.getElementById('message')
				.innerHTML = "Player o Turn";
		}
	}
}

// Function to reset game
function reset() {
	location.reload();
	document.getElementById('box1').value = '';
	document.getElementById("box2").value = '';
	document.getElementById("box3").value = '';
	document.getElementById("box4").value = '';
	document.getElementById("box5").value = '';
	document.getElementById("box6").value = '';
	document.getElementById("box7").value = '';
	document.getElementById("box8").value = '';
	document.getElementById("box9").value = '';

}

// Here onwards, functions check turn of the player
// and put accordingly value x or o
flag = 1;
function block1() {
	if (flag == 1) {
		document.getElementById("box1").value = "x";
		document.getElementById("box1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box1").value = "o";
		document.getElementById("box1").disabled = true;
		flag = 1;
	}
}

function block2() {
	if (flag == 1) {
		document.getElementById("box2").value = "x";
		document.getElementById("box2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box2").value = "o";
		document.getElementById("box2").disabled = true;
		flag = 1;
	}
}

function block3() {
	if (flag == 1) {
		document.getElementById("box3").value = "x";
		document.getElementById("box3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box3").value = "o";
		document.getElementById("box3").disabled = true;
		flag = 1;
	}
}

function block4() {
	if (flag == 1) {
		document.getElementById("box4").value = "x";
		document.getElementById("box4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box4").value = "o";
		document.getElementById("box4").disabled = true;
		flag = 1;
	}
}

function block5() {
	if (flag == 1) {
		document.getElementById("box5").value = "x";
		document.getElementById("box5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box5").value = "o";
		document.getElementById("box5").disabled = true;
		flag = 1;
	}
}

function block6() {
	if (flag == 1) {
		document.getElementById("box6").value = "x";
		document.getElementById("box6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box6").value = "o";
		document.getElementById("box6").disabled = true;
		flag = 1;
	}
}

function block7() {
	if (flag == 1) {
		document.getElementById("box7").value = "x";
		document.getElementById("box7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box7").value = "o";
		document.getElementById("box7").disabled = true;
		flag = 1;
	}
}

function block8() {
	if (flag == 1) {
		document.getElementById("box8").value = "x";
		document.getElementById("box8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box8").value = "o";
		document.getElementById("box8").disabled = true;
		flag = 1;
	}
}

function block9() {
	if (flag == 1) {
		document.getElementById("box9").value = "x";
		document.getElementById("box9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("box9").value = "o";
		document.getElementById("box9").disabled = true;
		flag = 1;
	}
}
