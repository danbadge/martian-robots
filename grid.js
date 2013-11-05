function Grid(length, height) {
	var forbidden = new Array();

	this.length = (length == undefined ? 1 : length);
	this.height = (height == undefined ? 1 : height);

	this.addForbidden = function (position) {
		forbidden.push(position);
	};

	this.isForbidden = function (position) {
		return forbidden.indexOf(position) > -1;
	};
};

module.exports = Grid;