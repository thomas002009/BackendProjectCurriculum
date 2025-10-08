# Module 03: TypeScript Basics

Welcome to Module 3! Now that you're comfortable with JavaScript, it's time to add TypeScript's superpowers to your toolkit. TypeScript helps catch bugs before your code even runs by adding type safety to JavaScript.

## Overview

**Estimated Time:** 1-2 weeks
**Difficulty:** ⭐⭐ (Intermediate)

In this module, you'll learn why TypeScript is widely used in professional backend development and how to write type-safe code that prevents common errors.

## Prerequisites

Before starting this module, you should:
- Be comfortable with JavaScript variables, functions, and objects (Module 2)
- Understand how to use `const`, `let`, and arrow functions
- Know what objects and arrays are in JavaScript
- Have experience with C++ types (int, string, bool, etc.)

## What You'll Learn

By the end of this module, you will be able to:
- Explain the benefits of type safety and why TypeScript exists
- Use basic TypeScript types: `string`, `number`, `boolean`, `array`
- Create and use interfaces to define object shapes
- Use type aliases for custom types
- Add type annotations to function parameters and return values
- Understand when TypeScript catches errors vs JavaScript
- Convert JavaScript code to TypeScript

## Module Structure

```
module-03-typescript-basics/
├── README.md (you are here)
├── lessons/
│   ├── 01-why-typescript.md
│   ├── 02-basic-types.md
│   ├── 03-interfaces-types.md
│   ├── 04-functions-typing.md
│   └── assets/
│       └── README.md
├── exercises/
│   ├── 01-basic-types/
│   │   ├── README.md
│   │   └── practice.ts
│   ├── 02-interfaces/
│   │   ├── README.md
│   │   └── interfaces.ts
│   └── 03-typed-functions/
│       ├── README.md
│       └── functions.ts
└── homework/
    ├── README.md
    ├── starter/
    │   ├── index.ts
    │   ├── types.ts
    │   ├── tsconfig.json
    │   └── package.json
    └── tests/
        └── homework.test.ts
```

## Lessons

### Lesson 1: Why TypeScript? (30 minutes)
**Topics:** Benefits of type safety, catching errors early, TypeScript vs JavaScript

Learn why major companies like Microsoft, Google, and Airbnb use TypeScript, and how it can save you from common bugs.

### Lesson 2: Basic Types (45 minutes)
**Topics:** `string`, `number`, `boolean`, arrays, type inference, `any` type

Master the fundamental TypeScript types and learn how to annotate your variables.

### Lesson 3: Interfaces & Type Aliases (45 minutes)
**Topics:** Defining object shapes with interfaces, type aliases, optional properties

Create reusable type definitions for complex objects, just like structs in C++.

### Lesson 4: Function Typing (45 minutes)
**Topics:** Parameter types, return types, void, function signatures

Learn how to make your functions more predictable and self-documenting with types.

## Exercises

### Exercise 1: Basic Types Practice (⭐ - 30 minutes)
Practice adding type annotations to variables and understanding type inference.

### Exercise 2: Interfaces (⭐⭐ - 45 minutes)
Define interfaces for a sports coaching platform's users and classes, then create objects that match those interfaces.

### Exercise 3: Typed Functions (⭐⭐ - 45 minutes)
Add proper type annotations to functions, including parameters, return types, and handling optional parameters.

## Homework Assignment

**Build a Typed Task Manager CLI**

Convert your JavaScript task manager from Module 2 to TypeScript by:
- Defining interfaces for tasks and the task manager
- Adding type annotations throughout your code
- Using TypeScript's compiler to catch potential bugs
- Ensuring everything compiles with no errors

This homework reinforces everything you've learned while showing you how TypeScript improves code quality.

## Testing Your Work

Run the Module 3 tests with:
```bash
npm run test:module-03
```

The tests will check:
- Your TypeScript code compiles without errors
- Type annotations are present and correct
- Interfaces are properly defined
- No use of `any` type (except where explicitly allowed)

## Real-World Context

In the sports coaching platform backend, TypeScript helps us:
- Define exact shapes for Users, Classes, and Enrollments
- Catch errors when we accidentally pass wrong data types
- Make the codebase easier to understand and maintain
- Get better IDE autocomplete and error checking

Professional backends almost always use TypeScript because it prevents entire categories of bugs from reaching production.

## Common Challenges

**"My code works in JavaScript, why add types?"**
Types catch bugs before runtime. They're like seatbelts - you might not need them most of the time, but they save you when things go wrong.

**"TypeScript errors are confusing"**
Start by reading the first line of the error. TypeScript tells you exactly what type it expected vs what it got.

**"Do I need to type everything?"**
No! TypeScript has great type inference. Only add types where they add clarity or where inference isn't possible.

## Resources

- [TypeScript Cheatsheet](../../resources/cheatsheets/typescript-reference.md)
- [Common TypeScript Errors](../../resources/common-errors.md#module-3-typescript)
- [Glossary](../../resources/glossary.md)

## Teacher Notes

### Pacing
- Week 1: Lessons 1-3, Exercises 1-2
- Week 2: Lesson 4, Exercise 3, Homework

### Key Concepts to Emphasize
- Type safety prevents bugs at compile time, not runtime
- Interfaces are like C++ structs/classes but only for types
- TypeScript is JavaScript with types - all JS is valid TS (with `any`)

### Common Student Struggles
- Understanding why TypeScript is useful (show concrete bug examples)
- Difference between interfaces and type aliases (they're very similar)
- Reading TypeScript error messages (practice together)

### Assessment Criteria
Students are ready for Module 4 when they can:
- Add type annotations to variables and functions independently
- Define interfaces for objects
- Understand TypeScript compiler errors
- Convert simple JavaScript to TypeScript

### When to Move On
Don't wait for perfection. Students should understand basic types and interfaces. More complex TypeScript (generics, utility types) will come with experience.

---

**Ready to start?** Head to [Lesson 1: Why TypeScript?](lessons/01-why-typescript.md)

**Previous Module:** [Module 02: JavaScript Fundamentals](../module-02-javascript-fundamentals/README.md)
**Next Module:** [Module 04: HTTP & REST APIs](../module-04-http-rest-apis/README.md)
