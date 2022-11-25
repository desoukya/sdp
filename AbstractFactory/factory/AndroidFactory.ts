import { Color } from "../colors/Color";
import { ColorType } from "../enums/ColorType";
import { ShapeType } from "../enums/ShapeType";
import { Shape } from "../shapes/Shape";
import { ColorFactory } from "./ColorFactory";
import { ShapeFactory } from "./ShapeFactory";

export class AndroidFactory {
  getColor(): Color {
    const colorFactory = new ColorFactory();
    return colorFactory.getColor(ColorType.GREEN);
  }
  getShape(): Shape {
    const shapeFactory = new ShapeFactory();
    return shapeFactory.getShape(ShapeType.SQUARE);
  }
}
