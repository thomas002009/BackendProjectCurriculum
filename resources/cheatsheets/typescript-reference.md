# TypeScript Reference

TypeScript adds type safety to JavaScript. This reference covers the most important TypeScript concepts for this curriculum.

## Basic Types

```typescript
// Primitives
const name: string = 'John';
const age: number = 15;
const isStudent: boolean = true;
const nothing: null = null;
const notDefined: undefined = undefined;

// Arrays
const numbers: number[] = [1, 2, 3];
const names: Array<string> = ['John', 'Jane'];

// Any (avoid when possible!)
let anything: any = 'could be anything';
anything = 42;  // No error, but defeats the purpose of TypeScript

// Union types
let id: string | number;
id = 'abc123';  // OK
id = 123;       // OK

// Literal types
let direction: 'up' | 'down' | 'left' | 'right';
direction = 'up';  // OK
// direction = 'forward';  // Error!
```

## Interfaces

```typescript
// Define object shape
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;  // Optional property
}

// Use the interface
const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
};

// Interface with methods
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

// Extending interfaces
interface Student extends User {
  grade: number;
  courses: string[];
}

// Readonly properties
interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
}
```

## Type Aliases

```typescript
// Similar to interfaces, but more flexible
type ID = string | number;
type UserRole = 'admin' | 'user' | 'guest';

type Point = {
  x: number;
  y: number;
};

// Function types
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
```

## Functions

```typescript
// Function with typed parameters and return type
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// Optional parameters
function log(message: string, userId?: number): void {
  console.log(message);
}

// Default parameters
function createUser(name: string, role: string = 'user'): User {
  return { id: 1, name, email: '', role };
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

// Void return type (no return value)
function logMessage(msg: string): void {
  console.log(msg);
}

// Never return type (function never returns)
function throwError(message: string): never {
  throw new Error(message);
}
```

## Classes

```typescript
class User {
  // Properties
  id: number;
  name: string;
  private password: string;  // Can't access outside class
  protected role: string;     // Can access in subclasses

  // Constructor
  constructor(id: number, name: string, password: string) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.role = 'user';
  }

  // Methods
  greet(): string {
    return `Hello, I'm ${this.name}`;
  }

  // Private method
  private hashPassword(): string {
    return `hashed_${this.password}`;
  }
}

// Shorthand constructor
class Product {
  constructor(
    public id: number,
    public name: string,
    private price: number,
  ) {}

  getPrice(): number {
    return this.price;
  }
}

// Inheritance
class Admin extends User {
  constructor(id: number, name: string, password: string) {
    super(id, name, password);
    this.role = 'admin';
  }

  deleteUser(userId: number): void {
    console.log(`Deleting user ${userId}`);
  }
}
```

## Generics

```typescript
// Generic function
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);
const str = identity<string>('hello');

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: 'John', email: 'john@example.com' },
  status: 200,
  message: 'Success',
};

// Generic class
class Box<T> {
  constructor(private content: T) {}

