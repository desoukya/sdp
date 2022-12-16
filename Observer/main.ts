import { iPhone15 } from "./producers/iphone15";
import { Reddit } from "./subscribers/reddit";
import { TechBlog } from "./subscribers/blog";

class ObserverDemo {
  main() {
    const iphone15 = new iPhone15();
    const observer1 = new Reddit();
    const observer2 = new TechBlog();

    iphone15.attach(observer1);
    iphone15.attach(observer2);

    iphone15.someBusinessLogic();
    iphone15.someBusinessLogic();

    iphone15.detach(observer2);

    iphone15.someBusinessLogic();
  }
}

ObserverDemo.prototype.main();
