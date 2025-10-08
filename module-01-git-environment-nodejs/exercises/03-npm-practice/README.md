# Exercise 3: npm Practice

**Difficulty:** ⭐ Easy
**Estimated Time:** 30 minutes

## Objective

Learn to create Node.js projects, manage dependencies with npm, and understand how package.json works.

## Prerequisites

- Node.js and npm installed
- Completed Lesson 3: Node.js Introduction
- Terminal open

## What You'll Practice

- Creating package.json files
- Installing npm packages
- Understanding dependencies vs devDependencies
- Using npm scripts
- Reading package.json

## Instructions

### Part 1: Verify Installation

First, make sure Node.js and npm are installed:

```bash
node --version
npm --version
```

You should see version numbers like `v20.10.0` and `10.2.0`.

If you get errors, install Node.js from [nodejs.org](https://nodejs.org).

### Part 2: Create Your First Project

Let's create a project from scratch:

```bash
# 1. Create and navigate to project folder
mkdir my-first-npm-project
cd my-first-npm-project

# 2. Create package.json interactively
npm init
```

npm will ask you questions. For practice, answer them:

- **package name:** (press Enter for default, or type `my-first-npm-project`)
- **version:** (press Enter for `1.0.0`)
- **description:** Type something like `My first Node.js project`
- **entry point:** (press Enter for `index.js`)
- **test command:** (press Enter for now)
- **git repository:** (press Enter for now)
- **keywords:** (press Enter)
- **author:** Type your name
- **license:** (press Enter for `ISC`)

Type `yes` to confirm.

```bash
# 3. View the created file
cat package.json
```

You should see your project metadata in JSON format!

### Part 3: Quick package.json Creation

Let's create another project faster:

```bash
# 1. Go back up and create a new folder
cd ..
mkdir quick-project
cd quick-project

# 2. Create package.json with all defaults
npm init -y

# 3. View the file
cat package.json
```

Much faster! The `-y` flag accepts all defaults.

### Part 4: Install Your First Package

Let's install `chalk`, a package that adds color to terminal output:

```bash
# 1. Install chalk
npm install chalk

# 2. Check package.json
cat package.json
```

Notice that `chalk` now appears in the `dependencies` section!

```bash
# 3. Check what was created
ls
```

You should see:
- `package.json` (updated with chalk)
- `package-lock.json` (locks exact versions)
- `node_modules/` (folder containing chalk and its dependencies)

```bash
# 4. See how many packages were installed
ls node_modules
```

You'll see `chalk` and possibly other packages it depends on!

### Part 5: Use the Package

Let's use chalk in a JavaScript file:

```bash
# 1. Create a JavaScript file
touch app.js
```

Open `app.js` in your text editor and add:

```javascript
const chalk = require('chalk');

console.log(chalk.blue('Hello in blue!'));
console.log(chalk.red('Hello in red!'));
console.log(chalk.green.bold('Hello in bold green!'));
console.log(chalk.yellow.underline('Hello underlined in yellow!'));
```

```bash
# 2. Run the file
node app.js
```

You should see colorful text output!

### Part 6: Install Dev Dependencies

Some packages are only needed during development (like testing tools). Let's install one:

```bash
# 1. Install nodemon as a dev dependency
npm install --save-dev nodemon

# 2. Check package.json
cat package.json
```

Notice `nodemon` is in `devDependencies`, not `dependencies`.

**Why the difference?**
- `dependencies`: Needed to run the app (like chalk)
- `devDependencies`: Only needed for development (like testing tools)

### Part 7: Create npm Scripts

Let's add custom commands to package.json. Open it in your editor and modify the `scripts` section:

```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \"No tests yet\" && exit 0"
  }
}
```

Now you can run:

```bash
# Run the start script
npm start

# Run the dev script (nodemon watches for changes)
npm run dev
```

Press `Ctrl + C` to stop nodemon.

### Part 8: Uninstall a Package

Let's practice removing a package:

```bash
# 1. Uninstall chalk
npm uninstall chalk

# 2. Check package.json
cat package.json
```

Notice `chalk` is gone from dependencies.

```bash
# 3. Reinstall it
npm install chalk
```

### Part 9: Explore the Provided package.json

In this exercise folder, you'll find a pre-made `package.json`. Let's explore it:

```bash
# 1. Navigate to this exercise folder
cd path/to/backend-curriculum/module-01-git-environment-nodejs/exercises/03-npm-practice

# 2. View the package.json
cat package.json

# 3. Install all dependencies listed
npm install

# 4. View what was installed
ls node_modules
```

## Practice Package.json

The package.json in this folder demonstrates a complete configuration. Take a look at it and understand each section:

```json
{
  "name": "npm-practice",
  "version": "1.0.0",
  "description": "Practice project for learning npm",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Running tests...\" && node test.js"
  },
  "keywords": ["learning", "npm", "nodejs"],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "chalk": "^4.1.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

## Challenges

### Challenge 1: Create a Project from Scratch

Create a new project with these requirements:

1. Name it `color-logger`
2. Install `chalk` as a dependency
3. Create `index.js` that logs 5 different colored messages
4. Add a start script to run it
5. Run it with `npm start`

### Challenge 2: Explore npm Packages

Visit [npmjs.com](https://www.npmjs.com) and explore:

1. Search for "chalk" and read its documentation
2. Look at how many downloads it has per week
3. Check its GitHub repository link
4. Find another package that looks interesting

### Challenge 3: Create a Useful Script

Add these scripts to a package.json:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "clean": "rm -rf node_modules",
    "reinstall": "npm run clean && npm install"
  }
}
```

Test each script to see what it does!

### Challenge 4: Understand Semantic Versioning

Look at version numbers in your package.json:

- `"chalk": "^4.1.2"` - What does the `^` mean?
- What's the difference between `^4.1.2` and `~4.1.2`?
- What about `4.1.2` with no symbol?

## Expected Outcome

After this exercise, you should be able to:

- Create a package.json file
- Install packages with npm
- Understand the difference between dependencies and devDependencies
- Use installed packages in your code with `require()`
- Create and run npm scripts
- Navigate the npm ecosystem

## Verification Checklist

Test yourself:

- [ ] Can you create a package.json with `npm init -y`?
- [ ] Can you install a package?
- [ ] Can you view installed packages in node_modules?
- [ ] Can you use an installed package in JavaScript code?
- [ ] Can you create and run an npm script?
- [ ] Can you explain what package-lock.json does?

## Learning Goals

This exercise reinforces:

- npm is the package manager for Node.js
- package.json describes your project
- Dependencies are managed automatically
- npm scripts make running commands easier
- The npm ecosystem is huge and powerful

## Common Issues

### "npm command not found"

**Problem:** npm isn't installed or not in PATH

**Solution:** Install Node.js from nodejs.org (includes npm)

### "Cannot find module 'chalk'"

**Problem:** Package isn't installed

**Solution:** Run `npm install` to install all dependencies

### package.json errors

**Problem:** Invalid JSON syntax

**Solution:** Ensure proper commas, quotes, and brackets

### Permission errors on macOS/Linux

**Problem:** npm trying to write to protected folders

**Solution:** Don't use `sudo`! Set up npm properly or use a version manager like nvm

## Understanding node_modules

Open the `node_modules` folder and look around:

```bash
ls node_modules
```

You'll see `chalk` and possibly other folders. These are packages that chalk depends on.

**Important facts:**
- node_modules can get very large (100s of MB)
- Never edit files in node_modules
- Never commit node_modules to Git
- Always regenerate with `npm install`

## Understanding package-lock.json

```bash
cat package-lock.json
```

This file:
- Locks exact versions of all packages
- Ensures everyone gets the same versions
- Makes installs faster
- Should be committed to Git

## Quick Reference

```bash
npm init                     # Create package.json interactively
npm init -y                  # Create package.json with defaults

npm install                  # Install all dependencies
npm install package          # Install a package
npm install -D package       # Install as dev dependency
npm install package@1.2.3    # Install specific version

npm uninstall package        # Remove a package
npm update                   # Update packages

npm run script-name          # Run a script
npm start                    # Run start script
npm test                     # Run test script

npm list                     # Show installed packages
npm outdated                 # Show outdated packages
```

## Bonus Challenges

1. **Explore popular packages:** Install and try:
   - `axios` (HTTP client)
   - `dotenv` (environment variables)
   - `uuid` (generate unique IDs)

2. **Create multiple projects:** Practice creating 3-5 small projects with different packages

3. **Read documentation:** Pick a package on npmjs.com and read its full documentation

4. **Version experiments:** Install different versions of a package:
   ```bash
   npm install chalk@4.0.0
   npm install chalk@latest
   ```

## Next Steps

Excellent! You now understand Node.js and npm - fundamental tools for backend development.

Now it's time to put everything together in the [Module 01 Homework](../../homework/README.md)!

---

**Need help?** Review [Lesson 3: Node.js Introduction](../../lessons/03-nodejs-intro.md) or check the [JavaScript Reference](../../../resources/cheatsheets/javascript-reference.md).
