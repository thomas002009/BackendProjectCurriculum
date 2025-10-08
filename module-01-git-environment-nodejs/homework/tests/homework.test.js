const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

describe('Module 01 Homework Tests', () => {
  const starterPath = path.join(__dirname, '../starter');
  const helloJsPath = path.join(starterPath, 'hello.js');
  const packageJsonPath = path.join(starterPath, 'package.json');

  describe('Environment Setup', () => {
    test('Git username is configured', () => {
      try {
        const username = execSync('git config --global user.name', { encoding: 'utf-8' }).trim();
        expect(username).toBeTruthy();
        expect(username.length).toBeGreaterThan(0);
      } catch (error) {
        throw new Error(
          'Git username is not configured. Run: git config --global user.name "Your Name"'
        );
      }
    });

    test('Git email is configured', () => {
      try {
        const email = execSync('git config --global user.email', { encoding: 'utf-8' }).trim();
        expect(email).toBeTruthy();
        expect(email.length).toBeGreaterThan(0);
        expect(email).toContain('@');
      } catch (error) {
        throw new Error(
          'Git email is not configured. Run: git config --global user.email "your.email@example.com"'
        );
      }
    });

    test('Node.js is installed (v18 or higher)', () => {
      try {
        const version = execSync('node --version', { encoding: 'utf-8' }).trim();
        const majorVersion = parseInt(version.slice(1).split('.')[0]);
        expect(majorVersion).toBeGreaterThanOrEqual(18);
      } catch (error) {
        throw new Error('Node.js is not installed or not in PATH. Install from nodejs.org');
      }
    });

    test('npm is installed', () => {
      try {
        const version = execSync('npm --version', { encoding: 'utf-8' }).trim();
        expect(version).toBeTruthy();
      } catch (error) {
        throw new Error('npm is not installed or not in PATH. Install Node.js from nodejs.org');
      }
    });
  });

  describe('hello.js Script', () => {
    test('hello.js file exists', () => {
      expect(fs.existsSync(helloJsPath)).toBe(true);
      if (!fs.existsSync(helloJsPath)) {
        throw new Error(`hello.js not found at: ${helloJsPath}`);
      }
    });

    test('hello.js contains no TODO comments', () => {
      const content = fs.readFileSync(helloJsPath, 'utf-8');
      const todos = content.match(/\/\/\s*TODO:/gi);
      if (todos && todos.length > 0) {
        throw new Error(
          `hello.js still contains ${todos.length} TODO comment(s). Please complete all TODOs.`
        );
      }
      expect(todos).toBeNull();
    });

    test('hello.js runs without errors', () => {
      try {
        execSync(`node "${helloJsPath}"`, { encoding: 'utf-8', cwd: starterPath });
      } catch (error) {
        throw new Error(`hello.js failed to run:\n${error.message}`);
      }
    });

    test('hello.js produces output', () => {
      try {
        const output = execSync(`node "${helloJsPath}"`, {
          encoding: 'utf-8',
          cwd: starterPath,
        }).trim();
        expect(output.length).toBeGreaterThan(0);
        if (output.length === 0) {
          throw new Error('hello.js produces no output. Did you add console.log statements?');
        }
      } catch (error) {
        throw new Error(`Error running hello.js: ${error.message}`);
      }
    });

    test('hello.js includes "Hello, Backend Development!"', () => {
      try {
        const output = execSync(`node "${helloJsPath}"`, {
          encoding: 'utf-8',
          cwd: starterPath,
        });
        expect(output).toContain('Hello, Backend Development!');
      } catch (error) {
        throw new Error('hello.js should print "Hello, Backend Development!"');
      }
    });

    test('hello.js includes a name variable', () => {
      const content = fs.readFileSync(helloJsPath, 'utf-8');
      const hasNameVariable =
        content.includes('const name') ||
        content.includes('let name') ||
        content.includes('var name');
      expect(hasNameVariable).toBe(true);
      if (!hasNameVariable) {
        throw new Error('hello.js should include a variable called "name"');
      }
    });

    test('hello.js includes date functionality', () => {
      const content = fs.readFileSync(helloJsPath, 'utf-8');
      const hasDate = content.includes('new Date()') || content.includes('Date()');
      expect(hasDate).toBe(true);
      if (!hasDate) {
        throw new Error('hello.js should use new Date() to get the current date');
      }
    });

    test('hello.js includes a calculation', () => {
      const content = fs.readFileSync(helloJsPath, 'utf-8');
      // Check for basic math operators
      const hasMath =
        (content.includes('+') ||
          content.includes('-') ||
          content.includes('*') ||
          content.includes('/')) &&
        !content.includes('// TODO');

      expect(hasMath).toBe(true);
      if (!hasMath) {
        throw new Error('hello.js should include a mathematical calculation');
      }
    });
  });

  describe('package.json', () => {
    test('package.json exists', () => {
      expect(fs.existsSync(packageJsonPath)).toBe(true);
      if (!fs.existsSync(packageJsonPath)) {
        throw new Error(
          `package.json not found at: ${packageJsonPath}\nCreate it with: npm init -y`
        );
      }
    });

    test('package.json is valid JSON', () => {
      try {
        const content = fs.readFileSync(packageJsonPath, 'utf-8');
        JSON.parse(content);
      } catch (error) {
        throw new Error(`package.json is not valid JSON: ${error.message}`);
      }
    });

    test('package.json has required fields', () => {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

      expect(packageJson.name).toBeTruthy();
      expect(packageJson.author).toBeTruthy();

      if (!packageJson.name) {
        throw new Error('package.json should have a "name" field');
      }
      if (!packageJson.author) {
        throw new Error('package.json should have an "author" field with your name');
      }
    });

    test('package.json has a start script', () => {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

      expect(packageJson.scripts).toBeTruthy();
      expect(packageJson.scripts.start).toBeTruthy();
      expect(packageJson.scripts.start).toContain('node');
      expect(packageJson.scripts.start).toContain('hello.js');

      if (!packageJson.scripts || !packageJson.scripts.start) {
        throw new Error(
          'package.json should have a start script in the scripts section: "start": "node hello.js"'
        );
      }
    });

    test('npm start runs successfully', () => {
      try {
        execSync('npm start', { encoding: 'utf-8', cwd: starterPath });
      } catch (error) {
        throw new Error(`npm start failed: ${error.message}`);
      }
    });
  });

  describe('Code Quality', () => {
    test('hello.js uses modern JavaScript (const or let, not var)', () => {
      const content = fs.readFileSync(helloJsPath, 'utf-8');
      const usesModernJS = content.includes('const ') || content.includes('let ');

      expect(usesModernJS).toBe(true);
      if (!usesModernJS) {
        throw new Error('Use const or let for variables (not var) for modern JavaScript');
      }
    });

    test('hello.js uses console.log for output', () => {
      const content = fs.readFileSync(helloJsPath, 'utf-8');
      const usesConsoleLog = content.includes('console.log');

      expect(usesConsoleLog).toBe(true);
      if (!usesConsoleLog) {
        throw new Error('Use console.log() to print output');
      }
    });
  });
});
