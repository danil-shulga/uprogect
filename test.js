function Func() {
  this.name = 'John';

  this.func1 = function () {
    this.name = 'Valery';

    setTimeout(function () {
      console.log('func1.timeout', `Hello, ${this.name}`);
    });

    hello1();
  };

  this.func2 = () => {
    this.name = 'Justin';

    setTimeout(() => {
      console.log('func2.timeout', `Hello, ${this.name}`);
    });

    hello2();
  };

  const hello1 = () => {
    console.log('hello1', `Hello, ${this.name}`);
  };
}
function hello2() {
  console.log('hello2', `Hello, ${this.name}`);
}

const func = new Func();
func.func1();
func.func2();
console.log(func.name);

const promise = new Promise((res, rej) => rej('a'));
promise
  .then((value) => value + 'b')
  .then((value) => {
    throw new Error(value + 'c');
  })
  .then((value) => value + 'd')
  .catch((err) => err + 'e')
  .then((value) => value + 'f')
  .finally((value) => {
    console.log(value);
    return value + 'g';
  })
  .then((value) => console.log(value + 'h'));

function* iteratorFn() {
  let count = 0;
  for (let i = 0; i < 2; i++) {
    count++;
    yield i;
  }
  return count;
}

let iterator = iteratorFn();
console.log('iterator', iterator.next().value);
console.log('iterator', iterator.next().value);
