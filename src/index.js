
import { test } from "./test"

class Paper {
  constructor(x) {
    this.x = x
  }
  get paper() { return 23 };
  test() {
    return test()
  }
}

console.log(new Paper(12).test())