# Lesson 2: Command Line Basics

**Duration:** 30 minutes
**Objective:** Learn to navigate and manage files using the command line

## What You'll Learn Today

- What the command line is and why developers use it
- How to navigate your file system using commands
- How to create, move, and delete files and directories
- Essential commands you'll use every day

---

## What is the Command Line?

The **command line** (also called terminal, shell, or console) is a text-based interface for controlling your computer. Instead of clicking icons and menus, you type commands.

Think of it like this:
- **Graphical Interface (GUI):** Using your mouse to click folders and files
- **Command Line (CLI):** Typing commands to do the same things

### Why Use the Command Line?

You might be thinking: "Why type commands when I can just click?" Great question!

**Reasons developers love the command line:**

1. **Speed:** Typing is often faster than clicking through menus
2. **Power:** Some tools only work from the command line
3. **Automation:** You can script repetitive tasks
4. **Remote Work:** You can control servers that don't have a GUI
5. **Professional Standard:** All developers use the command line daily

### Different Names, Same Thing

The command line has different names depending on your operating system:

- **macOS/Linux:** Terminal, Shell, Console
- **Windows:** Command Prompt, PowerShell, Terminal

They all let you type commands to control your computer.

---

## Opening the Command Line

### macOS
1. Press `Command + Space` to open Spotlight
2. Type "Terminal"
3. Press Enter

### Windows
1. Press `Windows Key + R`
2. Type "cmd" or "powershell"
3. Press Enter

### Linux
1. Press `Ctrl + Alt + T`

---

## Understanding the Prompt

When you open the terminal, you'll see something like this:

```bash
username@computer:~/projects$
```

This is called the **prompt**. It shows:
- Your username
- Your computer name
- Your current directory (`~` means home directory)
- `$` indicates you can type a command

Don't type the `$` when following examples - it's just showing you where the prompt is!

---

## File System Basics

Before we start typing commands, let's understand how files are organized.

### Directory Structure

Your computer's files are organized in a tree structure:

```
/                           (root - top level)
├── Users/
│   ├── yourname/          (your home directory)
│   │   ├── Documents/
│   │   ├── Downloads/
│   │   ├── Desktop/
│   │   └── projects/
│   │       └── backend-curriculum/
```

### Paths

A **path** is the location of a file or folder:

- **Absolute path:** Full path from root
  - Example: `/Users/yourname/projects/backend-curriculum`

- **Relative path:** Path from where you are now
  - Example: If you're in `projects/`, then `backend-curriculum` is the relative path

### Special Directory Symbols

- `.` means "current directory"
- `..` means "parent directory" (one level up)
- `~` means "home directory" (like /Users/yourname)
- `/` means "root directory" (top level)

---

## Essential Commands

Let's learn the commands you'll use most often!

### pwd - Print Working Directory

Shows where you are in the file system:

```bash
pwd
```

**Example output:**
```
/Users/yourname/projects
```

Think of this as "Where am I right now?"

### ls - List Files

Shows files and folders in the current directory:

```bash
ls                  # Basic list
ls -l               # Detailed list (sizes, permissions)
ls -a               # Show hidden files (files starting with .)
ls -la              # Detailed list including hidden files
```

**Example output:**
```
backend-curriculum
hello.js
package.json
```

**Comparison to C++:** Like viewing files in your IDE's project explorer.

### cd - Change Directory

Move to a different directory:

```bash
cd projects                    # Go to projects folder
cd backend-curriculum          # Go into backend-curriculum
cd ..                          # Go up one level
cd ~                           # Go to home directory
cd /                           # Go to root directory
```

**Examples:**

```bash
# Starting at /Users/yourname
cd projects
pwd
# Output: /Users/yourname/projects

cd backend-curriculum
pwd
# Output: /Users/yourname/projects/backend-curriculum

cd ..
pwd
# Output: /Users/yourname/projects
```

Think of `cd` as double-clicking a folder to open it.

### mkdir - Make Directory

Create a new folder:

```bash
mkdir foldername              # Create a folder
mkdir folder1 folder2         # Create multiple folders
mkdir -p path/to/nested       # Create nested folders
```

**Example:**
```bash
mkdir my-project
cd my-project
pwd
# Output: /Users/yourname/my-project
```

### touch - Create File

Create a new empty file:

```bash
touch filename.js             # Create a file
touch file1.js file2.js       # Create multiple files
```

**Note:** On Windows, you might need to use `echo. > filename.js` instead.

**Example:**
```bash
touch hello.js
ls
# Output: hello.js
```

### rm - Remove File

Delete a file:

```bash
rm filename.js                # Delete a file
```

**Warning:** Files deleted with `rm` don't go to the Recycle Bin - they're gone forever! Be careful!

### rmdir - Remove Directory

Delete an empty folder:

```bash
rmdir foldername
```

To delete a folder with files inside:

```bash
rm -r foldername              # -r means "recursive" (delete everything inside too)
```

**Warning:** `rm -r` is dangerous! It permanently deletes everything. Double-check before using it!

### cp - Copy Files

Copy a file:

```bash
cp source.js destination.js           # Copy file
cp -r folder/ newfolder/              # Copy folder
```

