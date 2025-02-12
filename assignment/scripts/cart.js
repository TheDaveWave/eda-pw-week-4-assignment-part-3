console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// - Create a global variable named `basket` and set it to an empty array.
let basket = [];
// 1. Add a global `const` named `maxItems` and set it to 5.
const maxItems = 5;

/* - Create a function called `addItem`. It should:
  - take an input parameter for a string `item`
  - add the new item to the global array `basket`. 
  - return `true` indicating the item was added */

/* 3. Update the required `addItem` function to:
  - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
  - If an item was added to the array, return `true`
  - If there was no room and the item could not be added return `false` */

function addItem(item) {
  if(!isFull()) {
    basket.push(item);
    return true;
  } else {
    return false;
  }
}

  console.log('addItem - should add apple to basket:', addItem('Apple'), basket);

/*  4. Create a function called `removeItem`. It should:
- Take an input parameter for a string `item`
- Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
- Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
- Return the item removed or `null` if the item was not found */

function removeItem(item) {
  let itemRemoved;
  if(basket.indexOf(item) === -1) {
    return null;
  } else {
    itemRemoved = basket.splice(basket.indexOf(item),1);
    console.log('removeItem:',itemRemoved);
  }
}

/* - Create a function called `listItems`. It should:
- loop over the items in the `basket` array
- console.log each individual item on a new line */

function listItems(arr) {
    for(item of arr) {
        console.log(item);
    }
    return true;
}

addItem('Orange');
addItem('Milk');
addItem('Banana');
addItem('Cheese');
console.log('Trying to add sixth item: "Tortillas" should return false:', addItem('Tortillas'));

console.log('listItems Test:');
listItems(basket);

removeItem('Banana');
listItems(basket);

console.log('Trying to remove an item that doesnt exist should return null:',removeItem('Cereal'));

/* - Create a function called `empty`. It should:
  - reset the `basket` to an empty array */

function empty() {
    return basket.length = 0;
}

empty();

console.log(`After calling empty() basket is now ${basket}`, basket);


/* 2. Create a function called isFull(). It should:
  - return `false` if the basket contains *less* than max number of items
  - return `true` otherwise (equal or more than maxItems) */

function isFull() {
    if(basket.length >= maxItems) {
        return true;
    } else if (basket.length < maxItems) {
        return false;
    } /* else {
        return 'Basket is too full, please remove some items.'
    } */
}

console.log('isFull should be false:', isFull());


