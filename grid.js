function Grid(length, height) {
	var forbidden = [];

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