# JavaScript Reference

Quick reference for JavaScript concepts used in this curriculum.

## Variables

```javascript
// const - cannot be reassigned
const name = 'John';
const age = 15;

// let - can be reassigned
let score = 0;
score = 100;  // OK

// var - old way, avoid using
var oldStyle = 'avoid this';
```

## Data Types

```javascript
// Primitives
const string = 'Hello';
const number = 42;
const boolean = true;
const nullValue = null;
const undefinedValue = undefined;

// Objects
const object = { name: 'John', age: 15 };

// Arrays
const array = [1, 2, 3, 4, 5];

// Check type
typeof string;  // 'string'
typeof number;  // 'number'
```

## Strings

```javascript
// String concatenation
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;

// Template literals (preferred)
const greeting = `Hello, ${firstName}!`;
const message = `You are ${age} years old`;

// Common methods
const text = 'Hello World';
text.length;              // 11
text.toLowerCase();       // 'hello world'
text.toUpperCase();       // 'HELLO WORLD'
text.includes('World');   // true
text.split(' ');          // ['Hello', 'World']
text.slice(0, 5);         // 'Hello'
text.replace('World', 'JavaScript');  // 'Hello JavaScript'
```

## Arrays

```javascript
const numbers = [1, 2, 3, 4, 5];

// Access elements
numbers[0];              // 1 (first element)
numbers[numbers.length - 1];  // 5 (last element)

// Modify arrays
numbers.push(6);         // Add to end: [1, 2, 3, 4, 5, 6]
numbers.pop();           // Remove from end: [1, 2, 3, 4, 5]
numbers.unshift(0);      // Add to start: [0, 1, 2, 3, 4, 5]
numbers.shift();         // Remove from start: [1, 2, 3, 4, 5]

// Array methods
numbers.length;          // 5
numbers.includes(3);     // true
numbers.indexOf(3);      // 2
numbers.join(', ');      // '1, 2, 3, 4, 5'

// Higher-order methods (very important!)
const doubled = numbers.map(n => n * 2);           // [2, 4, 6, 8, 10]
const evens = numbers.filter(n => n % 2 === 0);    // [2, 4]
const sum = numbers.reduce((acc, n) => acc + n, 0);  // 15
numbers.forEach(n => console.log(n));              // Logs each number

// Finding elements
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
];
const user = users.find(u => u.id === 1);          // { id: 1, name: 'John' }
const index = users.findIndex(u => u.id === 1);    // 0
```

## Objects

```javascript
// Creating objects
const user = {
  id: 1,
  name: 'John Doe',
  age: 15,
  email: 'john@example.com',
};

// Accessing properties
user.name;              // 'John Doe'
user['name'];           // 'John Doe' (bracket notation)

// Adding/modifying properties
user.role = 'student';
user.age = 16;

// Deleting properties
delete user.age;

// Checking if property exists
'name' in user;         // true
user.hasOwnProperty('name');  // true

// Object methods
Object.keys(user);      // ['id', 'name', 'email', 'role']
Object.values(user);    // [1, 'John Doe', 'john@example.com', 'student']
Object.entries(user);   // [['id', 1], ['name', 'John Doe'], ...]

// Spread operator (copying/merging)
const updatedUser = { ...user, age: 16 };
const merged = { ...user, ...{ role: 'admin' } };

// Destructuring
const { name, email } = user;
console.log(name);      // 'John Doe'
```

## Functions

```javascript
// Function declaration
function add(a, b) {
  return a + b;
}

// Function expression
const subtract = function(a, b) {
  return a - b;
};

// Arrow function (preferred in modern JS)
const multiply = (a, b) => {
  return a * b;
};

// Arrow function (concise)
const divide = (a, b) => a / b;

// Single parameter (no parentheses needed)
const square = n => n * n;

// Default parameters
const greet = (name = 'Guest') => `Hello, ${name}!`;

// Rest parameters
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
sum(1, 2, 3, 4);  // 10
```

## Conditionals

