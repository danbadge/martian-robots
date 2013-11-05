var Position = require("../position.js");
var Grid = require("../grid.js");

describe("Given a Grid of 2x2 and a position", function () {
	var grid = new Grid(2, 2);

	it("when my coordinates are 4,1 then I am lost", function () {
		var position = new Position();
		position.x = 4;
		position.y = 1;

		var result = position.isOffThe(grid);
		expect(result).toBeTruthy();
		expect(position.lost).toBeTruthy();
	});
	it("when my coordinates are 1,2 then I am lost", function () {
		var position = new Position();
		position.x = 1;
		position.y = 3;

		var result = position.isOffThe(grid);
		expect(result).toBeTruthy();
		expect(position.lost).toBeTruthy();
	});
	it("when my coordinates are -1,1 then I am lost", function () {
		var position = new Position();
		position.x = -1;
		position.y = 1;

		var result = position.isOffThe(grid);
		expect(result).toBeTruthy();
		expect(position.lost).toBeTruthy();
	});
	it("when my coordinates are 1,-1 then I am lost", function () {
		var position = new Position();
		position.x = 1;
		position.y = -1;

		var result = position.isOffThe(grid);
		expect(result).toBeTruthy();
		expect(position.lost).toBeTruthy();
	});	
	it("when my coordinates are 1,1 then I am not lost", function () {
		var position = new Position();
		position.x = 1;
		position.y = 1;

		var result = position.isOffThe(grid);
		expect(result).toBeFalsy();
		expect(position.lost).toBeFalsy();
	});		
});