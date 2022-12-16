import { Subscriber } from '../subscribers/Subscriber';

export interface Producer {
  // Attach an subscriber to the subject.
  attach(subscriber: Subscriber): void;

  // Detach an observer from the subject.
  detach(subscriber: Subscriber): void;

  // Notify all subscribers about an event.
  notify(): void;
}
