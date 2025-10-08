# Prisma Reference

Quick reference for Prisma ORM - the tool we use to interact with PostgreSQL databases.

## Schema Basics

### prisma/schema.prisma

```prisma
// Database connection
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Prisma Client generator
generator client {
  provider = "prisma-client-js"
}

// Define models (tables)
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String
  role      String   @default("user")
  age       Int?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Field Types

### Scalar Types

```prisma
model Example {
  // Numbers
  intField    Int
  bigIntField BigInt
  floatField  Float
  decimalField Decimal

  // Text
  stringField String
  textField   String  @db.Text

  // Boolean
  boolField   Boolean

  // Date/Time
  dateField      DateTime
  dateOnlyField  DateTime @db.Date

  // JSON
  jsonField   Json

  // Bytes
  bytesField  Bytes
}
```

### Field Attributes

```prisma
model User {
  id        Int     @id @default(autoincrement())  // Primary key, auto-increment
  email     String  @unique                         // Must be unique
  name      String                                  // Required
  age       Int?                                    // Optional (nullable)
  role      String  @default("user")               // Default value
  createdAt DateTime @default(now())                // Auto-set to current time
  updatedAt DateTime @updatedAt                     // Auto-update on changes
}
```

## Relationships

### One-to-Many

```prisma
model User {
  id       Int       @id @default(autoincrement())
  name     String
  posts    Post[]    // One user has many posts
}

model Post {
  id       Int      @id @default(autoincrement())
  title    String
  author   User     @relation(fields: [authorId], references: [id])
  authorId Int
}
```

### Many-to-Many

```prisma
model Student {
  id          Int          @id @default(autoincrement())
  name        String
  enrollments Enrollment[]
}

model Class {
  id          Int          @id @default(autoincrement())
  title       String
  enrollments Enrollment[]
}

model Enrollment {
  id        Int      @id @default(autoincrement())
  student   Student  @relation(fields: [studentId], references: [id])
  studentId Int
  class     Class    @relation(fields: [classId], references: [id])
  classId   Int
  enrolledAt DateTime @default(now())

  @@unique([studentId, classId])  // Prevent duplicate enrollments
}
```

### One-to-One

```prisma
model User {
  id      Int      @id @default(autoincrement())
  name    String
  profile Profile?  // One user has one profile (optional)
}

model Profile {
  id     Int    @id @default(autoincrement())
  bio    String
  user   User   @relation(fields: [userId], references: [id])
  userId Int    @unique  // One-to-one relationship
}
```

## Prisma Client Queries

### Setup

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Use in Nest.js service
@Injectable()
export class PrismaService extends PrismaClient {}
```

### Create (INSERT)

```typescript
// Create single record
const user = await prisma.user.create({
  data: {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'student',
  },
});

// Create with related data
const user = await prisma.user.create({
  data: {
    name: 'John Doe',
    email: 'john@example.com',
    posts: {
      create: [
        { title: 'My first post' },
        { title: 'My second post' },
      ],
    },
  },
});

// Create many
const users = await prisma.user.createMany({
  data: [
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
  ],
});
```

### Read (SELECT)

```typescript
// Find all
const users = await prisma.user.findMany();

// Find with conditions
const admins = await prisma.user.findMany({
  where: {
    role: 'admin',
  },
});

// Find one by unique field
const user = await prisma.user.findUnique({
  where: {
    email: 'john@example.com',
  },
});

// Find one by ID
const user = await prisma.user.findUnique({
  where: { id: 1 },
});

// Find first matching
const user = await prisma.user.findFirst({
  where: {
    role: 'admin',
  },
});

// Select specific fields
const users = await prisma.user.findMany({
  select: {
    id: true,
    name: true,
    email: true,
  },
});

// Include related data
const users = await prisma.user.findMany({
  include: {
    posts: true,  // Include all posts
  },
});

// Nested includes
const user = await prisma.user.findUnique({
  where: { id: 1 },
  include: {
    posts: {
      include: {
        comments: true,
      },
    },
  },
});
```

### Update

```typescript
// Update single record
const user = await prisma.user.update({
  where: { id: 1 },
  data: {
    email: 'newemail@example.com',
  },
});

// Update many
const result = await prisma.user.updateMany({
  where: {
    role: 'guest',
  },
  data: {
    role: 'user',
  },
});

// Update with increment
const user = await prisma.user.update({
  where: { id: 1 },
  data: {
    age: {
      increment: 1,
    },
  },
});

// Upsert (update or create)
const user = await prisma.user.upsert({
  where: { email: 'john@example.com' },
  update: { name: 'John Smith' },
  create: {
    name: 'John Doe',
    email: 'john@example.com',
  },
});
```

### Delete

```typescript
// Delete single record
const user = await prisma.user.delete({
  where: { id: 1 },
});

// Delete many
const result = await prisma.user.deleteMany({
  where: {
    role: 'guest',
  },
});

// Delete all (dangerous!)
await prisma.user.deleteMany();
```

## Filtering

### Where Conditions

