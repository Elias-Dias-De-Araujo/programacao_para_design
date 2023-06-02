import { Point2D } from "./Point2D";

export class Calc {
    static distance(a: Point2D, b: Point2D): number {
        const disX = Math.pow(b.x - a.x, 2);
        const disY = Math.pow(b.y - a.y, 2);

        const result = Math.sqrt(disX + disY);

        return result;
    }
}
