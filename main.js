var PopcornMaker = [];
const Tiny = 10;
const Medium = 20;
const Big = 30;
const Stock = 80;

const machine = () => {
  return {
    increment: function () {
      for (
        ;
        PopcornMaker.length < Stock;
        PopcornMaker.push(PopcornMaker.length + 1)
      ) {}
      return PopcornMaker;
    },
    decrement: function (y) {
      if (
        PopcornMaker.length >= y
          ? PopcornMaker.splice(-y)
          : console.log("Armazenamento insuficiente")
      )
        return PopcornMaker;
    },
    checkStock: function () {
      return console.log(PopcornMaker.length);
    },
  };
};

machine().increment();
machine().decrement(Medium);
machine().decrement(Medium);
machine().decrement(Medium);
machine().decrement(Big);

machine().checkStock();
