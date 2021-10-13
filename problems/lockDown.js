const sum = function(a, b, c) { return a + b + c }
// const secureFunc = lockDown(sum, 'lolol')
//secureFunc('lolol', 1, 2, 3)
//secureFunc('wrong', 1, 2, 3)

//string is password
//lockdown returns a function (secureFunc) WHAT.
//secureFunc must be provided the password string as its first argument. 
//If the string is incorrect, 401 is returned.
//If correct, secureFunc will call func and return its output.
//lockdown returns a function (secureFunc).

function lockDown(func, password) {
  // console.log(func)
  // console.log(password)
  function secureFunc(){
    // console.log(func)
    // console.log(password)
    if(password !== 'lolol'){
      // console.log('failed')
      return 401;
    } else {
      // console.log('in else statement')
      return func(1, 2, 3);
    }
  }
  return secureFunc();
}

console.log(lockDown(sum, 'wrong'))
console.log(lockDown(sum, 'lolol'))