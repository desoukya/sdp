import { Color } from '../colors/Color';
import { Shape } from '../shapes/Shape';
import { ShapeType } from '../enums/ShapeType';
import { ColorType } from '../enums/ColorType';

// Abstract class to get factories for Color and Shape Objects
export abstract class AbstractFactory {
  abstract getColor(color?: ColorType): Color;
  abstract getShape(shape?: ShapeType): Shape;
}