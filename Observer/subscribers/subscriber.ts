import { Producer } from '../producers/producer';

export interface Subscriber {
  // Receive update from producer.
  update(producer: Producer): void;
}
