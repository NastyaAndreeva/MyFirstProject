function Vector(x, y) {
    this.x = x;
    this.y = y;
    this.plus = function (Vector) {
        this.Vector = Vector;
        x = this.x + Vector.x;
        y = this.y + Vector.y;
        return `Vector {x: ${x}, y: ${y}}`;
    },
    this.minus = function (Vector) {
        x = this.x - Vector.x;
        y = this.y - Vector.y;
        return `Vector {x: ${x}, y: ${y}}`;
    }
}

Object.defineProperty(Vector.prototype, "length", {
    get: function () {
        return Math.sqrt((this.x * this.x + this.y * this.y));
    }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(-3, 4).length);
