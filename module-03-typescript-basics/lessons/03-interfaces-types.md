# Lesson 3: Interfaces & Type Aliases

## What You'll Learn
- How to define object shapes with interfaces
- How to use type aliases for custom types
- The difference between interfaces and type aliases
- How to handle optional properties
- How to create readonly properties
- How interfaces compare to C++ structs

---

## The Problem: Typing Objects

So far we've typed primitive values (strings, numbers, booleans). But what about objects?

```typescript
// JavaScript object
const student = {
  id: 1001,
  name: "Jordan",
  age: 14,
  isEnrolled: true
};
```

How do we tell TypeScript what shape this object should have? That's where **interfaces** come in.

## Interfaces: Defining Object Shapes

An interface is a blueprint that describes what properties an object should have:

```typescript
// Define the interface
interface Student {
  id: number;
  name: string;
  age: number;
  isEnrolled: boolean;
}

// Use the interface
const student: Student = {
  id: 1001,
  name: "Jordan",
  age: 14,
  isEnrolled: true
};
```

If you forget a property or use the wrong type, TypeScript will catch it:

```typescript
// TypeScript ERROR: Property 'age' is missing
const student: Student = {
  id: 1001,
  name: "Jordan",
  isEnrolled: true
};

// TypeScript ERROR: Type 'string' is not assignable to type 'number'
const student2: Student = {
  id: 1001,
  name: "Jordan",
  age: "14", // Should be a number!
  isEnrolled: true
};
```

## Comparing to C++ Structs

If you've used C++ structs, interfaces are very similar:

```cpp
// C++ struct
struct Student {
  int id;
  string name;
  int age;
  bool isEnrolled;
};

Student student = {1001, "Jordan", 14, true};
```

```typescript
// TypeScript interface
interface Student {
  id: number;
  name: string;
  age: number;
  isEnrolled: boolean;
}

const student: Student = {
  id: 1001,
  name: "Jordan",
  age: 14,
  isEnrolled: true
};
```

The main difference? TypeScript interfaces are only for type checking - they don't exist in the compiled JavaScript. C++ structs are actual memory structures.

## Optional Properties

Sometimes a property might not always be present. Use `?` to make it optional:

```typescript
interface Student {
  id: number;
  name: string;
  age: number;
  email?: string;        // Optional: might not have email
  phoneNumber?: string;  // Optional: might not have phone
}

// Valid: email and phoneNumber are optional
const student1: Student = {
  id: 1001,
  name: "Jordan",
  age: 14
};

// Also valid: includes optional email
const student2: Student = {
  id: 1002,
  name: "Alex",
  age: 15,
  email: "alex@example.com"
};
```

When you use optional properties, TypeScript forces you to check if they exist:

```typescript
function sendEmail(student: Student) {
  // TypeScript ERROR: student.email might be undefined
  console.log(student.email.toLowerCase());

  // Fix: Check if email exists first
  if (student.email) {
    console.log(student.email.toLowerCase()); // Safe now
  }
}
```

## Readonly Properties

Use `readonly` to prevent properties from being changed after creation:

```typescript
interface Student {
  readonly id: number;  // Can't be changed after creation
  name: string;         // Can be changed
  age: number;
}

const student: Student = {
  id: 1001,
  name: "Jordan",
  age: 14
};

student.name = "Jordan Smith"; // Okay
student.age = 15;              // Okay

// TypeScript ERROR: Cannot assign to 'id' because it is a read-only property
student.id = 1002;
```

This is useful for things like IDs or timestamps that shouldn't change.

## Nested Interfaces

Interfaces can contain other interfaces:

```typescript
interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

interface Student {
  id: number;
  name: string;
  address: Address;  // Nested interface
}

const student: Student = {
  id: 1001,
  name: "Jordan",
  address: {
    street: "123 Main St",
    city: "Springfield",
    state: "IL",
    zipCode: "62701"
  }
};
```

## Type Aliases

Type aliases are another way to create custom types:

```typescript
type StudentID = number;
type StudentName = string;

type Student = {
  id: StudentID;
  name: StudentName;
  age: number;
};
```

Type aliases use the `type` keyword instead of `interface`.

## Interface vs Type Alias

Both can define object shapes. So which should you use?

```typescript
// Using interface
interface Student {
  id: number;
  name: string;
}

// Using type alias
type Student = {
  id: number;
  name: string;
};
```

**General rule:** Use `interface` for objects, use `type` for other things (unions, primitives, etc.)

