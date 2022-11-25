import { FactoryOrchestrator } from './factory/FactoryOrchestrator';
import { FactoryType } from './enums/FactoryType';

class AbstractFactoryDemo {
  main() {
    // create instance of factory
    const factoryProducer = new FactoryOrchestrator();

    // get the IOS factory
    console.log('--------IOS---------')
    const iosFactory = factoryProducer.getFactory(FactoryType.IOS);
    const iosColor = iosFactory.getColor();
    const iosShape = iosFactory.getShape();
    iosColor.fill();
    iosShape.draw();

    // get the Android factory
    console.log('------ANDROID-------')
    const androidFactory = factoryProducer.getFactory(FactoryType.ANDROID);
    const androidColor = androidFactory.getColor();
    const androidShape = androidFactory.getShape();
    androidColor.fill();
    androidShape.draw();
  }
}

AbstractFactoryDemo.prototype.main();
