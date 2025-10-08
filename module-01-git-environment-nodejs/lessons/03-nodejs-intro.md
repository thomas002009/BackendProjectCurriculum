# Lesson 3: Node.js Introduction

**Duration:** 45 minutes
**Objective:** Understand what Node.js is and how to use npm

## What You'll Learn Today

- What Node.js is and why it's used for backend development
- How JavaScript runs outside the browser
- What npm is and how package management works
- How to create and understand package.json
- How to install and use npm packages

---

## What is Node.js?

**Node.js** is a JavaScript runtime that lets you run JavaScript code outside of a web browser. It was created in 2009 by Ryan Dahl and has become one of the most popular platforms for backend development.

### JavaScript: From Browser to Everywhere

You might know that JavaScript is the programming language of web browsers - it makes websites interactive. But historically, JavaScript could **only** run in browsers.

Node.js changed that! Now JavaScript can run on servers, in command-line tools, and anywhere else.

Think of it this way:
- **Browser JavaScript:** Makes buttons work, handles clicks, updates the page
- **Node.js JavaScript:** Handles user logins, saves data to databases, sends emails

### Why Node.js?

**Advantages of Node.js:**

1. **Same Language Front and Back:** Use JavaScript for both frontend and backend
2. **Fast:** Built on Chrome's V8 engine, optimized for speed
3. **Asynchronous:** Handles many requests at once efficiently
4. **Huge Ecosystem:** npm has over 1 million packages
5. **Active Community:** Tons of resources, tutorials, and help available

**Real-World Users:**
- Netflix, PayPal, LinkedIn, Uber, NASA, and thousands more use Node.js

---

## Node.js vs C++

Since you know C++, let's compare:

| Aspect | C++ | Node.js |
|--------|-----|---------|
| **Compilation** | Compiled to machine code | Interpreted (run directly) |
| **Speed** | Very fast (native code) | Fast (optimized interpreter) |
| **Type System** | Static (types at compile time) | Dynamic (types at runtime) |
| **Memory** | Manual management | Automatic garbage collection |
| **Use Cases** | Systems, games, performance-critical | Web servers, APIs, real-time apps |
| **Run Command** | `./program` | `node program.js` |

**Key Difference:** C++ is compiled before running. Node.js runs JavaScript code directly (though V8 does compile it internally).

---

## How Node.js Works

### The JavaScript Engine

Node.js uses **V8**, Google Chrome's JavaScript engine. V8 compiles JavaScript to machine code for fast execution.

```
Your Code (JavaScript) → V8 Engine → Machine Code → Execution
```

### Single-Threaded But Asynchronous

This is different from C++!

**Node.js is single-threaded** but handles multiple operations at once using an **event loop**. When you make a database request, Node.js doesn't wait - it continues running other code and comes back when the database responds.

Think of a restaurant server:
- **C++ (multi-threaded):** Multiple servers, each handling one table
- **Node.js (asynchronous):** One server handling multiple tables by not waiting at each table

We'll learn more about this in Module 2 when we cover asynchronous JavaScript.

See [assets/nodejs-architecture.png](assets/nodejs-architecture.png) for a visual diagram.

---

## Running JavaScript with Node.js

### Checking Node.js Installation

First, verify Node.js is installed:

```bash
node --version
```

You should see something like `v20.10.0` (your version might differ).

