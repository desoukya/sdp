import { Producer } from "../producers/producer";
import { iPhone15 } from "../producers/iphone15";
import { Subscriber } from "./Subscriber";

/**
 * Concrete Subscriber react to the updates issued by the Producer they had been
 * attached to.
 */
export class Reddit implements Subscriber {
  public update(producer: Producer): void {
    if (producer instanceof iPhone15 && producer.state < 3) {
      console.log('Reddit: Reacted to the event.');
    }
  }
}