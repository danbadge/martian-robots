function Position(x, y, orientation) {
	this.x = 0;
	this.y = 0;
	this.orientation = "N"
	this.lost = false;

	this.toString = function () {
		return this.x + " " + this.y + " " + this.orientation + (this.lost ? " LOST" : "");
	};

	this.isOffThe = function (grid) {
		return (this.x > grid.length 
			|| this.y > grid.height
			|| this.y < 0
			|| this.x < 0);
	}
};

module.exports = Position;