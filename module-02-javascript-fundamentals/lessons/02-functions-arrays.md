# Lesson 2: Functions & Arrays

## Learning Objectives

By the end of this lesson, you will:
- Write functions using multiple JavaScript syntaxes
- Understand arrow functions and when to use them
- Work with higher-order functions and callbacks
- Master array methods: `map`, `filter`, `reduce`, `forEach`, `find`
- Replace traditional loops with functional programming approaches

**Estimated Time:** 60 minutes

---

## Introduction

Functions in JavaScript are first-class citizens - they can be stored in variables, passed as arguments, and returned from other functions. This opens up powerful programming patterns that aren't common in C++.

Think of array methods as assembly line workers. Instead of walking through a factory yourself (using loops), you hire specialized workers (functions) to do specific jobs on each item.

---

## Function Basics

### Regular Function Declaration

This is similar to C++ functions:

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

const message = greet("Alex"); // "Hello, Alex!"
```

Key differences from C++:
- No return type declaration
- No parameter type declarations
- Use `function` keyword

### Function Expressions

You can store functions in variables:

```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};

const message = greet("Jordan"); // "Hello, Jordan!"
```

---

## Arrow Functions

Arrow functions are a shorter, modern syntax for writing functions. They're used everywhere in JavaScript!

### Basic Syntax

```javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => {
  return a + b;
};

// Even shorter (implicit return when one expression)
const add = (a, b) => a + b;
```

### Arrow Function Rules

**Multiple parameters:** Use parentheses
```javascript
const add = (a, b) => a + b;
```

**Single parameter:** Parentheses optional
```javascript
const double = x => x * 2;
// Or with parentheses (more common)
const double = (x) => x * 2;
```

**No parameters:** Parentheses required
```javascript
const sayHello = () => "Hello!";
```

**Multiple statements:** Use curly braces and `return`
```javascript
const calculateGrade = (score) => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  return 'C';
};
```

**Single expression:** Implicit return (no curly braces needed)
```javascript
const square = (x) => x * x;
const greet = (name) => `Hello, ${name}!`;
```

### When to Use Arrow Functions

Use arrow functions for:
- Short, simple functions
- Callbacks (functions passed to other functions)
- Array methods (map, filter, etc.)

Use regular functions for:
- Methods in objects (we'll cover this later)
- When you need `this` keyword (advanced topic)

---

## Higher-Order Functions

A **higher-order function** is a function that takes another function as an argument or returns a function. This is a core concept in JavaScript.

```javascript
// greetFunction is a higher-order function
const greetFunction = (greetingFunction, name) => {
  return greetingFunction(name);
};

// These are regular functions
const friendlyGreet = (name) => `Hey ${name}!`;
const formalGreet = (name) => `Good day, ${name}.`;

// Pass functions as arguments
console.log(greetFunction(friendlyGreet, "Alex")); // "Hey Alex!"
console.log(greetFunction(formalGreet, "Alex"));   // "Good day, Alex."
```

Think of it like this: instead of telling someone exactly what to do, you give them a tool (a function) and let them use it.

---

## Array Methods: The Functional Way

Traditional loops require you to manage the iteration yourself. Array methods handle the iteration and let you focus on what to do with each element.

### forEach - Do Something with Each Element

`forEach` runs a function for each element in an array. It's like a for-of loop but using a function.

```javascript
const names = ["Alex", "Jordan", "Casey"];

// Old way (loop)
for (const name of names) {
  console.log(name);
}

// New way (forEach)
names.forEach((name) => {
  console.log(name);
});

// Even shorter
names.forEach((name) => console.log(name));
```

`forEach` doesn't return anything - it's just for doing side effects (like logging).

---

### map - Transform Each Element

`map` creates a NEW array by transforming each element. It's like an assembly line that modifies each item.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Old way: create new array with doubled values
const doubled = [];
for (const num of numbers) {
  doubled.push(num * 2);
}

// New way: use map
const doubled = numbers.map((num) => num * 2);
// [2, 4, 6, 8, 10]
```

**Map always returns a new array with the same length as the original.**

Real-world example:
```javascript
const students = [
  { name: "Alex", score: 85 },
  { name: "Jordan", score: 92 },
  { name: "Casey", score: 88 }
];

// Get just the names
const names = students.map((student) => student.name);
// ["Alex", "Jordan", "Casey"]

// Add 5 bonus points to each score
const bonusScores = students.map((student) => student.score + 5);
// [90, 97, 93]

// Create grade labels
const labels = students.map((student) => `${student.name}: ${student.score}%`);
// ["Alex: 85%", "Jordan: 92%", "Casey: 88%"]
```

---

### filter - Keep Only Some Elements

