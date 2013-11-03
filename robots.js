var Position = require("./position.js");

var north = "N";
var east = "E";
var south = "S";
var west = "W";
var direction = [ north, east, south, west ];

function Robot() {
	var orientation = north;
	var position = new Position();

	this.move = function (instruction) {
		if (isLeftTurn(instruction)){
			turnLeft();
		} 
		else if (isRightTurn(instruction)) {
			turnRight();
		}
		else if (isForwardMovement(instruction)) {
			moveForwards();
		}
	};

	this.getPosition = function () {
		return position;
	};

	this.setPosition = function (instructions) {
		var instructions = instructions.split(" ");
		var orientation = instructions[2] == undefined ? north : instructions[2];

		position.x = parseInt(instructions[0]);
		position.y = parseInt(instructions[1]);
		position.orientation = orientation;
	};

	moveForwards = function () {
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

	turnLeft = function() {
		var next = direction.indexOf(position.orientation) - 1;
		if (next < 0)
			position.orientation = direction[direction.length - 1];
		else 
			position.orientation = direction[next];
	};

	turnRight = function () {
		var next = direction.indexOf(position.orientation) + 1;
		if (next >= direction.length)
			position.orientation = direction[0];
		else 
			position.orientation = direction[next];
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