# Glossary

Technical terms and definitions used throughout this curriculum.

## A

**API (Application Programming Interface)**
A set of rules and protocols that allows different software applications to communicate with each other. In this curriculum, we build REST APIs that allow frontend applications to interact with our backend.

**Async/Await**
Modern JavaScript syntax for handling asynchronous operations. Makes asynchronous code look and behave more like synchronous code.

**Authentication**
The process of verifying who a user is (usually with username/password).

**Authorization**
The process of verifying what a user has permission to do.

## B

**Backend**
The server-side of an application that handles business logic, database operations, and API endpoints. Not directly visible to users.

**Boolean**
A data type that can only be `true` or `false`.

## C

**CRUD**
Create, Read, Update, Delete - the four basic operations for managing data.

**CLI (Command Line Interface)**
A text-based interface for interacting with software (as opposed to a GUI).

**Callback**
A function passed as an argument to another function, to be executed later.

**Class**
A blueprint for creating objects with shared properties and methods.

**Client**
The frontend application or user-facing part of a system that makes requests to the server.

**Controller**
In Nest.js, a class that handles incoming HTTP requests and returns responses.

**CORS (Cross-Origin Resource Sharing)**
A security feature that controls which domains can access your API.

## D

**Database**
An organized collection of structured data stored electronically.

**Decorator**
A special syntax in TypeScript (using `@`) that adds metadata to classes, methods, or properties. Heavily used in Nest.js.

**Dependency Injection**
A design pattern where a class receives its dependencies from external sources rather than creating them itself.

**DTO (Data Transfer Object)**
An object that defines how data should be structured when sent over the network. Used for validation in Nest.js.

**DNS (Domain Name System)**
The system that translates domain names (like google.com) to IP addresses.

## E

**Endpoint**
A specific URL path in an API that performs a specific action (e.g., `/api/users`).

**Environment Variable**
Configuration values stored outside your code (like database passwords) that can change between development and production.

**Express**
A minimal web application framework for Node.js. Nest.js is built on top of Express.

## F

**Foreign Key**
A column in a database table that references the primary key of another table, creating a relationship.

**Frontend**
The client-side of an application that users interact with directly (web pages, mobile apps).

**Function**
A reusable block of code that performs a specific task.

## G

**GET Request**
HTTP method for retrieving data from a server.

**Git**
A version control system that tracks changes to files over time.

**GitHub**
A web platform for hosting Git repositories and collaborating on code.

**GUI (Graphical User Interface)**
A visual interface with buttons, windows, and menus (as opposed to CLI).

## H

**HTTP (Hypertext Transfer Protocol)**
The protocol used for transferring data over the web.

**HTTP Method**
The type of action being requested (GET, POST, PUT, PATCH, DELETE).

**HTTP Status Code**
A three-digit code indicating the result of an HTTP request (200 = success, 404 = not found, etc.).

## I

**IDE (Integrated Development Environment)**
A software application for writing code (like VS Code).

**Interface**
In TypeScript, a way to define the structure of an object.

**IP Address**
A unique numerical label assigned to each device on a network.

## J

**JSON (JavaScript Object Notation)**
A text format for representing structured data, commonly used in APIs.

**Jest**
A JavaScript testing framework.

## L

**Library**
A collection of pre-written code that you can use in your programs.

**Localhost**
Your own computer, used for local development. Usually accessed at `http://localhost`.

## M

**Method**
A function that belongs to a class or object.

**Middleware**
Code that runs between receiving a request and sending a response.

**Migration**
A file that describes changes to a database schema, allowing you to version control your database structure.

**Module**
In Nest.js, a way to organize related components (controllers, services) together.

**MVC (Model-View-Controller)**
A design pattern that separates an application into three main components.

## N

**Nest.js**
A progressive Node.js framework for building efficient, scalable server-side applications.

**Node.js**
A JavaScript runtime that allows you to run JavaScript on the server (outside the browser).

**npm (Node Package Manager)**
A tool for installing and managing JavaScript packages/libraries.

**Null**
A value that represents "nothing" or "no value".

## O

**Object**
A collection of key-value pairs (properties and methods).

**ORM (Object-Relational Mapping)**
A tool that lets you interact with a database using objects instead of SQL. Prisma is an ORM.

## P

**Package**
A reusable piece of code that you can install and use in your project.

**Parameter**
A variable in a function definition. Values passed to the function are called arguments.

**POST Request**
HTTP method for sending data to a server to create a new resource.

**PostgreSQL**
A powerful open-source relational database system.

**Primary Key**
A unique identifier for each record in a database table.

