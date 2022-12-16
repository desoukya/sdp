import { Producer } from "./producer";
import { Subscriber } from "../subscribers/Subscriber";

/**
 * The Producer owns some important state and notifies observers when the state
 * changes.
 */
export class iPhone15 implements Producer {
  /**
   * @type {number} For the sake of simplicity, the Producer's state, essential
   * to all subscribers, is stored in this variable.
   */
  public state: number = 0;

  /**
   * @type {Subscriber[]} List of subscribers. In real life, the list of
   * subscribers can be stored more comprehensively (categorized by event
   * type, etc.).
   */
  private subscribers: Subscriber[] = [];

  /**
   * The subscription management methods.
   */
  public attach(subscriber: Subscriber): void {
    const isExist = this.subscribers.includes(subscriber);
    if (isExist) {
      return console.log('Producer: subscriber has been attached already.');
    }

    console.log('Producer: Attached a subscriber.');
    this.subscribers.push(subscriber);
  }

  public detach(subscriber: Subscriber): void {
    const subscriberIndex = this.subscribers.indexOf(subscriber);
    if (subscriberIndex === -1) {
      return console.log('Producer: Nonexistent subscriber.');
    }

    this.subscribers.splice(subscriberIndex, 1);
    console.log('Producer: Detached a subscriber.');
  }

  /**
   * Trigger an update in each subscriber.
   */
  public notify(): void {
    console.log('Producer: Notifying subscribers...');
    for (const subscriber of this.subscribers) {
      subscriber.update(this);
    }
  }

  /**
   * Usually, the subscription logic is only a fraction of what a Producer can
   * really do. Producers commonly hold some important business logic, that
   * triggers a notification method whenever something important is about to
   * happen (or after it).
   */
  public someBusinessLogic(): void {
    console.log('\nProducer: I\'m doing something important.');
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log(`Producer: My state has just changed to: ${this.state}`);
    this.notify();
  }
}