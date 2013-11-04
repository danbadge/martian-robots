var Robot = require("../robots.js");

describe("Given a new Robot is created", function () {
	var robot = new Robot();

	it("then it lands on Mars facing North", function () {
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("N");
	});
	it("then it lands on Mars in the bottom left corner", function () {
		var position = robot.getPosition();
		expect(position.x).toBe(0);
		expect(position.y).toBe(0);
	});
	it("then it can turn left to face West", function() {
		robot.turnLeft()
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("W");
	});
	it("then it can turn left again to face South", function() {
		robot.turnLeft()
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("S");
	});
	it("then it can turn left again to face East", function() {
		robot.turnLeft()
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("E");
	});	
	it("then it can turn left again to face North", function() {
		robot.turnLeft()
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("N");
	});		
	it("then it can turn right", function() {
		robot.turnRight();
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("E");
	});
	it("then it can turn right again to face South", function() {
		robot.turnRight();
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("S");
	});
	it("then it can turn right again to face West", function() {
		robot.turnRight();
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("W");
	});	
	it("then it can turn right again to face North", function() {
		robot.turnRight();
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