  getContent(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(42);
const stringBox = new Box<string>('hello');
```

## Type Assertions

```typescript
// When you know more than TypeScript
const input = document.getElementById('input') as HTMLInputElement;
const value = input.value;

// Alternative syntax
const input2 = <HTMLInputElement>document.getElementById('input');

// Non-null assertion (use carefully!)
const element = document.getElementById('input')!;  // Tells TS it's not null
```

## Arrays and Tuples

```typescript
// Typed arrays
const numbers: number[] = [1, 2, 3];
const users: User[] = [{ id: 1, name: 'John', email: 'j@ex.com' }];

// Array of mixed types
const mixed: (string | number)[] = [1, 'two', 3];

// Tuples (fixed length, specific types)
const coord: [number, number] = [10, 20];
const user: [number, string, boolean] = [1, 'John', true];

// Named tuples
type Response = [status: number, data: string];
const response: Response = [200, 'OK'];
```

## Utility Types

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial - all properties optional
type PartialUser = Partial<User>;
const update: PartialUser = { name: 'Jane' };  // OK

// Required - all properties required
type RequiredUser = Required<User>;

// Pick - select specific properties
type UserPreview = Pick<User, 'id' | 'name'>;
const preview: UserPreview = { id: 1, name: 'John' };

// Omit - exclude specific properties
type UserWithoutAge = Omit<User, 'age'>;

// Record - create object type with specific keys and values
type Roles = 'admin' | 'user' | 'guest';
type Permissions = Record<Roles, string[]>;
const perms: Permissions = {
  admin: ['read', 'write', 'delete'],
  user: ['read', 'write'],
  guest: ['read'],
};

// Readonly - make all properties readonly
type ReadonlyUser = Readonly<User>;
```

## Type Guards

```typescript
// typeof guard
function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase();  // TS knows it's a string here
  } else {
    return value.toFixed(2);     // TS knows it's a number here
  }
}

// instanceof guard
class Dog {
  bark() { console.log('Woof!'); }
}

class Cat {
  meow() { console.log('Meow!'); }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// Custom type guard
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}
```

## Enums

```typescript
// Numeric enum
enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right,  // 3
}

const dir: Direction = Direction.Up;

// String enum (preferred)
enum UserRole {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST',
}

const role: UserRole = UserRole.Admin;

// Const enum (more efficient)
const enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}
```

## Async/Promises

```typescript
// Promise type
function fetchUser(id: number): Promise<User> {
  return fetch(`/api/users/${id}`)
    .then(res => res.json());
}

// Async function
async function getUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  const user: User = await response.json();
  return user;
}

// Error handling
async function getUserSafely(id: number): Promise<User | null> {
  try {
    const user = await getUser(id);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}
```

## Decorators (Nest.js uses these!)

```typescript
// Class decorator
function Controller(route: string) {
  return function(target: Function) {
    // Decorator logic
  };
}

@Controller('/users')
class UserController {
  // ...
}

// Method decorator
function Get(path: string) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // Decorator logic
  };
}

class UserController {
  @Get('/:id')
  findOne(id: string) {
    // ...
  }
}

// Parameter decorator
function Param(name: string) {
  return function(target: any, propertyKey: string, parameterIndex: number) {
    // Decorator logic
  };
}

class UserController {
  findOne(@Param('id') id: string) {
    // ...
  }
}
```

## Module System

```typescript
// Exporting
export interface User {
  id: number;
  name: string;
}

export class UserService {
  // ...
}

export const API_URL = 'https://api.example.com';

// Default export
export default class App {
  // ...
}

// Importing
import { User, UserService } from './user';
import App from './app';

// Import all
import * as UserModule from './user';
const user: UserModule.User = { id: 1, name: 'John' };
```

## Common Patterns for This Curriculum

### DTOs (Data Transfer Objects)

```typescript
// Define shape of incoming data
export class CreateUserDto {
  name: string;
  email: string;
  age?: number;
}

export class UpdateUserDto {
  name?: string;
  email?: string;
}
```

### Service Types

```typescript
export class UserService {
  async findAll(): Promise<User[]> {
    // ...
  }

  async findOne(id: number): Promise<User | null> {
    // ...
  }

  async create(data: CreateUserDto): Promise<User> {
    // ...
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    // ...
  }

  async delete(id: number): Promise<void> {
    // ...
  }
}
```

### API Response Types

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
```

## Best Practices

1. **Be explicit with types** - Don't rely on type inference for function parameters and returns
2. **Avoid `any`** - Use `unknown` if you really don't know the type
3. **Use interfaces for objects** - Use type aliases for unions, primitives, etc.
4. **Enable strict mode** - In tsconfig.json: `"strict": true`
5. **Use readonly** when data shouldn't change
6. **Prefer const enums** for better performance
7. **Use utility types** instead of redefining similar types
8. **Create custom type guards** for complex type narrowing
9. **Don't overuse type assertions** - They bypass type checking
10. **Keep types DRY** - Define once, reuse everywhere

## tsconfig.json Basics

```json
{
  "compilerOptions": {
    "target": "ES2021",                 // JS version to compile to
    "module": "commonjs",                // Module system
    "strict": true,                      // Enable all strict checks
    "esModuleInterop": true,            // Better import/export compatibility
    "experimentalDecorators": true,     // Enable decorators (for Nest.js)
    "emitDecoratorMetadata": true,      // Emit decorator metadata (for Nest.js)
    "outDir": "./dist",                 // Output directory
    "rootDir": "./src",                 // Source directory
    "skipLibCheck": true                // Skip checking .d.ts files
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Common Errors and Solutions

### "Type 'X' is not assignable to type 'Y'"
You're trying to assign a value of one type to a variable of another type.
- Check that your types match
- Use type assertions if you're sure it's correct: `value as Type`

### "Property 'X' does not exist on type 'Y'"
You're trying to access a property that TypeScript doesn't know about.
- Check spelling
- Make sure the property is defined in the interface
- Use optional chaining if it might not exist: `obj?.property`

### "Cannot find module 'X'"
- Check the import path
- Make sure the file exists
- For packages, run `npm install @types/package-name`

### "Argument of type 'X' is not assignable to parameter of type 'Y'"
The argument you're passing doesn't match the expected type.
- Check the function signature
- Make sure you're passing the right type

## Additional Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript Playground](https://www.typescriptlang.org/play) - Try TypeScript in browser