**Interfaces are better for objects because:**
- Slightly better error messages
- Can be extended more easily (we'll learn this later)
- Standard convention

**Type aliases are better for:**
- Union types: `type ID = number | string;`
- Primitive aliases: `type Age = number;`
- Intersection types (advanced topic)

**Don't worry too much about this.** Both work fine, and you'll develop intuition over time.

## Real-World Example: Sports Coaching Platform

Let's define types for a sports coaching platform:

```typescript
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: "student" | "parent" | "instructor" | "admin";
}

interface Class {
  id: number;
  name: string;
  sport: string;
  instructorId: number;
  maxStudents: number;
  schedule: string;
  price: number;
}

interface Enrollment {
  id: number;
  studentId: number;
  classId: number;
  enrolledDate: string;
  isPaid: boolean;
}

// Using the interfaces
const instructor: User = {
  id: 5001,
  firstName: "Coach",
  lastName: "Taylor",
  email: "coach@example.com",
  role: "instructor"
};

const basketballClass: Class = {
  id: 201,
  name: "Youth Basketball - Beginner",
  sport: "Basketball",
  instructorId: 5001,
  maxStudents: 12,
  schedule: "Monday/Wednesday 4-5pm",
  price: 49.99
};

const enrollment: Enrollment = {
  id: 301,
  studentId: 1001,
  classId: 201,
  enrolledDate: "2025-01-15",
  isPaid: true
};
```

Notice how interfaces make the code self-documenting. You can immediately see what data each object should contain.

## Using Interfaces in Functions

Interfaces really shine when used with functions:

```typescript
interface Student {
  id: number;
  name: string;
  age: number;
}

// Function parameter uses interface
function printStudent(student: Student): void {
  console.log(`${student.name} (ID: ${student.id}), Age: ${student.age}`);
}

// Function return type uses interface
function createStudent(id: number, name: string, age: number): Student {
  return {
    id,
    name,
    age
  };
}

// Array of objects with interface
function findOldestStudent(students: Student[]): Student {
  let oldest = students[0];
  for (const student of students) {
    if (student.age > oldest.age) {
      oldest = student;
    }
  }
  return oldest;
}
```

The interfaces act like contracts - they guarantee the shape of data being passed around.

## Arrays of Interface Objects

You can create arrays of objects that match an interface:

```typescript
interface Student {
  id: number;
  name: string;
  age: number;
}

const students: Student[] = [
  { id: 1001, name: "Jordan", age: 14 },
  { id: 1002, name: "Alex", age: 13 },
  { id: 1003, name: "Casey", age: 15 }
];

// TypeScript knows each element is a Student
students.forEach(student => {
  console.log(student.name); // Autocomplete works!
});
```

## Extending Interfaces

You can create new interfaces based on existing ones:

```typescript
interface Person {
  firstName: string;
  lastName: string;
  email: string;
}

// Student extends Person and adds more properties
interface Student extends Person {
  id: number;
  grade: number;
  enrolledClasses: number[];
}

const student: Student = {
  // From Person
  firstName: "Jordan",
  lastName: "Smith",
  email: "jordan@example.com",
  // From Student
  id: 1001,
  grade: 8,
  enrolledClasses: [201, 202]
};
```

This is useful when multiple types share common properties.

## Common Mistakes

### Mistake 1: Forgetting required properties

```typescript
interface Student {
  id: number;
  name: string;
  age: number;
}

// ERROR: Property 'age' is missing
const student: Student = {
  id: 1001,
  name: "Jordan"
};
```

### Mistake 2: Extra properties

```typescript
// ERROR: Object literal may only specify known properties
const student: Student = {
  id: 1001,
  name: "Jordan",
  age: 14,
  favoriteColor: "blue" // Not in the interface!
};
```

### Mistake 3: Wrong property types

```typescript
// ERROR: Type 'string' is not assignable to type 'number'
const student: Student = {
  id: "1001",  // Should be a number
  name: "Jordan",
  age: 14
};
```

## Key Takeaways

- Interfaces define the shape of objects
- Use `interface` keyword to create interfaces
- Properties can be `optional?` or `readonly`
- Interfaces are like C++ structs but only for type checking
- Use interfaces with functions to ensure correct data shapes
- Type aliases (`type`) can also define object shapes
- Prefer interfaces for objects, type aliases for other things

## Practice Exercises

Define interfaces for these objects:

1. A `Class` with: id (number), name (string), instructor (string), maxStudents (number)

2. An `Instructor` with: id (number), name (string), email (string), phone (optional string)

3. A `Schedule` with: classId (number), dayOfWeek (string), startTime (string), endTime (string)

<details>
<summary>Click to see answers</summary>

```typescript
interface Class {
  id: number;
  name: string;
  instructor: string;
  maxStudents: number;
}

interface Instructor {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

interface Schedule {
  classId: number;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}
```
</details>

## Up Next

Now that you can define object types with interfaces, let's learn how to add types to functions - including parameters, return types, and more.

---

**Previous Lesson:** [Lesson 2: Basic Types](02-basic-types.md)
**Next Lesson:** [Lesson 4: Function Typing](04-functions-typing.md)
