# Exercise 2: Terminal Practice

**Difficulty:** ⭐ Easy
**Estimated Time:** 20 minutes

## Objective

Build confidence using the command line by navigating directories, creating files and folders, and managing your file system without a GUI.

## Prerequisites

- Completed Lesson 2: Command Line Basics
- Terminal/command prompt open

## What You'll Practice

- Navigating directories with `cd`
- Listing files with `ls`
- Creating folders with `mkdir`
- Creating files with `touch`
- Checking your location with `pwd`
- Moving and copying files

## Instructions

### Part 1: Navigation Basics

Let's start by exploring your file system:

```bash
# 1. Where are you right now?
pwd

# 2. What files are here?
ls

# 3. Show more details
ls -l

# 4. Show hidden files too
ls -a
```

**Checkpoint:** You should see a list of files and folders.

### Part 2: Create a Practice Directory Structure

Now let's create a project structure:

```bash
# 1. Navigate to a good location (like Desktop or a projects folder)
cd ~/Desktop
# or
cd ~/projects

# 2. Create a main project folder
mkdir terminal-practice

# 3. Navigate into it
cd terminal-practice

# 4. Verify you're in the right place
pwd
```

You should see a path ending with `terminal-practice`.

### Part 3: Build a Project Structure

Create a realistic project structure:

```bash
# 1. Create multiple folders at once
mkdir src tests docs

# 2. List them
ls

# 3. Create nested folders
mkdir -p src/utils src/models src/controllers

# 4. See the structure
ls src
```

### Part 4: Create Files

Now let's add some files:

```bash
# 1. Create a README in the main folder
touch README.md

# 2. Create multiple files at once
touch src/index.js src/app.js

# 3. Create files in nested folders
touch src/utils/helpers.js src/models/user.js src/controllers/userController.js

# 4. Create test files
touch tests/app.test.js tests/user.test.js

# 5. List everything
ls
ls src
ls src/utils
ls tests
```

### Part 5: Navigate Around

Practice moving between directories:

```bash
# 1. Go into src folder
cd src

# 2. Where are you?
pwd

# 3. What's here?
ls

# 4. Go into utils
cd utils

# 5. Go back up one level
cd ..

# 6. Go back to project root
cd ..

# 7. Verify you're at the root
pwd
```

### Part 6: View File Contents

Let's add some content and view it:

```bash
# 1. Add content to README
echo "# Terminal Practice Project" > README.md

# 2. View the file
cat README.md

# 3. Add more content (append)
echo "This project helps me practice terminal commands." >> README.md

# 4. View it again
cat README.md
```

### Part 7: Copy and Move Files

Practice file management:

```bash
# 1. Copy a file
cp README.md docs/README.md

# 2. Verify the copy
ls docs

# 3. Create a new file for moving
echo "console.log('config');" > config.js

# 4. Move it into src
mv config.js src/

# 5. Verify it moved
ls
ls src
```

### Part 8: Clean Up (Optional)

If you want to remove the practice folder:

```bash
# 1. Go back up to parent directory
cd ..

# 2. Remove the entire practice folder
rm -r terminal-practice
```

**Warning:** `rm -r` permanently deletes everything! Make sure you're removing the right folder.

## Challenges

Complete these challenges to test your skills:

### Challenge 1: Create a Nested Structure

Create this exact structure using only terminal commands:

```
my-app/
├── public/
│   ├── index.html
│   └── styles.css
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   └── Footer.js
│   └── App.js
└── package.json
```

**Solution approach:**
```bash
mkdir my-app
cd my-app
mkdir public src src/components
touch public/index.html public/styles.css
touch src/App.js src/components/Header.js src/components/Footer.js
touch package.json
```

### Challenge 2: Navigation Speed Run

Starting from your home directory, use the fewest commands possible to:

1. Create a folder called `speed-test` in your Documents
2. Navigate into it
3. Create 3 folders: `one`, `two`, `three`
4. Create a file called `test.txt` in each folder
5. Navigate back to your home directory

**Time yourself!** Try to do it in under 30 seconds.

### Challenge 3: Find Your Way

Practice using `cd` with different paths:

```bash
# 1. Go to your home directory
cd ~

# 2. Go to root directory
cd /

# 3. List what's there
ls

# 4. Go back home
cd ~

# 5. Go to Desktop (if you have one)
cd Desktop

# 6. Go up one level
cd ..

# 7. Go to Documents
cd Documents
```

## Expected Outcome

After this exercise, you should be able to:

- Navigate anywhere on your computer using `cd`
- Create folders with `mkdir`
- Create files with `touch`
- List directory contents with `ls`
- Always know where you are with `pwd`
- Copy and move files with `cp` and `mv`

## Verification Checklist

Test yourself:

- [ ] Can you navigate to your Desktop from anywhere?
- [ ] Can you create a folder and immediately navigate into it?
- [ ] Can you create multiple nested folders in one command?
- [ ] Can you list files including hidden files?
- [ ] Can you copy a file to a different directory?
- [ ] Can you move a file to a different directory?

## Learning Goals

This exercise reinforces:

- Terminal navigation without a GUI
- Creating and organizing project structures
- File management commands
- Building muscle memory for common commands

## Tips & Tricks

### Speed Tips

1. **Tab Completion:** Press Tab to auto-complete file/folder names
2. **Up Arrow:** Reuse previous commands
3. **Clear Screen:** Type `clear` to clean up your terminal
4. **Home Shortcut:** `cd ~` always takes you home

### Efficiency Tips

1. Create multiple folders: `mkdir folder1 folder2 folder3`
2. Create nested paths: `mkdir -p path/to/deep/folder`
3. Chain commands: `mkdir myapp && cd myapp`
4. Go to previous directory: `cd -`

## Common Issues

### "No such file or directory"

**Problem:** Typo in folder name or wrong directory

**Solution:** Use `ls` to see what's actually there, use Tab completion

### Permission Denied

**Problem:** Trying to create files in a protected directory

**Solution:** Navigate to a directory you own (like Documents or Desktop)

### Lost?

**Problem:** Don't know where you are

**Solution:** Use `pwd` to see your location, `cd ~` to go home

## Bonus Challenges

1. **Create a complex structure:** Build a realistic Node.js project structure with 10+ folders and files

2. **Navigation quiz:** Have a friend name a folder, see how fast you can navigate to it

3. **Cleanup practice:** Create a test folder with lots of files, then practice removing specific files

4. **Create a cheat sheet:** Make a text file with your most-used commands

## Next Steps

Excellent work! You're now comfortable with the terminal.

The command line might feel slow now, but with practice, you'll find it faster than clicking around!

Continue to [Exercise 3: npm Practice](../03-npm-practice/README.md) to learn about Node.js package management.

---

**Need help?** Review [Lesson 2: Command Line Basics](../../lessons/02-command-line.md) or check the [Terminal Cheat Sheet](../../../resources/cheatsheets/terminal-cheatsheet.md).
