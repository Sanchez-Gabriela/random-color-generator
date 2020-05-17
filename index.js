const chalk = require("chalk");
const randomColor = require("randomcolor");
const color = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});
console.log(chalk.hex(color)('##############################\n##############################\n##############################\n##########  ' + `${color}` + '  #########\n##############################\n##############################\n##############################'));




