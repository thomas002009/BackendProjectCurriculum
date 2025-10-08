# Lesson 2: HTTP Basics

## Learning Objectives

By the end of this lesson, you will:
- Understand the main HTTP methods and when to use them
- Know common HTTP status codes and their meanings
- Understand the structure of HTTP requests and responses
- Learn what HTTP headers are and why they matter

## HTTP Methods

HTTP methods (also called "verbs") tell the server what action you want to perform. Think of them as commands.

### The Four Main Methods (CRUD)

Most APIs use these four methods, which map to database operations:

| HTTP Method | CRUD Operation | What It Does | Example |
|-------------|----------------|--------------|---------|
| **GET** | Read | Retrieve data | Get list of classes |
| **POST** | Create | Create new data | Create a new user |
| **PUT** | Update | Replace existing data | Update user profile |
| **DELETE** | Delete | Remove data | Delete a class |

**CRUD** stands for Create, Read, Update, Delete - the four basic operations you can do with data.

### GET - Retrieving Data

**GET** is for requesting data without changing anything on the server.

```javascript
// Get all classes
GET /api/classes

// Get a specific class by ID
GET /api/classes/42

// Get classes with filters
GET /api/classes?instructor=John&level=beginner
```

Key points about GET:
- Should **never** modify data on the server
- Can be cached by browsers
- Can be bookmarked
- Data is sent in the URL (query parameters)
- Safe to retry multiple times

**Analogy:** Like asking a librarian to find a book. They don't change anything, just retrieve what you asked for.

### POST - Creating Data

**POST** is for creating new resources.

```javascript
// Create a new user
POST /api/users
Body: {
  "name": "Sarah",
  "email": "sarah@example.com",
  "role": "student"
}
```

Key points about POST:
- Creates something new on the server
- Data is sent in the request body (not the URL)
- Not safe to retry (might create duplicates)
- Server usually returns the created resource

**Analogy:** Like filling out a form to join a new class. You're creating a new enrollment.

### PUT - Updating Data

**PUT** is for updating existing resources by replacing them completely.

```javascript
// Update a user's entire profile
PUT /api/users/42
Body: {
  "name": "Sarah Smith",
  "email": "sarah.smith@example.com",
  "role": "student"
}
```

Key points about PUT:
- Replaces the entire resource
- You must include all fields, even unchanged ones
- Same request multiple times = same result (idempotent)

**Note:** There's also **PATCH** for partial updates (changing just one field), but we'll keep it simple with PUT for now.

**Analogy:** Like rewriting your entire profile instead of just changing your phone number.

### DELETE - Removing Data

**DELETE** is for removing resources.

```javascript
// Delete a class
DELETE /api/classes/42
```

Key points about DELETE:
- Removes the resource
- Usually returns success status with no body
- Same request multiple times = same result (idempotent)

**Analogy:** Like dropping a class. Once it's dropped, dropping it again doesn't change anything.

## HTTP Status Codes

Every HTTP response includes a **status code** - a three-digit number that tells you what happened.

### Status Code Categories

Status codes are grouped by their first digit:

- **1xx (Informational)** - Request received, still processing (rare)
- **2xx (Success)** - Everything worked
- **3xx (Redirection)** - You need to go somewhere else
- **4xx (Client Error)** - You made a mistake
- **5xx (Server Error)** - The server made a mistake

### Most Common Status Codes

You'll see these all the time:

#### Success (2xx)

| Code | Name | Meaning |
|------|------|---------|
| **200** | OK | Request succeeded, here's your data |
| **201** | Created | New resource created successfully |
| **204** | No Content | Success, but no data to return |

```javascript
// Successful GET request
GET /api/classes/42
Response: 200 OK
Body: { "id": 42, "name": "Tennis Basics" }

// Successful POST request
POST /api/users
Response: 201 Created
Body: { "id": 123, "name": "Sarah" }

// Successful DELETE request
DELETE /api/classes/42
Response: 204 No Content
Body: (empty)
```

#### Client Errors (4xx)

These mean **you** did something wrong in your request.

| Code | Name | Meaning |
|------|------|---------|
| **400** | Bad Request | Your request is malformed or invalid |
| **401** | Unauthorized | You need to log in first |
| **403** | Forbidden | You're logged in but don't have permission |
| **404** | Not Found | The resource doesn't exist |
| **422** | Unprocessable Entity | Data is valid format but failed validation |

```javascript
// Trying to get a class that doesn't exist
GET /api/classes/999
Response: 404 Not Found

// Trying to create a user with invalid email
POST /api/users
Body: { "email": "not-an-email" }
Response: 400 Bad Request
Body: { "error": "Invalid email format" }

// Trying to delete someone else's enrollment
DELETE /api/enrollments/42
Response: 403 Forbidden
Body: { "error": "You can only delete your own enrollments" }
```

#### Server Errors (5xx)

These mean the **server** encountered a problem.

| Code | Name | Meaning |
|------|------|---------|
| **500** | Internal Server Error | Something broke on the server |
| **502** | Bad Gateway | Server got invalid response from another server |
| **503** | Service Unavailable | Server is overloaded or down for maintenance |

```javascript
// Server has a bug
GET /api/classes
Response: 500 Internal Server Error
Body: { "error": "Database connection failed" }
```

**Important:** If you see a 5xx error, it's not your fault! The server has a problem.

### How to Remember Status Codes

- **2xx** = "Yay, it worked!"
- **3xx** = "Go look over there"
- **4xx** = "You messed up"
- **5xx** = "We messed up"

