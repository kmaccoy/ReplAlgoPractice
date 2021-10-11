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

function iterateRange(x, y){
  //declare output array
  let output = [];
  //iterate through where i starts at x and ends before y
  for (let i = x+1; i < y; i++){
    //push numbers to array
    output.push(i)
  }
  //return array
  return output;
}

//console.log(iterateRange(2,9)); // [3, 4, 5, 6, 7, 8]