var orientation;

exports.move = function (direction) {
	if (direction == "L")
		orientation = "W";
	else if (direction == "R")
		orientation = "E";
};

exports.getOrientation = function () {
	return orientation;
};