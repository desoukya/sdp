import { FactoryOrchestrator } from './factory/FactoryOrchestrator';
import { FactoryType } from './enums/FactoryType';

class FactoryDemo {
  main() {
    // create instance of factory
    const factoryProducer = new FactoryOrchestrator();

    // get the shape factory
    const iosFactory = factoryProducer.getFactory(FactoryType.IOS);
    const iosColor = iosFactory.getColor();
    const iosShape = iosFactory.getShape();
    iosColor.fill();
    iosShape.draw();
    
    const androidFactory = factoryProducer.getFactory(FactoryType.ANDROID);
    const androidColor = androidFactory.getColor();
    const androidShape = androidFactory.getShape();
    androidColor.fill();
    androidShape.draw();
  }
}

FactoryDemo.prototype.main();