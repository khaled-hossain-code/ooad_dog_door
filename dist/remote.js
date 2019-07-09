"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Remote = /** @class */ (function () {
    function Remote(door) {
        this.door = door;
    }
    Remote.prototype.pressButton = function () {
        console.log("Pressing the remote control button.....");
        if (this.door.isOpen()) {
            this.door.closeDoor();
        }
        else {
            this.door.openDoor();
        }
    };
    return Remote;
}());
exports.Remote = Remote;
//# sourceMappingURL=remote.js.map