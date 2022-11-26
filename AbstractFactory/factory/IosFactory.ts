import { Color } from "../colors/Color";
import { ColorType } from "../enums/ColorType";
import { ShapeType } from "../enums/ShapeType";
import { Shape } from "../shapes/Shape";
import { ColorFactory } from "./ColorFactory";
import { ShapeFactory } from "./ShapeFactory";
import { AbstractFactory } from './AbstractFactory';

export class IosFactory extends AbstractFactory {
  getColor(): Color {
    const colorFactory = new ColorFactory();
    return colorFactory.getColor(ColorType.BLUE);
  }
  getShape(): Shape {
    const shapeFactory = new ShapeFactory();
    return shapeFactory.getShape(ShapeType.CIRCLE);
  }
}
