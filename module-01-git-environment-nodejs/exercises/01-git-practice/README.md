# Exercise 1: Git Practice

**Difficulty:** ⭐ Easy
**Estimated Time:** 30 minutes

## Objective

Practice the basic Git workflow by creating a repository, making commits, and understanding how Git tracks changes.

## Prerequisites

- Git installed on your computer
- Completed Lesson 1: Git Basics
- GitHub account created

## What You'll Practice

- Configuring Git with your name and email
- Initializing a Git repository
- Checking status and viewing changes
- Staging and committing files
- Writing good commit messages

## Instructions

### Part 1: Configure Git

First, make sure Git knows who you are:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Verify your configuration:

```bash
git config --global user.name
git config --global user.email
```

You should see your name and email printed out.

### Part 2: Create a Practice Repository

Let's create a practice repository to experiment with:

```bash
# 1. Create a new folder
mkdir git-practice
cd git-practice

# 2. Initialize Git repository
git init

# 3. Check status
git status
```

You should see:
```
On branch main
No commits yet
nothing to commit
```

### Part 3: Create and Commit Files

Now let's create some files and commit them:

```bash
# 1. Create a file
echo "# My Git Practice" > README.md

# 2. Check status
git status
```

You should see README.md listed as an "untracked file".

```bash
# 3. Stage the file
git add README.md

# 4. Check status again
git status
```

Now README.md should be under "Changes to be committed" in green.

```bash
# 5. Commit with a message
git commit -m "Add README file"

# 6. Check status
git status
```

You should see "nothing to commit, working tree clean".

```bash
# 7. View commit history
git log
```

You'll see your commit with your name, email, date, and message!

### Part 4: Make More Changes

Let's practice making multiple commits:

```bash
# 1. Create another file
echo "console.log('Hello, Git!');" > hello.js

# 2. Check what changed
git status

# 3. Add and commit
git add hello.js
git commit -m "Add hello.js script"

# 4. Modify the README
echo "This is a practice repository for learning Git." >> README.md

# 5. Check what changed
git status
git diff
```

The `git diff` command shows exactly what changed in the file.

```bash
# 6. Commit the change
git add README.md
git commit -m "Update README with description"

# 7. View all commits
git log
```

You should now see three commits!

### Part 5: Practice the File in This Folder

In this folder, you'll find a file called `practice-file.txt`. Let's practice with it:

```bash
# 1. Navigate to this exercise folder
cd path/to/backend-curriculum/module-01-git-environment-nodejs/exercises/01-git-practice

# 2. Open practice-file.txt in your text editor and add your name

# 3. Check what changed
git status
git diff practice-file.txt

# 4. Stage and commit
git add practice-file.txt
git commit -m "Add my name to practice file"

# 5. Make another change - add your favorite programming language

# 6. Check, stage, and commit
git status
git add practice-file.txt
git commit -m "Add favorite programming language"
```

## Expected Outcome

After completing this exercise, you should:

1. Have Git configured with your name and email
2. Understand how `git status` shows the state of your files
3. Be able to stage files with `git add`
4. Be able to commit changes with `git commit -m`
5. Understand that commits create a history you can view with `git log`

## Verification

Check your understanding:

```bash
# This should show your name
git config --global user.name

# This should show several commits
git log

# This should show "nothing to commit"
git status
```

## Learning Goals

This exercise reinforces:

- The Git workflow: modify → add → commit
- How Git tracks changes to files
- The importance of commit messages
- How to check status at any time

## Common Issues

### "fatal: not a git repository"

**Problem:** You're not in a Git repository

**Solution:** Make sure you ran `git init` or navigate to a folder that's already a Git repo

### "nothing added to commit but untracked files present"

**Problem:** You forgot to run `git add`

**Solution:** Stage your files with `git add filename` before committing

### Commit message opened a text editor

**Problem:** You ran `git commit` without `-m "message"`

**Solution:**
- Type your commit message in the editor
- Save and close (in Vim: press `Esc`, type `:wq`, press Enter)
- Next time, use `git commit -m "your message"`

## Bonus Challenges

If you finish early, try these:

1. **Practice with more files:**
   - Create 3 new JavaScript files
   - Commit them all at once with `git add .`

2. **Experiment with git diff:**
   - Make changes to a file
   - Run `git diff` to see changes
   - Try `git diff --staged` after adding files

3. **Explore git log options:**
   - `git log --oneline` (condensed view)
   - `git log --graph` (visual branch graph)
   - `git log --author="Your Name"` (your commits only)

4. **Practice good commit messages:**
   - Create several files and commit with descriptive messages
   - Review your history with `git log`

## Next Steps

Great job! You now understand the basic Git workflow.

Next, you'll learn how to push your commits to GitHub and collaborate with others. But first, complete the other exercises in this module!

---

**Need help?** Review [Lesson 1: Git Basics](../../lessons/01-git-basics.md) or check the [Git Cheat Sheet](../../../resources/cheatsheets/git-cheatsheet.md).
