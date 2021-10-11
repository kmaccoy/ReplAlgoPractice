//Part 2:


// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  // CODE HERE
  //create an output array
  let output = [];
  //iterate through the array
  for(let i = 0; i < array.length; i++){
    //check of % === 1
    if(array[i] % 2 === 1){
      //if so add to new array
      output.push(array[i]);
    }
  }
  //return the array
  return output;
}

//console.log(returnOdds([1,2,3,4,5,6,7]))

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  // CODE HERE
  //create an output array
    let outputEven = [];
    //iterate through the array
    for(let i = 0; i < array.length; i++){
      //check of % === 0
      if(array[i] % 2 === 0){
        //if so add to new array
        outputEven.push(array[i]);
      }
    }
    //return the array
    return outputEven;
}


//console.log(returnEvens([1,2,3,4,5,6,7]))

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  // CODE HERE
  //return the max of the spread variable
  return Math.max(...array)
}

//console.log(findMax([1,25,6,3]))

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  // CODE HERE
  return string.trim()
}

//console.log(trim(' hello '))


// under the hood, a JavaScript array is a specific type of object in which values are paired with sequentially numbered keys.
// the "Array" object also contains a number of methods that give arrays their functionality.
// the below function should return an empty object that has the behavior and functionality of an array. this object should have the following methods:
  // push(val) adds val to the end
  // pop() removes a value from the end and returns it
  // unshift(val) adds val to the beginning
  // shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and create an object that has those methods


function createArray() {
  // CODE HERE
  //declare index variable for tracking
  let objLeng = 0;

  //implement push
  //add input element to end of array
  createArray.prototype.push = function(element){
    //create key / val pair at current objLeng
    this[objLeng] = element;
    //increment objLeng by 1
    objLeng++;
  }

  //implement pop
  //remove last element, return said element
  createArray.prototype.pop = function(){
    //declare holder var at last key of obj
    let poppedHold = this[objLeng -1];
    //delete val from object
    delete this[objLeng -1];
    //decrement objLeng by 1
    objLeng--;
    //return holder value - also deleted value from object
    return poppedHold;
  }

  //implement unshift
  //add a value to the beginning of array
  createArray.prototype.unshift = function(element){
    //increment objLeng
    objLeng++;
    //iterate through numbers from 0 to length
    for(let i = objLeng - 1; i > 0; i--){
      //reassign key at index i to previous key's value.
      //exclude 0
      this[i] = this[i-1];
    }
    //get new element at 0'th key
    this[0] = element
  }

  //implement shift
  //remove first element in array. return that element
  createArray.prototype.shift = function(){
    //declare placeholder var, assign to key 0
    let shiftyHolder = this[0];
    //delete the key/val pair
    delete this[0];
    //decrement length of variable
    objLeng--;
    //iterate through keys, decrement them
    for(let i = 0; i < objLeng; i++){
      this[i] = this[i + 1];
    }
    //delete the current objLength
    delete this[objLeng];

    //return the placeholder
    return shiftyHolder;
  }
}

let array = new createArray();

// console.log(`New Empty Object: `, array);
// array.push(5);
// console.log(`First push: `, array);
// array.push(4);
// array.push(1);
// console.log(`Second push: `, array);
// console.log(`Popped-off value: `, array.pop());
// console.log(`After the first pop: `, array);
// array.unshift(9);
// console.log(`After the unshift: `, array);
// console.log(`The shifted element: `, array.shift());
// console.log(`After the shift: `, array);
// console.log(`Shifted element: `, array.shift());
// console.log(`After the second shift: `, array);