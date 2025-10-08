# Lesson 3: REST Principles

## Learning Objectives

By the end of this lesson, you will:
- Understand what REST means and why it's important
- Know how to design RESTful API endpoints
- Understand resources and collections
- Learn URL patterns and naming conventions
- Be able to design a simple API

## What is REST?

**REST** stands for **Representational State Transfer**. That's a fancy name for a simple idea: a set of rules for designing web APIs that are predictable and easy to use.

Think of REST like grammar rules for writing. You could write without following grammar rules, but following them makes your writing clearer and easier to understand. Same with REST - you could design an API any way you want, but following REST makes it professional and intuitive.

### Why REST?

Before REST became popular, every API was different:
- One API might use `getUser?id=42`
- Another might use `fetch-user/42`
- Another might use `user.retrieve(42)`

REST standardized this so everyone follows the same patterns. Now, if you know REST, you can guess how most APIs work.

### The Six Principles of REST

Don't worry, you don't need to memorize these, but here's what makes an API "RESTful":

1. **Client-Server** - Separate frontend and backend (you already know this!)
2. **Stateless** - Each request has everything it needs (no memory between requests)
3. **Cacheable** - Responses can be cached to improve performance
4. **Uniform Interface** - Consistent patterns make APIs predictable
5. **Layered System** - Can have multiple servers between client and final server
6. **Code on Demand** (optional) - Server can send executable code

The most important for you is **Uniform Interface** - making your API consistent and predictable.

## Resources: The Heart of REST

In REST, everything is a **resource**. A resource is any piece of data that can be identified and manipulated.

### Examples of Resources

For the sports coaching platform:
- **Users** - Students, parents, instructors
- **Classes** - Tennis lessons, basketball camp, etc.
- **Enrollments** - Which students are in which classes
- **Instructors** - People who teach classes
- **Schedules** - When classes meet

Each resource should:
- Have a unique identifier (usually an ID number)
- Be accessible via a URL
- Support operations (GET, POST, PUT, DELETE)

### Resources vs Collections

- **Collection** - Multiple items (all users, all classes)
- **Resource** - A single item (one specific user, one specific class)

```
/users          → Collection (all users)
/users/42       → Resource (user with ID 42)

/classes        → Collection (all classes)
/classes/15     → Resource (class with ID 15)
```

## RESTful URL Patterns

REST uses predictable URL patterns based on HTTP methods and resources.

### The Standard Pattern

```
GET     /resources          → Get all items in collection
GET     /resources/:id      → Get single item by ID
POST    /resources          → Create new item
PUT     /resources/:id      → Update item by ID
DELETE  /resources/:id      Delete item by ID
```

`:id` means "put the ID number here" - it's a placeholder.

### Real Examples: Users

```javascript
GET     /api/users          // Get all users
GET     /api/users/42       // Get user with ID 42
POST    /api/users          // Create a new user
PUT     /api/users/42       // Update user 42
DELETE  /api/users/42       // Delete user 42
```

### Real Examples: Classes

```javascript
GET     /api/classes        // Get all classes
GET     /api/classes/15     // Get class with ID 15
POST    /api/classes        // Create a new class
PUT     /api/classes/15     // Update class 15
DELETE  /api/classes/15     // Delete class 15
```

Notice the pattern? Once you know REST, you can predict what endpoints exist!

## Nested Resources (Relationships)

Sometimes resources are related to each other. For example, classes have enrollments.

```javascript
// Get all enrollments for class 15
GET /api/classes/15/enrollments

// Get all classes a user is enrolled in
GET /api/users/42/enrollments

// Enroll user in a class
POST /api/classes/15/enrollments
Body: { "userId": 42 }
```

**Rule of thumb:** Don't nest more than 2 levels deep. If you need more, rethink your design.

```javascript
// Good
GET /api/classes/15/enrollments

// Too nested (avoid)
GET /api/instructors/5/classes/15/enrollments/7/payments
```

## Query Parameters for Filtering

Use query parameters (after `?`) to filter, sort, or paginate collections.

