const CreateIterableObject = function (from, to) {
  this.from = from;
  this.to = to;

  this[Symbol.iterator] = function () {
    if (this.to === undefined || this.from === undefined) {
      throw new Error(" 'to' or 'from' is missing ");
    }

    if (typeof this.from !== "number" || typeof this.to !== "number") {
      throw new Error("'from' and 'to' must be numbers.");
    }

    if (this.to < this.from) {
      throw new Error("'to' must be greater than or equal to 'from'.");
    }

    let currentValue = this.from;
    const endValue = this.to;

    return {
      next() {
        if (currentValue <= endValue) {
          return { value: currentValue++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  };
};

// tesr
const myIterable = new CreateIterableObject(1, 3);

for (let item of myIterable) {
  console.log(item);
}
