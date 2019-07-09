"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DogDoor = /** @class */ (function () {
    function DogDoor() {
        this.open = false;
    }
    DogDoor.prototype.openDoor = function () {
        console.log('The dog door opens');
        this.open = true;
    };
    DogDoor.prototype.closeDoor = function () {
        console.log('The dog door closes');
        this.open = false;
    };
    DogDoor.prototype.isOpen = function () {
        return this.open;
    };
    return DogDoor;
}());
exports.DogDoor = DogDoor;
//# sourceMappingURL=dogDoor.js.map