`filter` creates a NEW array with only the elements that pass a test. It's like a bouncer checking IDs.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// Old way: filter even numbers
const evens = [];
for (const num of numbers) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}

// New way: use filter
const evens = numbers.filter((num) => num % 2 === 0);
// [2, 4, 6]
```

**Filter returns a new array that might be shorter than the original.**

The function you pass to filter should return `true` (keep this element) or `false` (exclude this element).

Real-world example:
```javascript
const students = [
  { name: "Alex", score: 85, passed: true },
  { name: "Jordan", score: 92, passed: true },
  { name: "Casey", score: 55, passed: false },
  { name: "Taylor", score: 78, passed: true }
];

// Get only passing students
const passingStudents = students.filter((student) => student.passed);
// Returns 3 students (all except Casey)

// Get students with scores above 80
const highScorers = students.filter((student) => student.score >= 80);
// [Alex, Jordan]

// Get students whose names start with 'C'
const cNames = students.filter((student) => student.name.startsWith('C'));
// [Casey]
```

---

### find - Get the First Match

`find` returns the FIRST element that passes a test, or `undefined` if none match.

```javascript
const students = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Jordan" },
  { id: 3, name: "Casey" }
];

// Find student with id 2
const student = students.find((s) => s.id === 2);
// { id: 2, name: "Jordan" }

// Find student named "Taylor" (doesn't exist)
const missing = students.find((s) => s.name === "Taylor");
// undefined
```

Use `find` when you're looking for one specific item.

---

### reduce - Combine All Elements into One Value

`reduce` is the most powerful but also trickiest array method. It "reduces" an array to a single value by running a function that combines elements.

Think of it like folding paper: each fold combines two pieces into one, until you have a single folded result.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Old way: sum all numbers
let sum = 0;
for (const num of numbers) {
  sum += num;
}

// New way: use reduce
const sum = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0); // 0 is the starting value

// Even shorter
const sum = numbers.reduce((acc, num) => acc + num, 0);
// 15
```

**How reduce works:**
1. Start with an initial value (0 in this case)
2. For each element, run the function with:
   - `accumulator`: the result so far
   - `current`: the current element
3. Return the new accumulated value
4. After processing all elements, return the final accumulator

Example walkthrough:
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);

// Step by step:
// Start: acc = 0
// Process 1: acc = 0 + 1 = 1
// Process 2: acc = 1 + 2 = 3
// Process 3: acc = 3 + 3 = 6
// Process 4: acc = 6 + 4 = 10
// Result: 10
```

More examples:
```javascript
const numbers = [5, 10, 15, 20];

// Find the maximum
const max = numbers.reduce((acc, num) => {
  return num > acc ? num : acc;
}, numbers[0]);
// 20

// Count how many are greater than 10
const count = numbers.reduce((acc, num) => {
  return num > 10 ? acc + 1 : acc;
}, 0);
// 2
```

---

## Chaining Array Methods

The real power comes from chaining methods together:

```javascript
const students = [
  { name: "Alex", score: 85 },
  { name: "Jordan", score: 92 },
  { name: "Casey", score: 55 },
  { name: "Taylor", score: 78 }
];

// Get the average score of passing students (score >= 70)
const average = students
  .filter((student) => student.score >= 70)  // Keep passing students
  .map((student) => student.score)           // Get just the scores
  .reduce((sum, score) => sum + score, 0)    // Add them up
  / students.filter((s) => s.score >= 70).length; // Divide by count

console.log(average); // 85
```

Breaking it down:
1. `filter`: [Alex, Jordan, Taylor] (removed Casey)
2. `map`: [85, 92, 78] (just scores)
3. `reduce`: 255 (sum)
4. Divide: 255 / 3 = 85

---

## Other Useful Array Methods

### some - Check if Any Element Passes a Test

```javascript
const numbers = [1, 2, 3, 4, 5];

// Are any numbers greater than 3?
const hasLarge = numbers.some((num) => num > 3);
// true (4 and 5 are greater than 3)
```

### every - Check if All Elements Pass a Test

```javascript
const numbers = [1, 2, 3, 4, 5];

// Are all numbers positive?
const allPositive = numbers.every((num) => num > 0);
// true

// Are all numbers greater than 3?
const allLarge = numbers.every((num) => num > 3);
// false (1, 2, 3 are not)
```

### sort - Sort an Array

```javascript
const numbers = [3, 1, 4, 1, 5, 9];

// Sort numbers (ascending)
numbers.sort((a, b) => a - b);
// [1, 1, 3, 4, 5, 9]