**Prisma**
A modern ORM for Node.js and TypeScript.

**Promise**
An object representing the eventual completion or failure of an asynchronous operation.

## Q

**Query**
A request to a database to retrieve or manipulate data.

**Query Parameter**
Additional data passed in a URL after a `?` (e.g., `/users?role=admin`).

## R

**Relational Database**
A database that organizes data into tables with relationships between them.

**Repository**
A storage location for code, typically managed by Git.

**REST (Representational State Transfer)**
An architectural style for designing APIs using HTTP methods and URLs.

**Route**
A URL path that maps to a specific controller method.

**Route Parameter**
A variable part of a URL path (e.g., `/users/:id` where `:id` is the parameter).

## S

**Schema**
The structure or blueprint of a database, defining tables, columns, and relationships.

**Server**
A computer or program that provides services or resources to clients.

**Service**
In Nest.js, a class that contains business logic, typically injected into controllers.

**SQL (Structured Query Language)**
A language for managing and querying relational databases.

**Status Code**
See HTTP Status Code.

**Supabase**
A hosted PostgreSQL database service with additional features.

## T

**Table**
A collection of related data in a database, organized in rows and columns.

**Terminal**
A text-based interface for entering commands (also called command line or console).

**Type**
In TypeScript, a definition of what kind of data a variable can hold.

**TypeScript**
A superset of JavaScript that adds static type checking.

## U

**Undefined**
A value indicating that a variable has been declared but not assigned a value.

**Union Type**
In TypeScript, a type that can be one of several types (e.g., `string | number`).

**URL (Uniform Resource Locator)**
The address of a resource on the web (e.g., `https://example.com/api/users`).

## V

**Validation**
The process of checking that data meets certain requirements before processing it.

**Variable**
A named container for storing data.

**Version Control**
A system for tracking changes to files over time (like Git).

## W

**Web Server**
Software that serves web pages or API responses to clients.

## Common Acronyms

- **API** - Application Programming Interface
- **CLI** - Command Line Interface
- **CORS** - Cross-Origin Resource Sharing
- **CRUD** - Create, Read, Update, Delete
- **DTO** - Data Transfer Object
- **GUI** - Graphical User Interface
- **HTTP** - Hypertext Transfer Protocol
- **IDE** - Integrated Development Environment
- **JSON** - JavaScript Object Notation
- **MVC** - Model-View-Controller
- **npm** - Node Package Manager
- **ORM** - Object-Relational Mapping
- **REST** - Representational State Transfer
- **SQL** - Structured Query Language
- **URL** - Uniform Resource Locator

## Common Commands & Terms

**`npm install`**
Install all dependencies listed in package.json

**`npm start`**
Start the application

**`npm test`**
Run tests

**`git commit`**
Save changes to the local repository

**`git push`**
Upload local commits to remote repository

**`git pull`**
Download changes from remote repository

## Nest.js-Specific Terms

**@Controller()**
Decorator that marks a class as a controller

**@Get(), @Post(), etc.**
Decorators that define HTTP method handlers

**@Body()**
Decorator to extract request body

**@Param()**
Decorator to extract route parameters

**@Query()**
Decorator to extract query parameters

**@Injectable()**
Decorator that marks a class as a provider

**Module**
A class decorated with @Module() that organizes application components

**Provider**
A class that can be injected as a dependency (usually services)

## Prisma-Specific Terms

**Schema**
The `schema.prisma` file that defines your database structure

**Model**
A table definition in Prisma schema

**Migration**
A file that describes database changes

**Prisma Client**
Auto-generated code for querying your database

**Prisma Studio**
A GUI for viewing and editing database data

## Database Terms

**Primary Key**
Unique identifier for a table row

**Foreign Key**
Column that references another table's primary key

**Relationship**
Connection between tables (one-to-many, many-to-many, one-to-one)

**Index**
Database structure that improves query performance

**Transaction**
A group of database operations that succeed or fail together

**Migration**
A version-controlled change to database schema

## HTTP Terms

**Request**
A message sent from client to server

**Response**
A message sent from server to client

**Header**
Metadata sent with HTTP requests/responses

**Body**
The main content of an HTTP request/response

**Status Code**
Three-digit code indicating the request result

## Testing Terms

**Unit Test**
Test of a single function or component in isolation

**Integration Test**
Test of how multiple components work together

**Mock**
A fake object used to simulate real behavior in tests

**Assertion**
A statement that checks if a condition is true in a test

---

**Note:** This glossary covers terms used in this curriculum. For more detailed explanations, refer to the relevant module lessons or the linked documentation.
