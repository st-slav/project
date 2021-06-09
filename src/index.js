
// import { test } from "@utils/test"
// import json from './json' // работает по умолчанию
// import logo from './logo.png
// import xml from './xml.xml
import './styles/styles.css'

class Paper {
  constructor(x) {
    this.x = x
  }
  static i = 40;

  get paper() { return 23 };

  async test() {
    const { test } = await import('@utils/test')
    return test()
  }
}

new Paper(12).test().then((res) => {
  console.log(res)
})
console.log(window.process)

async function start() {
  return await Promise.resolve('-----')
}

start()