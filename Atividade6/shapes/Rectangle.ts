import { Point2D } from "./Point2D";
import { Shape } from "./Shape";

export class Rectangle extends Shape {
    private p1: Point2D;
    private p2: Point2D;

    constructor(p1: Point2D, p2: Point2D) {
        super("Rect");
        this.p1 = p1;
        this.p2 = p2;
    }

    inside(point: Point2D): boolean {
        if (
            point.x > this.p1.x &&
            point.x < this.p2.x &&
            point.y > this.p1.y &&
            point.y < this.p2.y
        ) {
            return true;
        } else {
            return false;
        }
    }
    getArea(): number {
        return (this.p2.y - this.p1.y) * (this.p2.x - this.p1.x);
    }
    getPerimeter(): number {
        return 2 * (this.p2.y - this.p1.y) + 2 * (this.p2.x - this.p1.x);
    }

    public toString(): string {
        return "Rect: P1=" + this.p1.toString() + ", P2=" + this.p2.toString();
    }

    info() {
        return (
            "Rect: A= " +
            this.getArea().toFixed(2) +
            " P=" +
            this.getPerimeter().toFixed(2)
        );
    }
}
