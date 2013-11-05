var Robot = require("../robot.js");
var Grid = require("../grid.js");

describe("Given a new Robot is created", function () {
	var grid = new Grid(1,1);
	var robot = new Robot(grid);

	it("then it lands on Mars facing North", function () {
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("N");
	});
	it("then it lands on Mars in the bottom left corner", function () {
		var position = robot.getPosition();
		expect(position.x).toBe(0);
		expect(position.y).toBe(0);
	});
	it("then it lands on Mars it is not lost", function () {
		expect(robot.isLost()).toBeFalsy();
	});
	it("then it can turn left to face West", function() {
		robot.turnLeft();
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("W");
	});
	it("then it can turn left again to face South", function() {
		robot.turnLeft();
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("S");
	});
	it("then it can turn left again to face East", function() {
		robot.turnLeft();
		var orientation = robot.getPosition().orientation;
		expect(orientation).toBe("E");
	});	
	it("then it can turn left again to face North", function() {
		robot.turnLeft();
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
	it("then it can respond to multiple instructions", function () {
		var robot1 = new Robot(grid);
		var position = robot1.move("LRRLRF");
		expect(position).toBe("1 0 E");
	});
});

describe("Given a Grid of 4x4 and a Robot with a position of 3,2 East", function () {
	var grid = new Grid(3, 3);
	var robot = new Robot(grid);
	robot.setPosition("3 2 E");
	it("then it is facing East", function() {
		var positionOutput = robot.getPosition().orientation;
		expect(positionOutput).toBe("E");
	});
	it("then it is positioned at 3,2", function() {
		var positionOutput = robot.getPosition().toString();
		expect(positionOutput).toContain("3 2");
	});	
});

describe("Given a Grid of 1x1 and two robots", function () {
	var grid = new Grid();
	var robot1 = new Robot(grid);
	var robot2 = new Robot(grid);

	it("when robot 1 falls of the grid it is lost", function () {
		robot1.moveForwards();
		robot1.moveForwards();

		var positionOutput = robot1.getPosition().toString();
		expect(robot1.isLost()).toBeTruthy();
		expect(positionOutput).toBe("0 0 N LOST");
	});
	it("then robot 1 can no longer move around", function () {
		robot1.moveForwards();
		robot1.moveForwards();

		var positionOutput = robot1.getPosition().toString();
		expect(positionOutput).toBe("0 0 N LOST");
	});
	it("when robot 2 tries get lost in the same place it is not lost", function () {
		robot2.moveForwards();
		robot2.moveForwards();

		var positionOutput = robot2.getPosition().toString();
		expect(robot2.isLost()).toBeFalsy();
	});
	it("and it cannot move forwards in that direction", function () {
		robot2.moveForwards();

		var positionOutput = robot2.getPosition().toString();
		expect(positionOutput).toBe("0 0 N");
	});
});