/**
 * Module 02 Homework - Test Suite
 *
 * This test suite validates the todo CLI application functionality.
 * Students can run these tests to verify their implementation.
 *
 * Run tests with: npm test
 */

const fs = require('fs').promises;
const path = require('path');

// Mock fs.promises to avoid actual file operations during testing
jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn(),
    writeFile: jest.fn(),
  },
}));

// Import the functions to test
// Note: In a real implementation, you would export these functions from index.js
// For now, we'll assume they are exported for testing purposes

describe('Todo CLI Application', () => {
  let mockTodos;

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();

    // Setup mock todos data
    mockTodos = [
      {
        id: 1,
        title: 'Learn JavaScript',
        status: 'completed',
        createdAt: '2025-01-10T14:30:00.000Z',
      },
      {
        id: 2,
        title: 'Build todo app',
        status: 'active',
        createdAt: '2025-01-12T09:15:00.000Z',
      },
      {
        id: 3,
        title: 'Write tests',
        status: 'active',
        createdAt: '2025-01-13T16:45:00.000Z',
      },
    ];
  });

  describe('loadTodos()', () => {
    it('should load todos from the data file', async () => {
      // Setup: Mock fs.readFile to return mock data
      fs.readFile.mockResolvedValue(JSON.stringify(mockTodos));

      // Note: This is a template test
      // Students should export loadTodos() from index.js to make this work
      // const todos = await loadTodos();

      // Verify
      // expect(todos).toEqual(mockTodos);
      // expect(fs.readFile).toHaveBeenCalledWith(
      //   expect.stringContaining('data.json'),
      //   'utf8'
      // );
    });

    it('should return empty array when data file does not exist', async () => {
      // Setup: Mock fs.readFile to throw ENOENT error
      const error = new Error('ENOENT');
      error.code = 'ENOENT';
      fs.readFile.mockRejectedValue(error);

      // Execute and verify
      // const todos = await loadTodos();
      // expect(todos).toEqual([]);
    });

    it('should throw error for other file read errors', async () => {
      // Setup: Mock fs.readFile to throw permission error
      const error = new Error('Permission denied');
      error.code = 'EACCES';
      fs.readFile.mockRejectedValue(error);

      // Execute and verify
      // await expect(loadTodos()).rejects.toThrow('Permission denied');
    });
  });

  describe('saveTodos()', () => {
    it('should save todos to the data file with pretty formatting', async () => {
      // Setup
      fs.writeFile.mockResolvedValue();

      // Execute
      // await saveTodos(mockTodos);

      // Verify: Check that writeFile was called with pretty-formatted JSON
      // expect(fs.writeFile).toHaveBeenCalledWith(
      //   expect.stringContaining('data.json'),
      //   JSON.stringify(mockTodos, null, 2),
      //   'utf8'
      // );
    });

    it('should handle write errors gracefully', async () => {
      // Setup: Mock fs.writeFile to throw error
      fs.writeFile.mockRejectedValue(new Error('Disk full'));

      // Execute and verify
      // await expect(saveTodos(mockTodos)).rejects.toThrow('Disk full');
    });
  });

  describe('generateId()', () => {
    it('should return 1 for empty todos array', () => {
      // const id = generateId([]);
      // expect(id).toBe(1);
    });

    it('should return max ID + 1 for non-empty array', () => {
      // const id = generateId(mockTodos);
      // expect(id).toBe(4); // Max ID is 3, so next should be 4
    });

    it('should handle non-sequential IDs correctly', () => {
      // const todos = [
      //   { id: 1, title: 'First' },
      //   { id: 5, title: 'Fifth' },
      //   { id: 3, title: 'Third' },
      // ];
      // const id = generateId(todos);
      // expect(id).toBe(6); // Max ID is 5, so next should be 6
    });
  });

  describe('addTodo()', () => {
    beforeEach(() => {
      fs.readFile.mockResolvedValue(JSON.stringify(mockTodos));
      fs.writeFile.mockResolvedValue();
    });

    it('should add a new todo with correct structure', async () => {
      // Execute
      // await addTodo('New task');

      // Verify: Check that the new todo has the correct structure
      // expect(fs.writeFile).toHaveBeenCalled();
      // const savedData = JSON.parse(fs.writeFile.mock.calls[0][1]);
      // const newTodo = savedData[savedData.length - 1];

      // expect(newTodo).toMatchObject({
      //   id: expect.any(Number),
      //   title: 'New task',
      //   status: 'active',
      //   createdAt: expect.any(String),
      // });
    });

    it('should generate unique IDs for new todos', async () => {
      // Execute: Add multiple todos
      // await addTodo('Task 1');
      // await addTodo('Task 2');

      // Verify: Each todo should have a unique, incrementing ID
      // const calls = fs.writeFile.mock.calls;
      // const todos1 = JSON.parse(calls[0][1]);
      // const todos2 = JSON.parse(calls[1][1]);

      // const id1 = todos1[todos1.length - 1].id;
      // const id2 = todos2[todos2.length - 1].id;

      // expect(id2).toBe(id1 + 1);
    });

    it('should set status to "active" for new todos', async () => {
      // await addTodo('New active task');

      // const savedData = JSON.parse(fs.writeFile.mock.calls[0][1]);
      // const newTodo = savedData[savedData.length - 1];
      // expect(newTodo.status).toBe('active');
    });

    it('should set createdAt to current timestamp', async () => {
      // const beforeTime = new Date().toISOString();
      // await addTodo('New task');
      // const afterTime = new Date().toISOString();

      // const savedData = JSON.parse(fs.writeFile.mock.calls[0][1]);
      // const newTodo = savedData[savedData.length - 1];

      // expect(newTodo.createdAt).toBeDefined();
      // expect(newTodo.createdAt >= beforeTime).toBe(true);
      // expect(newTodo.createdAt <= afterTime).toBe(true);
    });

    it('should trim whitespace from todo title', async () => {
      // await addTodo('  Task with spaces  ');

      // const savedData = JSON.parse(fs.writeFile.mock.calls[0][1]);
      // const newTodo = savedData[savedData.length - 1];
      // expect(newTodo.title).toBe('Task with spaces');
    });

    it('should reject empty titles', async () => {
      // Test empty string
      // await expect(addTodo('')).rejects.toThrow();

      // Test whitespace-only string
      // await expect(addTodo('   ')).rejects.toThrow();
    });
  });

  describe('completeTodo()', () => {
    beforeEach(() => {
      fs.readFile.mockResolvedValue(JSON.stringify(mockTodos));
      fs.writeFile.mockResolvedValue();
    });

    it('should mark an active todo as completed', async () => {
      // await completeTodo(2);

      // const savedData = JSON.parse(fs.writeFile.mock.calls[0][1]);
      // const completedTodo = savedData.find((t) => t.id === 2);
      // expect(completedTodo.status).toBe('completed');
    });

    it('should save changes to the data file', async () => {
      // await completeTodo(2);

      // expect(fs.writeFile).toHaveBeenCalledWith(
      //   expect.stringContaining('data.json'),
      //   expect.any(String),
      //   'utf8'
      // );
    });

    it('should not modify other todos', async () => {
      // await completeTodo(2);

      // const savedData = JSON.parse(fs.writeFile.mock.calls[0][1]);
      // expect(savedData.find((t) => t.id === 1)).toEqual(mockTodos[0]);
      // expect(savedData.find((t) => t.id === 3)).toEqual(mockTodos[2]);
    });

    it('should handle non-existent todo IDs', async () => {
      // await expect(completeTodo(999)).rejects.toThrow(/not found/i);
    });

    it('should handle invalid ID formats', async () => {
      // await expect(completeTodo('invalid')).rejects.toThrow();
      // await expect(completeTodo(null)).rejects.toThrow();
    });
  });

  describe('deleteTodo()', () => {
    beforeEach(() => {
      fs.readFile.mockResolvedValue(JSON.stringify(mockTodos));
      fs.writeFile.mockResolvedValue();
    });

    it('should remove the specified todo from the array', async () => {
      // await deleteTodo(2);

      // const savedData = JSON.parse(fs.writeFile.mock.calls[0][1]);
      // expect(savedData).toHaveLength(2);
      // expect(savedData.find((t) => t.id === 2)).toBeUndefined();
    });

    it('should save changes to the data file', async () => {
      // await deleteTodo(2);

      // expect(fs.writeFile).toHaveBeenCalledWith(
      //   expect.stringContaining('data.json'),
      //   expect.any(String),
      //   'utf8'
      // );
    });

    it('should not modify other todos', async () => {
      // await deleteTodo(2);

      // const savedData = JSON.parse(fs.writeFile.mock.calls[0][1]);
      // expect(savedData).toContainEqual(mockTodos[0]);
      // expect(savedData).toContainEqual(mockTodos[2]);
    });

    it('should handle non-existent todo IDs', async () => {
      // await expect(deleteTodo(999)).rejects.toThrow(/not found/i);
    });

    it('should handle invalid ID formats', async () => {
      // await expect(deleteTodo('invalid')).rejects.toThrow();
      // await expect(deleteTodo(null)).rejects.toThrow();
    });
  });

  describe('listTodos() - Filtering', () => {
    beforeEach(() => {
      fs.readFile.mockResolvedValue(JSON.stringify(mockTodos));
    });

    it('should list all todos when filter is "all"', async () => {
      // const consoleSpy = jest.spyOn(console, 'log');
      // await listTodos('all');

      // expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Learn JavaScript'));
      // expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Build todo app'));
      // expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Write tests'));

      // consoleSpy.mockRestore();
    });

    it('should list only active todos when filter is "active"', async () => {
      // const consoleSpy = jest.spyOn(console, 'log');
      // await listTodos('active');

      // const output = consoleSpy.mock.calls.map((call) => call[0]).join('\n');
      // expect(output).toContain('Build todo app');
      // expect(output).toContain('Write tests');
      // expect(output).not.toContain('Learn JavaScript');

      // consoleSpy.mockRestore();
    });

    it('should list only completed todos when filter is "completed"', async () => {
      // const consoleSpy = jest.spyOn(console, 'log');
      // await listTodos('completed');

      // const output = consoleSpy.mock.calls.map((call) => call[0]).join('\n');
      // expect(output).toContain('Learn JavaScript');
      // expect(output).not.toContain('Build todo app');
      // expect(output).not.toContain('Write tests');

      // consoleSpy.mockRestore();
    });

    it('should display helpful message when no todos match filter', async () => {
      // Test with empty array
      // fs.readFile.mockResolvedValue('[]');
      // const consoleSpy = jest.spyOn(console, 'log');

      // await listTodos('active');

      // const output = consoleSpy.mock.calls.map((call) => call[0]).join('\n');
      // expect(output).toMatch(/no.*todos|empty/i);

      // consoleSpy.mockRestore();
    });
  });

  describe('Error Handling', () => {
    it('should handle corrupted JSON data gracefully', async () => {
      // Setup: Mock fs.readFile to return invalid JSON
      fs.readFile.mockResolvedValue('{ invalid json }');

      // await expect(loadTodos()).rejects.toThrow();
    });

    it('should handle file system errors appropriately', async () => {
      // Setup: Mock fs.readFile to throw unexpected error
      fs.readFile.mockRejectedValue(new Error('Unexpected error'));

      // await expect(loadTodos()).rejects.toThrow('Unexpected error');
    });
  });

  describe('Data Persistence', () => {
    it('should maintain data integrity across operations', async () => {
      // Setup
      fs.readFile.mockResolvedValue(JSON.stringify(mockTodos));
      fs.writeFile.mockResolvedValue();

      // Execute: Perform multiple operations
      // await addTodo('New task');
      // await completeTodo(2);
      // await deleteTodo(1);

      // Verify: Final state should reflect all changes
      // const finalData = JSON.parse(
      //   fs.writeFile.mock.calls[fs.writeFile.mock.calls.length - 1][1]
      // );

      // expect(finalData).toHaveLength(3); // 3 original + 1 added - 1 deleted
      // expect(finalData.find((t) => t.id === 1)).toBeUndefined(); // Deleted
      // expect(finalData.find((t) => t.id === 2).status).toBe('completed'); // Completed
      // expect(finalData.find((t) => t.title === 'New task')).toBeDefined(); // Added
    });
  });
});

// Note to students:
// Many tests are commented out because they require you to export functions from index.js
// Once you've implemented and exported the functions, uncomment the tests to verify your work
//
// To make functions testable, add this at the end of index.js:
// module.exports = { loadTodos, saveTodos, generateId, addTodo, completeTodo, deleteTodo, listTodos };
