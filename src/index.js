
import { test } from "@utils/test"
// import json from './json' // работает по умолчанию
// import logo from './logo.png
// import xml from './xml.xml
import './styles/styles.css'

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
console.log(window.process)