import { Command } from "commander";
import { Day01 } from "./days/01/day01";
import { Day02 } from "./days/02/day02";
import { Day03 } from "./days/03/day03";
import { Day04 } from "./days/04/day04";


process.chdir(__dirname); // makes nodemon not bitch with paths

let day = 4; // default day, should be current day

// set up console args
const commander = new Command();
commander
  .requiredOption('-d, --day <d>', 'Day to run script for', day.toString())
  .action(options => {
    day = parseInt(options.day, 10);
    if (isNaN(day)) {
      throw new Error('Day must be a number')
    }
  })
  .parse(process.argv);

console.log(`Day ${day}:`);

// cba to implement reflections so manual switch/case it is
switch (day) {
  case 1:
    Day01.run();
    break;
  case 2:
    Day02.run();
    break;
  case 3:
    Day03.run();
    break;
  case 4:
    Day04.run();
    break;
  default:
    console.log('Day is not done yet.');
}
