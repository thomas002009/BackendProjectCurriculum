# Exercise 3: Build an API Client

**Objective:** Create a reusable TypeScript class for working with APIs
**Difficulty:** ⭐⭐ (Intermediate)
**Estimated Time:** 45 minutes

## Overview

Instead of writing `fetch()` calls everywhere, professional developers create reusable API client classes. This makes code cleaner, reduces duplication, and makes it easier to add features like authentication or error handling.

You'll build a `JsonPlaceholderClient` class that wraps the JSONPlaceholder API.

## What You'll Build

A TypeScript class with methods like:
```typescript
const client = new JsonPlaceholderClient();

const posts = await client.getAllPosts();
const post = await client.getPost(1);
const userPosts = await client.getPostsByUser(1);
```

Much cleaner than writing fetch calls everywhere!

## Setup

1. You'll work in the `client.ts` file in this directory
2. Run with: `npx ts-node client.ts`

## Part 1: Define Types

First, define TypeScript interfaces for the data you'll receive.

```typescript
// TODO: Define a Post interface
interface Post {
  // What properties does a post have?
  // Check https://jsonplaceholder.typicode.com/posts/1 to see
}

// TODO: Define a Comment interface
interface Comment {
  // What properties does a comment have?
  // Check https://jsonplaceholder.typicode.com/comments/1 to see
}

// TODO: Define a User interface
interface User {
  // What properties does a user have?
  // Check https://jsonplaceholder.typicode.com/users/1 to see
  // Hint: User has nested objects for address and company
}
```

### Hints
- Look at the actual API responses to see what fields exist
- Use appropriate types: `number`, `string`, `boolean`
- For nested objects, create separate interfaces

## Part 2: Create the Client Class

Build a class that handles API calls.

```typescript
class JsonPlaceholderClient {
  private baseURL: string;

  constructor() {
    this.baseURL = 'https://jsonplaceholder.typicode.com';
  }

  // TODO: Create a private helper method for making requests
  private async request<T>(endpoint: string): Promise<T> {
    // This method should:
    // 1. Build the full URL (baseURL + endpoint)
    // 2. Make the fetch request
    // 3. Check if response.ok
    // 4. If not ok, throw an error
    // 5. Parse and return JSON
  }

  // TODO: Create method to get all posts
  async getAllPosts(): Promise<Post[]> {
    // Use this.request() to fetch /posts
  }

  // TODO: Create method to get one post
  async getPost(id: number): Promise<Post> {
    // Use this.request() to fetch /posts/:id
  }

  // TODO: Create method to get posts by user
  async getPostsByUser(userId: number): Promise<Post[]> {
    // Use this.request() to fetch /posts?userId=:userId
  }

  // TODO: Create method to get comments for a post
  async getCommentsForPost(postId: number): Promise<Comment[]> {
    // Use this.request() to fetch /posts/:id/comments
  }

  // TODO: Create method to get all users
  async getAllUsers(): Promise<User[]> {
    // Use this.request() to fetch /users
  }

  // TODO: Create method to get one user
  async getUser(id: number): Promise<User> {
    // Use this.request() to fetch /users/:id
  }
}
```

## Part 3: Test Your Client

Write a test function that uses your client.

```typescript
async function testClient() {
  const client = new JsonPlaceholderClient();

  // Test 1: Get all posts
  console.log('=== Test 1: Get All Posts ===');
  const posts = await client.getAllPosts();
  console.log(`Found ${posts.length} posts`);
  console.log(`First post: ${posts[0].title}`);

  // Test 2: Get one post
  console.log('\n=== Test 2: Get One Post ===');
  const post = await client.getPost(1);
  console.log(`Post ${post.id}: ${post.title}`);

  // Test 3: Get posts by user
  console.log('\n=== Test 3: Get Posts by User ===');
  const userPosts = await client.getPostsByUser(1);
  console.log(`User 1 has ${userPosts.length} posts`);

  // Test 4: Get comments
  console.log('\n=== Test 4: Get Comments ===');
  const comments = await client.getCommentsForPost(1);
  console.log(`Post 1 has ${comments.length} comments`);

  // Test 5: Get user
  console.log('\n=== Test 5: Get User ===');
  const user = await client.getUser(1);
  console.log(`User: ${user.name} (${user.email})`);

  // Test 6: Error handling
  console.log('\n=== Test 6: Error Handling ===');
  try {
    await client.getPost(999);
  } catch (error) {
    console.log('Caught error:', (error as Error).message);
  }
}

testClient().catch(console.error);
```

## Expected Output

When you run your client, you should see:

```
=== Test 1: Get All Posts ===
Found 100 posts
First post: sunt aut facere repellat provident occaecati excepturi optio reprehenderit

=== Test 2: Get One Post ===
Post 1: sunt aut facere repellat provident occaecati excepturi optio reprehenderit

=== Test 3: Get Posts by User ===
User 1 has 10 posts

=== Test 4: Get Comments ===
Post 1 has 5 comments

=== Test 5: Get User ===
User: Leanne Graham (Sincere@april.biz)

=== Test 6: Error Handling ===
Caught error: HTTP error! status: 404
```

## Part 4: Add Features (Bonus)

If you finish early, enhance your client with:

### Bonus 1: Support POST Requests

Add methods to create resources:

```typescript
async createPost(post: Omit<Post, 'id'>): Promise<Post> {
  // Make POST request to /posts
  // Include Content-Type header
  // Send JSON body
}
```

Note: JSONPlaceholder won't actually save the post, but will return a fake ID.

### Bonus 2: Add Caching

Store results in memory so you don't fetch the same data twice:

```typescript
class JsonPlaceholderClient {
  private baseURL: string;
  private cache: Map<string, any>;

  constructor() {
    this.baseURL = 'https://jsonplaceholder.typicode.com';
    this.cache = new Map();
  }

  private async request<T>(endpoint: string): Promise<T> {
    // Check if data is in cache
    // If yes, return cached data
    // If no, fetch and store in cache
  }
}
```

### Bonus 3: Add Query Parameter Support

Enhance the request method to handle query parameters:

```typescript
private async request<T>(
  endpoint: string,
  params?: Record<string, string | number>
): Promise<T> {
  // Build URL with query parameters using URLSearchParams
}
```

## What You Learned

After completing this exercise, you should understand:
- How to organize API calls in a class
- How to use TypeScript generics (`<T>`)
- How to define interfaces for API data
- How to create reusable, maintainable code
- How to handle errors in a centralized way

## Comparison to Homework

This exercise is similar to what you'll do in the homework, but simpler. In the homework, you'll build a weather API client with more features.

## Common Issues

### TypeScript Errors
If you see "Property does not exist", make sure your interfaces match the actual API response.

### Fetch Not Defined
Use Node.js 18+ or install `node-fetch`.

### 404 Errors
Check that your URLs are correct. Use browser or Postman to test the API directly.

## What's Next?

You're ready for the homework! You'll build a weather API client using the same patterns you practiced here.
