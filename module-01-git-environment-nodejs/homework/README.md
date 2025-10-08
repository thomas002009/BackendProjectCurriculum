# Module 01 Homework: Environment Setup & First Node.js Script

**Difficulty:** ⭐ Beginner
**Estimated Time:** 2-3 hours
**Points:** 100

## Overview

In this homework assignment, you'll set up your complete development environment and create your first Node.js script. This assignment verifies that you have all the tools installed correctly and that you understand the basic Git and Node.js workflows.

Think of this as preparing your workshop before you start building. Every project you work on will start with these same steps!

## Learning Objectives

By completing this homework, you will:

- Set up a professional development environment
- Configure Git with your identity
- Create a functional Node.js project
- Write JavaScript that runs on Node.js
- Use npm to manage dependencies
- Run automated tests
- Practice the Git commit workflow

## Prerequisites

Before starting, make sure you've:

- [ ] Completed all Module 01 lessons
- [ ] Completed all Module 01 exercises
- [ ] Installed Node.js and npm
- [ ] Installed Git
- [ ] Created a GitHub account
- [ ] Forked this repository to your GitHub account
- [ ] Cloned your fork to your computer

## Assignment Requirements

### Part 1: Environment Setup (30 points)

**Configure Git:**

1. Set your Git username
2. Set your Git email
3. Verify your configuration

**Verify Installation:**

4. Confirm Node.js is installed (v18 or higher)
5. Confirm npm is installed (v9 or higher)

### Part 2: Complete the Node.js Script (40 points)

In the `starter/` folder, you'll find `hello.js` with TODO comments. Your task:

1. Complete the script so it:
   - Prints "Hello, Backend Development!"
   - Prints your name
   - Prints the current date
   - Performs a simple calculation and prints the result

2. Requirements:
   - Use `console.log()` for output
   - Use variables to store values
   - Use string interpolation (template literals)
   - Include at least one mathematical operation

### Part 3: Create package.json (15 points)

1. Navigate to the `starter/` folder
2. Create a `package.json` file with:
   - Your project name
   - Your name as the author
   - A start script that runs `hello.js`
3. Test your script with `npm start`

### Part 4: Git Workflow (15 points)

1. Stage your changes
2. Commit with a descriptive message
3. Push to your GitHub fork
4. Verify your changes appear on GitHub

## Detailed Instructions

### Step 1: Configure Git

Open your terminal and run:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"
```

Verify:

```bash
git config --global user.name
git config --global user.email
```

### Step 2: Verify Node.js Installation

Check your versions:

```bash
node --version
npm --version
```

If you see version numbers, you're good! If not, install Node.js from [nodejs.org](https://nodejs.org).

### Step 3: Navigate to Homework Folder

```bash
cd path/to/backend-curriculum/module-01-git-environment-nodejs/homework/starter
```

### Step 4: Complete hello.js

Open `hello.js` in your text editor. You'll see TODO comments like this:

```javascript
// TODO: Print "Hello, Backend Development!"

// TODO: Create a variable with your name and print it

// TODO: Print the current date

