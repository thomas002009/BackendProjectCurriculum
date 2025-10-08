# Lesson 4: Making HTTP Requests

## Learning Objectives

By the end of this lesson, you will:
- Know how to make HTTP requests using fetch
- Understand how to handle responses
- Learn error handling for network requests
- Know how to send data with POST/PUT requests
- Be able to work with query parameters and headers

## The Fetch API

JavaScript has a built-in function called `fetch()` for making HTTP requests. It's available in browsers and modern Node.js.

### Basic Syntax

```javascript
fetch(url, options)
  .then(response => response.json())
  .then(data => {
    // Do something with data
  })
  .catch(error => {
    // Handle errors
  });
```

Or with async/await (cleaner!):

```javascript
async function getData() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    // Do something with data
  } catch (error) {
    // Handle errors
  }
}
```

We'll use async/await since you learned that in Module 2.

## Making GET Requests

GET is the simplest - just fetch a URL.

### Example: Get All Users

```javascript
async function getAllUsers() {
  try {
    // Make the request
    const response = await fetch('https://api.example.com/users');

    // Check if request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse JSON from response
    const users = await response.json();

    console.log('Users:', users);
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}
```

### Example: Get One User by ID

```javascript
async function getUser(id) {
  try {
    const response = await fetch(`https://api.example.com/users/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    throw error;
  }
}

// Usage
const user = await getUser(42);
console.log(user.name);
```

### Understanding the Response Object

When you call `fetch()`, you get a `Response` object:

```javascript
const response = await fetch(url);

// Useful properties
console.log(response.status);      // 200, 404, 500, etc.
console.log(response.statusText);  // "OK", "Not Found", etc.
console.log(response.ok);          // true if status 200-299
console.log(response.headers);     // Response headers

// Methods to get body
const json = await response.json();        // Parse as JSON
const text = await response.text();        // Get as plain text
const blob = await response.blob();        // Get as binary data
```

**Important:** `response.ok` is `true` only for status codes 200-299. Check this before parsing the body!

## Query Parameters

To add filters or options, use query parameters.

### Manual String Building (Not Recommended)

```javascript
const level = 'beginner';
const day = 'monday';
const url = `https://api.example.com/classes?level=${level}&day=${day}`;
```

### Using URLSearchParams (Recommended)

```javascript
async function getClasses(filters) {
  // Build query parameters
  const params = new URLSearchParams();

  if (filters.level) {
    params.append('level', filters.level);
  }

  if (filters.day) {
    params.append('day', filters.day);
  }

  if (filters.instructorId) {
    params.append('instructorId', filters.instructorId);
  }

  // Construct URL with parameters
  const url = `https://api.example.com/classes?${params.toString()}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

// Usage
const beginnerClasses = await getClasses({ level: 'beginner', day: 'monday' });
```

URLSearchParams automatically:
- Encodes special characters
- Formats the query string correctly
- Handles empty values

## Making POST Requests

POST requests create new resources. You need to send data in the request body.

### Example: Create a User

```javascript
async function createUser(userData) {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const newUser = await response.json();
    console.log('Created user:', newUser);
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

// Usage
const user = await createUser({
  name: 'Sarah Smith',
  email: 'sarah@example.com',
  role: 'student',
});
```

### Breaking Down the Options

```javascript
{
  method: 'POST',                    // HTTP method
  headers: {                         // Request headers
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userData),   // Convert object to JSON string
}
```

**Important:**
- Use `JSON.stringify()` to convert JavaScript objects to JSON strings
- Always set `Content-Type: application/json` when sending JSON
- The body must be a string, not an object

## Making PUT Requests

PUT requests update existing resources.

### Example: Update a User

```javascript
async function updateUser(id, updates) {
  try {
    const response = await fetch(`https://api.example.com/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const updatedUser = await response.json();
    return updatedUser;
  } catch (error) {
    console.error(`Error updating user ${id}:`, error);
    throw error;
  }
}

