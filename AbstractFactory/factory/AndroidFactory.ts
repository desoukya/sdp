import { Shape } from '../shapes/Shape';
import { Square } from '../shapes/Square';
import { Green } from '../colors/Green';
import { Color } from '../colors/Color';

export class AndroidFactory {
  getColor(): Color {
    return new Green();
  }
  getShape(): Shape {
    return new Square();
  }
}