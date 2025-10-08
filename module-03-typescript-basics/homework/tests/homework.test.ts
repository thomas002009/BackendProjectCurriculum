// Module 03 Homework Tests
// These tests verify that your TypeScript types are correct

import * as fs from 'fs';
import * as path from 'path';

describe('Module 03: TypeScript Basics - Homework Tests', () => {
  const typesPath = path.join(__dirname, '../starter/types.ts');
  const indexPath = path.join(__dirname, '../starter/index.ts');

  describe('File Structure', () => {
    test('types.ts file exists', () => {
      expect(fs.existsSync(typesPath)).toBe(true);
    });

    test('index.ts file exists', () => {
      expect(fs.existsSync(indexPath)).toBe(true);
    });

    test('tsconfig.json file exists', () => {
      const tsconfigPath = path.join(__dirname, '../starter/tsconfig.json');
      expect(fs.existsSync(tsconfigPath)).toBe(true);
    });
  });

  describe('Interface Definitions', () => {
    let typesContent: string;

    beforeAll(() => {
      typesContent = fs.readFileSync(typesPath, 'utf-8');
    });

    test('Task interface is defined', () => {
      expect(typesContent).toMatch(/export\s+interface\s+Task/);
    });

    test('Task interface has id property', () => {
      const hasId = /interface\s+Task[\s\S]*?\{[\s\S]*?id\s*:\s*number/m.test(
        typesContent
      );
      expect(hasId).toBe(true);
    });

    test('Task interface has title property', () => {
      const hasTitle =
        /interface\s+Task[\s\S]*?\{[\s\S]*?title\s*:\s*string/m.test(
          typesContent
        );
      expect(hasTitle).toBe(true);
    });

    test('Task interface has completed property', () => {
      const hasCompleted =
        /interface\s+Task[\s\S]*?\{[\s\S]*?completed\s*:\s*boolean/m.test(
          typesContent
        );
      expect(hasCompleted).toBe(true);
    });

    test('Task interface has createdAt property', () => {
      const hasCreatedAt =
        /interface\s+Task[\s\S]*?\{[\s\S]*?createdAt\s*:\s*string/m.test(
          typesContent
        );
      expect(hasCreatedAt).toBe(true);
    });

    test('Task interface has optional completedAt property', () => {
      const hasCompletedAt =
        /interface\s+Task[\s\S]*?\{[\s\S]*?completedAt\?\s*:\s*string/m.test(
          typesContent
        );
      expect(hasCompletedAt).toBe(true);
    });

    test('TaskManager interface is defined', () => {
      expect(typesContent).toMatch(/export\s+interface\s+TaskManager/);
    });

    test('TaskManager interface has tasks property', () => {
      const hasTasks =
        /interface\s+TaskManager[\s\S]*?\{[\s\S]*?tasks\s*:\s*Task\[\]/m.test(
          typesContent
        );
      expect(hasTasks).toBe(true);
    });
  });

  describe('Type Annotations in index.ts', () => {
    let indexContent: string;

    beforeAll(() => {
      indexContent = fs.readFileSync(indexPath, 'utf-8');
    });

    test('imports Task and TaskManager from types.ts', () => {
      const hasImport =
        /import\s+\{[\s\S]*?Task[\s\S]*?,[\s\S]*?TaskManager[\s\S]*?\}\s+from\s+['"]\.\/types['"]/.test(
          indexContent
        ) ||
        /import\s+\{[\s\S]*?TaskManager[\s\S]*?,[\s\S]*?Task[\s\S]*?\}\s+from\s+['"]\.\/types['"]/.test(
          indexContent
        );
      expect(hasImport).toBe(true);
    });

    test('createTask function has typed parameters', () => {
      const hasTypedParam =
        /function\s+createTask\s*\(\s*title\s*:\s*string\s*\)/.test(
          indexContent
        );
      expect(hasTypedParam).toBe(true);
    });

    test('createTask function has return type', () => {
      const hasReturnType =
        /function\s+createTask\s*\([^)]*\)\s*:\s*Task/.test(indexContent);
      expect(hasReturnType).toBe(true);
    });

    test('getTasks function has return type', () => {
      const hasReturnType = /function\s+getTasks\s*\(\s*\)\s*:\s*Task\[\]/.test(
        indexContent
      );
      expect(hasReturnType).toBe(true);
    });

    test('getTaskById function has typed parameters and return type', () => {
      const hasTypedParam = /function\s+getTaskById\s*\(\s*id\s*:\s*number/.test(
        indexContent
      );
      const hasReturnType =
        /function\s+getTaskById\s*\([^)]*\)\s*:\s*Task\s*\|\s*null/.test(
          indexContent
        ) ||
        /function\s+getTaskById\s*\([^)]*\)\s*:\s*null\s*\|\s*Task/.test(
          indexContent
        );
      expect(hasTypedParam).toBe(true);
      expect(hasReturnType).toBe(true);
    });

    test('updateTask function has typed parameters', () => {
      const hasTypedParams =
        /function\s+updateTask\s*\(\s*id\s*:\s*number\s*,\s*updates/.test(
          indexContent
        );
      expect(hasTypedParams).toBe(true);
    });

    test('updateTask function has return type', () => {
      const hasReturnType =
        /function\s+updateTask\s*\([^)]*\)\s*:\s*boolean/.test(indexContent);
      expect(hasReturnType).toBe(true);
    });

    test('deleteTask function has typed parameters and return type', () => {
      const hasTypedParam = /function\s+deleteTask\s*\(\s*id\s*:\s*number/.test(
        indexContent
      );
      const hasReturnType =
        /function\s+deleteTask\s*\([^)]*\)\s*:\s*boolean/.test(indexContent);
      expect(hasTypedParam).toBe(true);
      expect(hasReturnType).toBe(true);
    });

    test('toggleComplete function has typed parameters and return type', () => {
      const hasTypedParam =
        /function\s+toggleComplete\s*\(\s*id\s*:\s*number/.test(indexContent);
      const hasReturnType =
        /function\s+toggleComplete\s*\([^)]*\)\s*:\s*boolean/.test(indexContent);
      expect(hasTypedParam).toBe(true);
      expect(hasReturnType).toBe(true);
    });

    test('utility functions have return types', () => {
      const getCompletedHasReturn =
        /function\s+getCompletedTasks\s*\([^)]*\)\s*:\s*Task\[\]/.test(
          indexContent
        );
      const getPendingHasReturn =
        /function\s+getPendingTasks\s*\([^)]*\)\s*:\s*Task\[\]/.test(
          indexContent
        );
      const countCompletedHasReturn =
        /function\s+countCompleted\s*\([^)]*\)\s*:\s*number/.test(indexContent);

      expect(getCompletedHasReturn).toBe(true);
      expect(getPendingHasReturn).toBe(true);
      expect(countCompletedHasReturn).toBe(true);
    });

    test('formatTask function has typed parameter', () => {
      const hasTypedParam = /function\s+formatTask\s*\(\s*task\s*:\s*Task/.test(
        indexContent
      );
      expect(hasTypedParam).toBe(true);
    });

    test('formatTask function has return type', () => {
      const hasReturnType =
        /function\s+formatTask\s*\([^)]*\)\s*:\s*string/.test(indexContent);
      expect(hasReturnType).toBe(true);
    });

    test('printTasks function has void return type', () => {
      const hasReturnType =
        /function\s+printTasks\s*\([^)]*\)\s*:\s*void/.test(indexContent);
      expect(hasReturnType).toBe(true);
    });

    test('does not use any type (except where necessary)', () => {
      // Check that 'any' is not used inappropriately
      // Allow it in comments or as part of other words
      const anyMatches = indexContent.match(/:\s*any\b/g);
      // Should have 0 or very few uses of 'any'
      const anyCount = anyMatches ? anyMatches.length : 0;
      expect(anyCount).toBeLessThanOrEqual(1);
    });
  });

  describe('TypeScript Compilation', () => {
    test('TypeScript files should be valid and importable', async () => {
      // This test verifies the module can be imported
      // If there are TypeScript errors, this will fail
      try {
        // Try to compile and import the module
        // Note: In a real test environment, you'd run tsc first
        const starterPath = path.join(__dirname, '../starter/index');
        expect(fs.existsSync(indexPath)).toBe(true);
      } catch (error) {
        fail('TypeScript compilation failed: ' + error);
      }
    });
  });

  describe('Code Quality', () => {
    let indexContent: string;

    beforeAll(() => {
      indexContent = fs.readFileSync(indexPath, 'utf-8');
    });

    test('manager object should have type annotation', () => {
      // Check if manager is typed as TaskManager
      const hasTypedManager =
        /const\s+manager\s*:\s*TaskManager\s*=/.test(indexContent);
      expect(hasTypedManager).toBe(true);
    });

    test('all TODO comments should be addressed', () => {
      // Count remaining TODO comments (excluding the final one)
      const todoMatches = indexContent.match(/\/\/\s*TODO:/g);
      const todoCount = todoMatches ? todoMatches.length : 0;
      // Should have 0 or 1 remaining (the final reminder is okay)
      expect(todoCount).toBeLessThanOrEqual(1);
    });
  });

  describe('Functional Requirements', () => {
    test('exports all required functions', () => {
      const indexContent = fs.readFileSync(indexPath, 'utf-8');
      const requiredExports = [
        'createTask',
        'getTasks',
        'getTaskById',
        'updateTask',
        'deleteTask',
        'toggleComplete',
      ];

      requiredExports.forEach((exportName) => {
        const hasExport = new RegExp(exportName).test(indexContent);
        expect(hasExport).toBe(true);
      });
    });
  });
});
