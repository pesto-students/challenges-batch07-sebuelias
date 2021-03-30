class Cycled {
  constructor(cyclingList) {
    this.cyclingList = cyclingList;
    this.currentValue = 0;
    this.index = 0;
  }

  checkIndex() {
    if (this.index < 0) {
      this.index = this.cyclingList.length - 1;
    }
    if (this.index >= this.cyclingList.length) {
      this.index = 0;
    }
  }

  current() {
    return this.cyclingList[this.index];
  }

  next() {
    this.index += 1;
    this.checkIndex();
    return this.cyclingList[this.index];
  }

  previous() {
    this.index -= 1;
    this.checkIndex();
    return this.cyclingList[this.index];
  }

  step(stepValue) {
    this.index += stepValue;
    this.checkIndex();
    return this.cyclingList[this.index];
  }

  reversed() {
    return new Cycled(this.cyclingList.reverse());
  }

  indexOf(value) {
    for (let i = 0; i < this.cyclingList.length; i += 1) {
      if (this.cyclingList[i] === value) {
        return i;
      }
    }
    return -1;
  }

  [Symbol.iterator]() {
    const [index, cyclingList] = this;

    const iteratorObj = {
      counter: 0,
      next() {
        let result = {};
        if (this.currentPosition < 0) {
          this.index = cyclingList.length - 1;
        }
        if (index >= cyclingList.length) {
          this.index = 0;
        }
        result = { done: false, value: cyclingList[index] };
        this.counter += 1;
        this.index += 1;
        if (this.counter < 3) {
          return result;
        }
        return { done: true };
      },
    };
    return iteratorObj;
  }
}

export { Cycled };
