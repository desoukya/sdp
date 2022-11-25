import { IosFactory } from './IosFactory';
import { AndroidFactory } from './AndroidFactory';
import { FactoryType } from '../enums/FactoryType';
import { AbstractFactory } from './AbstractFactory';

export class FactoryOrchestrator {
  getFactory(factoryType: FactoryType): AbstractFactory {
    return {
      [FactoryType.IOS]: new IosFactory(),
      [FactoryType.ANDROID]: new AndroidFactory(),
    }[factoryType];
  }
}
