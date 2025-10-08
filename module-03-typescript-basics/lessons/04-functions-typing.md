# Lesson 4: Function Typing

## What You'll Learn
- How to add types to function parameters
- How to specify function return types
- What `void` means
- How to handle optional and default parameters
- How to type arrow functions
- How to create function type signatures

---

## Function Type Annotations

In TypeScript, you can (and should) specify types for both function parameters and return values:

```typescript
// Syntax: function name(param: type): returnType
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

The type annotation `:string` after the closing parenthesis tells TypeScript what the function returns.

## Parameter Types

Add types to parameters just like variables:

```typescript
function calculateAge(birthYear: number): number {
  const currentYear = 2025;
  return currentYear - birthYear;
}

// Works fine
const age = calculateAge(2010); // 15

// TypeScript ERROR: Argument of type 'string' is not assignable to parameter of type 'number'
const age2 = calculateAge("2010");
```

### Multiple Parameters

```typescript
function enrollStudent(studentId: number, classId: number, isPaid: boolean): string {
  if (isPaid) {
    return `Student ${studentId} enrolled in class ${classId}`;
  } else {
    return `Payment required for student ${studentId}`;
  }
}

const result = enrollStudent(1001, 201, true);
```

Each parameter gets its own type annotation.

## Return Types

Always specify what your function returns:

```typescript
// Returns a string
function getFullName(first: string, last: string): string {
  return `${first} ${last}`;
}

// Returns a number
function add(a: number, b: number): number {
  return a + b;
}

// Returns a boolean
function isAdult(age: number): boolean {
  return age >= 18;
}
```

### The Void Type

If a function doesn't return anything, use `void`:

```typescript
function logMessage(message: string): void {
  console.log(message);
  // No return statement
}

function printStudent(name: string, age: number): void {
  console.log(`${name} is ${age} years old`);
}
```

Think of `void` like `void` in C++ - it means "this function doesn't return a value."

**Note:** You can omit the return type for `void` functions, but it's good practice to include it:

```typescript
// Both are valid
function log(msg: string): void { console.log(msg); }
function log(msg: string) { console.log(msg); } // TypeScript infers void
```

## Type Inference for Return Types

TypeScript can infer return types from your return statements:

```typescript
// TypeScript infers return type is number
function add(a: number, b: number) {
  return a + b; // TypeScript sees this returns a number
}
```

However, it's generally better to **explicitly specify return types** because:
1. It catches mistakes if you return the wrong type
2. It makes your function's contract clear
3. Better error messages if something goes wrong

```typescript
// With explicit return type, TypeScript catches this error
function getAge(birthYear: number): number {
  return `Age is ${2025 - birthYear}`; // ERROR: Type 'string' is not assignable to type 'number'
}
```

## Optional Parameters

Use `?` to make parameters optional:

```typescript
function greetUser(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}`;
  }
  return `Hello, ${name}`;
}

greetUser("Smith", "Dr."); // "Hello, Dr. Smith"
greetUser("Jordan");        // "Hello, Jordan" - title is optional
```

Optional parameters must come after required parameters:

```typescript
// WRONG: Required parameter after optional
function wrong(optional?: string, required: string) { }

// RIGHT: Optional parameters last
function right(required: string, optional?: string) { }
```

## Default Parameters

You can provide default values for parameters:

```typescript
function createUser(name: string, role: string = "student"): string {
  return `Created user ${name} with role ${role}`;
}

createUser("Jordan");           // Uses default: "student"
createUser("Coach", "instructor"); // Uses provided: "instructor"
```

When you provide a default value, TypeScript infers the type automatically:

```typescript
// Type annotation not needed when there's a default
function greet(name: string, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}
```

## Typing Arrow Functions

Arrow functions can be typed the same way:

```typescript
// Regular function
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function (same types)
const add = (a: number, b: number): number => {
  return a + b;
};

// Arrow function (shorter syntax for single expression)
const add = (a: number, b: number): number => a + b;
```

## Function Type Signatures

You can define a type for a function itself:

```typescript
// Define a function type
type MathOperation = (a: number, b: number) => number;

// Functions that match this type
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
const multiply: MathOperation = (a, b) => a * b;

// Use it as a parameter type
function calculate(operation: MathOperation, x: number, y: number): number {
  return operation(x, y);
}

calculate(add, 5, 3);      // 8
calculate(multiply, 5, 3); // 15
```

This is useful when you want to pass functions as arguments.

## Real-World Example: Student Management

Let's build typed functions for a student management system:

```typescript
interface Student {
  id: number;
  name: string;
  age: number;
  enrolledClasses: number[];
}

// Get student by ID
function getStudentById(students: Student[], id: number): Student | undefined {
  return students.find(student => student.id === id);
}

// Enroll student in a class
function enrollInClass(student: Student, classId: number): void {
  if (!student.enrolledClasses.includes(classId)) {
    student.enrolledClasses.push(classId);
  }
}

// Check if student can enroll (max 5 classes)
function canEnroll(student: Student): boolean {
  return student.enrolledClasses.length < 5;
}

// Get student's class count
function getClassCount(student: Student): number {
  return student.enrolledClasses.length;
}

// Calculate total price for student's classes
function calculateTotalPrice(student: Student, pricePerClass: number = 50): number {
  return student.enrolledClasses.length * pricePerClass;
}

// Format student info for display
function formatStudentInfo(student: Student): string {
  return `${student.name} (ID: ${student.id}) - ${student.enrolledClasses.length} classes`;
}
```

