# Lesson 1: JavaScript Review

## Learning Objectives

By the end of this lesson, you will:
- Understand JavaScript's variable declaration keywords (`const`, `let`, `var`)
- Work with JavaScript's basic data types
- Use template literals for string interpolation
- Understand truthy and falsy values
- Write conditionals and loops in JavaScript

**Estimated Time:** 45 minutes

---

## Introduction

JavaScript is the language that powers the web - and with Node.js, it powers backend servers too! If you're coming from C++, you'll recognize many concepts, but JavaScript has some unique features that make it powerful and flexible.

Think of JavaScript as a more relaxed cousin of C++. It doesn't require you to declare types, it's more forgiving with syntax, and it has some really cool features for working with data.

---

## Variables: const, let, and var

In C++, you declare variables with their type:
```cpp
int age = 15;
string name = "Alex";
```

In JavaScript, you use `const`, `let`, or `var`:
```javascript
const age = 15;
const name = "Alex";
```

### The Three Keywords

**`const`** - Use this by default
- Cannot be reassigned
- Must be initialized when declared
- Use for values that won't change

```javascript
const pi = 3.14159;
const schoolName = "Sports Academy";
// pi = 3.14; // ERROR: Cannot reassign const
```

**`let`** - Use when you need to reassign
- Can be reassigned
- Block-scoped (like variables in C++ blocks)
- Use for counters, accumulators, or values that change

```javascript
let score = 0;
score = 10; // OK
score = score + 5; // OK
```

**`var`** - Don't use this (old-style JavaScript)
- Has weird scoping rules
- Can cause bugs
- Only exists for backwards compatibility

```javascript
// DON'T DO THIS
var count = 0;
```

### Rule of Thumb
1. Always use `const` first
2. If you get an error about reassignment, change it to `let`
3. Never use `var`

---

## Data Types

JavaScript has several basic data types. Unlike C++, you don't declare the type - JavaScript figures it out automatically (this is called "dynamic typing").

### Numbers
JavaScript has just one number type (no int vs float distinction):

```javascript
const age = 15;           // Integer
const price = 19.99;      // Decimal
const negative = -42;     // Negative
const big = 1_000_000;    // Can use underscores for readability
```

You can do math just like in C++:
```javascript
const sum = 10 + 5;        // 15
const product = 10 * 5;    // 50
const remainder = 10 % 3;  // 1
const power = 2 ** 3;      // 8 (2 to the power of 3)
```

### Strings
Strings in JavaScript are much more powerful than in C++:

```javascript
const firstName = "Alex";
const lastName = 'Johnson'; // Single or double quotes both work
```

**Template Literals** - The cool way to build strings:
```javascript
const name = "Alex";
const age = 15;

// Old way (don't do this)
const message = "Hello, my name is " + name + " and I'm " + age + " years old.";

// New way with template literals (use backticks!)
const message = `Hello, my name is ${name} and I'm ${age} years old.`;
```

Template literals use **backticks** (`) and `${expression}` to insert values.

### Booleans
Just like C++:
```javascript
const isStudent = true;
const isTeacher = false;
```

### null and undefined
JavaScript has two "nothing" values:

```javascript
const nothing = null;        // Intentionally empty
let notAssigned;             // undefined (no value yet)
```

Think of it this way:
- `null`: "I checked, and there's nothing here" (intentional)
- `undefined`: "I haven't set this yet" (accidental)

### Arrays
Arrays in JavaScript are way more flexible than C++ arrays:

```javascript
// Can hold any types
const numbers = [1, 2, 3, 4, 5];
const names = ["Alex", "Jordan", "Casey"];
const mixed = [1, "hello", true, null]; // Can mix types!

// Can grow and shrink
const scores = [95, 87, 92];
scores.push(88);  // Now [95, 87, 92, 88]
```

---

## Operators

Most operators work the same as C++:

### Comparison Operators

JavaScript has a quirk - it has two equality operators:

```javascript
// === and !== (use these!)
5 === 5        // true
5 === "5"      // false (different types)
5 !== 10       // true

// == and != (DON'T use these - they do weird type conversion)
5 == "5"       // true (WEIRD! Converts string to number)
```

**Always use `===` and `!==` to avoid surprises.**

Other comparisons work normally:
```javascript
10 > 5         // true
10 <= 10       // true
```

### Logical Operators
Same as C++:
```javascript
const isStudent = true;
const hasID = false;

isStudent && hasID    // false (AND)
isStudent || hasID    // true (OR)
!isStudent            // false (NOT)
```

---

## Truthy and Falsy

JavaScript has a unique concept: every value is either "truthy" or "falsy" when used in a boolean context.

**Falsy values** (these act like false in conditions):
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN` (Not a Number)

**Everything else is truthy**, including:
- `true`
- Any non-zero number
- Any non-empty string
- Arrays and objects (even empty ones!)

```javascript
const name = "Alex";

if (name) {
  console.log("Name exists!"); // This runs because name is truthy
}

const age = 0;
if (age) {
  console.log("Has age"); // This DOESN'T run because 0 is falsy
}
```

This is useful for checking if values exist:
```javascript
const username = getUserInput();
if (username) {
  // Only runs if username is not empty
  console.log(`Hello, ${username}!`);
}
```

---

## Conditionals

If statements work just like C++, but you don't need parentheses around single statements:

```javascript
const age = 15;

