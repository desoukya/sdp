import { Color } from './Color';

export class Green implements Color {
  fill(): void {
    console.log('filling color green');
  }
}
