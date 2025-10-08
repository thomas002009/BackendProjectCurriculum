# Module 02: JavaScript Fundamentals

## Overview

Welcome to Module 2! Now that you have your development environment set up, it's time to learn JavaScript - the language that powers backend development with Node.js. If you're coming from C++, you'll find some familiar concepts but also some exciting new features that make JavaScript unique.

**Estimated Time:** 2 weeks
**Difficulty:** ⭐⭐

## Prerequisites

Before starting this module, you should have:
- Completed Module 01 (Git, Environment & Node.js)
- Basic programming knowledge (variables, functions, loops, conditionals from C++)
- Node.js and npm installed
- A code editor set up (VS Code recommended)

## What You'll Learn

By the end of this module, you will:
- Understand JavaScript syntax and how it differs from C++
- Work confidently with variables, data types, and operators
- Use functions including arrow functions and callbacks
- Master array methods like `map`, `filter`, and `reduce`
- Work with objects and JSON data
- Understand asynchronous programming with promises and async/await
- Read and write files using Node.js

## Concepts Covered

- Variables (`const`, `let`, `var`)
- Data types (strings, numbers, booleans, arrays, objects, null, undefined)
- Functions (regular functions, arrow functions, callbacks)
- Array methods (map, filter, reduce, forEach, find)
- Objects and JSON
- Asynchronous programming (callbacks, promises, async/await)
- File I/O with Node.js fs module
- Error handling with try/catch

## Module Structure

```
module-02-javascript-fundamentals/
├── README.md (this file)
├── lessons/
│   ├── 01-javascript-review.md
│   ├── 02-functions-arrays.md
│   ├── 03-objects-json.md
│   ├── 04-async-promises.md
│   └── assets/
│       └── README.md
├── exercises/
│   ├── 01-syntax-practice/
│   ├── 02-array-methods/
│   ├── 03-objects-json/
│   └── 04-async-practice/
└── homework/
    ├── README.md
    ├── starter/
    └── tests/
```

## Lessons

### Lesson 1: JavaScript Review (45 minutes)
**Topics:** Variables, data types, operators, conditionals, loops
**Goal:** Understand basic JavaScript syntax coming from C++

**What you'll learn:**
- How JavaScript variables work differently from C++
- JavaScript's dynamic typing system
- String interpolation and template literals
- Truthy and falsy values

**In-class activity:** Convert simple C++ programs to JavaScript

---

### Lesson 2: Functions & Arrays (60 minutes)
**Topics:** Functions, arrow functions, array methods
**Goal:** Master JavaScript's powerful functional programming features

**What you'll learn:**
- Different ways to define functions in JavaScript
- Arrow functions and when to use them
- Higher-order functions and callbacks
- Array methods that replace traditional loops

**In-class activity:** Refactor loop-based code to use array methods

---

### Lesson 3: Objects & JSON (45 minutes)
**Topics:** JavaScript objects, JSON format, working with data
**Goal:** Learn to work with structured data

**What you'll learn:**
- Creating and manipulating JavaScript objects
- Destructuring objects and arrays
- Understanding JSON format
- Reading and writing JSON files

**In-class activity:** Parse and transform JSON data

---

### Lesson 4: Async Programming (60 minutes)
**Topics:** Callbacks, promises, async/await
**Goal:** Understand asynchronous code execution

**What you'll learn:**
- Why asynchronous programming is important
- How promises work
- Using async/await for cleaner async code
- Error handling in async functions

**In-class activity:** Convert callback-based code to async/await

---

## Exercises

### Exercise 1: Syntax Practice
**Difficulty:** ⭐
**Time:** 20 minutes
**Objective:** Get comfortable with basic JavaScript syntax

Practice writing JavaScript code including variables, conditionals, loops, and basic functions.

---

### Exercise 2: Array Methods
**Difficulty:** ⭐⭐
**Time:** 30 minutes
**Objective:** Master array methods like map, filter, reduce

Work through various array transformation challenges using functional programming approaches.

---

### Exercise 3: Objects & JSON
**Difficulty:** ⭐⭐
**Time:** 30 minutes
**Objective:** Work with objects and JSON data

Read JSON data, transform it, and write it back to files.

---

