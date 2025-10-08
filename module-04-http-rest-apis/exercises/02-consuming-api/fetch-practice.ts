// Exercise 2: Consuming an API with fetch
// Complete the functions below

// Part 1: Get all posts
async function getAllPosts() {
  // TODO: Fetch from https://jsonplaceholder.typicode.com/posts
  // TODO: Parse the JSON response
  // TODO: Log the number of posts
}

// Part 2: Get one specific post
async function getPost(id: number) {
  // TODO: Fetch from https://jsonplaceholder.typicode.com/posts/:id
  // TODO: Parse the response
  // TODO: Log the title and body
}

// Part 3: Filter with query parameters
async function getPostsByUser(userId: number) {
  // TODO: Fetch from https://jsonplaceholder.typicode.com/posts?userId=:userId
  // TODO: Parse the response
  // TODO: Log how many posts this user has
}

// Part 4: Error handling
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

// Part 5: Working with related data
async function getPostWithComments(postId: number) {
  // TODO: Fetch the post from /posts/:id
  // TODO: Fetch comments from /posts/:id/comments
  // TODO: Log the post title and number of comments
}

// Part 6: Create your own function
async function getRandomPost() {
  // TODO: Generate random number between 1-100
  // TODO: Fetch that post
  // TODO: Log the post title
}

// Main function to run all parts
async function main() {
  console.log('=== Part 1: Get All Posts ===');
  await getAllPosts();

  console.log('\n=== Part 2: Get One Post ===');
  await getPost(1);

  console.log('\n=== Part 3: Get Posts by User ===');
  await getPostsByUser(1);

  console.log('\n=== Part 4: Error Handling ===');
  await getPostWithErrorHandling(1);
  await getPostWithErrorHandling(999);

  console.log('\n=== Part 5: Post with Comments ===');
  await getPostWithComments(1);

  console.log('\n=== Part 6: Random Post ===');
  await getRandomPost();
}

// Run the main function
main().catch(console.error);
