function Grid(length, height) {
	var forbidden = [];

	if (length > 50 || height > 50)
		throw new Error("Grid size cannot be greater than 50x50");
	else if (length < 0 || height < 0)
		throw new Error("Grid size cannot be smaller than 1x1");

	this.length = (length === undefined ? 0 : length);
	this.height = (height === undefined ? 0 : height);

	this.addForbidden = function (position) {
		forbidden.push(position);
	};

	this.isForbidden = function (position) {
		return forbidden.indexOf(position) > -1;
	};
}

module.exports = Grid;