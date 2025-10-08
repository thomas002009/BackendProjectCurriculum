# Git Cheat Sheet

Quick reference for the most common Git commands you'll use in this curriculum.

## Setup and Configuration

```bash
# Set your name (appears in commits)
git config --global user.name "Your Name"

# Set your email (appears in commits)
git config --global user.email "your.email@example.com"

# Check your configuration
git config --list
```

## Getting Started

```bash
# Clone a repository
git clone https://github.com/username/repo-name.git

# Navigate into the repository
cd repo-name

# Check the status of your files
git status
```

## Making Changes

```bash
# Check what files have changed
git status

# See the actual changes in files
git diff

# Stage a specific file for commit
git add filename.js

# Stage all changed files
git add .

# Commit staged changes with a message
git commit -m "Your commit message"

# Add and commit in one step (only for modified files, not new files)
git commit -am "Your commit message"
```

## Viewing History

```bash
# View commit history
git log

# View compact commit history
git log --oneline

# View history with graph
git log --graph --oneline

# View last 5 commits
git log -5
```

## Working with Remote Repositories

```bash
# View your remote repositories
git remote -v

# Push commits to GitHub
git push origin main

# Pull latest changes from GitHub
git pull origin main

# Fetch changes without merging
git fetch origin
```

## Branches (Advanced - Later Modules)

```bash
# List all branches
git branch

# Create a new branch
git branch branch-name

# Switch to a branch
git checkout branch-name

# Create and switch to a new branch
git checkout -b branch-name

# Merge a branch into current branch
git merge branch-name

# Delete a branch
git branch -d branch-name
```

## Undoing Changes

```bash
# Discard changes to a file (careful - can't undo!)
git checkout -- filename.js

# Unstage a file (keep the changes, just unstage)
git reset filename.js

# Undo last commit but keep changes
git reset --soft HEAD~1

# View what you would undo
git log --oneline
```

## Helpful Commands

```bash
# See who changed each line of a file
git blame filename.js

# Search commit messages
git log --grep="search term"

# Show changes in a specific commit
git show commit-hash

# Create a .gitignore file
touch .gitignore
```

## Common Workflows

### Making Your First Commit

```bash
# 1. Check what changed
git status

# 2. Stage your changes
git add .

# 3. Commit with a message
git commit -m "Initial commit"

# 4. Push to GitHub
git push origin main
```

### Daily Workflow

```bash
# 1. Pull latest changes before starting work
git pull origin main

# 2. Make your changes to files
# ... edit code ...

# 3. Check what you changed
git status
git diff

# 4. Stage and commit
git add .
git commit -m "Describe what you did"

# 5. Push to GitHub
git push origin main
```

### Fixing a Mistake Before Pushing

```bash
# If you made a mistake in your last commit message
git commit --amend -m "Corrected commit message"

# If you forgot to add a file to your last commit
git add forgotten-file.js
git commit --amend --no-edit
```

## Git Commit Message Best Practices

**Good commit messages:**
- Start with a verb: "Add", "Fix", "Update", "Remove", "Refactor"
- Be specific: "Add user authentication endpoint" not "updated stuff"
- Keep under 50 characters when possible
- Use present tense: "Add feature" not "Added feature"

**Examples:**
```
✅ Add user registration endpoint
✅ Fix validation error in CreateUserDto
✅ Update database schema for classes
✅ Remove unused imports from auth service
❌ did stuff
❌ fixed it
❌ module 5 homework
```

## Troubleshooting

### "Your branch is ahead of 'origin/main' by X commits"
You have local commits that haven't been pushed to GitHub yet.
```bash
git push origin main
```

### "Your branch is behind 'origin/main' by X commits"
GitHub has commits you don't have locally yet.
```bash
git pull origin main
```

### "Merge conflict"
You and someone else changed the same lines. Git needs your help to resolve it.
1. Open the conflicted files
2. Look for conflict markers: `<<<<<<<`, `=======`, `>>>>>>>`
3. Edit the file to keep the changes you want
4. Remove the conflict markers
5. Stage and commit the resolved files

### "fatal: not a git repository"
You're not in a Git repository directory.
```bash
cd path/to/your/repository
```

## Important Notes

- **Before you commit:** Always run `git status` and `git diff` to review your changes
- **Commit often:** Small, frequent commits are better than large, infrequent ones
- **Don't commit sensitive data:** Never commit passwords, API keys, or `.env` files
- **Pull before push:** Always pull the latest changes before pushing your own
- **Write meaningful commit messages:** Your future self will thank you

## Additional Resources

- [Official Git Documentation](https://git-scm.com/doc)
- [GitHub Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)
