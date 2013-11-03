var robot = require("../robots.js");

describe("robot movement", function () {
	it("should turn 90 degrees left", function() {
		robot.move("L");
		var orientation = robot.getOrientation();
		expect(orientation).toBe("W");
	});
});