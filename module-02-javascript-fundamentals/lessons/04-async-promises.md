# Lesson 4: Asynchronous Programming

## Learning Objectives

By the end of this lesson, you will:
- Understand why asynchronous programming is necessary
- Work with callbacks and understand callback hell
- Use Promises to handle async operations
- Write clean async code using async/await
- Handle errors in asynchronous code
- Understand when code runs synchronously vs asynchronously

**Estimated Time:** 60 minutes

---

## Introduction

Asynchronous programming is one of JavaScript's most important features - and one of the trickiest concepts to grasp. But once you understand it, you'll see why JavaScript is so powerful for backend development.

Think of it like this: When you're cooking, you don't wait for water to boil before starting anything else. You set the water to boil, then chop vegetables while waiting. That's asynchronous - doing multiple things where some take time to complete.

---

## Synchronous vs Asynchronous Code

### Synchronous (Blocking) Code

Code that runs one line at a time, waiting for each to finish:

```javascript
console.log("Start");
console.log("Middle");
console.log("End");

// Output:
// Start
// Middle
// End
```

Each line waits for the previous one. This is **blocking** - nothing else can happen while waiting.

### Asynchronous (Non-Blocking) Code

Code that doesn't wait - it starts something and moves on:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 1000); // Wait 1 second

console.log("End");

// Output:
// Start
// End
// Middle (after 1 second)
```

"End" prints before "Middle" because setTimeout is asynchronous - it doesn't block!

---

## Why Asynchronous?

In backend development, many operations take time:
- Reading files from disk
- Querying a database
- Making HTTP requests
- Waiting for user input

If JavaScript waited (blocked) for these operations, your entire server would freeze. Instead, JavaScript starts the operation and continues running other code while waiting.

```javascript
// Imagine if this blocked
const data = readFileFromDisk('huge-file.txt'); // Takes 5 seconds
console.log('This would wait 5 seconds!');

// With async, it doesn't block
readFileFromDisk('huge-file.txt', (data) => {
  console.log('Got data!');
});
console.log('This runs immediately!');
```

---

## Callbacks: The Old Way

A **callback** is a function you pass to another function to be called later when something finishes.

### Basic Callback Example

```javascript
// setTimeout takes a callback
setTimeout(() => {
  console.log('2 seconds later...');
}, 2000);
```

The arrow function is the callback - it runs after 2 seconds.

### Reading Files with Callbacks

```javascript
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (error, data) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('File contents:', data);
});

console.log('Reading file...'); // Prints first!
```

The callback function `(error, data) => {...}` runs when the file is loaded.

**Node.js callback pattern:** First parameter is always error (or null if no error).

---

## Callback Hell

Callbacks work, but they get messy when you need to do multiple async operations in sequence:

```javascript
// Bad: Callback hell (pyramid of doom)
fs.readFile('user.json', 'utf8', (err, userData) => {
  if (err) return console.error(err);

  const user = JSON.parse(userData);

  fs.readFile(`posts-${user.id}.json`, 'utf8', (err, postsData) => {
    if (err) return console.error(err);

    const posts = JSON.parse(postsData);

    fs.readFile(`comments-${posts[0].id}.json`, 'utf8', (err, commentsData) => {
      if (err) return console.error(err);

      const comments = JSON.parse(commentsData);
      console.log(comments); // Finally!
    });
  });
});
```

This is hard to read and maintain. That's why Promises were created.

---

## Promises: A Better Way

A **Promise** represents a value that will be available in the future. It's like a receipt - you get it immediately, but the actual product comes later.

### Promise States

A Promise can be in one of three states:
- **Pending**: Waiting for the result
- **Fulfilled**: Operation succeeded, result is available
- **Rejected**: Operation failed, error is available

### Creating a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Do something async
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve('Operation succeeded!'); // Fulfill the promise
    } else {
      reject('Operation failed!'); // Reject the promise
    }
  }, 1000);
});
```

### Using Promises with .then() and .catch()

```javascript
myPromise
  .then((result) => {
    console.log(result); // "Operation succeeded!"
  })
  .catch((error) => {
    console.error(error);
  });
```

### Chaining Promises

Promises can be chained to avoid callback hell:

