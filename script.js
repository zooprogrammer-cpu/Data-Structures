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

  orderPasta : function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza : function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
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
//spread operator
const arr = [7,8,9]
const newArr = [1,2,3,...arr]
console.log(newArr);

console.log(...arr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi']
console.log(newMenu);

const mainMenu = [...restaurant.mainMenu]

const menu =[...restaurant.mainMenu, ...restaurant.starterMenu]

console.log(menu);

// Iterables are arrays, strings, maps, sets but not objects
const str = 'Jonas'
const letters = [...str]
console.log(letters);

//const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'),
                    //prompt('Let\'s make pasta! Ingredient 2?'),
                    //prompt('Let\'s make pasta! Ingredient 3?')]

//console.log(ingredients);

//restaurant.orderPasta(...ingredients) // prints Here is your delicious pasta with pasta, olives and tomato
//Objects
const newRestaurant = {...restaurant, founder: 'Guiseppe'}
console.log(newRestaurant);

const restaurantCopy = {...restaurant}

restaurantCopy.restName = 'Ristorante Roma'

console.log(restaurantCopy);
//1. DESTRUCTURING
// SPREAD is on the right side of = 
const arr1 = [1,2,3,4]
const arr2 = [...arr1]
console.log(arr2); //print [1,2,3,4]

//REST is on the left side - puts REST of the elements into a new array
const [a,b,...others] = [1,2,3,4,5]
console.log(a,b,others);//prints 1 2 [3,4,5]

const [pizza, , risotto, ...otherFood]= [...restaurant.mainMenu, ...restaurant.starterMenu]

console.log(pizza, risotto, otherFood);
//prints [Log] Pizza – "Risotto" – ["Focaccia", "Bruschetta", "Garlic Bread", …] (4) (script.js, line 78)

// Objects REST
const {sat, ...weekdays} = restaurant.openingHours
console.log(sat,weekdays);
//{open: 0, close: 24}
//{thu: {open: 12, close: 22}, fri: {open: 11, close: 23}}

//2.) FUNCTIONS with rest arguements. turns it into array so that numbers is array
const add = function(...numbers){
  let sum = 0
  for (let i =0; i < numbers.length; i++){
    sum = sum + numbers[i]
  }
  console.log(sum);
  // console.log(numbers);
}

add (1,2,3) //prints 6
add (5,6,7,8) //prints 26

const x =[23,5,7]
add(...x)  // prints 35
/////////

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
//mushrooms
//["onion", "olives", "spinach"] 
restaurant.orderPizza('mushrooms') // prints mushrooms []


// SHORT CIRCUIT
// If first value is a truthy value, it returns it immediately and not even take a look at the second value
console.log('---------OR---------');
console.log(3 || 'Jonas'); //prints 3
console.log('' || 'Jonas'); //prints Jonas
console.log(true || 0); //prints true
console.log(undefined || null); //prints null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //prints Hello

// restaurant.numGuests = 23
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guests1); //prints 10

const guests2 = restaurant.numGuests || 10
console.log(guests2); //prints 10
console.log('-----------AND----------');
// When there is truthy, the evaluation continues and last value is returned
console.log(0 && 'Jonas'); // prints 0
console.log(7 && 'Jonas'); // prints Jonas

console.log('Hello' && 23 && null && 'Jonas');//prints null

if (restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach')
}

//prints mushrooms ['spinach']

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')

//prints mushrooms ['spinach']




