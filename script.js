const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1,'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'] 
]);
console.log(question);

// Convert Object to Map
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
}

const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap);

//Iterate over Maps
console.log(question.get('question'));
for (const [key,value] of question){
  if(typeof key === 'number')
  console.log(`Answer ${key} : ${value}`);
}

//prints
//[Log] Answer 1 : C (script.js, line 34)
// [Log] Answer 2 : Java (script.js, line 34)
// [Log] Answer 3 : JavaScript (script.js, line 34)
// [Log] Live reload enabled. (127.0.0.1, line 64)
const answer = Number(prompt(`Your answer`))
console.log(answer);

console.log(question.get(question.get('correct')=== answer));

//convert map to array
console.log([...question]);