// TODO: Perform a calculation and print the result
```

Complete each TODO. Here's a hint for the first one:

```javascript
// TODO: Print "Hello, Backend Development!"
console.log("Hello, Backend Development!");
```

**Requirements:**
- Replace all TODO comments with working code
- Use `const` or `let` for variables (not `var`)
- Use template literals for string interpolation: `` `Hello, ${name}` ``
- For the date, use: `new Date()`
- For the calculation, do something like: `5 + 3 * 2`

### Step 5: Test Your Script

Run your script:

```bash
node hello.js
```

You should see output with no errors!

### Step 6: Create package.json

While still in the `starter/` folder:

```bash
npm init -y
```

This creates a basic `package.json`. Open it and modify:

```json
{
  "name": "module-01-homework",
  "version": "1.0.0",
  "description": "Module 01 homework assignment",
  "main": "hello.js",
  "scripts": {
    "start": "node hello.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Your Name Here",
  "license": "ISC"
}
```

Test the start script:

```bash
npm start
```

Your script should run!

### Step 7: Run the Automated Tests

Navigate back to the homework folder:

```bash
cd ..
```

Run the tests:

```bash
npm run test:module-01
```

The tests will check:
- Git is configured correctly
- Node.js and npm are installed
- Your `hello.js` script exists and runs
- Your `package.json` exists and has required fields
- Your script produces the expected output

Don't worry if tests fail at first! Read the error messages - they'll guide you to what needs fixing.

### Step 8: Commit Your Work

Once all tests pass:

```bash
# 1. Check what changed
git status

# 2. Stage your changes
git add module-01-git-environment-nodejs/homework/starter/

# 3. Commit with a descriptive message
git commit -m "Complete Module 01 homework: environment setup and first Node.js script"

# 4. Push to GitHub
git push

# 5. Verify it's on GitHub
# Visit your GitHub fork in a browser and check that your changes are there
```

## Testing Your Work

### Running Tests

From the project root:

```bash
npm run test:module-01
```

### What the Tests Check

The automated tests verify:

1. **Git Configuration:**
   - Git username is set
   - Git email is set

2. **Node.js Installation:**
   - Node.js is installed (v18+)
   - npm is installed (v9+)

3. **File Structure:**
   - `hello.js` exists
   - `package.json` exists

4. **Script Functionality:**
   - Script runs without errors
   - Script produces output
   - Script includes your name
   - Script includes a calculation

5. **Package.json:**
   - Has a name field
   - Has an author field
   - Has a start script

### Understanding Test Output

**All tests passing:**
```
PASS  module-01-git-environment-nodejs/homework/tests/homework.test.js
  Module 01 Homework Tests
    ✓ Git username is configured
    ✓ Git email is configured
    ✓ Node.js is installed
    ✓ hello.js exists
    ✓ hello.js runs successfully
    ✓ package.json exists and is valid
```

**Tests failing:**
```
FAIL  module-01-git-environment-nodejs/homework/tests/homework.test.js
  Module 01 Homework Tests
    ✓ Git username is configured
    ✗ hello.js exists
      Expected file to exist at: .../hello.js
```

Read the error message! It tells you exactly what's wrong.

## Submission Checklist

Before submitting, verify:

- [ ] Git username and email are configured
- [ ] `hello.js` is complete with no TODO comments remaining
- [ ] `hello.js` runs without errors
- [ ] Output includes "Hello, Backend Development!"
- [ ] Output includes your name
- [ ] Output includes a date
- [ ] Output includes a calculation result
- [ ] `package.json` exists with your name as author
- [ ] `npm start` runs your script successfully
- [ ] All automated tests pass
- [ ] Changes are committed to Git
- [ ] Changes are pushed to your GitHub fork

## Example Output

When you run `node hello.js`, your output should look something like this:

```
Hello, Backend Development!
My name is Alex Johnson
Today's date is: Mon Jan 15 2024
5 + 3 * 2 = 11
```

(Your exact output will differ based on your name and the date!)

## Grading Rubric

| Requirement | Points |
|------------|--------|
| Git configured correctly | 15 |
| Node.js and npm installed | 15 |
| hello.js exists and runs | 20 |
| Script output is correct | 20 |
| package.json is properly formatted | 15 |
| All tests pass | 10 |
| Code is committed and pushed | 5 |
| **Total** | **100** |

## Common Issues & Solutions

### Issue: "command not found: node"

**Problem:** Node.js isn't installed or not in your PATH

**Solution:** Download and install from [nodejs.org](https://nodejs.org). Choose the LTS version.

### Issue: "command not found: git"

**Problem:** Git isn't installed

**Solution:**
- **macOS:** Install Xcode Command Line Tools: `xcode-select --install`
- **Windows:** Download from [git-scm.com](https://git-scm.com)
- **Linux:** `sudo apt-get install git` (Ubuntu/Debian) or `sudo yum install git` (Fedora)

### Issue: Tests fail with "Git username not configured"

**Problem:** Git config not set

**Solution:** Run the git config commands from Step 1

### Issue: "Cannot find module"

**Problem:** Usually means a typo in a require statement

**Solution:** Check your spelling, make sure you're using the right quotes

### Issue: SyntaxError in JavaScript

**Problem:** Syntax mistake in your code

**Solution:** Read the error message carefully. It tells you the line number. Common mistakes:
- Missing closing quote, bracket, or parenthesis
- Using `=` instead of `==` or `===`
- Forgetting semicolons (though they're often optional)

### Issue: Tests pass locally but fail on push

**Problem:** You might have uncommitted changes or wrong files committed

**Solution:** Make sure you committed all changes and pushed them

## Tips for Success

1. **Read error messages carefully:** They usually tell you exactly what's wrong

2. **Test frequently:** Run your script after each change to catch errors early

3. **Use console.log for debugging:** If something's not working, add `console.log()` statements to see what's happening

4. **Check your path:** Make sure you're in the right directory (use `pwd`)

5. **Ask for help:** If you're stuck for more than 30 minutes, reach out during office hours

6. **Compare with examples:** Look back at the lessons and exercises for examples

## Bonus Challenges

If you finish early and want extra practice:

### Bonus 1: Add More Features

Extend your `hello.js` script to also:
- Calculate and print your age (if you know your birth year)
- Print the day of the week
- Include an emoji in your output
- Use multiple variables and combine them in interesting ways

### Bonus 2: Explore Node.js Built-ins

Try using Node.js built-in modules:

```javascript
// Try these in your script!
const os = require('os');
console.log('Operating System:', os.platform());
console.log('CPU Architecture:', os.arch());
```

### Bonus 3: Install a Package

Try installing and using the `chalk` package to add colors:

```bash
npm install chalk
```

Then in your script:

```javascript
const chalk = require('chalk');
console.log(chalk.blue('This is blue!'));
```

### Bonus 4: Create More Scripts

Add additional scripts to your project:
- `goodbye.js` - Prints a goodbye message
- `calculator.js` - Performs multiple calculations
- `info.js` - Prints system information

Update your `package.json` scripts to run them!

## What You've Learned

By completing this homework, you've:

- Set up a professional development environment
- Learned the Git configuration process
- Written and executed JavaScript with Node.js
- Created a Node.js project with package.json
- Used npm scripts to run your code
- Run automated tests
- Practiced the Git commit and push workflow

These are foundational skills you'll use in every single module!

## Next Steps

Once you've completed this homework and all tests pass:

1. Make sure everything is committed and pushed to GitHub
2. Celebrate! You've completed Module 01!
3. Review the Module 01 README for a summary of what you learned
4. When you're ready, move on to [Module 02: JavaScript Fundamentals](../../module-02-javascript-fundamentals/README.md)

In Module 02, you'll dive deep into JavaScript - learning functions, arrays, objects, and asynchronous programming!

---

**Need Help?**

- Review the [Module 01 lessons](../lessons/)
- Check the [Common Errors Guide](../../../resources/common-errors.md)
- Review the [Git Cheat Sheet](../../../resources/cheatsheets/git-cheatsheet.md)
- Attend office hours
- Ask questions in class

**Remember:** Everyone was a beginner once. It's okay to struggle - that's how you learn!

---

**Instructor Notes:** This homework should take 2-3 hours for a student working at a steady pace. The automated tests provide immediate feedback. Common sticking points are Git configuration and understanding where to run commands. Ensure students understand the difference between the project root and the homework/starter directory.
