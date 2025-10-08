# Setup Guide

This guide will walk you through setting up your development environment for the Backend Curriculum. Follow each step carefully, and don't skip ahead - the order matters!

## Table of Contents

1. [Installing Prerequisites](#1-installing-prerequisites)
2. [Setting up GitHub](#2-setting-up-github)
3. [Setting up Supabase](#3-setting-up-supabase)
4. [Running the Project](#4-running-the-project)
5. [Development Workflow](#5-development-workflow)
6. [Using Development Tools](#6-using-development-tools)
7. [Troubleshooting](#7-troubleshooting)

---

## 1. Installing Prerequisites

### 1.1 Node.js and npm

Node.js is the runtime that executes JavaScript on your computer (outside of a browser). npm is the package manager that comes with Node.js.

**Installation:**

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** version
3. Run the installer and follow the prompts
4. Verify installation by opening a terminal and running:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers (e.g., `v20.x.x` and `10.x.x`)

### 1.2 Git

Git is version control software that tracks changes to your code and enables collaboration.

**Installation:**

- **macOS:**
  - Git is usually pre-installed. Check by running `git --version`
  - If not installed, download from [git-scm.com](https://git-scm.com/)

- **Windows:**
  - Download Git from [git-scm.com](https://git-scm.com/)
  - During installation, use the default options

- **Linux:**
  ```bash
  sudo apt-get install git  # Ubuntu/Debian
  sudo yum install git      # Fedora
  ```

**Verify installation:**
```bash
git --version
```

### 1.3 Visual Studio Code (Recommended)

VS Code is a free, powerful code editor with excellent support for JavaScript/TypeScript.

**Installation:**

1. Visit [code.visualstudio.com](https://code.visualstudio.com/)
2. Download and install for your operating system
3. Open VS Code

**Essential Extensions:**

Install these extensions by clicking the Extensions icon in VS Code's sidebar and searching for each:

1. **ESLint** - Highlights code style issues
2. **Prettier - Code formatter** - Automatically formats your code
3. **Prisma** - Syntax highlighting for `.prisma` files
4. **REST Client** - Test API endpoints directly in VS Code (optional but helpful)

To install extensions:
- Click the Extensions icon (four squares) in the sidebar
- Search for the extension name
- Click "Install"

### 1.4 Terminal/Command Line

You'll use the terminal to run commands throughout this curriculum.

- **macOS:** Use the built-in "Terminal" app
- **Windows:** Use "Command Prompt", "PowerShell", or "Git Bash" (installed with Git)
- **Linux:** Use your distribution's terminal
- **VS Code:** You can use the integrated terminal (View → Terminal or Ctrl+`)

---

## 2. Setting up GitHub

### 2.1 Create a GitHub Account

1. Go to [github.com](https://github.com/)
2. Click "Sign up"
3. Follow the prompts to create your account
4. Verify your email address

### 2.2 Configure Git

Set your username and email (this will appear in your commits):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Use the same email you used for GitHub.

### 2.3 Fork the Repository

1. Navigate to the curriculum repository on GitHub
2. Click the "Fork" button in the top-right corner
3. This creates a copy of the repository under your GitHub account

### 2.4 Clone Your Fork

Clone your forked repository to your computer:

```bash
# Replace YOUR-USERNAME with your actual GitHub username
git clone https://github.com/YOUR-USERNAME/backend-curriculum.git

# Navigate into the directory
cd backend-curriculum
```

**What just happened?**
- You created a personal copy (fork) of the curriculum on GitHub
- You downloaded (cloned) that copy to your computer
- You can now make changes and push them to your fork

---

## 3. Setting up Supabase

Supabase provides a PostgreSQL database that you'll use for modules 6-8. It's free and doesn't require installing database software on your computer.

### 3.1 Create a Supabase Account

1. Go to [supabase.com](https://supabase.com/)
2. Click "Start your project"
3. Sign up using GitHub (recommended) or email

### 3.2 Create a New Project

1. Click "New Project"
2. Fill in the details:
   - **Name:** `backend-curriculum` (or any name you prefer)
   - **Database Password:** Choose a strong password and **save it somewhere safe**
   - **Region:** Choose the region closest to you
   - **Pricing Plan:** Free
3. Click "Create new project"
4. Wait a few minutes for the project to be set up

### 3.3 Get Your Database Connection String

1. In your Supabase project dashboard, click "Project Settings" (gear icon)
2. Click "Database" in the sidebar
3. Scroll to "Connection string"
4. Select "URI" and copy the connection string
5. It will look like: `postgresql://postgres:[YOUR-PASSWORD]@db.xxx.supabase.co:5432/postgres`
6. Replace `[YOUR-PASSWORD]` with the database password you created

**Important:** Keep this connection string private! Never commit it to Git.

### 3.4 Create Environment Variables File

You'll need this for modules 6-8, but set it up now:

1. In your project directory, create a file called `.env`
2. Add your database connection string:
   ```
   DATABASE_URL="postgresql://postgres:YOUR-PASSWORD@db.xxx.supabase.co:5432/postgres"
   ```
3. Save the file

**Note:** The `.env` file is already in `.gitignore`, so it won't be committed to Git. This keeps your credentials safe.

---

## 4. Running the Project

### 4.1 Install Dependencies

From your project directory, run:

```bash
npm install
```

This reads `package.json` and installs all the required packages into a `node_modules` folder. This may take a few minutes.

**What's happening?**
- npm downloads all the libraries and tools needed for the project
- These are stored in the `node_modules` folder (which is gitignored)
- This only needs to be done once (or when dependencies change)

### 4.2 Verify Installation

Check that everything is working:

```bash
# Check that tests can run (they might fail since modules aren't created yet - that's okay)
npm test

# Check that linting works
npm run lint

# Check that formatting works
npm run format
```

### 4.3 Running the Development Server (Later Modules)

You won't need this until Module 5, but here's how to run the Nest.js development server:

```bash
npm run start:dev
```

This starts a server that automatically restarts when you make code changes.

---

## 5. Development Workflow

This is the cycle you'll follow for each module:

### 5.1 Making Changes

1. Read the module lessons
2. Complete exercises for practice
3. Open the homework starter code
4. Read the homework README.md for requirements
5. Look for `// TODO:` comments in the code
6. Implement the required functionality

### 5.2 Testing Your Changes

Run tests frequently as you work:

```bash
# Run tests for the current module you're working on
npm test:module-01  # Replace with current module number

# Or run all tests
npm test
```

### 5.3 Committing Changes

When you've completed a section or want to save your progress:

```bash
# Check what files you've changed
git status

# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Complete Module 01 homework exercises"
```

**Writing good commit messages:**
- Start with a verb: "Add", "Fix", "Update", "Complete"
- Be specific: "Complete user authentication" not "did stuff"
- Keep it under 50 characters when possible

### 5.4 Pushing to GitHub

Upload your commits to your GitHub fork:

```bash
git push origin main
```

**When to push:**
- At the end of each work session
- When you complete a module
- Before asking for help (so others can see your code)
- At least once per week

---

## 6. Using Development Tools

### 6.1 Running the API Locally

When you build APIs in modules 5-8:

```bash
# Start the development server
npm run start:dev
```

The API will be available at `http://localhost:3000`

### 6.2 Testing API Endpoints

**Option 1: REST Client (VS Code Extension)**

Create a file called `test.http`:

```http
### Get all users
GET http://localhost:3000/users

### Create a user
POST http://localhost:3000/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

Click "Send Request" above each request.

**Option 2: Postman**

1. Download [Postman](https://www.postman.com/)
2. Create a new request
3. Set the method (GET, POST, etc.) and URL
4. Send the request and view the response

### 6.3 Viewing the Database with Prisma Studio

Prisma Studio is a GUI for viewing and editing database records:

```bash
npx prisma studio
```

This opens a browser window where you can:
- View all your database tables
- See records in each table
- Add, edit, or delete records
- Explore relationships

### 6.4 Reading Error Messages

When something goes wrong, read error messages carefully:

**TypeScript compilation errors:**
```
src/users/users.service.ts:15:5 - error TS2322: Type 'string' is not assignable to type 'number'.
```
- File: `src/users/users.service.ts`
- Line 15, column 5
- Problem: Trying to assign a string to a number variable

**Test failures:**
```
Expected: 200
Received: 404
```
- Your endpoint returned a 404 (not found) instead of 200 (success)
- Check your route path and controller

### 6.5 VS Code Tips

**Keyboard Shortcuts:**
- `Cmd/Ctrl + P` - Quick file search
- `Cmd/Ctrl + Shift + F` - Search across all files
- `Cmd/Ctrl + /` - Comment/uncomment line
- `Cmd/Ctrl + Shift + P` - Command palette

**Integrated Terminal:**
- View → Terminal (or Ctrl + `)
- Can have multiple terminals open
- Right-click terminal tab to rename

---

## 7. Troubleshooting

### Common Issues

#### "npm: command not found"
- Node.js/npm is not installed or not in your PATH
- Reinstall Node.js from nodejs.org
- Restart your terminal after installation

#### "git: command not found"
- Git is not installed or not in your PATH
- Install Git from git-scm.com
- Restart your terminal after installation

#### "Cannot find module X"
- Dependencies aren't installed
- Run `npm install` in the project directory

#### "Port 3000 is already in use"
- Another application is using port 3000
- Stop the other application or change the port in `main.ts`

#### Database connection errors
- Check that your `DATABASE_URL` in `.env` is correct
- Verify your Supabase database password
- Make sure the connection string has no extra spaces
- Check that your Supabase project is still active

#### TypeScript errors about missing types
- Run `npm install` to ensure all type definitions are installed
- Restart VS Code's TypeScript server: Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"

#### Tests fail with "Cannot find module from test file"
- The test is looking for a file that doesn't exist
- Check the file path in the error message
- Make sure you've created the required files

#### "Permission denied" when running npm install
- On macOS/Linux: Don't use `sudo` with npm
- May need to fix npm permissions: https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

### Getting Help

If you're stuck after trying the troubleshooting steps:

1. **Check the error message carefully** - Often it tells you exactly what's wrong
2. **Review the relevant lesson** - Make sure you understand the concepts
3. **Check the Common Errors Guide** - `resources/common-errors.md`
4. **Ask during office hours** - Bring specific error messages
5. **Search online** - Copy the error message into Google
   - Add "Node.js" or "TypeScript" to your search
   - StackOverflow often has solutions

### Helpful Commands for Debugging

```bash
# Check Node.js and npm versions
node --version
npm --version

# Check Git version
git --version

# List installed npm packages
npm list --depth=0

# Clear npm cache (if having installation issues)
npm cache clean --force

# Reinstall all dependencies
rm -rf node_modules
npm install

# Check current directory
pwd

# List files in current directory
ls -la    # macOS/Linux
dir       # Windows
```

---

## Next Steps

Once you've completed this setup:

1. ✅ Verify all prerequisites are installed
2. ✅ Test that you can run `npm install` successfully
3. ✅ Confirm you can run `npm test` (even if tests fail)
4. ✅ Make sure your `.env` file is created (you'll use it later)
5. ✅ Try making a small change and committing it to Git

**You're ready to start Module 01!** 🎉

Head to [module-01-git-environment-nodejs/README.md](./module-01-git-environment-nodejs/README.md) to begin your backend development journey.

---

**Remember:** Setting up a development environment can be tricky. It's normal to run into issues. Don't get discouraged - debugging is a crucial skill you're building! If you get stuck, ask for help during office hours or class time.
