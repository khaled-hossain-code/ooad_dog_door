import { DogDoor } from './dogDoor';
import { Remote } from './remote';

let door: DogDoor;
let remote: Remote;

beforeEach(() => {
  door = new DogDoor();
  remote = new Remote(door);
});

test("door open/close with remote", () => {
  expect(door.isOpen()).toBe(false);
  remote.pressButton();
  expect(door.isOpen()).toBe(true);
  remote.pressButton();
  expect(door.isOpen()).toBe(false);
});

test('door closes automatically', () => {
  jest.useFakeTimers();
  expect(door.isOpen()).toBe(false);
  remote.pressButton();
  expect(door.isOpen()).toBe(true);
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

