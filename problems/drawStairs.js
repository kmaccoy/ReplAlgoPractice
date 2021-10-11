const drawStairs = n => {
  //declare variable array that will hold the stairs
  let steps = new Array(n).fill('*');
  //declare length variable that will work with the .length of steps
  let length = steps.length;
  //map the steps out
  steps = steps.map((value, i) => {
       return new Array(length - i - 1). fill(' ').join('') + value + new Array(i).fill('*').join('');
  });
  return steps.join('\n');
};

//console.log(drawStairs(6))