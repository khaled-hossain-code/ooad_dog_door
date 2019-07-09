export class DogDoor {
  private open: boolean;

  constructor() {
    this.open = false;
  }

  public openDoor(): void {
    console.log('The dog door opens');
    this.open = true;
  }

  public closeDoor(): void {
    console.log('The dog door closes');
    this.open = false;
  }

  public isOpen(): boolean {
    return this.open;
  }
}
