import { Shape } from './Shape';

export class Circle implements Shape {
  draw(): void {
    console.log('drawing a circle');
  }
}