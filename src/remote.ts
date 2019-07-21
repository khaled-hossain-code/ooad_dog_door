import { DogDoor } from "./dogDoor";

export class Remote {
  private door: DogDoor;

  constructor(door: DogDoor) {
    this.door = door;
  }

  public pressButton(): void {
    console.log("Pressing the remote control button.....");
    if (this.door.isOpen()) {
      this.door.closeDoor();
    } else {
      this.door.openDoor();
    }
  }
}
