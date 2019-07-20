import { DogDoor } from "./dogDoor";
import { Remote } from './remote';

function main() {
  const door = new DogDoor();
  const remote = new Remote(door);

  remote.pressButton();
}

main();