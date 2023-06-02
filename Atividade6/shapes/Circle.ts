import { Point2D } from "./Point2D";
import { Shape } from "./Shape";
import { Calc } from "./Calc";

export class Circle extends Shape {
    private center: Point2D;
    private radius: number;

    constructor(center: Point2D, radius: number) {
        super("Circ");
        this.center = center;
        this.radius = radius;
    }

    inside(point: Point2D): boolean {
        const dis = Calc.distance(point, this.center);

        return dis <= this.radius;
    }
    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    public toString(): string {
        return (
            "Circ: C=" +
            this.center.toString() +
            ", R=" +
            this.radius.toFixed(2)
        );
    }

    info() {
        return (
            "Circ: A= " +
            this.getArea().toFixed(2) +
            " P=" +
            this.getPerimeter().toFixed(2)
        );
    }
}
