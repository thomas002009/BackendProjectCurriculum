# Exercise 2: Consuming an API

**Objective:** Make your first HTTP requests to a real API
**Difficulty:** ⭐⭐ (Intermediate)
**Estimated Time:** 30 minutes

## Overview

You'll use the `fetch` API to retrieve data from JSONPlaceholder, a free fake REST API for testing. This will give you hands-on experience with GET requests, parsing JSON, and handling responses.

## What is JSONPlaceholder?

JSONPlaceholder (https://jsonplaceholder.typicode.com/) is a free online REST API that provides fake data for:
- Posts
- Comments
- Albums
- Photos
- Todos
- Users

It's perfect for practicing API calls without needing authentication or worrying about rate limits.

## Setup

1. Make sure you have Node.js installed (you should from Module 1)
2. Create a new file called `fetch-practice.ts` in this directory
3. You'll run this file with: `npx ts-node fetch-practice.ts`

## Part 1: Your First GET Request

Fetch all posts from JSONPlaceholder and log how many there are.

```typescript
async function getAllPosts() {
  // TODO: Fetch from https://jsonplaceholder.typicode.com/posts
  // TODO: Parse the JSON response
  // TODO: Log the number of posts
}

getAllPosts();
```

**Expected output:**
```
Number of posts: 100
```

### Hints
- Use `await fetch(url)`
- Use `await response.json()` to parse
- Array has a `.length` property

## Part 2: Get One Specific Post

Fetch post with ID 1 and log its title and body.

```typescript
async function getPost(id: number) {
  // TODO: Fetch from https://jsonplaceholder.typicode.com/posts/:id
  // TODO: Parse the response
  // TODO: Log the title and body
}

getPost(1);
```

**Expected output:**
```
Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
Body: quia et suscipit...
```

## Part 3: Filter with Query Parameters

Fetch all posts by user 1 using query parameters.

```typescript
async function getPostsByUser(userId: number) {
  // TODO: Fetch from https://jsonplaceholder.typicode.com/posts?userId=1
  // TODO: Parse the response
  // TODO: Log how many posts this user has
}

getPostsByUser(1);
```

**Expected output:**
```
User 1 has 10 posts
```

### Hint
Use template literals to build the URL with the query parameter:
```typescript
const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
```

## Part 4: Error Handling

Try to fetch a post that doesn't exist and handle the error gracefully.

```typescript
async function getPostWithErrorHandling(id: number) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    // TODO: Check if response.ok is false
    // TODO: If not ok, throw an error with the status code
    // TODO: Otherwise, parse and return the post

  } catch (error) {
    // TODO: Log a user-friendly error message
  }
}

// This should work
await getPostWithErrorHandling(1);

// This should show an error (post 999 doesn't exist)
await getPostWithErrorHandling(999);
```

**Expected output:**
```
Post 1: sunt aut facere...
Error: Post 999 not found (404)
```

## Part 5: Working with Related Data

Fetch a post and its comments (comments are a separate endpoint).

```typescript
async function getPostWithComments(postId: number) {
  // TODO: Fetch the post from /posts/:id
  // TODO: Fetch comments from /posts/:id/comments
  // TODO: Log the post title and number of comments
}

getPostWithComments(1);
```

**Expected output:**
```
Post: "sunt aut facere repellat provident..."
Comments: 5
```

### Hint
You can make multiple fetch calls:
```typescript
const post = await fetch(url1).then(r => r.json());
const comments = await fetch(url2).then(r => r.json());
```

## Part 6: Create Your Own Function

Write a function that fetches a random post (ID between 1-100) and logs it.

```typescript
async function getRandomPost() {
  // TODO: Generate random number between 1-100
  // TODO: Fetch that post
  // TODO: Log the post title
}

getRandomPost();
```

**Expected output:**
```
Random post: "qui est esse" (or any other post title)
```

### Hint
Generate random number:
```typescript
const randomId = Math.floor(Math.random() * 100) + 1;
```

## Bonus Challenges

If you finish early, try these:

### Bonus 1: Get User Details
Fetch user with ID 1 and log their name, email, and company name.

Endpoint: `https://jsonplaceholder.typicode.com/users/1`

### Bonus 2: List All Todos
Fetch all todos and count how many are completed vs not completed.

Endpoint: `https://jsonplaceholder.typicode.com/todos`

### Bonus 3: Search Posts
Write a function that searches for posts containing a specific word in the title.

Hint: Fetch all posts, then use `.filter()` on the array.

## Testing Your Code

Run your code with:
```bash
npx ts-node fetch-practice.ts
```

## Common Errors You Might See

1. **TypeError: fetch is not defined** (Node.js < 18)
   - Solution: Upgrade to Node.js 18+ or use `node-fetch` package

2. **SyntaxError: Cannot use import statement outside a module**
   - Solution: Make sure you're using `npx ts-node` not `node`

3. **SyntaxError: Unexpected token in JSON**
   - Solution: Check that you're calling `.json()` on the response

## What You Learned

After completing this exercise, you should understand:
- How to make GET requests with fetch
- How to parse JSON responses
- How to use query parameters
- How to handle errors
- How to work with real API data

## What's Next?

In Exercise 3, you'll build a reusable API client class that wraps fetch and makes your code cleaner and more professional!
