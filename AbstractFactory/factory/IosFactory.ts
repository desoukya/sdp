import { Color } from '../colors/Color';
import { Blue } from '../colors/Blue';
import { Circle } from '../shapes/Circle';
import { Shape } from '../shapes/Shape';

export class IosFactory {
  getColor(): Color {
    return new Blue();
  }
  getShape(): Shape {
    return new Circle();
  }
}