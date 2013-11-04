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
	it("then it can move forwards when facing North", function() {
		robot.moveForwards();
		var positionOutput = robot.getPosition().toString();
		expect(positionOutput).toBe("0 1 N");
	});
	it("then it can move forwards when facing East", function() {
		robot.turnRight();
		robot.moveForwards();
		var positionOutput = robot.getPosition().toString();
		expect(positionOutput).toBe("1 1 E");
	});
	it("then it can move forwards when facing South", function() {
		robot.turnRight();
		robot.moveForwards();
		var positionOutput = robot.getPosition().toString();
		expect(positionOutput).toBe("1 0 S");
	});
	it("then it can move forwards when facing West", function() {
		robot.turnRight();
		robot.moveForwards();
		var positionOutput = robot.getPosition().toString();
		expect(positionOutput).toBe("0 0 W");
	});
});