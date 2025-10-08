# Lesson 1: Git Basics

**Duration:** 45 minutes
**Objective:** Understand version control and learn essential Git commands

## What You'll Learn Today

- What version control is and why developers use it
- Key Git concepts: repository, commit, push, pull
- The fork/clone/commit/push workflow
- Basic Git commands you'll use every day

---

## What is Version Control?

Imagine you're writing an essay. You save it as `essay.doc`. Then you make changes and save it as `essay_v2.doc`. Then `essay_final.doc`. Then `essay_final_ACTUAL.doc`. Sound familiar?

**Version control** is a better way to track changes to files over time. Instead of creating multiple copies, version control systems track every change you make, who made it, and when. You can always go back to any previous version.

Think of it like a save point in a video game - you can always reload from a previous save if something goes wrong!

### Why Do Developers Use Version Control?

1. **Track Changes:** See exactly what changed, when, and why
2. **Collaborate:** Multiple people can work on the same code without conflicts
3. **Backup:** Your code is safely stored in the cloud
4. **Experimentation:** Try new things without fear of breaking working code
5. **History:** Understand how and why code evolved over time

---

## What is Git?

**Git** is the most popular version control system in the world. Almost every software company uses it. Git was created by Linus Torvalds (the same person who created Linux!) in 2005.

### Git vs GitHub

Many people confuse these two:

- **Git:** The version control software that runs on your computer
- **GitHub:** A website that hosts Git repositories online (like Google Drive for code)

Think of it this way:
- Git is like Microsoft Word (the software)
- GitHub is like Google Docs (the online platform)

Other platforms like GitLab and Bitbucket also host Git repositories, but GitHub is the most popular.

---

## Key Git Concepts

### Repository (Repo)

A **repository** is a folder that Git tracks. It contains all your code and the complete history of changes.

Think of a repository as a project folder with superpowers - it remembers every change ever made.

### Commit

A **commit** is a snapshot of your code at a specific point in time. Each commit has:
- A unique ID (called a hash)
- A message describing what changed
- The author's name and timestamp
- The actual changes made to files

**Example commit message:** "Add user login feature"

Commits are like save points. You decide when to create them.

### Branch

A **branch** is a parallel version of your code. You can work on a new feature in a branch without affecting the main code.

For this course, you'll mostly work on the `main` branch (the primary branch).

### Push and Pull

- **Push:** Upload your commits from your computer to GitHub
- **Pull:** Download commits from GitHub to your computer

Think of push/pull like uploading/downloading files, but for code changes.

### Fork and Clone

- **Fork:** Create your own copy of someone else's repository on GitHub
- **Clone:** Download a repository from GitHub to your computer

You'll fork this curriculum repository to create your own copy, then clone it to work on it locally.

---

## The Basic Git Workflow

Here's the workflow you'll use throughout this course:

```
1. Fork repository on GitHub (one time)
2. Clone repository to your computer (one time)
3. Make changes to code
4. Stage changes (tell Git which files to include)
5. Commit changes (create a snapshot with a message)
6. Push changes (upload to GitHub)
7. Repeat steps 3-6
```

### Visual Workflow

```
Your Computer                GitHub
    |                           |
    |  1. Fork (on GitHub) ---> |
    |  2. Clone <-------------- |
    |                           |
    |  3. Edit files            |
    |  4. git add               |
    |  5. git commit            |
    |  6. git push -----------> |
    |                           |
```

See [assets/git-workflow.png](assets/git-workflow.png) for a visual diagram.

---

## Essential Git Commands

Let's learn the commands you'll use most often.

### Configuring Git (First Time Setup)

Before using Git, tell it who you are:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

You only need to do this once on your computer.

### Cloning a Repository

Download a repository from GitHub:

```bash
git clone https://github.com/username/repository-name.git
```

This creates a folder with the repository name and downloads all the code.

### Checking Status

See what files have changed:

```bash
git status
```

This is like asking Git "What's different since my last commit?" Use this command often!

**Example output:**
```
On branch main
Changes not staged for commit:
  modified:   hello.js
```

### Staging Changes

Tell Git which files to include in your next commit:

