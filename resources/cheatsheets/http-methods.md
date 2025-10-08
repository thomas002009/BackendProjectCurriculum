# HTTP Methods Reference

Quick reference for HTTP methods and status codes used in REST APIs.

## HTTP Methods (Verbs)

### GET - Retrieve Data
**Purpose:** Fetch a resource or collection of resources

```
GET /users           // Get all users
GET /users/123       // Get user with ID 123
GET /users?role=admin  // Get users filtered by role
```

**Characteristics:**
- Read-only operation
- Safe (doesn't modify data)
- Idempotent (same request = same result)
- Can be cached
- Parameters in URL query string

**Example Response:**
```json
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### POST - Create New Resource
**Purpose:** Create a new resource

```
POST /users          // Create a new user
POST /classes        // Create a new class
```

**Characteristics:**
- Creates new data
- Not safe (modifies data)
- Not idempotent (multiple requests = multiple resources)
- Data sent in request body
- Returns the created resource

**Example Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "role": "student"
}
```

**Example Response:**
```json
{
  "id": 124,
  "name": "Jane Doe",
  "email": "jane@example.com",
  "role": "student",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### PUT - Update/Replace Resource
**Purpose:** Replace an entire resource

```
PUT /users/123       // Replace user 123 completely
```

**Characteristics:**
- Updates entire resource
- Not safe (modifies data)
- Idempotent (same request = same result)
- Requires all fields (or uses defaults for missing fields)

**Example Request Body:**
```json
{
  "name": "John Smith",
  "email": "john.smith@example.com",
  "role": "admin",
  "age": 16
}
```

### PATCH - Partial Update
**Purpose:** Update specific fields of a resource

```
PATCH /users/123     // Update only specific fields of user 123
```

**Characteristics:**
- Updates only specified fields
- Not safe (modifies data)
- Generally idempotent
- Only changed fields in request body

**Example Request Body:**
```json
{
  "email": "newemail@example.com"
}
```

### DELETE - Remove Resource
**Purpose:** Delete a resource

```
DELETE /users/123    // Delete user 123
```

**Characteristics:**
- Removes data
- Not safe (modifies data)
- Idempotent (deleting twice = same result as deleting once)
- Usually no request body
- May return deleted resource or empty response

## HTTP Status Codes

### 2xx Success

| Code | Name | Meaning | When to Use |
|------|------|---------|-------------|
| **200** | OK | Request successful | GET, PUT, PATCH successful |
| **201** | Created | Resource created | POST successful |
| **204** | No Content | Success, no content to return | DELETE successful |

### 3xx Redirection

| Code | Name | Meaning | When to Use |
|------|------|---------|-------------|
| **301** | Moved Permanently | Resource moved to new URL | Permanent redirect |
| **302** | Found | Temporary redirect | Temporary redirect |
| **304** | Not Modified | Cached version still valid | Caching |

### 4xx Client Errors

| Code | Name | Meaning | When to Use |
|------|------|---------|-------------|
| **400** | Bad Request | Invalid request data | Validation failed |
| **401** | Unauthorized | Not authenticated | User not logged in |
| **403** | Forbidden | Not authorized | User doesn't have permission |
| **404** | Not Found | Resource doesn't exist | Invalid ID or route |
| **409** | Conflict | Request conflicts with current state | Duplicate resource |
| **422** | Unprocessable Entity | Validation error | DTO validation failed |

### 5xx Server Errors

| Code | Name | Meaning | When to Use |
|------|------|---------|-------------|
| **500** | Internal Server Error | Server crashed/unexpected error | Unhandled exception |
| **502** | Bad Gateway | Invalid response from upstream | Proxy/gateway error |
| **503** | Service Unavailable | Server temporarily down | Maintenance |

## REST API Conventions

### Resource Naming
```
✅ Good:
/users
/classes
/enrollments

❌ Bad:
/getUsers
/createClass
/delete_enrollment
```

**Rules:**
- Use plural nouns
- Lowercase
- Use hyphens for multi-word resources: `/class-schedules`
- No verbs (the HTTP method is the verb!)

### URL Structure
```
GET    /users              // Get all users
POST   /users              // Create user
GET    /users/123          // Get specific user
PUT    /users/123          // Update user (full)
PATCH  /users/123          // Update user (partial)
DELETE /users/123          // Delete user

GET    /users/123/classes  // Get classes for user 123
POST   /users/123/classes  // Enroll user in class
```

### Query Parameters
```
GET /users?role=admin           // Filter by role
GET /users?age=15&role=student  // Multiple filters
GET /users?sort=name            // Sorting
GET /users?page=2&limit=20      // Pagination
GET /users?search=john          // Search
```

## Request/Response Examples

### GET Request
```http
GET /api/users/123
Host: example.com
Accept: application/json
```

**Response:**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### POST Request
```http
POST /api/users
Host: example.com
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

**Response:**
```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/users/124

{
  "id": 124,
  "name": "Jane Doe",
  "email": "jane@example.com",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### Error Response
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "statusCode": 400,
  "message": "Validation failed",
  "errors": [
    "email must be a valid email address",
    "age must be a number"
  ]
}
```

## Headers

### Common Request Headers
```http
Content-Type: application/json     // Body format
Accept: application/json            // Desired response format
Authorization: Bearer <token>       // Authentication
User-Agent: MyApp/1.0              // Client info
```

### Common Response Headers
```http
Content-Type: application/json     // Response format
Content-Length: 1234                // Body size in bytes
Location: /api/users/124            // Created resource location (201)
Cache-Control: no-cache             // Caching directives
```

## Idempotency

**Idempotent:** Multiple identical requests have the same effect as a single request.

| Method | Idempotent? | Example |
|--------|-------------|---------|
| GET | ✅ Yes | Reading data multiple times doesn't change anything |
| POST | ❌ No | Creating resource multiple times = multiple resources |
| PUT | ✅ Yes | Replacing a resource multiple times = same result |
| PATCH | ✅ Usually | Partial updates usually safe to repeat |
| DELETE | ✅ Yes | Deleting twice = same as deleting once |

## Method Selection Guide

**Creating a resource?** → `POST /resources`

**Retrieving data?** → `GET /resources` or `GET /resources/:id`

**Replacing entire resource?** → `PUT /resources/:id`

**Updating specific fields?** → `PATCH /resources/:id`

**Deleting a resource?** → `DELETE /resources/:id`

## Common Patterns

### Pagination
```
GET /users?page=2&limit=20

Response:
{
  "data": [...],
  "total": 150,
  "page": 2,
  "pageSize": 20,
  "totalPages": 8
}
```

### Filtering
```
GET /users?role=student&age=15
```

### Sorting
```
GET /users?sort=name           // Ascending
GET /users?sort=-createdAt     // Descending (- prefix)
```

### Searching
```
GET /users?search=john
GET /users?q=john
```

### Nested Resources
```
GET /users/123/enrollments          // Get user's enrollments
POST /users/123/enrollments         // Create enrollment for user
DELETE /users/123/enrollments/456   // Remove enrollment
```

## Best Practices

1. **Use nouns, not verbs** in URLs
2. **Be consistent** with naming conventions
3. **Use proper HTTP methods** - don't use GET for actions that modify data
4. **Return appropriate status codes** - help clients understand what happened
5. **Use plural nouns** for collections: `/users` not `/user`
6. **Version your API** if needed: `/api/v1/users`
7. **Include error details** in error responses
8. **Be RESTful** - resources should be nouns, methods are verbs
9. **Use query parameters** for filtering, sorting, pagination
10. **Return created resource** with 201 status after POST

## Testing APIs

### Using curl
```bash
# GET request
curl http://localhost:3000/api/users

# POST request
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com"}'

# PUT request
curl -X PUT http://localhost:3000/api/users/123 \
  -H "Content-Type: application/json" \
  -d '{"name":"John Smith","email":"john@example.com"}'

# DELETE request
curl -X DELETE http://localhost:3000/api/users/123
```

### Using REST Client (VS Code)
```http
### Get all users
GET http://localhost:3000/api/users

### Create user
POST http://localhost:3000/api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}

### Update user
PATCH http://localhost:3000/api/users/123
Content-Type: application/json

{
  "email": "newemail@example.com"
}
```

## Additional Resources

- [MDN HTTP Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [REST API Tutorial](https://restfulapi.net/)
- [HTTP Status Codes](https://httpstatuses.com/)
