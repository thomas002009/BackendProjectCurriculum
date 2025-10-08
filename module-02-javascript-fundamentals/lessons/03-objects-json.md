# Lesson 3: Objects & JSON

## Learning Objectives

By the end of this lesson, you will:
- Create and manipulate JavaScript objects
- Access object properties using dot and bracket notation
- Understand object destructuring
- Work with nested objects
- Understand JSON format and its importance
- Read and write JSON files in Node.js

**Estimated Time:** 45 minutes

---

## Introduction

Objects are one of the most important concepts in JavaScript. They let you group related data together, just like structs or classes in C++, but they're much more flexible.

Think of an object as a container with labeled compartments. Each compartment (property) has a name and can hold any type of value.

---

## Creating Objects

### Object Literal Syntax

The most common way to create objects:

```javascript
const student = {
  name: "Alex",
  age: 15,
  grade: "9th",
  isEnrolled: true
};
```

Compare to C++:
```cpp
// C++ struct
struct Student {
  string name;
  int age;
  string grade;
  bool isEnrolled;
};

Student student = {"Alex", 15, "9th", true};
```

JavaScript objects are more flexible - you can add or remove properties anytime!

---

## Accessing Object Properties

### Dot Notation (Most Common)

```javascript
const student = {
  name: "Alex",
  age: 15
};

console.log(student.name); // "Alex"
console.log(student.age);  // 15
```

### Bracket Notation (When Property Name is Dynamic)

```javascript
const student = {
  name: "Alex",
  age: 15
};

console.log(student["name"]); // "Alex"

// Useful when property name is in a variable
const property = "age";
console.log(student[property]); // 15

// Useful for property names with spaces or special characters
const obj = {
  "first name": "Alex",
  "user-id": 123
};
console.log(obj["first name"]); // "Alex"
console.log(obj["user-id"]);    // 123
```

---

## Modifying Objects

```javascript
const student = {
  name: "Alex",
  age: 15
};

// Change existing property
student.age = 16;

// Add new property
student.grade = "10th";

// Delete property
delete student.age;

console.log(student); // { name: "Alex", grade: "10th" }
```

Even though `student` is `const`, you can modify its properties. You just can't reassign the entire object:
```javascript
const student = { name: "Alex" };
student.age = 15; // OK - modifying properties

student = { name: "Jordan" }; // ERROR - can't reassign
```

---

## Objects with Methods

Objects can contain functions (called "methods"):

```javascript
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.multiply(4, 2)); // 8
```

Shorthand method syntax:
```javascript
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};
```

---

## Nested Objects

Objects can contain other objects:

```javascript
const student = {
  name: "Alex",
  age: 15,
  address: {
    street: "123 Main St",
    city: "Springfield",
    zipCode: "12345"
  },
  grades: {
    math: 90,
    english: 85,
    science: 92
  }
};

// Accessing nested properties
console.log(student.address.city);    // "Springfield"
console.log(student.grades.math);      // 90

// Modifying nested properties
student.address.city = "Shelbyville";
student.grades.history = 88; // Add new grade
```

---

## Arrays of Objects

This is extremely common in real applications:

```javascript
const students = [
  {
    id: 1,
    name: "Alex",
    age: 15,
    grade: "9th"
  },
  {
    id: 2,
    name: "Jordan",
    age: 16,
    grade: "10th"
  },
  {
    id: 3,
    name: "Casey",
    age: 15,
    grade: "9th"
  }
];

// Find student with id 2
const student = students.find((s) => s.id === 2);
console.log(student.name); // "Jordan"

// Get all student names
const names = students.map((s) => s.name);
// ["Alex", "Jordan", "Casey"]

// Get 9th graders
const ninthGraders = students.filter((s) => s.grade === "9th");
// [Alex, Casey]
```

---

## Object Destructuring

Destructuring is a shortcut for extracting multiple properties from an object:

```javascript
const student = {
  name: "Alex",
  age: 15,
  grade: "9th"
};

// Old way
const name = student.name;
const age = student.age;

// New way (destructuring)
const { name, age } = student;
console.log(name); // "Alex"
console.log(age);  // 15
```

You can also rename properties:
```javascript
const { name: studentName, age: studentAge } = student;
console.log(studentName); // "Alex"
```

