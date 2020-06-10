const countDownFrom = (number) => {
  while(number > 0) {
    console.log(number);
    number--;
  }
};

const countDownFromRecursive = (number) => {
  if (number === 0) return;
  console.log(number);
  countDownFromRecursive(number - 1);
};

countDownFrom(10);
countDownFromRecursive(10);