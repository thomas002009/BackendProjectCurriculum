# Exercise 1: Basic Types Practice

**Difficulty:** ⭐ Easy
**Estimated Time:** 30 minutes

## Objective

Practice adding type annotations to variables and understanding how TypeScript's type inference works.

## What You'll Practice

- Adding type annotations to variables
- Using `string`, `number`, `boolean`, and array types
- Understanding when TypeScript can infer types
- Seeing TypeScript catch type errors

## Instructions

Open the `practice.ts` file and complete the TODO comments. Each section asks you to:

1. Add type annotations to variables
2. Fix type errors
3. Create typed arrays
4. Work with mixed types

## Running Your Code

To compile and run the TypeScript file:

```bash
# Compile TypeScript to JavaScript
npx tsc exercises/01-basic-types/practice.ts

# Run the compiled JavaScript
node exercises/01-basic-types/practice.js
```

Or compile and run in one step:
```bash
npx ts-node exercises/01-basic-types/practice.ts
```

## What to Watch For

- TypeScript will show red squiggly lines for type errors in your editor
- The TypeScript compiler will report errors when you try to compile
- Read the error messages carefully - they tell you exactly what's wrong

## Success Criteria

You've completed this exercise when:
- All TODO comments are addressed
- The file compiles with no TypeScript errors
- Running the code produces the expected output
- You understand why each type annotation is needed

## Need Help?

- Review [Lesson 2: Basic Types](../../lessons/02-basic-types.md)
- Check the [TypeScript Cheatsheet](../../../resources/cheatsheets/typescript-reference.md)
- Remember: TypeScript error messages are your friend - read them carefully!

## Bonus Challenges

If you finish early, try:
1. Create a variable that can be either a string OR a number using union types
2. Add type annotations to make a variable readonly
3. Experiment with tuple types for fixed-length arrays
