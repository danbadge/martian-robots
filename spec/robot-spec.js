var Robot = require("../robots.js");

describe("Given a new Robot", function () {
	it("should land on Mars facing North", function () {
		var robot = new Robot();
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("N");
	});
	it("should land in the bottom left corner of Mars", function () {
		var robot = new Robot();
		var position = robot.getPosition();
		expect(position.x).toBe(0);
		expect(position.y).toBe(0);
	});
	it("should turn 90 degrees left", function() {
		var robot = new Robot();
		robot.move("L");
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("W");
	});
	it("should turn left to face south if it was facing west", function() {
		var robot = new Robot();
		robot.setPosition("1 1 W")
		robot.move("L");
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("S");
	});
	it("should turn right to face west if it was facing south", function() {
		var robot = new Robot();
		robot.setPosition("1 1 S")
		robot.move("L");
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("E");
	});
	it("should turn right to face north if it was facing east", function() {
		var robot = new Robot();
		robot.setPosition("1 1 E")
		robot.move("L");
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("N");
	});	
	it("should turn 90 degrees right", function() {
		var robot = new Robot();
		robot.move("R");
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("E");
	});
	it("should turn right to face south if it was facing east", function() {
		var robot = new Robot();
		robot.setPosition("1 1 E")
		robot.move("R");
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("S");
	});
	it("should turn right to face west if it was facing south", function() {
		var robot = new Robot();
		robot.setPosition("1 1 S")
		robot.move("R");
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("W");
	});
	it("should turn right to face north if it was facing west", function() {
		var robot = new Robot();
		robot.setPosition("1 1 W")
		robot.move("R");
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("N");
	});	
	it("should set position to top right of Mars", function() {
		var robot = new Robot();
		robot.setPosition("5 3");
		var positionOutput = robot.getPosition().toString();
		expect(positionOutput).toBe("5 3 N");
	});
	it("should set orientation correctly when setting position", function() {
		var robot = new Robot();
		robot.setPosition("1 1 E");
		var positionOutput = robot.getPosition().toString();
		expect(positionOutput).toBe("1 1 E");
	});	
	it("should move one place up when facing north", function() {
		var robot = new Robot();
		robot.move("F");
		var positionOutput = robot.getPosition().toString();
		expect(positionOutput).toBe("0 1 N");
	});
	it("should move one place to the right when facing east", function() {
		var robot = new Robot();
		robot.setPosition("1 1 E")
		robot.move("F");
		var positionOutput = robot.getPosition().toString();
		expect(positionOutput).toBe("2 1 E");
	});
	it("should move one place to the left when facing west", function() {
		var robot = new Robot();
		robot.setPosition("2 3 W")
		robot.move("F");
		var positionOutput = robot.getPosition().toString();
		expect(positionOutput).toBe("1 3 W");
	});
	it("should move one place down when facing south", function() {
		var robot = new Robot();
		robot.setPosition("4 3 S")
		robot.move("F");
		var positionOutput = robot.getPosition().toString();
		expect(positionOutput).toBe("4 2 S");
	});	
});