"use strict";

var scorep1 = 0;
var scorep2 = 0;
var scorep3 = 0;
var scorep4 = 0;

$(document).ready(function() {
	console.log("Window loaded and ready");
});

//dynamic - works after class being added
$(document).on('click', "div.cell", function() {
	let e = $(this);
	revealCell(e);
});

function revealCell(e) {
	let cellColor = e.attr("data-color");
	let cellPower = e.attr("data-power");
	let cellOwner = e.attr("data-owner");
	
	if (e.hasClass("cellColor" + cellColor)) {
		return;
	}

	e.addClass("cellColor" + cellColor);
	
	if (cellOwner != cellColor) {
		e.addClass("cellOwner" + cellOwner);
	}
	
	e.text(cellPower);
	
	switch (parseInt(cellOwner,10)) {
		case 1: scorep1 += parseInt(cellPower,10); $('#scorep1').text(scorep1); break;
		case 2: scorep2 += parseInt(cellPower,10); $('#scorep2').text(scorep2); break;
		case 3: scorep3 += parseInt(cellPower,10); $('#scorep3').text(scorep3); break;
		case 4: scorep4 += parseInt(cellPower,10); $('#scorep4').text(scorep4); break;
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
	for (let i=0;i<10;i++) {
		for (let j=0;j<10;j++) {
			let e = $('#cell_' + i + "_"+ j);
			revealCell(e);
		}
	}
});

$(document).on('click', "button#btnHideAllBoard", function() {	
	console.log("Hide all board");
	for (let i=0;i<10;i++) {
		for (let j=0;j<10;j++) {
			let e = $('#cell_' + i + "_"+ j);
			hideCell(e);
		}
	}
});

$(document).on('click', "button#btnInstructions", function() {	
	console.log("Instructions");
	$("#myModalInstructions").modal('show');
});

$(document).on('click', "button#btnStartNewGame", function() {	
	console.log("New game");
	$("#myModalStartNewGame").modal('show');
});

$(document).on('click', '.startNewGame', function() {
	let userName = $('#userName').val();
	console.log('Ready to rumble: ' + userName);
	$('#scoreBoxUserName').text(userName);
});
	
$(document).on('click', '.startNewGame2', function() {
	let userName = $('#userName2').val();
	console.log('Ready to rumble: ' + userName);
	$('#scoreBoxUserName').text(userName);
});
	
	
	
	

