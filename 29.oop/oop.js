"use strict";
class Point {
    constructor() {
        this.x = 10;
        this.y = 20;
    }
}
console.log(this);
new Point();