```javascript
// if/else
if (age >= 18) {
  console.log('Adult');
} else if (age >= 13) {
  console.log('Teenager');
} else {
  console.log('Child');
}

// Ternary operator
const status = age >= 18 ? 'Adult' : 'Minor';

// Switch statement
switch (role) {
  case 'admin':
    console.log('Full access');
    break;
  case 'user':
    console.log('Limited access');
    break;
  default:
    console.log('No access');
}

// Truthy/Falsy
// Falsy values: false, 0, '', null, undefined, NaN
// Everything else is truthy
if (name) {
  console.log('Name exists');
}

// Logical operators
const canView = isLoggedIn && hasPermission;
const shouldShow = isAdmin || isModerator;
const defaultName = username || 'Guest';
```

## Loops

```javascript
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// For...of (arrays)
const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num);
}

// For...in (objects - use with caution)
const user = { name: 'John', age: 15 };
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

// While loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// Array methods (preferred over loops)
numbers.forEach(num => console.log(num));
```

## Async/Await (Important for Backend!)

```javascript
// Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: 'Hello' });
    }, 1000);
  });
};

// Using promises
fetchData()
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Async/await (preferred)
async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Arrow function with async
const getData2 = async () => {
  const result = await fetchData();
  return result;
};
```

## JSON (Critical for APIs)

```javascript
// JavaScript object
const user = { name: 'John', age: 15 };

// Convert to JSON string
const jsonString = JSON.stringify(user);
// '{"name":"John","age":15}'

// Parse JSON string to object
const parsed = JSON.parse(jsonString);
// { name: 'John', age: 15 }

// Pretty print JSON
const formatted = JSON.stringify(user, null, 2);
```

## Error Handling

```javascript
// Try/catch
try {
  const data = JSON.parse(invalidJson);
} catch (error) {
  console.error('Error parsing JSON:', error.message);
} finally {
  console.log('This always runs');
}

// Throwing errors
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}
```

## Modern JavaScript Features

```javascript
// Destructuring
const { name, age } = user;
const [first, second] = array;

// Spread operator
const newArray = [...oldArray, 4, 5, 6];
const newObject = { ...oldObject, newKey: 'value' };

// Rest parameters
const [first, ...rest] = [1, 2, 3, 4, 5];
// first = 1, rest = [2, 3, 4, 5]

// Optional chaining
const city = user?.address?.city;  // Won't error if address is undefined

// Nullish coalescing
const name = user.name ?? 'Guest';  // Use ?? instead of || for null/undefined

// Template literals
const message = `Hello ${name},
This is a multiline
string!`;
```

## Common Patterns

### Filter and map

```javascript
const users = [
  { id: 1, name: 'John', age: 15 },
  { id: 2, name: 'Jane', age: 17 },
  { id: 3, name: 'Bob', age: 14 }
];

// Get names of users 15 or older
const names = users
  .filter(user => user.age >= 15)
  .map(user => user.name);
// ['John', 'Jane']
```

### Find and update

```javascript
const userId = 2;
const index = users.findIndex(u => u.id === userId);
if (index !== -1) {
  users[index] = { ...users[index], age: 18 };
}
```

### Sort

```javascript
// Sort by age
users.sort((a, b) => a.age - b.age);

// Sort by name
users.sort((a, b) => a.name.localeCompare(b.name));
```

## Differences from C++

| Concept | C++ | JavaScript |
|---------|-----|------------|
| Variables | `int x = 5;` | `const x = 5;` or `let x = 5;` |
| Arrays | `int arr[5];` | `const arr = [1, 2, 3];` |
| Strings | `string s = "hi";` | `const s = "hi";` or `` `hi` `` |
| Functions | `int add(int a, int b)` | `const add = (a, b) => a + b` |
| Objects | `class User { }; User u;` | `const u = { name: 'John' }` |
| Null | `nullptr` | `null` or `undefined` |
| Type system | Static (compile-time) | Dynamic (runtime) |
| Semicolons | Required | Optional (but recommended) |

## Best Practices

1. **Use `const` by default**, `let` when you need to reassign, never `var`
2. **Use arrow functions** for callbacks and short functions
3. **Use template literals** instead of string concatenation
4. **Use array methods** (map, filter, reduce) instead of loops when possible
5. **Use async/await** instead of `.then()` chains
6. **Use destructuring** to extract values from objects and arrays
7. **Handle errors** with try/catch in async functions
8. **Use meaningful variable names** - `userId` not `x`
9. **Keep functions small** - one task per function
10. **Use strict equality** (`===`) instead of loose equality (`==`)

## Additional Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [You Don't Know JS (book series)](https://github.com/getify/You-Dont-Know-JS)