If you get an error, you need to install Node.js from [nodejs.org](https://nodejs.org).

### Running JavaScript Files

Create a simple JavaScript file:

**hello.js:**
```javascript
console.log("Hello from Node.js!");
```

Run it:

```bash
node hello.js
```

**Output:**
```
Hello from Node.js!
```

That's it! No compilation, no build step. Just run it.

### The Node REPL

Node.js has a **REPL** (Read-Eval-Print Loop) for testing code interactively:

```bash
node
```

Now you can type JavaScript directly:

```javascript
> 2 + 2
4
> const name = "Alice"
undefined
> console.log("Hello, " + name)
Hello, Alice
undefined
> .exit
```

Type `.exit` or press `Ctrl + D` to quit the REPL.

The REPL is great for testing small snippets of code!

---

## What is npm?

**npm** stands for "Node Package Manager." It's the world's largest software registry with over 1 million packages!

### What are Packages?

A **package** is reusable code someone else wrote. Instead of writing everything from scratch, you can install packages to add functionality.

Examples:
- `express` - Web server framework
- `prisma` - Database toolkit
- `axios` - HTTP client for making requests
- `jest` - Testing framework

Think of packages like libraries in C++, but much easier to install and manage.

### Why Use Packages?

1. **Don't Reinvent the Wheel:** Use tested, proven solutions
2. **Save Time:** Focus on your app's unique features
3. **Learn from Others:** Read how experienced developers solve problems
4. **Community:** Get updates, bug fixes, and improvements

---

## Understanding package.json

Every Node.js project has a **package.json** file. This file describes your project and lists its dependencies.

### Creating package.json

Create a new package.json:

```bash
npm init
```

npm will ask you questions:
- Package name
- Version
- Description
- Entry point (main file)
- Test command
- Git repository
- Keywords
- Author
- License

You can press Enter to accept defaults.

**Quick version (all defaults):**
```bash
npm init -y
```

### Example package.json

```json
{
  "name": "my-first-app",
  "version": "1.0.0",
  "description": "My first Node.js application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"No tests yet\""
  },
  "keywords": ["learning", "nodejs"],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {},
  "devDependencies": {}
}
```

### Key Fields Explained

- **name:** Your project's name (no spaces, lowercase)
- **version:** Current version (format: major.minor.patch)
- **description:** What your project does
- **main:** The entry point file (usually index.js)
- **scripts:** Commands you can run with `npm run`
- **dependencies:** Packages your app needs to run
- **devDependencies:** Packages only needed for development (testing, etc.)

---

## Installing Packages

### Installing a Package

Install a package and add it to dependencies:

```bash
npm install package-name
```

Short version:
```bash
npm i package-name
```

**Example:** Install the `chalk` package (adds color to terminal output):

```bash
npm install chalk
```

This does three things:
1. Downloads the package to `node_modules/` folder
2. Adds it to `package.json` dependencies
3. Updates `package-lock.json` (locks exact versions)

### Installing Dev Dependencies

For packages only needed during development:

```bash
npm install --save-dev package-name
```

Short version:
```bash
npm i -D package-name
```

**Example:** Install jest (testing framework):

```bash
npm install --save-dev jest
```

### Installing All Dependencies

When you clone a project, install all packages listed in package.json:

```bash
npm install
```

This reads package.json and installs everything needed. You'll do this when you clone this curriculum!

---

## Using Packages in Your Code

After installing a package, use it in your code with `require()` (or `import` in modern JavaScript).

**Example using chalk:**

```javascript
// Import the package
const chalk = require('chalk');

// Use it!
console.log(chalk.blue('This text is blue!'));
console.log(chalk.red.bold('This is red and bold!'));
```

The package is just JavaScript code that someone else wrote. You're importing their functions to use in your program.

---

## npm Scripts

The `scripts` section in package.json lets you define custom commands.

**Example package.json:**
```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  }
}
```

Run scripts with:
```bash
npm run start
npm run dev
npm run test
```

**Special scripts** like `start` and `test` can omit `run`:
```bash
npm start
npm test
```

### Why Use Scripts?

- **Consistency:** Everyone runs the same commands
- **Convenience:** Type less (`npm test` vs `./node_modules/.bin/jest`)
- **Documentation:** Scripts show how to use the project

---

## The node_modules Folder

When you install packages, they're downloaded to `node_modules/`. This folder can get **huge** (hundreds of MB).

**Important:**
- **Never commit node_modules to Git!** (It's in .gitignore)
- **Never edit files in node_modules!** (Changes will be lost)
- To share your project, share package.json; others run `npm install`

Think of node_modules as a cache that can be regenerated anytime with `npm install`.

---

## package-lock.json

This file locks the **exact versions** of all packages and their dependencies.

**Why it exists:**
- Ensures everyone has the same versions
- Prevents bugs from version differences
- Makes installs faster (knows exactly what to get)

**Important:**
- **Do commit package-lock.json to Git!**
- Don't edit it manually
- npm updates it automatically

---

## Comparing to C++

If you're used to C++ development:

| C++ | Node.js |
|-----|---------|
| `#include <vector>` | `require('package')` or `import` |
| Makefile | package.json scripts |
| Manual library installation | `npm install package` |
| Library files | node_modules folder |
| .h header files | Type definitions (.d.ts) |

The big difference: npm makes dependencies **much** easier than C++ library management!

---

## Common npm Commands

Here's a quick reference:

```bash
npm init                  # Create package.json
npm init -y               # Create package.json with defaults

npm install               # Install all dependencies
npm install package       # Install a package
npm install -D package    # Install as dev dependency

npm uninstall package     # Remove a package
npm update                # Update packages

npm list                  # Show installed packages
npm outdated              # Show outdated packages

npm run script-name       # Run a script from package.json
npm start                 # Run the start script
npm test                  # Run tests
```

---

## Semantic Versioning

Package versions follow **semantic versioning** (semver):

```
major.minor.patch
  1  .  2  .  3
```

- **Major:** Breaking changes (code might break)
- **Minor:** New features (backward compatible)
- **Patch:** Bug fixes (backward compatible)

**Example:** `1.2.3` → `1.2.4` (safe update) vs `1.2.3` → `2.0.0` (might break things)

**In package.json, you'll see:**
- `"package": "1.2.3"` - Exact version
- `"package": "^1.2.3"` - Compatible versions (1.x.x, but not 2.0.0)
- `"package": "~1.2.3"` - Patch updates only (1.2.x)

The `^` is most common - allows updates that don't break compatibility.

---

## Example: Complete Workflow

Let's put it all together:

```bash
# 1. Create project folder
mkdir my-app
cd my-app

# 2. Create package.json
npm init -y

# 3. Install a package
npm install chalk

# 4. Create your code
touch index.js
```

**index.js:**
```javascript
const chalk = require('chalk');

console.log(chalk.green('Success!'));
console.log(chalk.yellow('Warning!'));
console.log(chalk.red('Error!'));
```

```bash
# 5. Run your code
node index.js
```

You'll see colored output!

---

## Common Mistakes to Avoid

### 1. Committing node_modules

**Problem:** Huge folders in Git, slow clones

**Solution:** Ensure node_modules is in .gitignore

### 2. Not Running npm install

**Problem:** "Cannot find module" errors after cloning

**Solution:** Always run `npm install` after cloning a project

### 3. Forgetting to Install Before Using

**Problem:** `require('package')` fails

**Solution:** Install the package first with `npm install package`

### 4. Editing node_modules

**Problem:** Changes lost when reinstalling

**Solution:** Never edit code in node_modules; create your own files

---

## Checking Your Understanding

Answer these questions:

1. What is Node.js?
2. What is npm?
3. What is package.json?
4. What command installs all dependencies for a project?
5. Should you commit node_modules to Git?
6. What does the `^` symbol mean in version numbers?

**Answers:**
1. Node.js is a JavaScript runtime that lets you run JavaScript outside the browser
2. npm is Node Package Manager - it manages dependencies
3. package.json describes your project and lists dependencies
4. `npm install`
5. No! It should be in .gitignore
6. `^` allows compatible updates (same major version)

---

## Practice Time

Head over to [exercises/03-npm-practice](../exercises/03-npm-practice/README.md) to practice creating package.json and installing packages!

---

## Key Takeaways

- Node.js lets you run JavaScript outside the browser
- npm is the package manager with over 1 million packages
- package.json describes your project and its dependencies
- `npm install` downloads packages to node_modules
- Never commit node_modules to Git
- Use `require()` or `import` to use packages in your code
- npm scripts make running commands easier

---

## Quick Reference

```bash
node filename.js          # Run a JavaScript file
node                      # Start Node REPL

npm init                  # Create package.json
npm install               # Install all dependencies
npm install package       # Install a package
npm uninstall package     # Remove a package
npm run script            # Run a script
npm start                 # Run start script
npm test                  # Run tests
```

See [assets/nodejs-architecture.png](assets/nodejs-architecture.png) for a visual overview.

---

## Additional Resources

- [Node.js Official Docs](https://nodejs.org/docs)
- [npm Documentation](https://docs.npmjs.com/)
- [JavaScript Reference](../../resources/cheatsheets/javascript-reference.md)
- [Common Errors](../../resources/common-errors.md#nodejs-errors)

---

**Next Step:** Complete the exercises and homework!

Now you know Git, the command line, and Node.js - the three foundations of backend development. Time to practice!

---

## Coming Up Next

After completing Module 01, you'll move to **Module 02: JavaScript Fundamentals**, where you'll learn:
- JavaScript syntax and how it differs from C++
- Functions, arrays, and objects
- Asynchronous programming with promises and async/await
- Working with JSON data

Get ready to write lots of JavaScript!
