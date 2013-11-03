function Robot() {
	var orientation = "N";

	this.move = function (direction) {
		if (direction == "L")
			orientation = "W";
		else if (direction == "R")
			orientation = "E";
	};

	this.getOrientation = function () {
		return orientation;
	};

	this.getPosition = function () {
		return { x: 0, y: 0 };
	};
};

module.exports = Robot;