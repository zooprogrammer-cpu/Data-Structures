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

//Object.keys
const properties = Object.keys(openingHours) // ["wed", "thu", "sat"]
console.log(properties);
let openStr = `We are open on ${properties.length} days -`

for (const day of properties){
  openStr += `${day},`
}
console.log(openStr); //We are open on 3 days -wed,thu,sat,

//Property values
//Object.values
const values = Object.values(openingHours)
console.log(values); //[{open: 12, close: 22}, {open: 12, close: 24}, {open: 0, close: 24}] (3)

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);  //[["wed", {open: 12, close: 22}], ["thu", {open: 12, close: 24}], ["sat", {open: 0, close: 24}]] (3) 

for(const [key,{open,close}]of entries){
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
//prints
// [Log] On wed, we open at 12 and close at 22 (script.js, line 69)
// [Log] On thu, we open at 12 and close at 24 (script.js, line 69)
// [Log] On sat, we open at 0 and close at 24 (script.js, line 69)


