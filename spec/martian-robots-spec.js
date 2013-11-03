var robot = require("../robots.js");

describe("robot movement", function () {
	it("should turn 90 degrees left", function() {
		robot.move("L");
		var orientation = robot.getOrientation();
		expect(orientation).toBe("W");
	});
	it("should turn 90 degrees right", function() {
		robot.move("R");
		var orientation = robot.getOrientation();
		expect(orientation).toBe("E");
	});
});