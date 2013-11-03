var Robot = require("../robots.js");

describe("robot movement", function () {
	it("should start in the top left corner of 'Mars'", function () {
		var robot = new Robot();
		var position = robot.getPosition();
		expect(position.x).toBe(0);
		expect(position.y).toBe(0);
	});
	it("should turn 90 degrees left", function() {
		var robot = new Robot();
		robot.move("L");
		var orientation = robot.getOrientation();
		expect(orientation).toBe("W");
	});
	it("should turn 90 degrees right", function() {
		var robot = new Robot();
		robot.move("R");
		var orientation = robot.getOrientation();
		expect(orientation).toBe("E");
	});
});