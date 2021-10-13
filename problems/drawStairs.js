//declare variable array that will hold the stairs
//declare length variable that will work with the .length of steps
//map the steps out

const drawStairs = n => {
  let steps = new Array(n).fill('*');
  let length = steps.length;
  steps = steps.map((value, i) => {
       return new Array(length - i - 1). fill(' ').join('') + value + new Array(i).fill('*').join('');
  });
  return steps.join('\n');
};

//console.log(drawStairs(6))