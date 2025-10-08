# Exercise 1: HTTP Basics

**Objective:** Reinforce your understanding of HTTP methods and status codes
**Difficulty:** ⭐ (Easy)
**Estimated Time:** 15 minutes

## Overview

This is a reading and reflection exercise to help you internalize HTTP concepts before you start making real requests.

## Instructions

### Part 1: HTTP Methods

For each scenario below, identify which HTTP method should be used:

1. A student wants to see a list of all available classes
   - **Your answer:** _______________

2. A parent wants to enroll their child in a tennis class
   - **Your answer:** _______________

3. An instructor wants to change the time of their class
   - **Your answer:** _______________

4. An admin wants to cancel a class permanently
   - **Your answer:** _______________

5. A student wants to view details about one specific class
   - **Your answer:** _______________

### Part 2: Status Codes

For each scenario below, identify which status code the server should return:

1. User successfully retrieves a list of classes
   - **Your answer:** _______________

2. User tries to get a class that doesn't exist (wrong ID)
   - **Your answer:** _______________

3. User successfully creates a new account
   - **Your answer:** _______________

4. User sends invalid email format when creating account
   - **Your answer:** _______________

5. Server database crashes while processing request
   - **Your answer:** _______________

6. User successfully deletes their account
   - **Your answer:** _______________

7. User tries to delete another user's account (not allowed)
   - **Your answer:** _______________

### Part 3: Request/Response Design

Design the HTTP request and expected response for this scenario:

**Scenario:** Create a new class called "Tennis Basics" taught by instructor with ID 5, on Mondays, for beginners.

Write out:

1. **HTTP Method:** _______________

2. **URL:** _______________

3. **Request Headers:**
   ```
   Content-Type: _______________
   ```

4. **Request Body:**
   ```json
   {

   }
   ```

5. **Expected Success Status Code:** _______________

6. **Expected Response Body:**
   ```json
   {

   }
   ```

### Part 4: REST URL Design

Design RESTful URLs for these operations:

1. Get all users
   - **URL:** _______________

2. Get user with ID 42
   - **URL:** _______________

3. Get all classes
   - **URL:** _______________

4. Get all classes taught by instructor 5
   - **URL:** _______________

5. Get all enrollments for student 42
   - **URL:** _______________

## Answer Key

After completing the exercise, check your answers:

### Part 1 Answers
1. GET - Retrieving data, no changes
2. POST - Creating new enrollment
3. PUT - Updating existing class
4. DELETE - Removing the class
5. GET - Retrieving data for one class

### Part 2 Answers
1. 200 OK - Successful retrieval
2. 404 Not Found - Resource doesn't exist
3. 201 Created - Successfully created
4. 400 Bad Request - Invalid client input
5. 500 Internal Server Error - Server problem
6. 204 No Content - Successful deletion
7. 403 Forbidden - Not authorized

### Part 3 Answers
1. **Method:** POST
2. **URL:** /api/classes (or https://api.example.com/classes)
3. **Headers:** Content-Type: application/json
4. **Body:**
   ```json
   {
     "name": "Tennis Basics",
     "instructorId": 5,
     "day": "Monday",
     "level": "beginner"
   }
   ```
5. **Status:** 201 Created
6. **Response:**
   ```json
   {
     "id": 15,
     "name": "Tennis Basics",
     "instructorId": 5,
     "day": "Monday",
     "level": "beginner",
     "createdAt": "2025-01-15T10:30:00Z"
   }
   ```

### Part 4 Answers
1. GET /api/users
2. GET /api/users/42
3. GET /api/classes
4. GET /api/classes?instructorId=5
5. GET /api/users/42/enrollments (or /api/enrollments?userId=42)

## Reflection Questions

After checking your answers, think about:

1. Did any answers surprise you? Why?
2. Which status codes are still confusing?
3. How do RESTful URLs make APIs predictable?

## What's Next?

In Exercise 2, you'll make your first real HTTP requests to a public API using fetch!
