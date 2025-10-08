# Lesson 2: Basic Types

## What You'll Learn
- How to use TypeScript's primitive types: `string`, `number`, `boolean`
- How to type arrays
- What type inference is and when to use it
- When to avoid the `any` type
- How to handle `null` and `undefined`

---

## Type Annotations

In TypeScript, you add types using a colon (`:`) after the variable name:

```typescript
// Syntax: const variableName: type = value;
const userName: string = "Jordan";
const age: number = 14;
const isStudent: boolean = true;
```

This tells TypeScript exactly what kind of data each variable should hold.

## The Three Main Types

### String Type

The `string` type is for text:

```typescript
const firstName: string = "Alex";
const lastName: string = "Chen";
const greeting: string = `Hello, ${firstName}!`; // Template strings work too

// TypeScript ERROR: Type 'number' is not assignable to type 'string'
const invalid: string = 42;
```

### Number Type

The `number` type handles all numbers - integers, decimals, negative numbers:

```typescript
const studentAge: number = 13;
const classPrice: number = 49.99;
const temperature: number = -5;

// TypeScript ERROR: Type 'string' is not assignable to type 'number'
const invalid: number = "13";
```

Unlike C++ where you have `int`, `float`, `double`, JavaScript/TypeScript just has one `number` type for everything.

### Boolean Type

The `boolean` type is for `true` or `false`:

```typescript
const isPaid: boolean = true;
const isEnrolled: boolean = false;

// TypeScript ERROR: Type 'string' is not assignable to type 'boolean'
const invalid: boolean = "true"; // This is a string, not a boolean!
```

## Comparing to C++

| C++ | TypeScript |
|-----|------------|
| `string name = "Alex";` | `const name: string = "Alex";` |
| `int age = 14;` | `const age: number = 14;` |
| `bool isStudent = true;` | `const isStudent: boolean = true;` |

The concepts are the same, just different syntax.

## Type Inference

Here's something cool: TypeScript can often **figure out the type automatically**:

```typescript
// You write this (no type annotation)
const name = "Jordan";
const age = 14;
const isStudent = true;

// TypeScript infers these types
const name: string = "Jordan";
const age: number = 14;
const isStudent: boolean = true;
```

When you assign a value immediately, TypeScript is smart enough to know the type. You don't always need to write it explicitly.

**When to add types explicitly:**
- When you declare a variable without assigning it
- When you want to be extra clear
- When the inferred type isn't what you want

```typescript
// Need explicit type here (no initial value)
let userName: string;
userName = "Alex"; // Assigned later

// Explicit type for clarity
const API_KEY: string = process.env.API_KEY; // Makes it clear what we expect
```

**Pro tip:** Start by letting TypeScript infer types. Only add explicit types when needed or for clarity.

## Array Types

There are two ways to type arrays in TypeScript:

### Method 1: Type[] syntax (more common)

```typescript
const names: string[] = ["Alex", "Jordan", "Casey"];
const ages: number[] = [13, 14, 15];
const flags: boolean[] = [true, false, true];
```

### Method 2: Array<Type> syntax

```typescript
const names: Array<string> = ["Alex", "Jordan", "Casey"];
const ages: Array<number> = [13, 14, 15];
```

Both are equivalent. Most developers prefer the `Type[]` syntax because it's shorter.

### Array Type Checking

TypeScript ensures all elements match the declared type:

```typescript
const ages: number[] = [13, 14, 15];

// TypeScript ERROR: Type 'string' is not assignable to type 'number'
ages.push("16");

// This works fine
ages.push(16);
```

### Arrays with Mixed Types (Tuples)

If you really need mixed types, you can use a tuple:

```typescript
// Tuple: exactly 2 elements, string then number
const user: [string, number] = ["Alex", 14];

const name = user[0]; // TypeScript knows this is a string
const age = user[1];  // TypeScript knows this is a number
```

Tuples are less common than arrays. We'll use them occasionally for specific cases.

## The Any Type (Avoid It!)

TypeScript has a special `any` type that turns off type checking:

```typescript
let mystery: any = "hello";
mystery = 42;      // No error
mystery = true;    // No error
mystery.doSomethingWeird(); // No error (but will crash at runtime!)
```

**The `any` type defeats the purpose of TypeScript.** It's like saying "I don't care about types" - you lose all the benefits.

**When `any` might be okay:**
- You're converting JavaScript to TypeScript gradually
- You're working with a library that doesn't have types
- Temporary placeholder while you figure out the right type

