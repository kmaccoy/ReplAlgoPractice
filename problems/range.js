// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]

//recursive way

function range(x, y){
  if (y - x === 2) 
  {
    return [x + 1];
  } 
  else 
  {
    var list = range(x, y - 1);
    list.push(y - 1);
    return list;
  }
};

//console.log(range(2,9))

//iterative way:
//declare output array
//iterate through where i starts at x and ends before y
//push numbers to array
//return array

function iterateRange(x, y){
  let output = [];
  for (let i = x+1; i < y; i++){
    output.push(i)
  }
  return output;
}

//console.log(iterateRange(2,9)); // [3, 4, 5, 6, 7, 8]