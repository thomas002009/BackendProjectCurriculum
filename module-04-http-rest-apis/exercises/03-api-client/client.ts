// Exercise 3: Build an API Client
// Complete the interfaces and class below

// Part 1: Define Types
// TODO: Define a Post interface based on https://jsonplaceholder.typicode.com/posts/1
interface Post {
  // Add properties here
}

// TODO: Define a Comment interface based on https://jsonplaceholder.typicode.com/comments/1
interface Comment {
  // Add properties here
}

// TODO: Define a User interface based on https://jsonplaceholder.typicode.com/users/1
interface User {
  // Add properties here
  // Hint: User has nested objects for address and company
}

// Part 2: Create the Client Class
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
    throw new Error('Not implemented');
  }

  // TODO: Create method to get all posts
  async getAllPosts(): Promise<Post[]> {
    // Use this.request() to fetch /posts
    throw new Error('Not implemented');
  }

  // TODO: Create method to get one post
  async getPost(id: number): Promise<Post> {
    // Use this.request() to fetch /posts/:id
    throw new Error('Not implemented');
  }

  // TODO: Create method to get posts by user
  async getPostsByUser(userId: number): Promise<Post[]> {
    // Use this.request() to fetch /posts?userId=:userId
    throw new Error('Not implemented');
  }

  // TODO: Create method to get comments for a post
  async getCommentsForPost(postId: number): Promise<Comment[]> {
    // Use this.request() to fetch /posts/:id/comments
    throw new Error('Not implemented');
  }

  // TODO: Create method to get all users
  async getAllUsers(): Promise<User[]> {
    // Use this.request() to fetch /users
    throw new Error('Not implemented');
  }

  // TODO: Create method to get one user
  async getUser(id: number): Promise<User> {
    // Use this.request() to fetch /users/:id
    throw new Error('Not implemented');
  }
}

// Part 3: Test Your Client
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

// Run the tests
testClient().catch(console.error);
