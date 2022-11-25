import { Color } from '../colors/Color';
import { Blue } from '../colors/Blue';
import { Green } from '../colors/Green';
import { Red } from '../colors/Red';
import { ColorType } from "../enums/ColorType";

export class ColorFactory {
  getColor(colorType: ColorType): Color {
    return {
      [ColorType.BLUE]: new Blue(),
      [ColorType.GREEN]: new Green(),
      [ColorType.RED]: new Red(),
    }[colorType];
  }
}