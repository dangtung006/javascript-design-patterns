/*
    +) iterable protocol;
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable;

    An object is Iterable when it conforms to iterable protocol. The iterable protocol requires the object to contain a special property. The property name must be Symbol.iterator and value as a function that returns an iterator object.

    interface Iterable {
        [Symbol.iterator]() {
            //...
            return Iterator;
        }
    }

    The Iterator object must conform to iterator protocol. It needs to provide a property next, which value is a function that returns an object with properties done (a boolean to indicate the end of iteration) and value (the iteration result).

    interface Iterator {
        next() {
            //...
            return {
                value: <value>,
                done: <boolean>
            };
        };
    }

    example :

    function iterator() {
        let index = 0;
        return {
            next: () => ({ // Conform to Iterator protocol
            done : index >= this.length,
            value: this[index++]
            })
        };
    }

    const arrayLike = {
        0: 'Cat',
        1: 'Bird',
        length: 2
    };

    // Conform to Iterable Protocol
    arrayLike[Symbol.iterator] = iterator;
    const array = [...arrayLike];
    console.log(array); // => ['Cat', 'Bird']

    arrayLike[Symbol.iterator] creates a property on the object that contains an iteration function iterator(), making the object conformed to iterable protocol.

    iterator() returns an object (conformed to iteration protocol) with next property as a function that returns the control object {done: <boolean>, value: <item>}.

    Since arrayLike is now iterable, spread operator is used to extract its elements into an array: [...arrayLike].
    
    

*/

// const genFibIterator = function(max = Number.MAX_SAFE_INTEGER){
//     let n1 = 0; // private proverty;
//     let n2 = 0; // private proverty;

//     return {
//         next: () => {
//             let nextVal    = n1 === 0 ? 1 : (n1 + n2); // calculates the next value;

//             // redefines n1 and n2 to match new values
//             const prevVal  = n2;
//             n2             = nextVal;
//             n1             = prevVal;

//             // if we reached the upper bound (iteration completed)
//             // set done to true and nextVal to undefined;
            
//             let done = false;
//             if (nextVal >= max) {
//               nextVal = undefined;
//               done = true;
//             }

//             return { value: nextVal, done }  // return the iteration object as for the iteration protocol
//         }
//     }
// }

// function main(){
//     const it2 = new genFibIterator(6);
//     let result = it2.next();

//     while (!result.done) {
//         console.log(result.value)
//         result = it2.next()
//     };
// }

// main();
const genFibIterable = (max = Number.MAX_SAFE_INTEGER) => {
    let n1 = 0
    let n2 = 0
  
    // returns an iterable object
    return {
      [Symbol.iterator] () {
        // returns an iterator
        return {
          next() {
            let nextVal = n2 === 0 ? 1 : n1 + n2
  
            const prevVal = n2
            n2 = nextVal
            n1 = prevVal
  
            let done = false
            if (nextVal >= max) {
              nextVal = undefined
              done = true
            }
  
            return { value: nextVal, done }
          }
        }
      }
    }
}
const f = genFibIterable(17);
// use for of with Iterator object
for (let n of f) {
    console.log(n);
}
// creates an array with all the Fibonacci numbers lower than 17
const f2 = genFibIterable(17)
const lowerThan17 = [...f2]

/** 
    * the way a generator works is the following:
    When you invoke a generator function, a generator object is returned.
    Generator objects have a next() method.

    When you invoke the next() method of a generator object the code of the generator will be executed until the first yield (or return) is encountered.

    If a yield was found, the code is stopped and the yielded value will be passed to the invoking context though an object with the following shape: { value: <yieldedValue>, done: false }.

    The next time next() is invoked, the execution will be resumed from the point where it was initially suspended until a new yield or return is found.

    If a return statement is found (or the function completes), the object returned will look like: { value: <returnedValue>, done: true } (notice the done now set to true).

    Once the generator has completed, consecutive calls to next() will always produce { done: true }.

    // generator function
    function* countTo3() {
        yield 1
        yield 2
        return 3
    }
    // c is a generator object
        const c = countTo3()
        c.next() // { value: 1, done: false }
        c.next() // { value: 2, done: false }
        c.next() // { value: 3, done: true }
        c.next() // { done: true }
        c.next() // { done: true }
        // ...
*/

function* Fib (max = Number.MAX_SAFE_INTEGER) {
    // initialize the state variables
    let n1 = 0
    let n2 = 0
    // we can now pre-initialize nextVal to 1 as part of the state
    let nextVal = 1
  
    // loop until we exceed the max number
    while (nextVal <= max) {
      // yields the current value
      yield nextVal
  
      // shifts nextVal -> n2 and n2 -> n1
      const prevVal = n2
      n2 = nextVal
      n1 = prevVal
  
      // calculates the next value
      nextVal = n1 + n2
    }
}

