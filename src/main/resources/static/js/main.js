"use strict";

var scorep1 = 0;
var scorep2 = 0;
var scorep3 = 0;
var scorep4 = 0;
var phase = 1;
var numTilesRevealed = 0;
var numTilesSelected = 0;
var isPlayerMove = true;
var currentPlayer = 1;
var currentPlayerName;

$(document).ready(function() {
	console.log("Window loaded and ready");
	myResize();
});

//dynamic - works after class being added
$(document).on('click', "div.cell", function() {
	if (!isPlayerMove) {
		return;
	}
	
	let e = $(this);
	if (e.hasClass("cellAvailable")) {
		revealCell(e);
	} else if (e.hasClass("cellColor5")) {
		ownCell(e);
	}
});

function ownCell(e) {
	let cellPower = e.attr("data-power");
	e.attr("data-owner", currentPlayer);
	e.attr("data-color", currentPlayer);
	e.addClass("cellColor" + currentPlayer);
	e.removeClass("cellColor5");
	
	switch (parseInt(1,10)) {
		case 1: scorep1 += parseInt(cellPower,10); $('#scorep1').text(scorep1); break;
		case 2: scorep2 += parseInt(cellPower,10); $('#scorep2').text(scorep2); break;
		case 3: scorep3 += parseInt(cellPower,10); $('#scorep3').text(scorep3); break;
		case 4: scorep4 += parseInt(cellPower,10); $('#scorep4').text(scorep4); break;
	}
	
	numTilesSelected++;
	
	if (numTilesSelected == 1) {
		$('#sm1').text("");
		$('#sm2').text(currentPlayerName + ": Turn over");
		$('#sm3').text("");		
	}
}

function revealCell(e) {
	let cellColor = e.attr("data-color");
	let cellPower = e.attr("data-power");
	let cellOwner = e.attr("data-owner");
	
	if (e.hasClass("cellColor" + cellColor)) {
		return;
	}
	
	e.removeClass("cellAvailable");
	
	//e.addClass("cellColor" + cellColor);
	
	if (cellOwner != cellColor) {
		e.addClass("cellOwner" + cellOwner);
	}
	
	if (cellPower == '1' || cellPower == '2' || cellPower == '3' || cellPower == '4') {
		e.text("");
	} else {
		e.text(cellPower);
	}
	
	if (cellPower == '5') {
		e.addClass("cellColor2");
	} else if (cellPower == '6') {
		e.addClass("cellColor3");
	} if (cellPower == '7') {
		e.addClass("cellColor4");
	} else {
		e.addClass("cellColor1");
	}
	
	if (phase == 1) {
		numTilesRevealed++;
		if (numTilesRevealed == 2) {
			$('#sm1').text("");
			$('#sm2').text(currentPlayerName + ": Select 1 black tile...");
			$('#sm3').text("");
		}
	}
}

function hideCell(e) {	
	let cellColor = e.attr("data-color");
	let cellPower = e.attr("data-power");
	let cellOwner = e.attr("data-owner");
	
	if (!e.hasClass("cellColor" + cellColor)) {
		return;
	}
	
	e.removeClass("cellColor" + cellColor);
	e.addClass("cellAvailable");
	
	if (cellOwner != cellColor) {
		e.removeClass("cellOwner" + cellOwner);
	}
	
	e.text("");
	
	switch (parseInt(cellOwner,10)) {
		case 1: scorep1 -= parseInt(cellPower,10); $('#scorep1').text(scorep1); break;
		case 2: scorep2 -= parseInt(cellPower,10); $('#scorep2').text(scorep2); break;
		case 3: scorep3 -= parseInt(cellPower,10); $('#scorep3').text(scorep3); break;
		case 4: scorep4 -= parseInt(cellPower,10); $('#scorep4').text(scorep4); break;
	}
}

$(document).on('click', "button#btnShowAllBoard", function() {	
	console.log("Show all board");
	for (let i=0;i<20;i++) {
		for (let j=0;j<20;j++) {
			let e = $('#cell_' + i + "_"+ j);
			revealCell(e);
		}
	}
});

$(document).on('click', "button#btnHideAllBoard", function() {	
	console.log("Hide all board");
	for (let i=0;i<20;i++) {
		for (let j=0;j<20;j++) {
			let e = $('#cell_' + i + "_"+ j);
			hideCell(e);
		}
	}
});

function beginGame() {
	$('#btnInstructions').hide();
	$('#btnStartNewGame').hide();
	
	$('#sm1').text("");
	$('#sm2').text(currentPlayerName + ": Select 2 gray tiles...");
	$('#sm3').text("");
	
	GoInFullscreen(document.querySelector("#gameSpace"));
}

function GoInFullscreen(element) {
	if(element.requestFullscreen)
		element.requestFullscreen();
	else if(element.mozRequestFullScreen)
		element.mozRequestFullScreen();
	else if(element.webkitRequestFullscreen)
		element.webkitRequestFullscreen();
	else if(element.msRequestFullscreen)
		element.msRequestFullscreen();
}

window.onresize = function() {
	myResize();
}

function myResize() {
	console.log("window resized");
	let w = $(document).width();
	let h = w * .55;
	$('#gameSpace').css('width', w);
	$('#gameSpace').css('height', h);
}

$(document).on('click', "button#btnInstructions", function() {	
	console.log("Instructions");
	$("#myModalInstructions").modal('show');
});

$(document).on('click', "button#btnStartNewGame", function() {	
	console.log("New game");
	$("#myModalStartNewGame").modal('show');
});

$(document).on('click', '.startNewGame', function() {
	currentPlayerName = $('#userName').val();
	$('#scoreBoxUserName').text(currentPlayerName);
	beginGame();
});
	
$(document).on('click', '.startNewGame2', function() {
	currentPlayerName = $('#userName2').val();
	$('#scoreBoxUserName').text(currentPlayerName);
	beginGame();
});
	
	
	
	

