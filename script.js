'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  restName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order : function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function ({starterIndex, mainIndex, time, address}){
    console.log(`Order Received ${starterIndex} and ${mainIndex} and ${this.mainMenu[mainIndex]}
    will be delivered to ${address} at ${time} `)
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
}

restaurant.orderDelivery({
  time: '22:30',
  address : 'Via de Sole',
  mainIndex : 2,
  starterIndex: 2
});

restaurant.orderDelivery({
  address : '314 Omega St',
  mainIndex : 1,
  starterIndex: 2  
});

// Object Destructuring
const {restName, openingHours, categories} = restaurant

console.log(restName, openingHours, categories);
// changing the variable names 
const {restName : restaurantName, openingHours : hours , categories : tags} = restaurant

console.log(restaurantName, hours, tags);

//Deafult values
const {menu=[], starterMenu : starters =[]} = restaurant

console.log(menu,starters);
//[] (0) // this is the empty default array for menu
//["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"] (4)

//Mutating varaibles - not working.. working agter adding semi-colon after object declaration
let a = 111
let b = 999

const obj = {a: 23, b: 56 , c: 77};
//{a,b} = obj // this results in an error
({a,b} = obj)
console.log(a,b)

/// Nested Objects Destructuring

const {fri:{open,close}} = openingHours
console.log(open,close); //11 – 23

//can also rename the variable names here
const {fri:{open:o,close:c}} = openingHours
console.log(o,c); //11 – 23










