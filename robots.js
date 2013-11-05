var Position = require("./position.js");

var north = "N";
var east = "E";
var south = "S";
var west = "W";
var forbidden = new Array();

function Robot(grid) {
	var position = new Position();
	var right = { "N":"E", "E":"S", "S":"W", "W":"N" };
	var left = { "N":"W", "W":"S", "S":"E", "E":"N" };

	this.setPosition = function (command) {
		command = command.split(" ");
		position.x = command[0];
		position.y = command[1];
		position.orientation = command[2];
	};

	this.getPosition = function () {
		return position;
	};

	this.moveForwards = function () {
		var startPosition = position.toString();

		if (this.isLost() || grid.isForbidden(startPosition))
			return;

		if (position.orientation == north) {
			position.y += 1;
		} 
		else if (position.orientation == east) {
			position.x += 1;
		}
		else if (position.orientation == south) {
			position.y -= 1;
		}
		else if (position.orientation == west) {
			position.x -= 1;
		}

		if (position.isOffThe(grid)) {
			position.lost = true;
			grid.addForbidden(startPosition);
		} 
	};

	this.turnLeft = function() {
		position.orientation = left[position.orientation];
	};

	this.turnRight = function () {
		position.orientation = right[position.orientation];
	};

	isLeftTurn = function (instruction) {
		return instruction == "L";
	};

	isRightTurn = function (instruction) {
		return instruction == "R";
	};

	isForwardMovement = function (instruction) {
		return instruction == "F";
	};

	this.isLost = function () {
		return position.lost;
	}
};

module.exports = Robot;