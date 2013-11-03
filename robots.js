var Position = require("./position.js");

function Robot() {
	var orientation = "N";
	var position = new Position();

	this.move = function (direction) {
		if (direction == "L")
			position.orientation = "W";
		else if (direction == "R")
			position.orientation = "E";
	};

	this.getPosition = function () {
		return position;
	};

	this.setPosition = function (gridPosition) {
		var instructions = gridPosition.split(" ");
		var orientation = instructions[2] == undefined ? "N" : instructions[2];

		position.x = instructions[0];
		position.y = instructions[1];
		position.orientation = orientation;
	}
};

module.exports = Robot;