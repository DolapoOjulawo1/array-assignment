/**
 * QUESTION 1: What are the differences between mutating array methods and non-mutation array methods in JavaScript. 
 * List 5 array methods that fall under each of them.
 */

/**
 * ANSWERS
 * 1. Mutating array methods object is an object whose state can be modified after it is created.
 * Non-mutation array methods are the objects whose state cannot be changed once the object is created. 
 * 2. Mutation in context of JavaScript arrays is basically changing the array itself instead of returning a new array with the new changes whereas
 * Non-Mutation is returning a whole new array which has all the changes.
 * 3. Mutator Methods in JavaScript are array.copyWithin(), array.fill(), array.pop(), array.push(), array.reverse(), array.shift(), array.sort(), array.splice() and array.unshift().
 * Non-Mutating Methods in JavaScript are array.concat(), array.includes(), array.indexOf, array.join(), array.lastIndexOf, array.slice(), array.toString() and array.toLocaleString().
 * 
 * 
 * List 5 array methods that fall under each of them.
 * MUTATING ARRAY METHOD
 * 1. Array.prototype.pop()
 * 2. Array.prototype.push()
 * 3. Array.prototype.shift()
 * 4. Array.prototype.unshift()
 * 5. Array.prototype.reverse()
 * 
 * NON-MUTATION ARRAY METHOD
 * 1. array.concat()
 * 2. array.includes()
 * 3. array.indexOf 
 * 4. array.join()
 * 5. array.slice()
 */

/**
 * QUESTION 2: Here is an array of languagues ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']. Perform this operation on them
 * 1. Add 'Kotlin' to the end of the array
 * 2. Add 'Java' after 'Ruby'
 * 3. Remove the first item in the array
 * 4. Add 'Scala' and 'Swift' to the beginning of the array
 * 5. Replace 'PHP' with 'Go' and 'Rust'
 */

let arrayOfLanguages =  ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
// 1. Add 'Kotlin' to the end of the array
arrayOfLanguages.splice(5, 0, 'Kotlin')
console.log(arrayOfLanguages);

// 2. Add 'Java' after 'Ruby'
arrayOfLanguages.splice(3, 0, 'Java')
console.log(arrayOfLanguages);

// 3. Remove the first item in the array
arrayOfLanguages.shift();
console.log(arrayOfLanguages);

// 4. Add 'Scala' and 'Swift' to the beginning of the array
arrayOfLanguages.splice(0, 0, 'Scala', 'Swift')
console.log(arrayOfLanguages);

//5. Replace 'PHP' with 'Go' and 'Rust'
arrayOfLanguages.splice(5, 1, 'Go', 'Rust')
console.log(arrayOfLanguages);

/**
 * QUESTION 3: What will be the value of fruit after calling the function changeFruit?
 * let fruit = ['apple', 'mango', 'banana'];
 * function changeFruit(fruit) {
 * fruit[2] = "orange";
 * return fruit;
 * }
 */

let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}

 console.log(changeFruit(fruit));
 
/**
 * QUESTION 4: Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
 * e.g., max([4, 5, 10, -2]) // maximum value is 10
 */

 
 function arrayOfNumbers (arr1) {
    let max = arr1[0];

    for (let i = 1; i < arr1.length; i++){
        if (arr1[i] > max){
            max =arr1[i];
        }
    } return 'Maximum value is ' + max;
 }

 let arr1 = [-40, 26, -10, 40, 1];
 console.log(arrayOfNumbers(arr1));


 /**
  * QUESTION 5: Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by 
  * the index it is at in the array: e.g., valTimesIndex([1,2,3]) // [0,2,6] 
  * valTimesIndex([5,10,15]) // [0,10,30]
  */

 function valTimesIndex(arr){
    return arr.map(function(value,index,array){
      return value*index;
  });   
}
let arr = ([34,15,10])
let arr2 = ([1,-2,-3])
console.log(valTimesIndex(arr));
console.log(valTimesIndex(arr2));