Destructuring in function parameters:
```javascript
// Instead of this:
const printStudent = (student) => {
  console.log(`${student.name} is ${student.age} years old`);
};

// You can do this:
const printStudent = ({ name, age }) => {
  console.log(`${name} is ${age} years old`);
};

printStudent(student); // "Alex is 15 years old"
```

---

## Spread Operator with Objects

The spread operator (`...`) copies properties from one object to another:

```javascript
const student = {
  name: "Alex",
  age: 15
};

// Create a copy
const studentCopy = { ...student };

// Create a copy with modifications
const olderStudent = {
  ...student,
  age: 16  // Override age
};

console.log(olderStudent); // { name: "Alex", age: 16 }

// Merge two objects
const contactInfo = {
  email: "alex@example.com",
  phone: "555-1234"
};

const fullProfile = {
  ...student,
  ...contactInfo
};
// { name: "Alex", age: 15, email: "alex@example.com", phone: "555-1234" }
```

---

## What is JSON?

**JSON** stands for **JavaScript Object Notation**. It's a text format for storing and transferring data. Almost every web API uses JSON.

JSON looks almost exactly like JavaScript objects, but with stricter rules:

### JavaScript Object vs JSON

```javascript
// JavaScript Object (can have many things)
const obj = {
  name: "Alex",
  age: 15,
  greet: () => "Hello",  // Functions allowed
  friend: undefined       // undefined allowed
};

// JSON (strict format)
{
  "name": "Alex",
  "age": 15
}
```

### JSON Rules:
1. Property names must be in double quotes: `"name"`
2. Strings must use double quotes: `"Alex"` not `'Alex'`
3. No functions, undefined, or special values
4. No trailing commas
5. Can only contain: strings, numbers, booleans, null, arrays, objects

Valid JSON:
```json
{
  "name": "Alex",
  "age": 15,
  "grades": [85, 90, 92],
  "isEnrolled": true,
  "middleName": null
}
```

---

## Working with JSON

### Converting Object to JSON String

```javascript
const student = {
  name: "Alex",
  age: 15,
  grades: [85, 90, 92]
};

// Convert to JSON string
const jsonString = JSON.stringify(student);
console.log(jsonString);
// '{"name":"Alex","age":15,"grades":[85,90,92]}'

// Pretty print (with indentation)
const prettyJson = JSON.stringify(student, null, 2);
console.log(prettyJson);
/*
{
  "name": "Alex",
  "age": 15,
  "grades": [
    85,
    90,
    92
  ]
}
*/
```

### Converting JSON String to Object

```javascript
const jsonString = '{"name":"Jordan","age":16}';

// Parse JSON string
const student = JSON.parse(jsonString);
console.log(student.name); // "Jordan"
console.log(student.age);  // 16
```

---

## Reading and Writing JSON Files

In Node.js, you can read and write JSON files using the `fs` (file system) module.

### Reading a JSON File

```javascript
const fs = require('fs');

// Read file synchronously (blocking)
const data = fs.readFileSync('students.json', 'utf8');
const students = JSON.parse(data);
console.log(students);

// Read file asynchronously (non-blocking) - better!
fs.readFile('students.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  const students = JSON.parse(data);
  console.log(students);
});
```

### Writing a JSON File

```javascript
const students = [
  { name: "Alex", age: 15 },
  { name: "Jordan", age: 16 }
];

// Convert to JSON string
const jsonString = JSON.stringify(students, null, 2);

// Write to file
fs.writeFileSync('students.json', jsonString, 'utf8');
console.log('File saved!');
```

### Using Promises (Modern Way)

```javascript
const fs = require('fs').promises;

// Read JSON file
const readJsonFile = async (filename) => {
  try {
    const data = await fs.readFile(filename, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
    return null;
  }
};

// Write JSON file
const writeJsonFile = async (filename, data) => {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    await fs.writeFile(filename, jsonString, 'utf8');
    console.log('File saved!');
  } catch (error) {
    console.error('Error writing file:', error);
  }
};

// Usage
const loadStudents = async () => {
  const students = await readJsonFile('students.json');
  console.log(students);
};
```

---

## Practical Example: Managing Student Data

Let's put it all together:

