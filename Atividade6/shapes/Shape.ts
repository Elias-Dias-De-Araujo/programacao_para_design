import { Point2D } from "./Point2D";

export abstract class Shape {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): String {
        return this.name;
    }

    public abstract inside(point: Point2D): boolean;
    public abstract getArea(): number;
    public abstract getPerimeter(): number;
    public abstract info(): string;

    public toString(): string {
        return "" + this.getName();
    }
}