### Filtering

```javascript
// Get beginner classes
GET /api/classes?level=beginner

// Get classes taught by instructor 5
GET /api/classes?instructorId=5

// Multiple filters
GET /api/classes?level=beginner&day=monday
```

### Sorting

```javascript
// Sort by name
GET /api/classes?sort=name

// Sort by price descending
GET /api/classes?sort=-price
```

The `-` means descending order.

### Pagination

When you have lots of data, return it in pages:

```javascript
// Get page 2, 20 items per page
GET /api/users?page=2&limit=20

// Alternative: offset and limit
GET /api/users?offset=20&limit=20
```

### Searching

```javascript
// Search for users with "sarah" in name or email
GET /api/users?search=sarah
```

## Naming Conventions

Follow these rules for professional, consistent APIs:

### Use Plural Nouns for Collections

```javascript
// Good
GET /api/users
GET /api/classes
GET /api/enrollments

// Bad (singular)
GET /api/user
GET /api/class
GET /api/enrollment
```

**Exception:** If there's only ever one (like `/profile` for current user), singular is fine.

### Use Lowercase with Hyphens

```javascript
// Good
GET /api/class-schedules
GET /api/user-profiles

// Bad (camelCase in URL)
GET /api/classSchedules
GET /api/userProfiles
```

### Don't Use Verbs in URLs

The HTTP method is the verb!

```javascript
// Good
GET    /api/users/42
DELETE /api/users/42

// Bad (verb in URL)
GET    /api/getUser/42
GET    /api/deleteUser/42
```

The URL names the resource. The HTTP method says what to do with it.

### Use Nouns, Not Actions

```javascript
// Good
POST /api/enrollments
Body: { "userId": 42, "classId": 15 }

// Bad (action as resource)
POST /api/enroll
Body: { "userId": 42, "classId": 15 }
```

## Response Structure

Be consistent in how you structure responses.

### Single Resource

```javascript
GET /api/users/42

Response:
{
  "id": 42,
  "name": "Sarah Smith",
  "email": "sarah@example.com",
  "role": "student"
}
```

### Collection

```javascript
GET /api/users

Response:
{
  "data": [
    { "id": 42, "name": "Sarah Smith", ... },
    { "id": 43, "name": "John Doe", ... }
  ],
  "total": 2,
  "page": 1,
  "limit": 20
}
```

Including metadata like `total`, `page`, and `limit` helps clients implement pagination.

### Errors

```javascript
Response: 400 Bad Request
{
  "error": {
    "message": "Invalid email format",
    "field": "email",
    "code": "INVALID_EMAIL"
  }
}
```

## Complete Example: Todo App API

Let's design a RESTful API for a simple todo app.

### Resources
- **Todos** - Individual todo items
- **Lists** - Collections of todos (optional)

### Endpoints

```javascript
// TODOS
GET     /api/todos              // Get all todos
GET     /api/todos/:id          // Get one todo
POST    /api/todos              // Create todo
PUT     /api/todos/:id          // Update todo
DELETE  /api/todos/:id          // Delete todo

// Filtering
GET     /api/todos?completed=true       // Get completed todos
GET     /api/todos?priority=high        // Get high priority todos
GET     /api/todos?search=grocery       // Search todos
```

### Request/Response Examples

#### Create a Todo
```javascript
POST /api/todos
Content-Type: application/json

{
  "title": "Buy groceries",
  "completed": false,
  "priority": "high"
}

Response: 201 Created
{
  "id": 1,
  "title": "Buy groceries",
  "completed": false,
  "priority": "high",
  "createdAt": "2025-01-15T10:30:00Z"
}
```

#### Get All Todos
```javascript
GET /api/todos

Response: 200 OK
{
  "data": [
    {
      "id": 1,
      "title": "Buy groceries",
      "completed": false,
      "priority": "high"
    },
    {
      "id": 2,
      "title": "Walk the dog",
      "completed": true,
      "priority": "medium"
    }
  ],
  "total": 2
}
```

