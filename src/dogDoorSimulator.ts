import { DogDoor } from "./dogDoor";
import { Remote } from './remote';
import { BarkRecognizer } from './BarkRecognizer';

function main() {
  const door = new DogDoor();
  const remote = new Remote(door);
  const recognizer = new BarkRecognizer(door);

  // remote.pressButton();
  recognizer.recognize('woof woof');
}

main();