```bash
git add filename.js          # Add a specific file
git add .                    # Add all changed files
```

Think of this as putting items in a shopping cart before checkout. You're preparing files for the commit.

### Committing Changes

Create a snapshot with a message:

```bash
git commit -m "Add user login feature"
```

The message should describe **what** you changed. Keep it short but descriptive.

**Good commit messages:**
- "Fix bug in user registration"
- "Add error handling to API endpoint"
- "Update documentation for setup"

**Bad commit messages:**
- "fixed stuff"
- "changes"
- "asdf"

### Pushing Changes

Upload your commits to GitHub:

```bash
git push
```

This sends all your commits since the last push to GitHub. Now others can see your changes!

### Pulling Changes

Download changes from GitHub:

```bash
git pull
```

Use this when the GitHub repository has new commits you don't have locally.

---

## Putting It All Together: Example Workflow

Let's walk through a complete example:

```bash
# 1. Clone the repository (first time only)
git clone https://github.com/yourname/backend-curriculum.git

# 2. Navigate into the folder
cd backend-curriculum

# 3. Make changes to files (edit hello.js in your editor)

# 4. Check what changed
git status
# Output: modified: hello.js

# 5. Stage the changes
git add hello.js

# 6. Commit with a message
git commit -m "Update hello.js to print my name"

# 7. Push to GitHub
git push

# Done! Your changes are now on GitHub
```

---

## Common Scenarios

### Scenario 1: You Changed Multiple Files

```bash
git add .                           # Stage all changes
git commit -m "Update user module"  # Commit everything
git push                            # Push to GitHub
```

### Scenario 2: You Want to See What Changed

```bash
git status                          # See which files changed
git diff                            # See the actual changes (line by line)
```

### Scenario 3: You Made a Mistake in Your Commit Message

If you haven't pushed yet:

```bash
git commit --amend -m "Corrected commit message"
```

---

## Git vs C++ Development

Since you know C++, here's how Git differs from what you might be used to:

| C++ Development | Git Development |
|----------------|----------------|
| Save file in IDE | Commit changes with message |
| Multiple file versions | One file, tracked history |
| Manual backups | Automatic history tracking |
| Share via email/USB | Share via push/pull |
| Solo work | Easy collaboration |

---

## Common Mistakes to Avoid

### 1. Forgetting to Commit

**Problem:** You make changes but forget to commit
**Solution:** Commit often! Small, frequent commits are better than large, rare ones

### 2. Bad Commit Messages

**Problem:** Messages like "fixed stuff" don't help you later
**Solution:** Describe what and why: "Fix validation error in user registration"

### 3. Committing Without Testing

**Problem:** You push broken code
**Solution:** Always test your code before committing

### 4. Not Pulling Before Pushing

**Problem:** GitHub has changes you don't have locally
**Solution:** Run `git pull` before `git push` when working with others

---

## Checking Your Understanding

Answer these questions to verify you understand the concepts:

1. What is the difference between Git and GitHub?
2. What is a commit?
3. What's the difference between `git add` and `git commit`?
4. Why do we write commit messages?
5. What does `git push` do?

**Answers:**
1. Git is the version control software; GitHub is a website that hosts Git repositories
2. A commit is a snapshot of your code at a specific point in time
3. `git add` stages files (prepares them); `git commit` saves the snapshot with a message
4. Commit messages describe what changed and why, helping you and others understand the history
5. `git push` uploads your local commits to GitHub

---

## Practice Time

Head over to [exercises/01-git-practice](../exercises/01-git-practice/README.md) to practice these commands!

---

## Key Takeaways

- Git tracks changes to your code over time
- Commits are snapshots with messages describing changes
- The basic workflow is: edit → add → commit → push
- Use descriptive commit messages
- `git status` is your friend - use it often!

---

## Additional Resources

- [Git Cheat Sheet](../../resources/cheatsheets/git-cheatsheet.md)
- [Pro Git Book](https://git-scm.com/book/en/v2) (free online book)
- [GitHub's Git Handbook](https://guides.github.com/introduction/git-handbook/)

---

**Next Lesson:** [Lesson 2: Command Line Basics](02-command-line.md)

Learn to navigate your computer using the terminal!