Notice how types make it immediately clear:
- What data each function needs
- What data each function returns
- Whether values are optional

## Handling Null Returns

When a function might not return a value, use union types:

```typescript
function findStudent(students: Student[], id: number): Student | null {
  const found = students.find(s => s.id === id);
  return found || null;
}

// TypeScript forces you to handle the null case
const student = findStudent(students, 1001);

// ERROR: student might be null
console.log(student.name);

// Correct: check for null first
if (student !== null) {
  console.log(student.name); // Safe now
}
```

## Functions with Interface Parameters

Using interfaces with functions makes your code very clear:

```typescript
interface EnrollmentRequest {
  studentId: number;
  classId: number;
  isPaid: boolean;
  parentEmail?: string;
}

function processEnrollment(request: EnrollmentRequest): boolean {
  // Validation
  if (!request.isPaid) {
    console.log("Payment required");
    return false;
  }

  // Process enrollment
  console.log(`Enrolling student ${request.studentId} in class ${request.classId}`);

  // Send confirmation email if parent email provided
  if (request.parentEmail) {
    sendEmail(request.parentEmail, "Enrollment confirmed");
  }

  return true;
}

// Using the function
const request: EnrollmentRequest = {
  studentId: 1001,
  classId: 201,
  isPaid: true,
  parentEmail: "parent@example.com"
};

processEnrollment(request);
```

## Async Functions

When functions use `async/await`, the return type is automatically wrapped in `Promise`:

```typescript
// Returns Promise<string>
async function fetchUserName(id: number): Promise<string> {
  const response = await fetch(`/api/users/${id}`);
  const data = await response.json();
  return data.name;
}

// Returns Promise<Student | null>
async function getStudent(id: number): Promise<Student | null> {
  try {
    const response = await fetch(`/api/students/${id}`);
    return await response.json();
  } catch (error) {
    return null;
  }
}
```

The `Promise<Type>` tells TypeScript what the promise will resolve to.

## Common Mistakes

### Mistake 1: Forgetting return type

```typescript
// Missing return type - works but not ideal
function add(a: number, b: number) {
  return a + b;
}

// Better: explicit return type
function add(a: number, b: number): number {
  return a + b;
}
```

### Mistake 2: Wrong return type

```typescript
// Says it returns number but returns string
function getAge(birthYear: number): number {
  return `${2025 - birthYear}`; // ERROR: returns string
}

// Fix: match return type to actual return
function getAge(birthYear: number): string {
  return `${2025 - birthYear}`;
}
```

### Mistake 3: Not handling optional parameters

```typescript
function greet(name?: string): string {
  // ERROR: name might be undefined
  return `Hello, ${name.toUpperCase()}`;
}

// Fix: check if name exists
function greet(name?: string): string {
  if (!name) return "Hello, guest";
  return `Hello, ${name.toUpperCase()}`;
}
```

### Mistake 4: Required parameter after optional

```typescript
// WRONG: required after optional
function wrong(optional?: string, required: string): void { }

// RIGHT: optional at the end
function right(required: string, optional?: string): void { }
```

## Comparing to C++

TypeScript function typing is similar to C++:

```cpp
// C++
string greet(string name) {
  return "Hello, " + name;
}

int add(int a, int b) {
  return a + b;
}

void logMessage(string msg) {
  cout << msg << endl;
}
```

```typescript
// TypeScript
function greet(name: string): string {
  return `Hello, ${name}`;
}

function add(a: number, b: number): number {
  return a + b;
}

function logMessage(msg: string): void {
  console.log(msg);
}
```

The concepts are identical, just different syntax.

## Key Takeaways

- Always type function parameters: `(param: type)`
- Always specify return type: `): returnType`
- Use `void` for functions that don't return anything
- Use `?` for optional parameters (must be last)
- Use default values for common defaults
- Use `| null` or `| undefined` for functions that might not return
- Async functions return `Promise<Type>`
- Arrow functions can be typed the same way as regular functions

## Practice Exercises

Write type annotations for these functions:

```typescript
// 1. Takes a student name and age, returns a greeting string
function greetStudent(???) {
  return `Welcome, ${name}! You are ${age} years old.`;
}

// 2. Takes a price and optional discount percentage, returns final price
function calculatePrice(???) {
  if (discount) {
    return price - (price * discount / 100);
  }
  return price;
}

// 3. Takes an array of numbers, returns the largest
function findMax(???) {
  return Math.max(...numbers);
}

// 4. Takes a student and prints their info (no return value)
function printStudent(???) {
  console.log(`${student.name}, Age ${student.age}`);
}
```

<details>
<summary>Click to see answers</summary>

```typescript
function greetStudent(name: string, age: number): string {
  return `Welcome, ${name}! You are ${age} years old.`;
}

function calculatePrice(price: number, discount?: number): number {
  if (discount) {
    return price - (price * discount / 100);
  }
  return price;
}

function findMax(numbers: number[]): number {
  return Math.max(...numbers);
}

interface Student {
  name: string;
  age: number;
}

function printStudent(student: Student): void {
  console.log(`${student.name}, Age ${student.age}`);
}
```
</details>

## Up Next

You now have all the TypeScript basics you need! In the exercises and homework, you'll practice applying types to real code and converting JavaScript to TypeScript.

---

**Previous Lesson:** [Lesson 3: Interfaces & Type Aliases](03-interfaces-types.md)
**Next Step:** [Exercise 1: Basic Types Practice](../exercises/01-basic-types/README.md)