**Better alternative:** Use `unknown` if you really don't know the type yet:

```typescript
let mystery: unknown = "hello";

// TypeScript forces you to check the type before using it
if (typeof mystery === "string") {
  console.log(mystery.toUpperCase()); // Safe now
}
```

## Null and Undefined

TypeScript has special types for missing values:

```typescript
let userName: string | null = null;
userName = "Alex"; // Okay
userName = null;   // Also okay

let age: number | undefined;
age = undefined;   // Okay
age = 15;         // Okay
```

The `|` symbol means "or" - this variable can be a string OR null.

**In strict mode** (which we enable), TypeScript forces you to handle null/undefined:

```typescript
function greetUser(name: string | null) {
  // TypeScript ERROR: name might be null!
  console.log(name.toUpperCase());

  // Fix: Check for null first
  if (name !== null) {
    console.log(name.toUpperCase()); // Safe now
  }
}
```

This prevents crashes from trying to use null or undefined values.

## Type Aliases

You can create custom names for types:

```typescript
type UserID = number;
type UserName = string;

const id: UserID = 12345;
const name: UserName = "Alex";
```

This is mostly useful for complex types. We'll use it more when we learn about interfaces in the next lesson.

## Practical Example: Student Data

Let's put it all together with a sports coaching platform example:

```typescript
// Student information
const studentId: number = 1001;
const firstName: string = "Jordan";
const lastName: string = "Smith";
const age: number = 13;
const isEnrolled: boolean = true;

// Classes the student is taking
const classIds: number[] = [201, 202, 205];

// Calculate full name
const fullName: string = `${firstName} ${lastName}`;

// Check enrollment status
function checkStatus(enrolled: boolean): string {
  if (enrolled) {
    return "Active student";
  } else {
    return "Not enrolled";
  }
}

console.log(`${fullName} (ID: ${studentId})`);
console.log(`Status: ${checkStatus(isEnrolled)}`);
console.log(`Classes: ${classIds.length}`);
```

Notice how types make it clear what each variable represents. Anyone reading this code immediately understands the data types.

## Common Mistakes

### Mistake 1: Mixing up types

```typescript
const age: number = "14"; // ERROR: Can't assign string to number

// Fix: Use the right type
const age: number = 14;
```

### Mistake 2: Forgetting arrays need element types

```typescript
const names: array = ["Alex"]; // ERROR: 'array' doesn't exist

// Fix: Specify what's in the array
const names: string[] = ["Alex"];
```

### Mistake 3: Using any everywhere

```typescript
const name: any = "Alex";
const age: any = 14;
// This defeats the purpose of TypeScript!

// Fix: Use proper types
const name: string = "Alex";
const age: number = 14;
```

## Type Checking in Action

Let's see how TypeScript catches bugs:

```typescript
function calculateDiscount(price: number, percentage: number): number {
  return price * (percentage / 100);
}

// Works fine
const discount1 = calculateDiscount(100, 10); // $10 discount

// TypeScript ERROR: Argument of type 'string' is not assignable to parameter of type 'number'
const discount2 = calculateDiscount("100", 10);

// TypeScript ERROR: Expected 2 arguments, but got 1
const discount3 = calculateDiscount(100);
```

TypeScript catches all three errors before you run the code.

## Key Takeaways

- Use `string`, `number`, and `boolean` for primitive types
- Type arrays with `Type[]` syntax (e.g., `string[]`)
- Let TypeScript infer types when obvious
- Avoid `any` - it disables type checking
- Handle `null` and `undefined` explicitly
- Type annotations come after variable names with a colon

## Practice Exercises

Try typing these variables correctly:

```typescript
// 1. A student's name
const studentName = ???

// 2. Their age
const studentAge = ???

// 3. Whether they paid for the class
const hasPaid = ???

// 4. List of class names they're enrolled in
const enrolledClasses = ???

// 5. Their parent's phone number (can be null if not provided)
const parentPhone = ???
```

<details>
<summary>Click to see answers</summary>

```typescript
const studentName: string = "Alex Chen";
const studentAge: number = 14;
const hasPaid: boolean = true;
const enrolledClasses: string[] = ["Basketball", "Soccer"];
const parentPhone: string | null = "555-1234";
```
</details>

## Up Next

Now that you understand basic types, let's learn how to create custom types for objects using interfaces and type aliases.

---

**Previous Lesson:** [Lesson 1: Why TypeScript?](01-why-typescript.md)
**Next Lesson:** [Lesson 3: Interfaces & Type Aliases](03-interfaces-types.md)
