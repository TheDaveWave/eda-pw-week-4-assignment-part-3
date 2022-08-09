console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// - Create a global variable named `basket` and set it to an empty array.
let basket = [];

/* - Create a function called `addItem`. It should:
  - take an input parameter for a string `item`
  - add the new item to the global array `basket`. 
  - return `true` indicating the item was added */

  function addItem (item) {
    basket.push(item);
    console.log(basket);
    return true;
  }

  console.log('addItem - should add apple to basket:', addItem('apple'));


  
