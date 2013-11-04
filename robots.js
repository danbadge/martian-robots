var Position = require("./position.js");

var north = "N";
var east = "E";
var south = "S";
var west = "W";

function Robot() {
	var position = new Position();
	var right = { "N":"E", "E":"S", "S":"W", "W":"N" };
	var left = { "N":"W", "W":"S", "S":"E", "E":"N" };

	this.getPosition = function () {
		return position;
	};

	this.moveForwards = function () {
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
};

module.exports = Robot;