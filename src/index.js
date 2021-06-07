class Paper {
  constructor(x) {
    this.x = x
  }
  get paper() { return 23 };
  async test() {
    const { test } = await import("./test")
    return test()
  }
}