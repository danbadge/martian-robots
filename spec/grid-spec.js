var Grid = require("../grid.js");

describe("Given a new Grid", function () {
	it("with a height of 51 then throw an error", function () {
		expect(function () { new Grid(2, 51)}).toThrow(new Error("Grid size cannot be greater than 50x50"));
	});
	it("with a width of 51 then throw an error", function () {
		expect(function () { new Grid(51, 1)}).toThrow(new Error("Grid size cannot be greater than 50x50"));
	});
	it("with a negative height then throw an error", function () {
		expect(function () { new Grid(45, -1)}).toThrow(new Error("Grid size cannot be smaller than 1x1"));
	});
	it("with a negative width then throw an error", function () {
		expect(function () { new Grid(-1, 30)}).toThrow(new Error("Grid size cannot be smaller than 1x1"));
	});		
});