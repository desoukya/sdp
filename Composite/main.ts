import { Composite } from './composite';
import { Leaf } from './leaf';

class CompositeDemo {
  main() {
    const tree = new Composite(); // root node
    const branch1 = new Composite(); // child #1
    branch1.add(new Leaf());
    branch1.add(new Leaf());
    const branch2 = new Composite(); // child #2
    branch2.add(new Leaf());
    tree.add(branch1);
    tree.add(branch2);
    console.log('Client: Now I\'ve got a composite tree:');
    console.log(`RESULT: ${tree.operation()}`);
  }
}

CompositeDemo.prototype.main();
