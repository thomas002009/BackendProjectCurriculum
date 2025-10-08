# Exercise 3: Typed Functions

**Difficulty:** ⭐⭐ Intermediate
**Estimated Time:** 45 minutes

## Objective

Master function typing in TypeScript by adding proper type annotations to parameters, return types, and handling optional parameters.

## What You'll Practice

- Adding parameter type annotations
- Specifying return types
- Using the `void` return type
- Creating optional parameters
- Using default parameters
- Typing arrow functions
- Working with functions that use interfaces

## Instructions

Open the `functions.ts` file and complete the TODO comments. You'll:

1. Add type annotations to existing functions
2. Fix functions with incorrect types
3. Create new typed functions
4. Work with optional and default parameters
5. Type functions that use interfaces

## Running Your Code

```bash
# Compile and run
npx ts-node exercises/03-typed-functions/functions.ts

# Or compile first, then run
npx tsc exercises/03-typed-functions/functions.ts
node exercises/03-typed-functions/functions.js
```

## Key Concepts

### Function Syntax
```typescript
function name(param: Type): ReturnType {
  return value;
}
```

### Optional Parameters
```typescript
function greet(name: string, title?: string): string {
  // title might be undefined
}
```

### Default Parameters
```typescript
function calculate(price: number, tax: number = 0.08): number {
  return price * (1 + tax);
}
```

## Success Criteria

You've completed this exercise when:
- All functions have proper parameter types
- All functions have explicit return types
- Optional parameters are properly marked with `?`
- The file compiles with no TypeScript errors
- All tests pass when you run the code

## Need Help?

- Review [Lesson 4: Function Typing](../../lessons/04-functions-typing.md)
- Remember: parameter types go before the `)`, return type goes after
- Use `void` for functions that don't return anything
- Optional parameters must come after required parameters

## Bonus Challenges

If you finish early:
1. Create a function that takes another function as a parameter (callback)
2. Write a function that returns a function
3. Create a type alias for a function signature
4. Write an async function with proper Promise typing
