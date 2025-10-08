# Exercise 4: Async/Await Practice

## Objective

Master asynchronous JavaScript using Promises, async/await, and handling file operations with proper error handling.

**Difficulty:** ⭐⭐⭐
**Estimated Time:** 40 minutes

## Prerequisites

- Completed Lesson 4: Async & Promises
- Understanding of callbacks
- Knowledge of Promises
- Familiarity with async/await syntax
- Basic understanding of error handling (try/catch)

## Instructions

Open `async-exercises.js` and complete all the TODO comments. You'll practice:
1. Creating and working with Promises
2. Using async/await syntax
3. Handling errors with try/catch
4. Working with file system operations asynchronously
5. Managing multiple async operations

## How to Run

```bash
node async-exercises.js
```

## What You'll Practice

- Creating Promises with resolve and reject
- Using .then() and .catch() for Promise handling
- Converting Promise chains to async/await
- Error handling with try/catch blocks
- Reading and writing files asynchronously
- Using Promise.all() for parallel operations
- Using Promise.race() for timeout patterns
- Understanding the event loop and async behavior

## Tips

- Always use try/catch when using async/await
- Remember: await only works inside async functions
- Promises have three states: pending, fulfilled, rejected
- Use Promise.all() when you want to wait for multiple operations
- Don't forget to handle errors - unhandled rejections can crash your app
- The fs.promises API is cleaner than callbacks

## Sample Data

Some exercises will work with the `data.json` file from the previous exercise (03-objects-json). Make sure that file exists before running tests.

## Learning Goals

After completing this exercise, you should be comfortable with:
- Writing and consuming Promises
- Using async/await for cleaner async code
- Handling errors in asynchronous operations
- Reading and writing files asynchronously
- Coordinating multiple async operations
- Understanding when to use Promise.all() vs sequential await

## Need Help?

- Review [Lesson 4: Async & Promises](../../lessons/04-async-promises.md)
- Check the [JavaScript Reference Cheatsheet](../../../resources/cheatsheets/javascript-reference.md)
- Common issues are documented in the [Common Errors Guide](../../../resources/common-errors.md#module-02)
- Review the async diagram in [lessons/assets/async-diagram.png](../../lessons/assets/async-diagram.png)

## Common Pitfalls

- Forgetting to use `await` (your async function won't wait!)
- Forgetting to make the function `async` when using `await`
- Not handling errors (always use try/catch with async/await)
- Using await in loops when you could use Promise.all() for better performance
- Mixing .then() and async/await (pick one style and stick with it)
