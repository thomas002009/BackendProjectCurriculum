# Exercise 2: Interfaces

**Difficulty:** ⭐⭐ Intermediate
**Estimated Time:** 45 minutes

## Objective

Learn how to define and use interfaces to describe object shapes in TypeScript. You'll create interfaces for a sports coaching platform's data models.

## What You'll Practice

- Defining interfaces with various property types
- Using interfaces to type objects
- Creating optional properties with `?`
- Using readonly properties
- Nesting interfaces
- Creating arrays of interface objects

## Instructions

Open the `interfaces.ts` file and complete the TODO comments. You'll:

1. Define interfaces for Users, Classes, and Enrollments
2. Create objects that match those interfaces
3. Write functions that use interfaces as parameter and return types
4. Work with arrays of typed objects

## Running Your Code

```bash
# Compile and run
npx ts-node exercises/02-interfaces/interfaces.ts

# Or compile first, then run
npx tsc exercises/02-interfaces/interfaces.ts
node exercises/02-interfaces/interfaces.js
```

## Real-World Context

These interfaces represent the data structures you'll work with when building the sports coaching platform backend:

- **User:** Students, parents, instructors, and staff
- **Class:** Sports classes offered by the organization
- **Enrollment:** Records of students enrolled in classes

## Success Criteria

You've completed this exercise when:
- All interfaces are defined with appropriate property types
- All TODO comments are addressed
- Objects correctly match their interface definitions
- The file compiles with no TypeScript errors
- Running the code produces meaningful output

## Need Help?

- Review [Lesson 3: Interfaces & Type Aliases](../../lessons/03-interfaces-types.md)
- Remember: interfaces describe the shape an object should have
- Use optional properties (`?`) for fields that might not always exist
- Use readonly for properties that shouldn't change after creation

## Bonus Challenges

If you finish early:
1. Add a `Coach` interface that extends `User` with additional properties
2. Create an interface for a class schedule with day, time, and location
3. Add methods to your interfaces (function properties)
4. Create a union type for different user roles