```javascript
const fs = require('fs').promises;

fs.readFile('user.json', 'utf8')
  .then((userData) => {
    const user = JSON.parse(userData);
    return fs.readFile(`posts-${user.id}.json`, 'utf8');
  })
  .then((postsData) => {
    const posts = JSON.parse(postsData);
    return fs.readFile(`comments-${posts[0].id}.json`, 'utf8');
  })
  .then((commentsData) => {
    const comments = JSON.parse(commentsData);
    console.log(comments);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

Much better! But there's an even cleaner way...

---

## Async/Await: The Modern Way

**Async/await** makes asynchronous code look synchronous. It's syntactic sugar over Promises.

### Basic Async/Await

```javascript
const myAsyncFunction = async () => {
  const result = await myPromise;
  console.log(result);
};
```

### Rules for Async/Await

1. You can only use `await` inside an `async` function
2. `await` pauses the function until the Promise resolves
3. `await` returns the resolved value
4. If the Promise rejects, `await` throws an error (use try/catch)

### Reading Files with Async/Await

```javascript
const fs = require('fs').promises;

const readUserData = async () => {
  try {
    // Read user file
    const userData = await fs.readFile('user.json', 'utf8');
    const user = JSON.parse(userData);

    // Read posts file
    const postsData = await fs.readFile(`posts-${user.id}.json`, 'utf8');
    const posts = JSON.parse(postsData);

    // Read comments file
    const commentsData = await fs.readFile(`comments-${posts[0].id}.json`, 'utf8');
    const comments = JSON.parse(commentsData);

    console.log(comments);
  } catch (error) {
    console.error('Error:', error);
  }
};

readUserData();
```

Look how clean that is! It reads like synchronous code but doesn't block.

---

## Error Handling with Try/Catch

Always wrap `await` calls in try/catch blocks:

```javascript
const loadData = async () => {
  try {
    const data = await fs.readFile('data.json', 'utf8');
    const parsed = JSON.parse(data);
    return parsed;
  } catch (error) {
    console.error('Failed to load data:', error);
    return null; // Return default value on error
  }
};
```

Without try/catch, uncaught errors will crash your program!

---

## Multiple Async Operations

### Sequential (One After Another)

```javascript
const loadAllData = async () => {
  const users = await loadUsers();     // Wait for this
  const posts = await loadPosts();     // Then wait for this
  const comments = await loadComments(); // Then wait for this

  return { users, posts, comments };
};
```

### Parallel (All at Once)

If operations don't depend on each other, run them in parallel:

```javascript
const loadAllData = async () => {
  // Start all three at the same time
  const usersPromise = loadUsers();
  const postsPromise = loadPosts();
  const commentsPromise = loadComments();

  // Wait for all to complete
  const [users, posts, comments] = await Promise.all([
    usersPromise,
    postsPromise,
    commentsPromise
  ]);

  return { users, posts, comments };
};
```

**Promise.all()** waits for all promises to resolve. Much faster when operations are independent!

---

## Promise.all vs Promise.allSettled

### Promise.all()

Waits for all promises, but **fails fast** - if any promise rejects, the whole thing rejects:

```javascript
try {
  const [result1, result2, result3] = await Promise.all([
    promise1,
    promise2,
    promise3
  ]);
} catch (error) {
  // If ANY promise fails, you end up here
  console.error('One of the promises failed:', error);
}
```

### Promise.allSettled()

Waits for all promises, but **never rejects** - you get results for all, success or failure:

```javascript
const results = await Promise.allSettled([
  promise1,
  promise2,
  promise3
]);

results.forEach((result, index) => {
  if (result.status === 'fulfilled') {
    console.log(`Promise ${index} succeeded:`, result.value);
  } else {
    console.log(`Promise ${index} failed:`, result.reason);
  }
});
```

Use `Promise.all()` when you need all operations to succeed.
Use `Promise.allSettled()` when you want results from all operations regardless of failures.

---

## Practical Example: Data Processing Pipeline

```javascript
const fs = require('fs').promises;

// Helper functions
const readJsonFile = async (filename) => {
  const data = await fs.readFile(filename, 'utf8');
  return JSON.parse(data);
};

const writeJsonFile = async (filename, data) => {
  const jsonString = JSON.stringify(data, null, 2);
  await fs.writeFile(filename, jsonString, 'utf8');
};

