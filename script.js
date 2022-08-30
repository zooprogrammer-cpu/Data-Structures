'use strict';
const weekdays = ['mon','tue','wed','thu','fri', 'sat','sun']

const openingHours = {
  [weekdays[2]]:{
    open: 12,
    close: 22
  },
  [weekdays[3]]:{
    open: 12,
    close: 24
  },
  [weekdays[5]]:{
    open: 0, // open 24 hrs
    close: 24
  }
}
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  // ES6 enhanced object literals

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

// if(restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);

//
//With Optional Chaining. A property exists if not null or not undefined. 
// it will try to read open only if mon exists.
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

const days = ['mon','tue','wed','thu','fri', 'sat', 'sun']

for (const item of days){
  // console.log(item);
  //using ?? here instead of || since sat.open is 0
  const open = restaurant.openingHours[item]?.open ?? 'close';
  console.log(`On ${item}day, we open at ${open} `);
}
//prints
// [Log] On monday, we open at close  (script.js, line 64)
// [Log] On tueday, we open at close  (script.js, line 64)
// [Log] On wedday, we open at 12  (script.js, line 64)
// [Log] On thuday, we open at 12  (script.js, line 64)
// [Log] On friday, we open at close  (script.js, line 64)
// [Log] On satday, we open at 0  (script.js, line 64)
// [Log] On sunday, we open at close  (script.js, line 64)

//Methods
console.log(restaurant.order?.(0,1)?? `Method does not exist`);

//Arrays
const users = [
  {name: 'Jonas', email: 'hello@jonas.com'}
]

console.log(users[0].name?? 'Users array empty'); //prints Jonas
// this is the same as this- 
if(users.length > 0) console.log(users[0].name) 
else console.log(`user array is empty`); //prints Jonas