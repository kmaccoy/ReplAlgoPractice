//Part 2:


// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]

//create an output array
//iterate through the array
//check of % === 1
//if so add to new array
//return the array

function returnOdds(array) {
  let output = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 1){
      output.push(array[i]);
    }
  }
  return output;
}

//console.log(returnOdds([1,2,3,4,5,6,7]))

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]


// CODE HERE
//create an output array
//iterate through the array
//check of % === 0
//if so add to new array
//return the array

function returnEvens(array) {
  let outputEven = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      outputEven.push(array[i]);
    }
  }
  return outputEven;
}


//console.log(returnEvens([1,2,3,4,5,6,7]))

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25


//return the max of the spread variable

function findMax(array) {
  return Math.max(...array)
}

//console.log(findMax([1,25,6,3]))

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */

function trim(string) {
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


//declare index variable for tracking
//implement push
//add input element to end of array
//create key / val pair at current objLeng
//increment objLeng by 1
//implement pop
//remove last element, return said element
//declare holder var at last key of obj
//delete val from object
//decrement objLeng by 1
//return holder value - also deleted value from object
//implement unshift
//add a value to the beginning of array
//increment objLeng
//iterate through numbers from 0 to length
//reassign key at index i to previous key's value.
//exclude 0
//get new element at 0'th key
//implement shift
//remove first element in array. return that element
//declare placeholder var, assign to key 0
//delete the key/val pair
//decrement length of variable
//iterate through keys, decrement them
//delete the current objLength
//return the placeholder

function createArray() {
  let objLeng = 0;

  createArray.prototype.push = function(element){
    this[objLeng] = element;
    objLeng++;
  }

  createArray.prototype.pop = function(){
    let poppedHold = this[objLeng -1];
    delete this[objLeng -1];
    objLeng--;
    return poppedHold;
  }

  createArray.prototype.unshift = function(element){
    objLeng++;
    for(let i = objLeng - 1; i > 0; i--){
      this[i] = this[i-1];
    }
    this[0] = element
  }

  createArray.prototype.shift = function(){
    let shiftyHolder = this[0];
    delete this[0];
    objLeng--;
    for(let i = 0; i < objLeng; i++){
      this[i] = this[i + 1];
    }
    delete this[objLeng];

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