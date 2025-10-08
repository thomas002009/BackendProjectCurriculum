# Module 04: HTTP & REST APIs

**Estimated Time:** 1-2 weeks
**Difficulty:** ⭐⭐ (Intermediate)

## Overview

In this module, you'll learn how the web actually works! You'll understand how browsers talk to servers, how apps communicate over the internet, and how to design clean, professional APIs. This is the foundation for everything you'll build with Nest.js.

Think of HTTP like a language that computers use to ask for things and send responses. REST is a set of rules for organizing those conversations so they make sense.

## Prerequisites

Before starting this module, you should:
- Be comfortable with JavaScript basics (variables, functions, arrays, objects)
- Understand asynchronous code (promises, async/await)
- Know how to work with JSON data
- Have completed Modules 1-3

## Concepts Covered

- Client-server architecture
- How the web works (request/response cycle)
- HTTP methods (GET, POST, PUT, DELETE)
- HTTP status codes (200, 404, 500, etc.)
- RESTful API design principles
- API endpoints and resources
- Making HTTP requests with fetch/axios
- Handling API responses and errors
- Query parameters and request bodies

## Learning Objectives

By the end of this module, you will be able to:
- Explain how clients and servers communicate
- Identify the correct HTTP method for different operations
- Interpret HTTP status codes
- Design RESTful API endpoints
- Make HTTP requests to consume external APIs
- Handle successful responses and errors
- Parse and use JSON data from APIs
- Build a simple API client

## Module File Structure

```
module-04-http-rest-apis/
├── README.md (this file)
├── lessons/
│   ├── 01-client-server.md
│   ├── 02-http-basics.md
│   ├── 03-rest-principles.md
│   ├── 04-making-requests.md
│   └── assets/
│       └── README.md
├── exercises/
│   ├── 01-http-basics/
│   │   └── README.md
│   ├── 02-consuming-api/
│   │   ├── README.md
│   │   └── fetch-practice.ts
│   └── 03-api-client/
│       ├── README.md
│       └── client.ts
└── homework/
    ├── README.md
    ├── starter/
    │   ├── index.ts
    │   ├── types.ts
    │   ├── tsconfig.json
    │   └── package.json
    └── tests/
        └── homework.test.ts
```

## Lessons

### Lesson 1: Client-Server Architecture (01-client-server.md)
**Topics:** How the web works, browsers and servers, request/response cycle
**Estimated Time:** 30 minutes
**In-Class Activity:** Draw the flow of what happens when you visit a website

### Lesson 2: HTTP Basics (02-http-basics.md)
**Topics:** HTTP methods, status codes, headers, request/response structure
**Estimated Time:** 45 minutes
**In-Class Activity:** Explore HTTP requests using browser DevTools Network tab

### Lesson 3: REST Principles (03-rest-principles.md)
**Topics:** RESTful design, resources, endpoints, URL patterns
**Estimated Time:** 45 minutes
**In-Class Activity:** Design API endpoints for a simple todo app

### Lesson 4: Making Requests (04-making-requests.md)
**Topics:** Using fetch/axios, handling responses, error handling
**Estimated Time:** 45 minutes
**In-Class Activity:** Make requests to a public API

## Exercises

### Exercise 1: HTTP Basics (01-http-basics/)
**Objective:** Understand HTTP methods and status codes
**Difficulty:** ⭐ (Easy)
**Estimated Time:** 15 minutes
**Description:** Reading exercise to reinforce HTTP concepts

### Exercise 2: Consuming an API (02-consuming-api/)
**Objective:** Make your first HTTP requests to a real API
**Difficulty:** ⭐⭐ (Intermediate)
**Estimated Time:** 30 minutes
**Description:** Use fetch to get data from JSONPlaceholder API

### Exercise 3: Build an API Client (03-api-client/)
**Objective:** Create a reusable client for working with an API
**Difficulty:** ⭐⭐ (Intermediate)
**Estimated Time:** 45 minutes
**Description:** Build a TypeScript class that wraps API calls

## Homework Assignment

**Title:** Weather API Client
**Objective:** Build a complete API client for a weather service
**Estimated Time:** 2-3 hours
**Difficulty:** ⭐⭐ (Intermediate)

You'll create a TypeScript program that:
- Fetches weather data from a public API
- Handles different types of requests (by city, by coordinates)
- Processes and formats the API responses
- Handles errors gracefully
- Uses proper TypeScript types

### Testing Your Homework

Run the tests with:
```bash
npm run test:module-04
```

The tests will check:
- API client implementation
- Request handling for different endpoints
- Response parsing and type safety
- Error handling for invalid inputs
- Proper use of async/await

## Resources for This Module

### Helpful Links
- [MDN HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [HTTP Status Codes Explained](https://httpstatuses.com/)
- [REST API Tutorial](https://restfulapi.net/)
- [JSONPlaceholder - Test API](https://jsonplaceholder.typicode.com/)

### Cheat Sheets
- See `/resources/cheatsheets/http-methods.md` for HTTP method reference

### Common Errors
See `/resources/common-errors.md` for Module 04 troubleshooting

## Teacher Notes

### Pacing Suggestions
- **Week 1:** Lessons 1-3, Exercises 1-2
- **Week 2:** Lesson 4, Exercise 3, Homework

### Common Challenges Students Face
1. **Understanding async/await with fetch** - Remind them this is similar to Module 2 async work
2. **Choosing the right HTTP method** - Use the CRUD analogy (Create=POST, Read=GET, Update=PUT, Delete=DELETE)
3. **Error handling** - Emphasize that network requests can fail, always handle errors
4. **CORS errors** - Explain this is browser security, public APIs usually allow it
5. **API keys and rate limits** - Teach responsible API usage

### Assessment Criteria
Students are ready to move on when they can:
- [ ] Explain the request/response cycle
- [ ] Choose appropriate HTTP methods for operations
- [ ] Make successful API requests using fetch
- [ ] Handle both success and error cases
- [ ] Parse JSON responses correctly
- [ ] Pass all homework tests

### When to Move On
Students should complete all exercises and pass all homework tests before proceeding to Module 05. Understanding HTTP/REST is crucial for Nest.js work.

### Real-World Context
Emphasize that:
- The sports coaching platform frontend will make these kinds of requests to their backend
- Professional APIs follow REST principles
- Error handling is critical in production applications
- API design affects how easy the frontend is to build

## What's Next?

After completing this module, you'll move on to **Module 05: Nest.js Part 1**, where you'll build your own REST API server instead of just consuming them. You'll create the endpoints that other applications can call!

---

**Module 04 Learning Path:**
1. Complete all 4 lessons
2. Finish exercises 1-3
3. Complete homework assignment
4. Pass all tests
5. Move to Module 05

Good luck! Understanding HTTP and REST is a huge milestone in your backend journey.
