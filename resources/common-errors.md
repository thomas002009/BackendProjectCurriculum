# Common Errors and Solutions

Troubleshooting guide organized by module. When you encounter an error, find it here for a solution!

## Table of Contents

- [Module 01: Git, Environment & Node.js](#module-01-git-environment--nodejs)
- [Module 02: JavaScript Fundamentals](#module-02-javascript-fundamentals)
- [Module 03: TypeScript Basics](#module-03-typescript-basics)
- [Module 04: HTTP & REST APIs](#module-04-http--rest-apis)
- [Module 05: Nest.js Part 1](#module-05-nestjs-part-1)
- [Module 06: Databases & SQL](#module-06-databases--sql)
- [Module 07: Prisma ORM](#module-07-prisma-orm)
- [Module 08: Nest.js Part 2](#module-08-nestjs-part-2)
- [General Issues](#general-issues)

---

## Module 01: Git, Environment & Node.js

### "npm: command not found"

**Problem:** Node.js/npm is not installed or not in your PATH.

**Solution:**
1. Reinstall Node.js from [nodejs.org](https://nodejs.org/)
2. Restart your terminal after installation
3. Verify: `node --version` and `npm --version`

### "git: command not found"

**Problem:** Git is not installed or not in your PATH.

**Solution:**
1. Install Git from [git-scm.com](https://git-scm.com/)
2. Restart your terminal
3. Verify: `git --version`

### "permission denied" when running npm install

**Problem:** Insufficient permissions to install packages.

**Solution:**
- **Never use `sudo` with npm** on macOS/Linux
- Fix npm permissions: https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
- On Windows, run terminal as administrator

### Git rejects push: "failed to push some refs"

**Problem:** Your local branch is behind the remote branch.

**Solution:**
```bash
git pull origin main
git push origin main
```

### "fatal: not a git repository"

**Problem:** You're not in a Git repository directory.

**Solution:**
```bash
cd path/to/backend-curriculum
# Now run git commands
```

---

## Module 02: JavaScript Fundamentals

### "SyntaxError: Unexpected token"

**Problem:** Usually missing or extra parentheses, brackets, or braces.

**Solution:**
- Check that every `{` has a matching `}`
- Check that every `(` has a matching `)`
- Check that every `[` has a matching `]`
- Look at the line number in the error message

### "ReferenceError: variable is not defined"

**Problem:** Using a variable before declaring it or typo in variable name.

**Solution:**
```javascript
// ❌ Bad
console.log(name);  // ReferenceError
const name = 'John';

// ✅ Good
const name = 'John';
console.log(name);
```

### "TypeError: Cannot read property 'X' of undefined"

**Problem:** Trying to access a property on `undefined` or `null`.

**Solution:**
```javascript
// ❌ Bad
const user = undefined;
console.log(user.name);  // TypeError

// ✅ Good
const user = undefined;
console.log(user?.name);  // undefined (no error)

// Or check first
if (user) {
  console.log(user.name);
}
```

### Promises not resolving / "then is not a function"

**Problem:** Forgetting to `await` or use `.then()` with promises.

**Solution:**
```javascript
// ❌ Bad
const data = fetchData();
console.log(data);  // Promise object, not the data

// ✅ Good (with async/await)
const data = await fetchData();
console.log(data);

// ✅ Good (with .then())
fetchData().then(data => console.log(data));
```

---

## Module 03: TypeScript Basics

### "Type 'X' is not assignable to type 'Y'"

**Problem:** Trying to assign a value of one type to a variable of another type.

**Solution:**
```typescript
// ❌ Bad
const age: number = '15';  // Error: string not assignable to number

// ✅ Good
const age: number = 15;
const ageString: string = '15';
const age2: number = parseInt(ageString);
```

### "Property 'X' does not exist on type 'Y'"

**Problem:** Accessing a property that TypeScript doesn't know about.

**Solution:**
```typescript
// ❌ Bad
interface User {
  name: string;
}
const user: User = { name: 'John' };
console.log(user.age);  // Error: age doesn't exist

// ✅ Good - add property to interface
interface User {
  name: string;
  age?: number;  // Optional
}

// Or use type assertion (use sparingly!)
console.log((user as any).age);
```

### "Cannot find module 'X'"

**Problem:** Missing type definitions or incorrect import path.

**Solution:**
```bash
# For packages without types
npm install @types/package-name

# For local files, check the path
import { User } from './user';  // ✅ Relative path
import { User } from 'user';    // ❌ Will look in node_modules
```

### "Cannot use 'X' before initialization"

**Problem:** Using a variable before it's declared (temporal dead zone).

**Solution:**
```typescript
// ❌ Bad
console.log(name);  // Error
const name = 'John';

// ✅ Good
const name = 'John';
console.log(name);
```

---

## Module 04: HTTP & REST APIs

### "CORS error" when making requests

**Problem:** Cross-Origin Resource Sharing policy blocking request.

**Solution:**
- Not an issue when calling your own API from the same domain
- For development, Nest.js can enable CORS:
```typescript
// main.ts
app.enableCors();
```

### "404 Not Found" for API endpoint

**Problem:** Endpoint doesn't exist or URL is incorrect.

**Solution:**
1. Check the URL spelling
2. Verify the endpoint exists in your controller
3. Check that the server is running
4. Verify the HTTP method (GET, POST, etc.)

### "Network request failed" / Cannot connect

**Problem:** Server isn't running or wrong port.

**Solution:**
1. Start the server: `npm run start:dev`
2. Check the URL includes the port: `http://localhost:3000`
3. Verify nothing else is using port 3000

---

## Module 05: Nest.js Part 1

### "Nest can't resolve dependencies of X"

**Problem:** Missing provider or incorrect injection.

**Solution:**
```typescript
// ❌ Bad - service not provided in module
@Module({
  controllers: [UsersController],
  // Missing: providers: [UsersService]
})

// ✅ Good
@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

### "Cannot find decorator '@Get'"

**Problem:** Missing import from @nestjs/common.

**Solution:**
```typescript
// ❌ Bad
@Get()  // Error: can't find @Get

// ✅ Good
import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() { }
}
```

### Decorator not working / routes not recognized

**Problem:** TypeScript decorators not enabled.

**Solution:**
Check `tsconfig.json` has:
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

### "Port 3000 is already in use"

**Problem:** Another process is using port 3000.

**Solution:**
```bash
# Find and kill the process (macOS/Linux)
lsof -i :3000
kill -9 <PID>

# Or change the port in main.ts
await app.listen(3001);
```

### Validation not working (DTO validation ignored)

**Problem:** Global validation pipe not set up.

**Solution:**
```typescript
// main.ts
import { ValidationPipe } from '@nestjs/common';

app.useGlobalPipes(new ValidationPipe());
```

### "Class constructor X cannot be invoked without 'new'"

**Problem:** Incorrect TypeScript compilation settings.

**Solution:**
Check `tsconfig.json` has:
```json
{
  "compilerOptions": {
    "target": "ES2021"
  }
}
```

---

## Module 06: Databases & SQL

### "connection refused" / Can't connect to database

**Problem:** Database not running or wrong connection string.

**Solution:**
1. Verify Supabase project is active
2. Check `DATABASE_URL` in `.env`
3. Ensure connection string has no extra spaces
4. Verify password is correct

### "syntax error at or near X"

**Problem:** SQL syntax error.

**Solution:**
- Check SQL keywords are spelled correctly
- Ensure strings use single quotes: `'John'` not `"John"`
- Check for missing commas in INSERT/UPDATE
- Verify parentheses are balanced

### "relation 'table_name' does not exist"

**Problem:** Table hasn't been created yet.

**Solution:**
```sql
-- Create the table first
CREATE TABLE users (...);

-- Then query it
SELECT * FROM users;
```

### "duplicate key value violates unique constraint"

**Problem:** Trying to insert a value that already exists in a unique column.

**Solution:**
```sql
-- ❌ Error if email already exists
INSERT INTO users (email) VALUES ('john@example.com');

-- ✅ Use UPSERT or check first
INSERT INTO users (email) VALUES ('john@example.com')
ON CONFLICT (email) DO NOTHING;
```

---

## Module 07: Prisma ORM

### "Unknown field 'X' for model 'Y'"

**Problem:** Prisma Client out of sync with schema.

**Solution:**
```bash
# Regenerate Prisma Client after schema changes
npx prisma generate
```

### "Migration failed" / Migration conflicts

**Problem:** Database state doesn't match migrations.

**Solution:**
```bash
# Reset database (WARNING: deletes all data!)
npx prisma migrate reset

# Or create a new migration
npx prisma migrate dev --name fix_issue
```

### "PrismaClientValidationError: Invalid X"

**Problem:** Trying to query with invalid fields or wrong data types.

**Solution:**
- Check field names match your schema
- Verify data types match (number vs string)
- Run `npx prisma generate` to sync client

### "Foreign key constraint failed"

**Problem:** Trying to create a relationship to a non-existent record.

**Solution:**
```typescript
// ❌ Bad - user 999 doesn't exist
await prisma.post.create({
  data: {
    title: 'My Post',
    authorId: 999,  // Error!
  },
});

// ✅ Good - create user first or use existing ID
const user = await prisma.user.create({
  data: { name: 'John', email: 'john@ex.com' },
});

await prisma.post.create({
  data: {
    title: 'My Post',
    authorId: user.id,
  },
});
```

### Prisma Client import errors

**Problem:** Prisma Client not generated.

**Solution:**
```bash
npx prisma generate
npm install
```

---

## Module 08: Nest.js Part 2

### Tests failing with "Cannot find module"

**Problem:** Test configuration or imports incorrect.

**Solution:**
```typescript
// Ensure TestingModule includes all dependencies
const module = await Test.createTestingModule({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],  // Include all providers!
}).compile();
```

### Environment variables not loading

**Problem:** dotenv not configured or .env file missing.

**Solution:**
1. Ensure `.env` file exists in project root
2. Install dotenv: `npm install dotenv`
3. Load in main.ts or use ConfigModule:
```typescript
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
})
```

### GitHub Actions tests failing (but pass locally)

**Problem:** Environment differences or missing database.

**Solution:**
- Add database setup to GitHub Actions workflow
- Mock database in tests or use test database
- Check all environment variables are set

### "Circular dependency" warning

**Problem:** Modules importing each other.

**Solution:**
- Redesign module structure to avoid circular imports
- Use forwardRef() if necessary (advanced)
- Often indicates design issue - reconsider architecture

---

## General Issues

### "Module build failed" / Compilation errors

**Problem:** TypeScript compilation issues.

**Solution:**
```bash
# Delete and reinstall node_modules
rm -rf node_modules package-lock.json
npm install

# Ensure TypeScript is installed
npm install -D typescript
```

### Tests passing locally but failing in CI

**Problem:** Environment differences.

**Solution:**
- Check Node.js version matches
- Ensure all dependencies are in package.json (not global)
- Verify environment variables are set
- Check for timing issues in async tests

### "Cannot find module" after installing package

**Problem:** Package not properly installed.

**Solution:**
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### IDE not recognizing types / imports

**Problem:** IDE TypeScript server needs restart.

**Solution:**
- VS Code: Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
- Regenerate types: `npx prisma generate`
- Restart IDE

### Out of memory errors

**Problem:** Node.js default memory limit reached.

**Solution:**
```bash
# Increase Node.js memory limit
NODE_OPTIONS=--max_old_space_size=4096 npm start
```

---

## Getting Help

If your error isn't listed here:

1. **Read the error message carefully** - It often tells you exactly what's wrong
2. **Check the line number** - Go to that line in your code
3. **Google the error** - Add "Node.js" or "Nest.js" to your search
4. **Check module-specific documentation**
5. **Ask during office hours** with:
   - The exact error message
   - What you were trying to do
   - What you've already tried
6. **Use console.log()** to debug and see what values variables have

## Prevention Tips

1. **Read error messages** - Don't skip them!
2. **Test frequently** - Run tests after small changes
3. **Commit often** - Easy to revert if something breaks
4. **Use TypeScript** - Catches many errors before runtime
5. **Enable strict mode** - More errors caught at compile time
6. **Read the docs** - When learning something new
7. **Start simple** - Get basics working before adding complexity
8. **Keep dependencies updated** - But test after updating
9. **Use linter** - ESLint catches common mistakes
10. **Ask for help early** - Don't struggle for hours alone

---

Remember: **Every developer encounters errors constantly**. Learning to debug effectively is one of the most important skills you'll develop!
