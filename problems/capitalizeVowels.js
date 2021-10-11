function capitalizeVowels (str) {
  //target vowels in a replacer method, pass them into an inner function return the vowels once converted to uppercase
  return str.toLowerCase().replace(/[aeiou]/g, (l) => {
    return l.toUpperCase();
  });
}

//console.log(capitalizeVowels('hella world'));
