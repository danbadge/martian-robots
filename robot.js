var Position = require("./position.js");

function Robot(grid) {
	var position = new Position();
	var right = { "N":"E", "E":"S", "S":"W", "W":"N" };
	var left = { "N":"W", "W":"S", "S":"E", "E":"N" };

	this.setPosition = function (startPosition) {
		startPosition = startPosition.split(" ");
		position.x = startPosition[0];
		position.y = startPosition[1];
		position.orientation = startPosition[2];
	};

	this.getPosition = function () {
		return position;
	};

	this.move = function (instructions) {
		for (var i = 0; i < instructions.length; i++) {
			if (this.isLost()) break;

			var instruction = instructions.charAt(i);

			if (isLeftTurn(instruction)) 
				this.turnLeft();
			if (isRightTurn(instruction)) 
				this.turnRight();
			if (isForwardMovement(instruction)) 
				this.moveForwards();
		}
		return position.toString();
	};

	this.moveForwards = function () {
		var startingPosition = position.toString();

		if (this.isLost() || grid.hasForbidden(startingPosition))
			return;

		if (position.orientation == "N")
			position.y++; 
		if (position.orientation == "E")
			position.x++;
		if (position.orientation == "S")
			position.y--;
		if (position.orientation == "W")
			position.x--;
		
		if (position.isOffThe(grid))
			grid.addForbidden(startingPosition);
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
	};
}

module.exports = Robot;