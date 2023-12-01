import { Day01 } from "./days/01/day01";
import { Day02 } from "./days/02/day02";

process.chdir(__dirname); // makes nodemon not bitch with paths

const day: number = 1;

switch (day) {
  case 1:
    Day01.run();
    break;
  case 2:
    Day02.run();
    break;
}
