# Module 01: Git, Environment & Node.js

**Estimated Time:** 1-2 weeks
**Difficulty:** ⭐ Beginner

## Overview

Welcome to your first module! In this module, you'll set up your development environment and learn the foundational tools that every backend developer uses daily. Think of this as setting up your workshop before you start building.

You'll learn how to use Git for version control (tracking changes to your code), navigate the command line like a pro, and understand what Node.js is and why it's perfect for backend development.

## Prerequisites

- Basic programming experience (you know C++)
- A computer with internet access
- Willingness to learn new tools

**No web development experience required!**

## What You'll Learn

By the end of this module, you will:

- Understand what version control is and why it's essential
- Use Git to track changes, commit code, and push to GitHub
- Navigate your computer using the command line/terminal
- Create and manage files and directories from the terminal
- Understand what Node.js is and how it differs from C++
- Install and use npm (Node Package Manager)
- Run JavaScript files with Node.js
- Create a basic `package.json` file

## Module Structure

```
module-01-git-environment-nodejs/
├── README.md (you are here)
├── lessons/
│   ├── 01-git-basics.md
│   ├── 02-command-line.md
│   ├── 03-nodejs-intro.md
│   └── assets/
│       ├── git-workflow.png
│       ├── terminal-commands.png
│       └── nodejs-architecture.png
├── exercises/
│   ├── 01-git-practice/
│   ├── 02-terminal-practice/
│   └── 03-npm-practice/
└── homework/
    ├── README.md
    ├── starter/
    └── tests/
```

## Lessons

### Lesson 1: Git Basics (45 minutes)
**Topics:** Version control, Git commands, GitHub workflow

Learn what Git is, why developers use it, and how to track your code changes. You'll practice the fork/clone/commit/push workflow that you'll use throughout this course.

**Key Concepts:**
- What is version control?
- Repository, commit, push, pull
- Fork vs clone
- Basic Git workflow

### Lesson 2: Command Line Basics (30 minutes)
**Topics:** Terminal navigation, file operations, running commands

Master the command line interface. Coming from C++, you've probably used an IDE for everything. Now you'll learn to navigate your computer and run programs directly from the terminal.

**Key Concepts:**
- What is the terminal/command line?
- Navigation commands (cd, ls, pwd)
- File operations (mkdir, touch, rm)
- Running programs from the terminal

### Lesson 3: Node.js Introduction (45 minutes)
**Topics:** Node.js runtime, npm, JavaScript on the server

Discover what Node.js is and how it lets you run JavaScript outside the browser. You'll learn about npm (the world's largest software registry) and how to manage project dependencies.

**Key Concepts:**
- What is Node.js?
- How Node.js differs from browser JavaScript
- What is npm?
- Understanding package.json
- Installing and using packages

## Exercises

### Exercise 1: Git Practice (⭐ Easy, 30 minutes)
**Objective:** Practice basic Git commands

You'll create a repository, make commits, and push changes to GitHub. This exercise reinforces the Git workflow you'll use every day.

### Exercise 2: Terminal Practice (⭐ Easy, 20 minutes)
**Objective:** Navigate directories and create files using the terminal

Practice moving around your file system and creating directories and files without using your mouse. Build that muscle memory!

### Exercise 3: npm Practice (⭐ Easy, 30 minutes)
**Objective:** Create a package.json and install packages

Learn to initialize a Node.js project and install your first npm package. You'll understand how dependencies work.

## Homework Assignment

**Title:** Environment Setup & First Node.js Script

**Objective:** Set up your complete development environment and create a simple Node.js script that demonstrates you can run JavaScript code.

**What You'll Build:**
- A properly configured development environment
- Your forked copy of this curriculum repository
- A simple Node.js script that runs successfully

**Time Estimate:** 2-3 hours

**Requirements:**
- Fork and clone this repository
- Set up Git with your name and email
- Create a Node.js script that prints output
- Run the automated tests successfully

See [homework/README.md](homework/README.md) for detailed instructions.

## Testing Your Work

Run the tests for this module:

```bash
npm run test:module-01
```

The tests will check:
- Git is properly configured
- Node.js and npm are installed
- Your homework script runs correctly
- Files are in the right places

Don't worry if tests fail at first! The error messages will guide you toward solutions.

## Resources

**Git Resources:**
- [Git Cheat Sheet](../resources/cheatsheets/git-cheatsheet.md)
- [Common Git Errors](../resources/common-errors.md#git-errors)

**Command Line Resources:**
- [Terminal Cheat Sheet](../resources/cheatsheets/terminal-cheatsheet.md)

**Node.js Resources:**
- [JavaScript Reference](../resources/cheatsheets/javascript-reference.md)
- [Helpful External Links](../resources/helpful-links.md)

**Glossary:**
- [Technical Terms](../resources/glossary.md)

## Teacher Notes

### Pacing Suggestions
- **Week 1:** Complete all three lessons and exercises
- **Week 2:** Complete homework assignment
- Allow flexibility - some students may finish in one week, others may need two

### Common Challenges
1. **Git confusion:** Students often mix up commit/push. Emphasize that commit is local, push is remote.
2. **Terminal fear:** Students may be intimidated by the command line. Reassure them it's just another way to interact with their computer.
3. **Path issues:** Students on Windows may struggle with path differences. Provide platform-specific guidance.
4. **npm install errors:** Network issues or permissions can cause npm failures. Have troubleshooting steps ready.

### Assessment Criteria
Students are ready to move to Module 2 when they can:
- Explain what Git does in their own words
- Successfully fork, clone, commit, and push changes
- Navigate their file system using the terminal
- Run a Node.js script from the command line
- Install an npm package
- Pass all Module 01 tests

### When to Move On
Don't rush! These foundational tools are used in every single module. Students should be comfortable with:
- The fork/clone/commit/push workflow
- Basic terminal navigation
- Running Node.js scripts

If students are struggling, spend extra time on exercises before moving to homework.

## What's Next?

Once you've completed this module and passed all tests, you're ready for [Module 02: JavaScript Fundamentals](../module-02-javascript-fundamentals/README.md).

In Module 2, you'll learn JavaScript syntax, work with functions and arrays, and understand asynchronous programming - all essential for backend development!

---

**Need Help?**
- Review the lesson materials
- Check the [Common Errors Guide](../resources/common-errors.md)
- Attend office hours
- Ask questions in class

Remember: Everyone starts as a beginner. Making mistakes is part of learning!
