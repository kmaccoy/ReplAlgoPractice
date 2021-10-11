//Write a function that takes an object and returns a nested array. These inner arrays will each have two elements: the key-value pairs from the object. These whole array should be *SORTED* in alphabetical order by the key names.

function objToSortedArray (obj) {
  //Utilize map to identify the key-value pairs of the object, convert those pairs into the desired array
  let objectConverter = Object.keys(obj).map(key => ({ [key]: obj[key] }));
  //return the output array;
  //still need to sort by name...
  return objectConverter;
}


const phoneNums = {
  chris: 3429588375,
  andy: 4829574932,
  mildew: 9975723073
}

//console.log(objToSortedArray(phoneNums));