### mv - Move or Rename Files

Move or rename files/folders:

```bash
mv oldname.js newname.js              # Rename
mv file.js folder/                    # Move to folder
```

### cat - Display File Contents

Show what's inside a file:

```bash
cat filename.js
```

**Example:**
```bash
cat hello.js
# Output: console.log("Hello, World!");
```

### clear - Clear Screen

Clear the terminal screen:

```bash
clear
```

On Windows, use `cls` instead.

---

## Putting It Together: Example Session

Let's walk through a realistic scenario:

```bash
# 1. See where you are
pwd
# Output: /Users/yourname

# 2. Go to projects folder (create it if needed)
mkdir projects
cd projects

# 3. Create a new project folder
mkdir my-first-node-app
cd my-first-node-app

# 4. Create a JavaScript file
touch index.js

# 5. List files to confirm it was created
ls
# Output: index.js

# 6. See the full path
pwd
# Output: /Users/yourname/projects/my-first-node-app
```

---

## Command Line Tips & Tricks

### Tab Completion

Press `Tab` to auto-complete file and folder names:

```bash
cd proj[Tab]                   # Expands to "cd projects"
```

This saves typing and prevents typos!

### Up Arrow

Press the up arrow key to cycle through previous commands. This saves retyping commands!

### Copy and Paste

- **macOS:** `Command + C` to copy, `Command + V` to paste
- **Windows:** `Ctrl + C` to copy, `Ctrl + V` to paste (in PowerShell)
- **Note:** In some terminals, `Ctrl + C` stops a running program instead of copying

### Command History

See your command history:

```bash
history
```

### Getting Help

Most commands have help documentation:

```bash
ls --help                      # Show help for ls command
man ls                         # Show manual page (detailed docs)
```

Press `q` to quit the manual page.

---

## Command Line vs GUI

Here's how command line operations compare to clicking:

| Task | GUI (Clicking) | CLI (Typing) |
|------|---------------|--------------|
| Navigate to folder | Double-click folders | `cd foldername` |
| Create folder | Right-click → New Folder | `mkdir foldername` |
| Create file | Right-click → New File | `touch filename` |
| Delete file | Right-click → Delete | `rm filename` |
| See contents | Open folder | `ls` |
| Where am I? | Look at window title | `pwd` |

---

## Command Line vs C++

If you're coming from C++ development, here are some comparisons:

| C++ Concept | Command Line Equivalent |
|------------|------------------------|
| IDE file explorer | `ls` and `cd` commands |
| Creating .cpp file in IDE | `touch filename.cpp` |
| IDE's project directory | Current working directory (`pwd`) |
| Running compiled program | Running any command |

---

## Common Mistakes to Avoid

### 1. Wrong Directory

**Problem:** Running commands in the wrong folder

**Solution:** Always use `pwd` to check where you are

### 2. Typos in Filenames

**Problem:** Typing filenames incorrectly

**Solution:** Use Tab completion to auto-complete names

### 3. Using rm Carelessly

**Problem:** Accidentally deleting important files

**Solution:**
- Always double-check before using `rm`
- Use `ls` first to verify you're in the right place
- Consider using `mv` to move files to trash instead

### 4. Not Understanding Relative vs Absolute Paths

**Problem:** Confused about how to reference files

**Solution:** Use `pwd` and `ls` frequently to understand your location

---

## Checking Your Understanding

Answer these questions:

1. What does `pwd` do?
2. How do you move to the parent directory?
3. What's the difference between `rm` and `rmdir`?
4. How do you create a new folder?
5. What does `ls -a` show that `ls` doesn't?

**Answers:**
1. `pwd` shows your current directory location
2. `cd ..` moves up one level
3. `rm` deletes files; `rmdir` deletes empty directories
4. `mkdir foldername` creates a new folder
5. `ls -a` shows hidden files (files starting with `.`)

---

## Practice Time

Head over to [exercises/02-terminal-practice](../exercises/02-terminal-practice/README.md) to practice these commands!

You'll create folders, navigate around, and practice the commands until they feel natural.

---

## Key Takeaways

- The command line is a text-based way to control your computer
- `pwd` shows where you are, `cd` moves you around, `ls` shows files
- `mkdir` creates folders, `touch` creates files
- `rm` deletes permanently - be careful!
- Tab completion and up arrow are your friends
- Use these commands every day and they'll become second nature

---

## Quick Reference

```bash
pwd              # Where am I?
ls               # What's here?
cd foldername    # Go into folder
cd ..            # Go up one level
cd ~             # Go home
mkdir folder     # Create folder
touch file.js    # Create file
rm file.js       # Delete file
rm -r folder     # Delete folder
cp file1 file2   # Copy file
mv old new       # Move/rename
cat file.js      # Show contents
clear            # Clear screen
```

See [assets/terminal-commands.png](assets/terminal-commands.png) for a visual reference card.

---

## Additional Resources

- [Terminal Cheat Sheet](../../resources/cheatsheets/terminal-cheatsheet.md)
- [Command Line Crash Course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)

---

**Next Lesson:** [Lesson 3: Node.js Introduction](03-nodejs-intro.md)

Now that you can navigate using the terminal, let's learn about Node.js!
