var Grid = require("./grid.js");
var Robot = require("./robot.js");

var instrucions = "5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL";

instrucions = instrucions.split("\n");

var gridSize = instrucions[0].split(" ");
var grid = new Grid(gridSize[0], gridSize[1]);
var robot = new Robot(grid);

for (var i = 1; i < instrucions.length; i++) {
	var instruction = instrucions[i];

	if (isNewRobot(instruction)) 
		robot = new Robot(grid);
	else if (isRobotsStartingPosition(instruction))
		robot.setPosition(instruction);
	else
		console.log(robot.move(instruction));
}

function isNewRobot(instruction) {
	return instruction === "";
}

function isRobotsStartingPosition(instruction) {
	return instruction.indexOf(" ") > -1;
}