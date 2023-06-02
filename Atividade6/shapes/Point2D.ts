export class Point2D {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public toString(): string {
        return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ")";
    }
}