// Main processing function
const processStudentData = async () => {
  try {
    // Load data
    console.log('Loading student data...');
    const students = await readJsonFile('students.json');

    // Calculate averages
    console.log('Calculating averages...');
    const studentsWithAverages = students.map((student) => {
      const average = student.grades.reduce((sum, g) => sum + g, 0) / student.grades.length;
      return { ...student, average };
    });

    // Sort by average (highest first)
    studentsWithAverages.sort((a, b) => b.average - a.average);

    // Save results
    console.log('Saving results...');
    await writeJsonFile('results.json', studentsWithAverages);

    console.log('Done! Results saved to results.json');
    return studentsWithAverages;

  } catch (error) {
    console.error('Error processing data:', error);
    throw error; // Re-throw so caller knows it failed
  }
};

// Run it
processStudentData()
  .then(() => console.log('Success!'))
  .catch((error) => console.error('Failed:', error));
```

---

## Common Patterns

### Retry Logic

```javascript
const fetchWithRetry = async (url, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url);
      return response;
    } catch (error) {
      console.log(`Attempt ${i + 1} failed, retrying...`);
      if (i === maxRetries - 1) throw error; // Last attempt failed

      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
};
```

### Timeout

```javascript
const fetchWithTimeout = async (url, timeoutMs = 5000) => {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Request timed out')), timeoutMs);
  });

  const fetchPromise = fetch(url);

  return Promise.race([fetchPromise, timeoutPromise]);
};
```

---

## Common Mistakes

1. **Forgetting await**
   ```javascript
   // WRONG - doesn't wait
   const data = fs.readFile('file.json', 'utf8');
   console.log(data); // Promise object, not the data!

   // RIGHT
   const data = await fs.readFile('file.json', 'utf8');
   ```

2. **Using await in non-async function**
   ```javascript
   // WRONG
   const loadData = () => {
     const data = await fs.readFile('file.json'); // Error!
   };

   // RIGHT
   const loadData = async () => {
     const data = await fs.readFile('file.json');
   };
   ```

3. **Not handling errors**
   ```javascript
   // WRONG - errors will crash the program
   const data = await fs.readFile('file.json', 'utf8');

   // RIGHT
   try {
     const data = await fs.readFile('file.json', 'utf8');
   } catch (error) {
     console.error('Failed to load file:', error);
   }
   ```

4. **Using async when not needed**
   ```javascript
   // WRONG - unnecessary async
   const add = async (a, b) => {
     return a + b; // No await needed
   };

   // RIGHT
   const add = (a, b) => a + b;
   ```

5. **Sequential when could be parallel**
   ```javascript
   // SLOW - waits for each in sequence (6 seconds total)
   const user = await loadUser();     // 2 seconds
   const posts = await loadPosts();   // 2 seconds
   const comments = await loadComments(); // 2 seconds

   // FAST - runs in parallel (2 seconds total)
   const [user, posts, comments] = await Promise.all([
     loadUser(),
     loadPosts(),
     loadComments()
   ]);
   ```

---

## Practice Checkpoint

What will this code output and in what order?

```javascript
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');
```

<details>
<summary>Click to see answer</summary>

Output:
```
1
4
3
2
```

Explanation:
1. `console.log('1')` runs immediately (synchronous)
2. `setTimeout` is scheduled (even with 0ms delay)
3. `Promise.then` is scheduled (microtask queue)
4. `console.log('4')` runs immediately (synchronous)
5. Promises run before setTimeout (microtasks before macrotasks)
6. So '3' prints, then '2'
</details>

---

## Key Takeaways

- JavaScript is single-threaded but can handle async operations
- **Callbacks**: Functions passed to be called later (old way, messy)
- **Promises**: Objects representing future values (better than callbacks)
- **Async/await**: Makes async code look synchronous (modern way)
- Always use `try/catch` with `await`
- Use `Promise.all()` for parallel operations when they're independent
- `await` only pauses the async function, not the entire program
- Errors in async functions must be caught or they'll crash your program

---

## What's Next?

Congratulations! You now understand the core JavaScript concepts needed for backend development. Next, you'll apply everything you've learned in the homework assignment, where you'll build a CLI tool that manages todos using files, JSON, and async operations.

After that, you'll move on to **Module 03: TypeScript Basics**, where you'll learn how to add type safety to your JavaScript code!

---

## Additional Resources

- [MDN: Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript.info: Async/Await](https://javascript.info/async-await)
- [Node.js: Don't Block the Event Loop](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)