```typescript
// Equals
await prisma.user.findMany({
  where: { role: 'admin' },
});

// Not equals
await prisma.user.findMany({
  where: { role: { not: 'guest' } },
});

// In array
await prisma.user.findMany({
  where: {
    role: { in: ['admin', 'teacher', 'staff'] },
  },
});

// Not in array
await prisma.user.findMany({
  where: {
    role: { notIn: ['guest', 'banned'] },
  },
});

// Greater than / less than
await prisma.user.findMany({
  where: {
    age: { gte: 18 },  // Greater than or equal
  },
});

await prisma.user.findMany({
  where: {
    age: { lt: 18 },   // Less than
  },
});

// String contains (case-sensitive)
await prisma.user.findMany({
  where: {
    name: { contains: 'john' },
  },
});

// String starts with
await prisma.user.findMany({
  where: {
    email: { startsWith: 'admin' },
  },
});

// String ends with
await prisma.user.findMany({
  where: {
    email: { endsWith: '@company.com' },
  },
});

// Case-insensitive
await prisma.user.findMany({
  where: {
    email: { contains: 'JOHN', mode: 'insensitive' },
  },
});

// NULL checks
await prisma.user.findMany({
  where: { age: null },
});

await prisma.user.findMany({
  where: { age: { not: null } },
});

// AND conditions
await prisma.user.findMany({
  where: {
    AND: [
      { role: 'student' },
      { age: { gte: 15 } },
    ],
  },
});

// OR conditions
await prisma.user.findMany({
  where: {
    OR: [
      { role: 'admin' },
      { role: 'teacher' },
    ],
  },
});

// NOT conditions
await prisma.user.findMany({
  where: {
    NOT: { role: 'guest' },
  },
});
```

### Relation Filters

```typescript
// Filter by related data
const users = await prisma.user.findMany({
  where: {
    posts: {
      some: {  // Has at least one post
        published: true,
      },
    },
  },
});

// All related records match
const users = await prisma.user.findMany({
  where: {
    posts: {
      every: {
        published: true,
      },
    },
  },
});

// None of related records match
const users = await prisma.user.findMany({
  where: {
    posts: {
      none: {
        published: false,
      },
    },
  },
});
```

## Sorting and Pagination

### Order By

```typescript
// Sort ascending
await prisma.user.findMany({
  orderBy: { name: 'asc' },
});

// Sort descending
await prisma.user.findMany({
  orderBy: { createdAt: 'desc' },
});

// Multiple sort fields
await prisma.user.findMany({
  orderBy: [
    { role: 'asc' },
    { name: 'asc' },
  ],
});

// Sort by related field
await prisma.post.findMany({
  orderBy: {
    author: {
      name: 'asc',
    },
  },
});
```

### Pagination

```typescript
// Limit results
await prisma.user.findMany({
  take: 10,  // Get 10 records
});

// Skip and take (offset pagination)
await prisma.user.findMany({
  skip: 20,   // Skip first 20
  take: 10,   // Get next 10
});

// Cursor-based pagination
const users = await prisma.user.findMany({
  take: 10,
  cursor: {
    id: lastUser.id,
  },
  skip: 1,  // Skip the cursor itself
});
```

## Aggregation

```typescript
// Count
const count = await prisma.user.count();
const adminCount = await prisma.user.count({
  where: { role: 'admin' },
});

// Aggregate
const result = await prisma.user.aggregate({
  _count: true,
  _avg: { age: true },
  _sum: { age: true },
  _min: { age: true },
  _max: { age: true },
});

// Group by
const usersByRole = await prisma.user.groupBy({
  by: ['role'],
  _count: true,
});
```

## Transactions

```typescript
// Sequential operations
const result = await prisma.$transaction([
  prisma.user.create({ data: { name: 'John', email: 'john@ex.com' } }),
  prisma.user.create({ data: { name: 'Jane', email: 'jane@ex.com' } }),
]);

// Interactive transactions
const transfer = await prisma.$transaction(async (tx) => {
  // Withdraw from account 1
  await tx.account.update({
    where: { id: 1 },
    data: { balance: { decrement: 100 } },
  });

  // Deposit to account 2
  await tx.account.update({
    where: { id: 2 },
    data: { balance: { increment: 100 } },
  });
});
```

## Prisma CLI Commands

```bash
# Initialize Prisma in project
npx prisma init

# Format schema file
npx prisma format

# Generate Prisma Client
npx prisma generate

# Create migration
npx prisma migrate dev --name init

# Apply migrations
npx prisma migrate deploy

# Reset database (deletes all data!)
npx prisma migrate reset

# Open Prisma Studio (GUI)
npx prisma studio

# Sync schema without migration
npx prisma db push

# Pull schema from existing database
npx prisma db pull
```

## Common Patterns for Nest.js

### Prisma Service

```typescript
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
```

### Service with Prisma

```typescript
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(data: CreateUserDto) {
    return this.prisma.user.create({
      data,
    });
  }

  async update(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
```

## Best Practices

1. **Use migrations** for schema changes (not `db push` in production)
2. **Generate client** after schema changes: `npx prisma generate`
3. **Use transactions** for related operations that should succeed/fail together
4. **Select only needed fields** for better performance
5. **Use include** sparingly - can cause performance issues with deep nesting
6. **Add indexes** to frequently queried fields
7. **Use proper error handling** when records might not exist
8. **Validate data** with DTOs before passing to Prisma
9. **Use `@@unique`** constraints to prevent duplicates
10. **Keep schema organized** with clear model names and relationships

## Troubleshooting

### "Unknown field" error
Run `npx prisma generate` to regenerate the client after schema changes.

### Migration conflicts
If migrations get messed up, you may need to reset: `npx prisma migrate reset`

### Type errors
Ensure your schema matches your TypeScript DTOs.

### Connection errors
Check your `DATABASE_URL` in `.env` is correct and database is running.

## Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs/)
- [Prisma Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
- [Prisma Client API Reference](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)
- [Prisma Examples](https://github.com/prisma/prisma-examples)
