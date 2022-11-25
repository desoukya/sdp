import { Shape } from '../shapes/Shape';
import { Circle } from '../shapes/Circle';
import { Rectangle } from '../shapes/Rectangle';
import { Square } from '../shapes/Square';
import { ShapeType } from "../enums/ShapeType";

export class ShapeFactory {
  getShape(shapeType: ShapeType): Shape {
    return {
      [ShapeType.RECTANGLE]: new Rectangle(),
      [ShapeType.SQUARE]: new Square(),
      [ShapeType.CIRCLE]: new Circle(),
    }[shapeType];
  }
}
