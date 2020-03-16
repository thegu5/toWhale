const toWhale = function(input) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  // console.log(i);
  for (let v = 0; v < vowels.length; v++) {
    // console.log(v);
    if (input[i] === vowels[v]) {
      resultArray.push(input[i]);
    };
  };
  if (input[i] === 'e'){
    resultArray.push(input[i]);
  };
  if (input[i] === 'u'){
    resultArray.push(input[i]);
  };
};
console.log(resultArray.join('').toUpperCase());
}
// call toWhale('your text'); to speak fluent whale!
toWhale('I am thegu5. I can speak fluent whale!');