// Usage
const updated = await updateUser(42, {
  name: 'Sarah Johnson',
  email: 'sarah.johnson@example.com',
  role: 'student',
});
```

## Making DELETE Requests

DELETE requests remove resources.

### Example: Delete a User

```javascript
async function deleteUser(id) {
  try {
    const response = await fetch(`https://api.example.com/users/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // DELETE often returns 204 No Content (no body)
    if (response.status === 204) {
      console.log('User deleted successfully');
      return;
    }

    // Some APIs return the deleted resource
    const deletedUser = await response.json();
    return deletedUser;
  } catch (error) {
    console.error(`Error deleting user ${id}:`, error);
    throw error;
  }
}

// Usage
await deleteUser(42);
```

## Working with Headers

Headers provide metadata about requests and responses.

### Setting Request Headers

```javascript
const response = await fetch(url, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-token-here',
    'Accept': 'application/json',
  },
});
```

### Common Request Headers

```javascript
{
  // Tell server what format you're sending
  'Content-Type': 'application/json',

  // Authentication token
  'Authorization': 'Bearer abc123token',

  // Tell server what format you want back
  'Accept': 'application/json',

  // Custom headers (usually start with X-)
  'X-API-Key': 'your-api-key',
}
```

### Reading Response Headers

```javascript
const response = await fetch(url);

// Get a specific header
const contentType = response.headers.get('Content-Type');
console.log('Content-Type:', contentType);

// Check if header exists
if (response.headers.has('X-RateLimit-Remaining')) {
  const remaining = response.headers.get('X-RateLimit-Remaining');
  console.log('API calls remaining:', remaining);
}

// Iterate over all headers
response.headers.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});
```

## Error Handling

Network requests can fail in many ways. Always handle errors!

### Types of Errors

1. **Network errors** - No internet, server down
2. **HTTP errors** - 404, 500, etc.
3. **Parsing errors** - Response isn't valid JSON
4. **Timeout errors** - Request takes too long

### Comprehensive Error Handling

```javascript
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);

    // Check for HTTP errors
    if (!response.ok) {
      // Try to get error details from response
      let errorMessage = `HTTP error! status: ${response.status}`;

      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } catch {
        // Response body isn't JSON, use default message
      }

      throw new Error(errorMessage);
    }

    // Parse response
    const data = await response.json();
    return data;

  } catch (error) {
    // Network error or other problem
    if (error.name === 'TypeError') {
      console.error('Network error:', error.message);
      throw new Error('Unable to connect to server');
    }

    // Re-throw other errors
    throw error;
  }
}
```

### Handling Specific Status Codes

```javascript
async function getUser(id) {
  const response = await fetch(`https://api.example.com/users/${id}`);

  // Handle different status codes
  switch (response.status) {
    case 200:
      return await response.json();

    case 404:
      throw new Error(`User ${id} not found`);

    case 401:
      throw new Error('You need to log in first');

    case 403:
      throw new Error('You don\'t have permission to view this user');

    case 500:
      throw new Error('Server error. Please try again later.');

    default:
      throw new Error(`Unexpected error: ${response.status}`);
  }
}
```

## Using Axios (Alternative to Fetch)

Axios is a popular library that makes HTTP requests easier. It has some advantages over fetch:
- Automatically parses JSON
- Better error handling
- Request/response interceptors
- Easier to cancel requests

### Installing Axios

```bash
npm install axios
```

### Using Axios

```javascript
import axios from 'axios';

// GET request
const users = await axios.get('https://api.example.com/users');
console.log(users.data);  // No need to call .json()

// POST request
const newUser = await axios.post('https://api.example.com/users', {
  name: 'Sarah Smith',
  email: 'sarah@example.com',
});
console.log(newUser.data);

// Axios automatically throws on HTTP errors
try {
  const user = await axios.get('https://api.example.com/users/999');
} catch (error) {
  if (error.response) {
    // Server responded with error status
    console.log('Error:', error.response.status);
    console.log('Data:', error.response.data);
  } else {
    // Network error
    console.log('Network error:', error.message);
  }
}
```

For this course, we'll use **fetch** since it's built-in, but axios is popular in professional projects.

## Building an API Client Class

Let's put it all together and build a reusable API client.

```javascript
class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;

    // Add default headers
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `HTTP error! status: ${response.status}`);
      }

      // Handle 204 No Content
      if (response.status === 204) {
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  }

  async get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

// Usage
const api = new ApiClient('https://api.example.com');

// Clean, simple calls
const users = await api.get('/users');
const user = await api.get('/users/42');
const newUser = await api.post('/users', { name: 'Sarah', email: 'sarah@example.com' });
await api.delete('/users/42');
```

This pattern is what you'll use in your homework!

## Real-World Example: JSONPlaceholder

JSONPlaceholder is a free fake API for testing. Let's use it!

```javascript
async function playWithJSONPlaceholder() {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  // Get all posts
  const posts = await fetch(`${baseURL}/posts`).then(r => r.json());
  console.log('Number of posts:', posts.length);

  // Get one post
  const post = await fetch(`${baseURL}/posts/1`).then(r => r.json());
  console.log('Post title:', post.title);

  // Create a post (fake - won't actually save)
  const newPost = await fetch(`${baseURL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'My New Post',
      body: 'This is the content',
      userId: 1,
    }),
  }).then(r => r.json());
  console.log('Created post:', newPost);
}
```

Try this yourself in the exercises!

## Key Takeaways

- **fetch()** is built-in JavaScript for making HTTP requests
- **async/await** makes fetch code cleaner and easier to read
- **Always check response.ok** before parsing the body
- **Use JSON.stringify()** to send data in POST/PUT requests
- **Set Content-Type header** to application/json when sending JSON
- **Handle errors** - network requests can fail
- **URLSearchParams** helps build query strings
- **API client classes** make code reusable and cleaner

## Common Mistakes to Avoid

1. **Forgetting await**
   ```javascript
   // Wrong - returns a Promise, not data
   const users = fetch(url);

   // Right
   const users = await fetch(url);
   ```

2. **Not checking response.ok**
   ```javascript
   // Wrong - might try to parse error as JSON
   const data = await response.json();

   // Right
   if (!response.ok) throw new Error();
   const data = await response.json();
   ```

3. **Forgetting to stringify body**
   ```javascript
   // Wrong - sends [object Object]
   body: userData

   // Right
   body: JSON.stringify(userData)
   ```

4. **No error handling**
   ```javascript
   // Wrong - errors will crash your app
   const data = await fetch(url).then(r => r.json());

   // Right
   try {
     const response = await fetch(url);
     if (!response.ok) throw new Error();
     const data = await response.json();
   } catch (error) {
     console.error(error);
   }
   ```

## Check Your Understanding

Before moving on, write code to:

1. Fetch all todos from JSONPlaceholder
2. Create a new todo with POST
3. Handle a 404 error gracefully
4. Build a URL with query parameters

## What's Next?

Now you know how to consume APIs! In Module 05, you'll learn to **build your own API** using Nest.js. Instead of making requests, you'll be handling them!

## Further Reading

- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [JSONPlaceholder - Free Test API](https://jsonplaceholder.typicode.com/)
- [Axios Documentation](https://axios-http.com/docs/intro)