```javascript
const fs = require('fs').promises;

// Student class data
const classData = {
  className: "Backend Development",
  semester: "Fall 2025",
  students: [
    {
      id: 1,
      name: "Alex",
      grades: [85, 90, 88],
      attendance: 0.95
    },
    {
      id: 2,
      name: "Jordan",
      grades: [92, 88, 95],
      attendance: 1.0
    },
    {
      id: 3,
      name: "Casey",
      grades: [78, 82, 80],
      attendance: 0.90
    }
  ]
};

// Calculate average grade for a student
const calculateAverage = (grades) => {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
};

// Add average to each student
const studentsWithAverages = classData.students.map((student) => ({
  ...student,
  average: calculateAverage(student.grades)
}));

// Find top student
const topStudent = studentsWithAverages.reduce((top, student) => {
  return student.average > top.average ? student : top;
});

console.log(`Top student: ${topStudent.name} with ${topStudent.average}%`);

// Save updated data
const saveData = async () => {
  const updatedData = {
    ...classData,
    students: studentsWithAverages
  };

  const jsonString = JSON.stringify(updatedData, null, 2);
  await fs.writeFile('class-data.json', jsonString, 'utf8');
  console.log('Data saved!');
};
```

---

## Checking for Properties

```javascript
const student = {
  name: "Alex",
  age: 15
};

// Check if property exists
if ('name' in student) {
  console.log('Name exists');
}

// Check if property exists and is not undefined
if (student.name !== undefined) {
  console.log('Name is defined');
}

// Get all property names
const keys = Object.keys(student);
console.log(keys); // ["name", "age"]

// Get all values
const values = Object.values(student);
console.log(values); // ["Alex", 15]

// Get key-value pairs
const entries = Object.entries(student);
console.log(entries); // [["name", "Alex"], ["age", 15]]
```

---

## Common Mistakes

1. **Forgetting quotes in JSON**
   ```javascript
   // WRONG - this is JavaScript, not JSON
   const json = { name: "Alex" };

   // RIGHT - JSON needs quotes around keys
   const json = '{"name":"Alex"}';
   ```

2. **Trying to use JSON directly**
   ```javascript
   const jsonString = '{"name":"Alex"}';
   console.log(jsonString.name); // undefined - it's a string!

   // Parse it first
   const obj = JSON.parse(jsonString);
   console.log(obj.name); // "Alex"
   ```

3. **Forgetting async/await with file operations**
   ```javascript
   // WRONG - doesn't wait for file to load
   const data = fs.readFile('file.json');
   console.log(data); // undefined

   // RIGHT
   const data = await fs.readFile('file.json', 'utf8');
   ```

4. **Not handling errors**
   ```javascript
   // WRONG - file might not exist
   const data = await fs.readFile('file.json', 'utf8');

   // RIGHT - use try/catch
   try {
     const data = await fs.readFile('file.json', 'utf8');
   } catch (error) {
     console.error('File not found:', error);
   }
   ```

---

## Practice Checkpoint

Given this object:
```javascript
const classroom = {
  name: "Backend Development",
  students: [
    { name: "Alex", score: 85 },
    { name: "Jordan", score: 92 },
    { name: "Casey", score: 78 }
  ]
};
```

Try to:
1. Add a new student "Taylor" with score 88
2. Get an array of all student names
3. Find the student with the highest score
4. Convert the object to a JSON string

<details>
<summary>Click to see solutions</summary>

```javascript
// 1. Add new student
classroom.students.push({ name: "Taylor", score: 88 });

// 2. Get names
const names = classroom.students.map((s) => s.name);
// ["Alex", "Jordan", "Casey", "Taylor"]

// 3. Find highest score
const top = classroom.students.reduce((max, student) => {
  return student.score > max.score ? student : max;
});
console.log(top.name); // "Jordan"

// 4. Convert to JSON
const json = JSON.stringify(classroom, null, 2);
```
</details>

---

## Key Takeaways

- Objects group related data with named properties
- Access properties with dot notation: `obj.property`
- Use bracket notation for dynamic property names: `obj[variable]`
- Destructuring extracts multiple properties: `const { name, age } = obj`
- Spread operator copies objects: `{ ...obj }`
- JSON is a text format for data exchange
- `JSON.stringify()` converts object to JSON string
- `JSON.parse()` converts JSON string to object
- Use `fs.promises` for modern async file operations

---

## What's Next?

In the next lesson, we'll tackle **Asynchronous Programming**, learning about callbacks, promises, and async/await. This is crucial for backend development where you'll be dealing with databases, file systems, and network requests!

---

## Additional Resources

- [MDN: Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [MDN: JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [JSON.org](https://www.json.org/) - Official JSON documentation
