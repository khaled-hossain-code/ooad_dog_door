import { DogDoor } from './dogDoor';

export class BarkRecognizer {
  private door: DogDoor;
  constructor(door: DogDoor){
    this.door = door;
  }

  public recognize(bark: string): void{
    console.log(`Barkrecognizer: Heard a ${bark}`);
    this.door.openDoor();
  }
}