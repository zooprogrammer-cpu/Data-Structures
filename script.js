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

const orderSet = new Set(['Pizza','Pizza','Risotto','Pasta','Pasta'])
console.log(orderSet); // {"Pizza", "Risotto", "Pasta"}

console.log(orderSet.size); //3

console.log(orderSet.has('Pizza')); //true

orderSet.add('Garlic Bread')
orderSet.add('Garlic Bread')

console.log(orderSet); // {"Pizza", "Risotto", "Pasta", "Garlic Bread"}

orderSet.delete('Risotto')

console.log(orderSet); //{"Pizza", "Pasta", "Garlic Bread"}

for(const item of orderSet){
  console.log(item);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef']

const staffUnique = [...new Set(staff)]
console.log(staffUnique); //prints ["Waiter", "Chef", "Manager"]
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef']).size); // prints 3


