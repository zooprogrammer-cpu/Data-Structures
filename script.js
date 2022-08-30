'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   restName: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order : function(starterIndex, mainIndex){
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   },

//   orderDelivery: function ({starterIndex, mainIndex, time, address}){
//     console.log(`Order Received ${starterIndex} and ${mainIndex} and ${this.mainMenu[mainIndex]}
//     will be delivered to ${address} at ${time} `)
//   },

//   orderPasta : function(ing1, ing2, ing3){
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza : function(mainIngredient, ...otherIngredients){
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

// }
// //Nullish coalescing operator ??
// restaurant.numGuests = 0; 
// const guests = restaurant.numGuests || 10;
// console.log(guests); // Prints 10 since 0 is a falsy value. But we were expecting 0. 

// //New is ES 2020, ?? same as || but produces the correct result.
// // it works on the idea of nullish values instead of falsy values
// // nullish values are null and undefined (NOT 0 or ''). treats 0 or '' as true
// const correctGuests = restaurant.numGuests ?? 10;
// console.log(correctGuests); // prints 0

const rest1 = {
  name : 'Capri', 
  // numGuests : 20
  numGuests : 0
};

const rest2 ={
  name: 'La Piazza',
  owner : "Giovanni Rossi"
}
// OR assignment operator 
// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10

// console.log(rest1);
// console.log(rest2);

// Logical assignement operator, same as above but new
// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

// console.log(rest1); // prints {name: "Capri", numGuests: 20}
// console.log(rest2); // prints {name: "La Piazza", owner: "Giovanni Rossi", numGuests: 10}

//If numGuests : 0, we run into an issue since 0 is falsy and prints 10. 
//Solution is to use nullish coalescing logical assignment operator (null or undefined)
// rest1.numGuests ??= 10
// rest2.numGuests ??= 10

// console.log(rest1); //prints {name: "Capri", numGuests: 0}
// console.log(rest2); //prints  {name: "La Piazza", owner: "Giovanni Rossi", numGuests: 10}

//AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

//console.log(rest1); //prints {name: "Capri", numGuests: 0, owner: undefined}
//console.log(rest2); //prints {name: "La Piazza", owner: "<ANONYMOUS>"}

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1); //prints [Log] {name: "Capri", numGuests: 0} 
console.log(rest2); //prints {name: "La Piazza", owner: "<ANONYMOUS>"}

