# Terminal/Command Line Cheat Sheet

Essential terminal commands for navigating and working with files.

## Navigation

```bash
# Print current directory (where am I?)
pwd

# List files in current directory
ls              # Basic list
ls -l           # Detailed list
ls -la          # Include hidden files
ls -lh          # Human-readable file sizes

# Change directory
cd folder-name          # Go into a folder
cd ..                   # Go up one level
cd ../..                # Go up two levels
cd ~                    # Go to home directory
cd -                    # Go to previous directory
cd /                    # Go to root directory
```

## File and Folder Operations

```bash
# Create a new directory
mkdir folder-name
mkdir -p path/to/nested/folder    # Create nested folders

# Create a new file
touch filename.txt

# Copy files
cp source.txt destination.txt
cp -r source-folder/ destination-folder/    # Copy folder recursively

# Move or rename files
mv oldname.txt newname.txt        # Rename
mv file.txt folder/               # Move to folder

# Delete files (careful - can't undo!)
rm filename.txt
rm -r folder-name/                # Delete folder and contents
rm -rf folder-name/               # Force delete (be very careful!)

# View file contents
cat filename.txt                  # Print entire file
head filename.txt                 # First 10 lines
tail filename.txt                 # Last 10 lines
less filename.txt                 # View file page by page (q to quit)
```

## Searching and Finding

```bash
# Find files by name
find . -name "*.js"              # Find all .js files
find . -type f -name "test*"     # Find files starting with "test"

# Search inside files
grep "search term" filename.txt
grep -r "search term" folder/    # Search recursively in folder
grep -i "search term" file.txt   # Case-insensitive search
```

## File Information

```bash
# Check file size
ls -lh filename.txt

# Count lines in a file
wc -l filename.txt

# Check file type
file filename.txt
```

## Process Management

```bash
# See running processes
ps
ps aux                           # Detailed process list

# Kill a process
kill process-id
kill -9 process-id              # Force kill

# See what's using a port
lsof -i :3000                   # Check what's on port 3000
```

## Working with npm and Node.js

```bash
# Install dependencies
npm install
npm install package-name        # Install specific package
npm install -g package-name     # Install globally

# Run scripts from package.json
npm start
npm run script-name
npm test

# Check versions
node --version
npm --version

# Run a JavaScript file
node filename.js
```

## Terminal Shortcuts

### macOS/Linux

```bash
# Navigation
Ctrl + A        # Go to beginning of line
Ctrl + E        # Go to end of line
Ctrl + U        # Clear line before cursor
Ctrl + K        # Clear line after cursor

# History
↑ / ↓          # Previous/next command
Ctrl + R        # Search command history

# Process Control
Ctrl + C        # Cancel current command
Ctrl + D        # Exit terminal
Ctrl + Z        # Suspend current process

# Other
Ctrl + L        # Clear screen (same as 'clear' command)
Tab             # Autocomplete file/folder names
```

### Windows (Command Prompt)

```bash
# Navigation
Home            # Go to beginning of line
End             # Go to end of line

# History
↑ / ↓          # Previous/next command

# Process Control
Ctrl + C        # Cancel current command

# Other
cls             # Clear screen
Tab             # Autocomplete file/folder names
```

## Useful Commands

```bash
# Clear the terminal screen
clear

# Display a message
echo "Hello World"

# Create environment variable
export VAR_NAME=value           # macOS/Linux
set VAR_NAME=value              # Windows

# Check environment variables
echo $VAR_NAME                  # macOS/Linux
echo %VAR_NAME%                 # Windows

# Chain commands
command1 && command2            # Run command2 only if command1 succeeds
command1 || command2            # Run command2 only if command1 fails
command1; command2              # Run both regardless of success

# Redirect output
command > file.txt              # Write output to file (overwrite)
command >> file.txt             # Append output to file
command 2> errors.txt           # Write errors to file
```

## Directory Shortcuts

```bash
.               # Current directory
..              # Parent directory
~               # Home directory
/               # Root directory
-               # Previous directory
```

## File Permissions (macOS/Linux)

```bash
# View permissions
ls -l

# Change permissions
chmod +x script.sh              # Make file executable
chmod 644 file.txt              # Set specific permissions
chmod -R 755 folder/            # Change folder and contents

# Change owner
chown user:group file.txt
```

## Helpful Tips

### Wildcards

```bash
*               # Matches any characters
?               # Matches single character
[abc]           # Matches a, b, or c

# Examples:
ls *.js         # List all JavaScript files
rm test-*.txt   # Delete files starting with "test-"
cp *.md docs/   # Copy all Markdown files to docs folder
```

### Piping Commands

```bash
# Send output of one command to another
ls -l | grep ".js"              # List only .js files
cat file.txt | grep "error"     # Find lines with "error"
npm test | grep "FAIL"          # Find failing tests
```

## Platform Differences

| Task | macOS/Linux | Windows |
|------|-------------|---------|
| List files | `ls` | `dir` |
| Clear screen | `clear` | `cls` |
| Copy file | `cp` | `copy` |
| Move file | `mv` | `move` |
| Delete file | `rm` | `del` |
| Home directory | `~` | `%USERPROFILE%` |
| Path separator | `/` | `\` |

**Note:** Git Bash on Windows uses Unix-style commands.

## Common Patterns for This Curriculum

```bash
# Start working on a module
cd ~/path/to/backend-curriculum
git pull
npm install

# Run tests for current module
npm test:module-01

# Start development server
npm run start:dev

# Open Prisma Studio
npx prisma studio

# Format your code
npm run format

# Commit your work
git status
git add .
git commit -m "Complete Module X homework"
git push origin main
```

## Troubleshooting

### "command not found"
The command isn't installed or isn't in your PATH. Check:
- Is it installed? (`which command-name`)
- Is it spelled correctly?
- Do you need to use `npm run` or `npx`?

### "permission denied"
You don't have permission to execute the file or access the directory.
- Try `chmod +x filename` to make a file executable
- Check you're in the right directory
- On Windows, try running as administrator

### "no such file or directory"
The file or folder doesn't exist at that path.
- Check spelling and capitalization
- Use `ls` to see what files exist
- Use `pwd` to confirm you're in the right directory

## Additional Resources

- [Command Line Crash Course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)
- [Bash Scripting Tutorial](https://www.shellscript.sh/)
- [Windows Command Line Reference](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)
