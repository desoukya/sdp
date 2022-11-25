import { ShapeFactory } from './factory/ShapeFactory';
import { Shape } from './shapes/Shape';
import { ShapeType } from './enums/ShapeType';

class FactoryDemo {
  main() {
    // create instance of factory
    const shapeFactory = new ShapeFactory();

    // create circle using factory
    const circle: Shape = shapeFactory.getShape(ShapeType.CIRCLE);
    circle.draw();
    
    // create square using factory
    const square: Shape = shapeFactory.getShape(ShapeType.SQUARE);
    square.draw();

    // create rectangle using factory
    const rectangle: Shape = shapeFactory.getShape(ShapeType.RECTANGLE);
    rectangle.draw();
  }
}

FactoryDemo.prototype.main();