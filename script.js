'use strict';
//Maps -  Datastrucure to map values to keys.
// In maps, keyc can be any type, not just strings
const rest = new Map()
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze, Italy')
console.log(rest.set(2, 'Lisbon, Portugal'));
//Prints Map {"name" => "Classico Italiano",
// 1 => "Firenze, Italy", 
//2 => "Lisbon, Portugal"}
rest.set('categories', ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed')

console.log(rest);//
//prints Map {"name" => "Classico Italiano", 
//1 => "Firenze, Italy",
// 2 => "Lisbon, Portugal", "
//categories" => ["Italian", "Pizzeria", "Vegeterian", "Organic"], "open" => 11, …} (7)

console.log(rest.get('name')); //Classico Italiano
console.log(rest.get(true)); //We are open
console.log(rest.get(1)); //Firenze, Italy

const time = 21
console.log(rest.get(time > rest.get('open') && time<rest.get('close'))
);
 // turns this check to true which results in 
 //rest.get(true) which gets the valu we are open

 console.log(rest.has('categories'));
 rest.delete(2)
 console.log(rest.size);
//  rest.clear()
const arr = [1,2]
rest.set(arr, 'Test')
console.log(rest);
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading')
console.log(rest);