## HTTP Request Structure

Let's look at what an actual HTTP request looks like:

```
GET /api/classes?level=beginner HTTP/1.1
Host: sports-coaching.com
User-Agent: Mozilla/5.0
Accept: application/json
Authorization: Bearer abc123token
```

### Parts of a Request

1. **Request Line** - `GET /api/classes?level=beginner HTTP/1.1`
   - Method: GET
   - Path: /api/classes
   - Query parameters: ?level=beginner
   - Protocol: HTTP/1.1

2. **Headers** - Metadata about the request
   - `Host` - Which server you're talking to
   - `User-Agent` - What client you're using
   - `Accept` - What format you want back
   - `Authorization` - Who you are (authentication token)

3. **Body** - Data being sent (only for POST/PUT)

## HTTP Response Structure

Here's what a response looks like:

```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 142
Cache-Control: max-age=3600

{
  "id": 42,
  "name": "Tennis Basics",
  "instructor": "John Smith",
  "level": "beginner"
}
```

### Parts of a Response

1. **Status Line** - `HTTP/1.1 200 OK`
   - Protocol: HTTP/1.1
   - Status code: 200
   - Status message: OK

2. **Headers** - Metadata about the response
   - `Content-Type` - Format of the body (usually application/json)
   - `Content-Length` - Size of the body in bytes
   - `Cache-Control` - How long to cache this response

3. **Body** - The actual data (JSON, HTML, image, etc.)

## HTTP Headers

Headers are like metadata - information about the information. Both requests and responses have headers.

### Common Request Headers

```javascript
// Tell server what format you accept
Accept: application/json

// Send authentication token
Authorization: Bearer your-token-here

// Tell server what you're sending
Content-Type: application/json

// Identify your client
User-Agent: MyApp/1.0
```

### Common Response Headers

```javascript
// Tell client what format you're sending
Content-Type: application/json

// Tell client how long to cache
Cache-Control: max-age=3600

// Tell client when this was created
Date: Mon, 27 Jul 2025 12:28:53 GMT

// Security headers
X-Frame-Options: DENY
```

## Content Types (MIME Types)

The `Content-Type` header tells you what format the data is in.

Common content types:
- `application/json` - JSON data (what we'll use most)
- `text/html` - HTML web page
- `text/plain` - Plain text
- `image/jpeg` - JPEG image
- `application/pdf` - PDF document

For APIs, you'll almost always use `application/json`.

## Putting It All Together

Let's walk through a complete example: creating a new user.

### The Request

```
POST /api/users HTTP/1.1
Host: sports-coaching.com
Content-Type: application/json
Accept: application/json
Content-Length: 78

{
  "name": "Sarah Smith",
  "email": "sarah@example.com",
  "role": "student"
}
```

### What the Server Does

1. Receives the request
2. Checks that the data is valid
3. Creates a new user in the database
4. Generates an ID for the new user
5. Sends back a response

### The Response (Success)

```
HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/users/123
Content-Length: 98

{
  "id": 123,
  "name": "Sarah Smith",
  "email": "sarah@example.com",
  "role": "student"
}
```

### The Response (Error)

If the email is already taken:

```
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: 56

{
  "error": "Email already exists",
  "field": "email"
}
```

## Comparison to C++

In C++, you might have functions like:

```cpp
User createUser(string name, string email) {
    // Create user
    return user;
}

User getUser(int id) {
    // Find and return user
    return user;
}
```

HTTP methods are similar:

```javascript
// POST /api/users (like createUser)
// Returns the created user

// GET /api/users/123 (like getUser)
// Returns the requested user
```

The difference is these functions are called over the network using HTTP instead of being called directly in your program.

## Best Practices

### Use the Right Method
- Don't use POST when you should use GET
- Don't use GET to delete or modify data
- Follow REST conventions

### Return Appropriate Status Codes
- 200 for successful GET
- 201 for successful POST
- 204 for successful DELETE
- 400 for validation errors
- 404 for not found
- 500 for server errors

### Include Helpful Error Messages
```javascript
// Bad
{ "error": "Error" }

// Good
{
  "error": "Invalid email format",
  "field": "email",
  "value": "not-an-email"
}
```

## Common Mistakes to Avoid

1. **Using GET to modify data** - GET should only retrieve, never change
2. **Not handling errors** - Always check status codes
3. **Wrong status codes** - Don't return 200 when there's an error
4. **Missing Content-Type** - Always specify application/json
5. **Not validating input** - Check data before processing

## Key Takeaways

- **HTTP methods** define actions: GET (read), POST (create), PUT (update), DELETE (delete)
- **Status codes** indicate results: 2xx (success), 4xx (your error), 5xx (server error)
- **Headers** provide metadata about requests and responses
- **Content-Type** specifies data format (usually application/json)
- **Requests** include method, URL, headers, and optional body
- **Responses** include status code, headers, and optional body

## Check Your Understanding

Before moving on, make sure you can answer:

1. What HTTP method should you use to get a list of users?
2. What status code indicates successful creation?
3. What's the difference between 400 and 500 errors?
4. Where does data go in a POST request?
5. What does the Content-Type header tell you?

## What's Next?

In the next lesson, you'll learn about **REST principles** - how to design clean, professional APIs that follow industry standards.

## Further Reading

- [MDN: HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [HTTP Status Codes](https://httpstatuses.com/)
- [HTTP Headers Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
