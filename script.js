'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order : function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  openingHours: {
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
  },
};

// const arr = [2,3,4]
// const [x,y,z] = arr
// console.log(x,y,z);

let [main, secondary] = restaurant.categories
console.log(main,secondary); // Italian – "Pizzeria"
// Flip variables
[main,secondary] = [secondary, main] 

console.log(main,secondary); //Pizzeria – "Italian"

console.log(restaurant.order(2,0)) //["Garlic Bread", "Pizza"] 

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2,0) 
console.log([starter, mainCourse]); //prints ["Garlic Bread", "Pizza"]

//Nested destructuring
const nested = [2,4,[5,6]]

const [i,,[j,k]] = nested

console.log(i,j,k); // prints 2,5,6

//Default values
// When we do not know the length of an array
const [p,q,r] = [8,9]
console.log(p,q,r); // undefined for r since we did not know it was empty
// so we can setup default values
const [m=1,n=1,o=1] = [8,9]
console.log(m,n,o); //prints 8,9,1 sets the value of o as 1