import { Circle } from "./Circle";
import { Point2D } from "./Point2D";
import { Rectangle } from "./Rectangle";

//#__case creating figures
const circ = new Circle(new Point2D(2, 3), 5);

//#__case showing
console.log(circ.toString());

// #__case creating more figures
const rect = new Rectangle(new Point2D(1, 1), new Point2D(3, 3));
const rect1 = new Rectangle(new Point2D(2, 4.53), new Point2D(5, 10));
const circ1 = new Circle(new Point2D(2, 4.53), 1.5);

//#__case showing all
console.log(circ.toString());
console.log(rect.toString());
console.log(rect1.toString());
console.log(circ1.toString());

// #__case showing area and perimeter
console.log(circ.info());
console.log(rect.info());
console.log(rect1.info());
console.log(circ1.info());
