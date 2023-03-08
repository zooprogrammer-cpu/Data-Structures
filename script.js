const airline = 'TAP Air Portugal'
const plane = 'A320'

console.log(plane[0]);
console.log(airline.indexOf('Portugal')); //prints 8
//slice method

console.log(airline.slice(4)); //Air Portugal. Slice starts at 4-"A" . Returns new string
console.log(airline.slice(4,7)); //Air. 7- 4 =3 .That is why the length is 3 of Air

console.log(airline.slice(0,airline.indexOf(' '))); //prints TAP
console.log(airline.slice(-2)); //prints al
console.log(airline.slice(1,-1)); //prints AP Air Portuga

console.log(airline.toLowerCase());

// Fixing email 
const loginEmail = ' Hello@JoNas.co \n'
const normalizedEmail = (loginEmail.toLowerCase()).trim()
console.log(normalizedEmail); //prints hello@jonas.co

// replacing parts of a string
const priceGB = '288,97p';
const priceUS = priceGB.replace('p','$').replace(',','.')
console.log(priceUS); //288.97$

const announcement = 'All passengers come to boarding door 23. Boarding door 23.'
console.log(announcement.replace('door', 'gate'));//[Log] All passengers come to boarding gate 23. Boarding door 23.

console.log(announcement.replace(/door/g,'gate')); //using regex. [Log] All passengers come to boarding gate 23. Boarding gate 23. 

//Booleans
const newPlane = 'A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.startsWith('A3'));
console.log(newPlane.endsWith('neo'));

// Practice exercise - not working
// const checkBaggage = function (items){
//   let baggage = items.toLowerCase();
//   console.log(baggage);
//   if(baggage.includes('knife') || baggage.includes('gun')){
//     console.log(`You are NOT allowed to board`)
//   } else{
//     console.log(`You are allowed to board`);
//   }
// }

// checkBaggage(`I have kinfe`)
//split
console.log('a+very+nice+string'.split('+')); //["a", "very", "nice", "string"] (4)

console.log('Ash Basnyat'.split(' ')); //["Ash", "Basnyat"] (2)

const[firstName, lastName] = 'Ash Basnyat'.split(' ')
const newName = [`Mr.`,firstName, lastName]
console.log(newName); // ["Ash", "Basnyat"] (2)

// join 
console.log(newName.join(' ')); // Mr. Ash Basnyat

//Capitalize first letters
let arrName=[]
const capitalizeName = function (name){
  const splitName = name.split(' ')
  console.log(splitName);
  for(const item of splitName){
    //replace first letter with upper case letter
    const replacedName = (item.replace(item[0], item[0].toUpperCase()))
    arrName.push(replacedName)
  }
  console.log(arrName);
  const joinedName = arrName.join(' ')
  console.log(joinedName);
}

capitalizeName('jessica ann arbor')


//another way
// let arrName=[]
// const capitalizeName = function (name){
//   const splitName = name.split(' ')
//   const namesUpper = []
//   console.log(splitName);
//   for(const n of splitName){
//     //replace first letter with upper case letter
//     namesUpper.push(n[0].toUpperCase() + n.slice(1))
//   }
//   console.log(namesUpper.join(' '));
// }

// capitalizeName('jessica ann arbor')
//Padding

console.log('Jonas'.padStart(25,'+')); //++++++++++++++++++++Jonas
// Credit card masking
const maskCreditCard = function(number){
  const str = number +''
  const last4 = str.slice(-4)
  return last4.padStart(str.length, '*')
}

console.log(maskCreditCard(13213123435356)) //**********5356

// Repeat method
const message2 = 'Bad weather..All Departures Delayed'
console.log(message2.repeat(4));

// optional chaining
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//optional chaining

for (const day of weekdays){
  // console.log(item);
	// const open = restaurant.openingHours[day]?.open || 'closed'; //prints closed as default

  //using nullish coalescing ?? here instead of || since sat.open is 0 and we don't want to print closed
  
	const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}day, we open at ${open} `);
}