#### Update a Todo
```javascript
PUT /api/todos/1
Content-Type: application/json

{
  "title": "Buy groceries",
  "completed": true,
  "priority": "high"
}

Response: 200 OK
{
  "id": 1,
  "title": "Buy groceries",
  "completed": true,
  "priority": "high",
  "updatedAt": "2025-01-15T14:20:00Z"
}
```

#### Delete a Todo
```javascript
DELETE /api/todos/1

Response: 204 No Content
(no body)
```

## Designing the Sports Coaching API

Let's design part of the sports coaching platform API.

### Resources Needed
- Users (students, parents, instructors)
- Classes (lessons offered)
- Enrollments (which students are in which classes)

### Core Endpoints

```javascript
// USERS
GET     /api/users                      // All users
GET     /api/users/:id                  // One user
POST    /api/users                      // Create user
PUT     /api/users/:id                  // Update user
DELETE  /api/users/:id                  // Delete user

// Filter users
GET     /api/users?role=student         // Students only
GET     /api/users?role=instructor      // Instructors only

// CLASSES
GET     /api/classes                    // All classes
GET     /api/classes/:id                // One class
POST    /api/classes                    // Create class
PUT     /api/classes/:id                // Update class
DELETE  /api/classes/:id                // Delete class

// Filter classes
GET     /api/classes?level=beginner     // Beginner classes
GET     /api/classes?instructorId=5     // Classes by instructor
GET     /api/classes?day=monday         // Monday classes

// ENROLLMENTS
GET     /api/enrollments                // All enrollments
POST    /api/enrollments                // Enroll student
DELETE  /api/enrollments/:id            // Unenroll student

// Get enrollments for a user
GET     /api/users/:id/enrollments

// Get enrollments for a class
GET     /api/classes/:id/enrollments
```

## Common REST Mistakes

### 1. Using Verbs in URLs

```javascript
// Bad
POST /api/createUser
GET  /api/getUsers

// Good
POST /api/users
GET  /api/users
```

### 2. Wrong HTTP Methods

```javascript
// Bad (using GET to delete)
GET /api/users/delete/42

// Good
DELETE /api/users/42
```

### 3. Inconsistent Naming

```javascript
// Bad (mixing plural/singular)
GET /api/user
GET /api/classes

// Good (consistently plural)
GET /api/users
GET /api/classes
```

### 4. Too Much Nesting

```javascript
// Bad
GET /api/schools/1/instructors/5/classes/10/students/42/enrollments

// Good
GET /api/enrollments?studentId=42&classId=10
```

### 5. Not Using Status Codes Correctly

```javascript
// Bad (returning 200 for errors)
Response: 200 OK
{ "error": "User not found" }

// Good
Response: 404 Not Found
{ "error": "User not found" }
```

## Key Takeaways

- **REST** is a set of conventions for designing predictable APIs
- **Resources** are nouns (users, classes) accessed via URLs
- **HTTP methods** are verbs (GET, POST, PUT, DELETE)
- **URLs** identify resources: `/api/users/42`
- **Query parameters** filter and modify results: `?role=student`
- **Collections** are plural: `/api/users`
- **Single resources** include ID: `/api/users/42`
- **Consistent patterns** make APIs easy to use

## Check Your Understanding

Design REST API endpoints for a library system with books and authors:

1. How would you get all books?
2. How would you get one book by ID?
3. How would you create a new book?
4. How would you get all books by a specific author?
5. How would you delete a book?

**Answers:**
1. `GET /api/books`
2. `GET /api/books/:id`
3. `POST /api/books`
4. `GET /api/books?authorId=5` or `GET /api/authors/5/books`
5. `DELETE /api/books/:id`

## What's Next?

In the next lesson, you'll learn how to actually **make HTTP requests** from JavaScript using fetch and axios. You'll go from theory to practice!

## Further Reading

- [REST API Tutorial](https://restfulapi.net/)
- [Best Practices for REST API Design](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)
- [Microsoft REST API Guidelines](https://github.com/microsoft/api-guidelines/blob/vNext/Guidelines.md)
