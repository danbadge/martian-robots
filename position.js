function Position() {
	this.x = 0;
	this.y = 0;
	this.orientation = "N";

	this.toString = function () {
		return this.x + " " + this.y + " " + this.orientation;
	};
};

module.exports = Position;