### Exercise 4: Async Practice
**Difficulty:** ⭐⭐
**Time:** 40 minutes
**Objective:** Write asynchronous code with async/await

Practice handling async operations and error handling.

---

## Homework Assignment

**Project:** Build a CLI Todo Manager
**Difficulty:** ⭐⭐
**Estimated Time:** 3-4 hours

You'll build a command-line tool that manages a todo list stored in a JSON file. This project will use everything you've learned: functions, arrays, objects, JSON, and async file operations.

**Features to implement:**
- Read todos from a JSON file
- Add new todos
- Mark todos as complete
- List all todos
- Filter todos by status

**Testing:** Run `npm run test:module-02` to check your work.

See `homework/README.md` for detailed requirements.

---

## Learning Tips

### For Students Coming from C++

1. **No semicolons required** (but they're allowed): JavaScript has automatic semicolon insertion, though many developers still use them.

2. **Dynamic typing**: You don't declare types like `int` or `string`. JavaScript figures it out.
   ```cpp
   // C++
   int age = 15;
   string name = "Alex";
   ```
   ```javascript
   // JavaScript
   const age = 15;
   const name = "Alex";
   ```

3. **Arrays are flexible**: JavaScript arrays can hold different types and grow/shrink dynamically.
   ```cpp
   // C++ - fixed size and type
   int numbers[5] = {1, 2, 3, 4, 5};
   ```
   ```javascript
   // JavaScript - dynamic
   const numbers = [1, 2, 3, 4, 5];
   numbers.push(6); // Now has 6 elements
   ```

4. **Functions are values**: You can store functions in variables and pass them around.
   ```javascript
   const greet = (name) => `Hello, ${name}!`;
   ```

### Common Pitfalls

1. **Using `var` instead of `const`/`let`**: Always use `const` by default, `let` when you need to reassign.

2. **Forgetting `async`/`await`**: When working with promises, don't forget the `await` keyword.

3. **Not handling errors**: Always use try/catch with async operations.

4. **Mutating arrays**: Methods like `push` modify the original array. Use `map`, `filter` for non-mutating operations.

---

## Testing Your Knowledge

After completing this module, you should be able to:
- [ ] Explain the difference between `const`, `let`, and `var`
- [ ] Write functions using both regular and arrow syntax
- [ ] Use `map`, `filter`, and `reduce` to transform arrays
- [ ] Work with JavaScript objects and JSON
- [ ] Write async functions with async/await
- [ ] Handle errors in async code
- [ ] Read and write files using Node.js

---

## Resources

### Cheat Sheets
- [JavaScript Reference](../../resources/cheatsheets/javascript-reference.md)
- [Array Methods Visual Guide](../../resources/cheatsheets/javascript-reference.md#array-methods)

### External Resources
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [You Don't Know JS (book series)](https://github.com/getify/You-Dont-Know-JS)

### When You're Stuck
1. Read the error message carefully - JavaScript errors are usually helpful
2. Check the lesson files for examples
3. Review the cheat sheets in the resources folder
4. Ask questions during office hours
5. Check the [common errors guide](../../resources/common-errors.md#module-02)

---

## What's Next?

After completing this module, you'll move on to **Module 03: TypeScript Basics**, where you'll learn how to add type safety to your JavaScript code. TypeScript is what we'll use for the rest of the course, and it's what the real sports coaching platform uses.

---

## Teacher Notes

### Pacing Suggestions
- **Week 1:** Lessons 1-2, Exercises 1-2
- **Week 2:** Lessons 3-4, Exercises 3-4, Start homework
- **Between classes:** Complete homework

### Common Challenges
- Students may struggle with asynchronous concepts initially
- Arrow function syntax can be confusing at first
- Understanding when to use array methods vs loops takes practice
- Error handling with promises requires extra attention

### Assessment Criteria
Students are ready to move on when they can:
- Write clean, functional JavaScript code
- Use array methods appropriately
- Work with JSON data confidently
- Write async functions correctly
- Pass all homework tests

### Moving On
Students should complete at least 80% of the homework tests before moving to Module 03. The concepts in this module are foundational for everything that follows.

---

**Happy Coding!** JavaScript is a powerful and flexible language. Take your time with the async concepts - they're crucial for backend development.
