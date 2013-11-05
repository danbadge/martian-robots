var Grid = require("./grid.js");
var Robot = require("./robots.js");

var commands = "5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL";

commands = commands.split("\n");

var gridSize = commands[0].split(" ")
var grid = new Grid(gridSize[0], gridSize[1]);
var robot = new Robot(grid);

for (var i = 1; i < commands.length; i++) {
	if (commands[i] == "") {
		robot = new Robot(grid);
	} 
	else if (commands[i].indexOf(" ") > -1) {
		robot.setPosition(commands[i]);
	} 
	else {
		console.log(robot.move(commands[i]));
	}
}