// Works like C++
if (age >= 13 && age <= 19) {
  console.log("You're a teenager");
} else if (age >= 20) {
  console.log("You're an adult");
} else {
  console.log("You're a kid");
}

// Ternary operator (same as C++)
const status = age >= 18 ? "adult" : "minor";
```

---

## Loops

### For Loops
Traditional for loops work like C++:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
```

### While Loops
```javascript
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
```

### For...of Loop (NEW!)
JavaScript has a simpler way to loop through arrays:
```javascript
const names = ["Alex", "Jordan", "Casey"];

// Old way (still works)
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// New way (easier!)
for (const name of names) {
  console.log(name);
}
```

---

## String Methods

JavaScript strings have lots of useful methods:

```javascript
const message = "Hello World";

message.length              // 11
message.toLowerCase()       // "hello world"
message.toUpperCase()       // "HELLO WORLD"
message.includes("World")   // true
message.startsWith("Hello") // true
message.split(" ")          // ["Hello", "World"]
message.trim()              // Removes whitespace from ends
```

Strings are **immutable** - these methods return new strings, they don't change the original:
```javascript
const name = "alex";
name.toUpperCase(); // Returns "ALEX"
console.log(name);  // Still "alex" - original unchanged!

// If you want to keep the change, reassign it:
let name2 = "alex";
name2 = name2.toUpperCase(); // Now name2 is "ALEX"
```

---

## Array Basics

Arrays have many useful methods (we'll cover more in the next lesson):

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.length           // 5
numbers[0]               // 1 (first element)
numbers[numbers.length - 1]  // 5 (last element)

// Modifying arrays
numbers.push(6)          // Add to end: [1, 2, 3, 4, 5, 6]
numbers.pop()            // Remove from end: [1, 2, 3, 4, 5]
numbers.unshift(0)       // Add to beginning: [0, 1, 2, 3, 4, 5]
numbers.shift()          // Remove from beginning: [1, 2, 3, 4, 5]

// Checking contents
numbers.includes(3)      // true
numbers.indexOf(3)       // 2 (index of first occurrence)
```

---

## Console.log - Your Debugging Friend

In C++, you used `cout` to print. In JavaScript, use `console.log()`:

```javascript
console.log("Hello, world!");

const name = "Alex";
const age = 15;
console.log("Name:", name, "Age:", age);

// With template literals
console.log(`Name: ${name}, Age: ${age}`);

// You can log any type
console.log([1, 2, 3]);          // Arrays
console.log({ name: "Alex" });    // Objects (we'll cover these next)
```

---

## Practical Example: Grade Calculator

Let's put it all together with a practical example:

```javascript
// Calculate letter grade from percentage
const calculateGrade = (percentage) => {
  if (percentage >= 90) {
    return 'A';
  } else if (percentage >= 80) {
    return 'B';
  } else if (percentage >= 70) {
    return 'C';
  } else if (percentage >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};

// Test scores for a student
const scores = [95, 87, 92, 88, 90];

// Calculate average
let sum = 0;
for (const score of scores) {
  sum += score;
}
const average = sum / scores.length;

// Get letter grade
const grade = calculateGrade(average);

// Display result
console.log(`Average: ${average}%`);
console.log(`Grade: ${grade}`);
```

---

## Common Mistakes to Avoid

1. **Using `var` instead of `const`/`let`**
   ```javascript
   // DON'T
   var name = "Alex";

   // DO
   const name = "Alex";
   ```

2. **Using `==` instead of `===`**
   ```javascript
   // DON'T
   if (age == "15") { }

   // DO
   if (age === 15) { }
   ```

3. **Trying to reassign const**
   ```javascript
   const score = 100;
   score = 95; // ERROR!

   // If you need to change it, use let:
   let score = 100;
   score = 95; // OK
   ```

4. **Forgetting backticks in template literals**
   ```javascript
   // WRONG - uses quotes instead of backticks
   const message = "Hello ${name}"; // Prints literally "Hello ${name}"

   // RIGHT - uses backticks
   const message = `Hello ${name}`; // Prints "Hello Alex"
   ```

---

## Practice Checkpoint

Try to answer these questions:

1. What's the difference between `const` and `let`?
2. What happens if you try to reassign a `const` variable?
3. What's the difference between `===` and `==`?
4. Is an empty array `[]` truthy or falsy?
5. How do you create a string that includes a variable's value?

<details>
<summary>Click to see answers</summary>

1. `const` cannot be reassigned, `let` can
2. You get an error: "Assignment to constant variable"
3. `===` checks value AND type, `==` converts types (use `===`!)
4. Truthy (even though it's empty)
5. Use template literals with backticks: `` `Hello ${name}` ``
</details>

---

## Key Takeaways

- Use `const` by default, `let` when you need to reassign, never `var`
- JavaScript is dynamically typed - you don't declare types
- Template literals (`` `${expression}` ``) are the best way to build strings
- Always use `===` and `!==` for equality checks
- Understand truthy/falsy values for better conditionals
- JavaScript arrays are flexible and can grow/shrink

---

## What's Next?

In the next lesson, we'll dive into **Functions & Arrays**, where you'll learn about arrow functions, callbacks, and powerful array methods like `map`, `filter`, and `reduce` that will change how you think about processing data!

---

## Additional Resources

- [MDN: JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [JavaScript.info: Variables](https://javascript.info/variables)
- [JavaScript.info: Data Types](https://javascript.info/types)