// Sort names alphabetically
const names = ["Jordan", "Alex", "Casey"];
names.sort();
// ["Alex", "Casey", "Jordan"]
```

**Warning:** `sort` modifies the original array! To avoid this:
```javascript
const numbers = [3, 1, 4, 1, 5, 9];
const sorted = [...numbers].sort((a, b) => a - b);
// Original numbers array unchanged
```

---

## Practical Example: Processing Class Data

Let's put it all together:

```javascript
const classRoster = [
  { name: "Alex", age: 15, scores: [85, 90, 88] },
  { name: "Jordan", age: 16, scores: [92, 88, 95] },
  { name: "Casey", age: 15, scores: [78, 82, 80] },
  { name: "Taylor", age: 16, scores: [95, 98, 92] }
];

// Calculate average score for each student
const withAverages = classRoster.map((student) => {
  const average = student.scores.reduce((sum, score) => sum + score, 0)
                  / student.scores.length;
  return { ...student, average };
});

// Get students with average >= 85
const topStudents = withAverages.filter((student) => student.average >= 85);

// Get just their names
const topStudentNames = topStudents.map((student) => student.name);

console.log(topStudentNames); // ["Alex", "Jordan", "Taylor"]

// Or do it all in one chain:
const topNames = classRoster
  .map((student) => ({
    ...student,
    average: student.scores.reduce((sum, s) => sum + s, 0) / student.scores.length
  }))
  .filter((student) => student.average >= 85)
  .map((student) => student.name);
```

---

## When to Use Loops vs Array Methods

### Use array methods when:
- You're transforming data (`map`)
- You're filtering data (`filter`)
- You're searching for something (`find`)
- You're combining values (`reduce`)
- The operation is straightforward

### Use traditional loops when:
- You need to break early (stop before reaching the end)
- You're doing complex logic that doesn't fit array methods
- Performance is critical (loops are slightly faster)
- You're doing multiple operations at once

Example where a loop is better:
```javascript
// Find first number over 1000
const numbers = [10, 20, 30, ..., 1500, ...];

// With loop (stops as soon as it finds one)
let found;
for (const num of numbers) {
  if (num > 1000) {
    found = num;
    break;
  }
}

// With find (also stops early)
const found = numbers.find((num) => num > 1000);
```

---

## Common Mistakes

1. **Forgetting to return in map**
   ```javascript
   // WRONG - forEach doesn't return anything
   const doubled = numbers.forEach((num) => num * 2);
   // doubled is undefined

   // RIGHT - map returns a new array
   const doubled = numbers.map((num) => num * 2);
   ```

2. **Mutating the original array**
   ```javascript
   // WRONG - changes original
   const students = [...];
   students.sort();

   // RIGHT - create a copy first
   const sorted = [...students].sort();
   ```

3. **Forgetting the initial value in reduce**
   ```javascript
   // Might work but risky
   const sum = numbers.reduce((acc, num) => acc + num);

   // Better - explicit starting value
   const sum = numbers.reduce((acc, num) => acc + num, 0);
   ```

4. **Using map when you should use filter**
   ```javascript
   // WRONG - map returns same length array
   const passed = students.map((s) => s.score >= 70); // [true, false, true, ...]

   // RIGHT - filter returns fewer elements
   const passed = students.filter((s) => s.score >= 70);
   ```

---

## Practice Checkpoint

Given this array:
```javascript
const products = [
  { name: "Ball", price: 20, inStock: true },
  { name: "Racket", price: 50, inStock: false },
  { name: "Shoes", price: 80, inStock: true },
  { name: "Net", price: 30, inStock: true }
];
```

Try to:
1. Get an array of just the product names
2. Get only products that are in stock
3. Get the total price of all in-stock items
4. Check if any product costs more than $60

<details>
<summary>Click to see solutions</summary>

```javascript
// 1. Product names
const names = products.map((p) => p.name);
// ["Ball", "Racket", "Shoes", "Net"]

// 2. In-stock products
const inStock = products.filter((p) => p.inStock);
// [Ball, Shoes, Net]

// 3. Total price of in-stock items
const total = products
  .filter((p) => p.inStock)
  .reduce((sum, p) => sum + p.price, 0);
// 130

// 4. Any product over $60?
const hasExpensive = products.some((p) => p.price > 60);
// true (Shoes is $80)
```
</details>

---

## Key Takeaways

- Arrow functions are concise: `(param) => expression`
- Functions can be passed as arguments (higher-order functions)
- `map`: Transform each element → new array, same length
- `filter`: Keep some elements → new array, shorter or same length
- `find`: Get first matching element → single element or undefined
- `reduce`: Combine all elements → single value
- Chain methods together for powerful data transformations
- Array methods are more expressive than loops for most operations

---

## What's Next?

In the next lesson, we'll explore **Objects & JSON**, where you'll learn how to structure data and work with the JSON format that's used everywhere in web development!

---

## Additional Resources

- [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN: Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript.info: Array Methods](https://javascript.info/array-methods)
