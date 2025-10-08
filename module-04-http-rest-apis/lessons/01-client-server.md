# Lesson 1: Client-Server Architecture

## Learning Objectives

By the end of this lesson, you will:
- Understand what clients and servers are
- Know how the web works at a high level
- Understand the request/response cycle
- Recognize the role of HTTP in web communication

## What is Client-Server Architecture?

When you open a website or use an app, you're actually using two programs that work together:

1. **The Client** - The program you're using (browser, mobile app, etc.)
2. **The Server** - A program running on another computer somewhere that has the data you need

Think of it like ordering food at a restaurant:
- **You (the client)** look at the menu and ask the waiter for food
- **The kitchen (the server)** receives your order and prepares the food
- **The waiter (the internet)** carries messages back and forth
- **You receive your food (the response)** and enjoy it

### Clients

A **client** is any program that asks for information or services. Common clients include:
- Web browsers (Chrome, Firefox, Safari)
- Mobile apps
- Desktop applications
- Other servers (yes, servers can be clients too!)

The client's job is to:
- Display a user interface
- Send requests when the user wants something
- Receive and display the response
- Handle errors if something goes wrong

### Servers

A **server** is a program that waits for requests and sends back responses. Servers:
- Run 24/7 on powerful computers in data centers
- Store data in databases
- Process requests and prepare responses
- Send back the requested information

**Important:** "Server" can mean both the physical computer and the software running on it. Usually, we mean the software.

## How the Web Works

Let's walk through what happens when you visit a website like `www.example.com`:

### Step 1: You Type a URL
You type `www.example.com` in your browser and hit Enter.

### Step 2: DNS Lookup
Your computer asks a special server (DNS server) "What's the address for example.com?" The DNS server responds with an IP address like `192.0.2.1`.

Think of this like looking up a friend's address in a phone book. Domain names are easy for humans to remember, but computers need numeric addresses.

### Step 3: Your Browser Sends a Request
Your browser sends an HTTP request to that IP address saying "Hey, give me the homepage!"

The request includes:
- What you want (the homepage)
- How you want it (GET method)
- Information about your browser
- Other metadata

### Step 4: The Server Processes the Request
The server:
1. Receives your request
2. Figures out what you're asking for
3. Gets the data from a database or file system
4. Prepares an HTTP response
5. Sends it back to your browser

### Step 5: Your Browser Displays the Response
Your browser:
1. Receives the HTML, CSS, and JavaScript
2. Renders the page
3. Might make more requests for images, fonts, etc.
4. Shows you the final website

All of this happens in less than a second!

## The Request/Response Cycle

Every interaction between client and server follows this pattern:

```
CLIENT                          SERVER
  |                               |
  |  1. Send Request ---------->  |
  |                               |
  |                               | 2. Process Request
  |                               | 3. Prepare Response
  |                               |
  |  <---------- 4. Send Response |
  |                               |
  | 5. Display to User            |
```

### Requests Include:
- **Method** - What action to perform (GET, POST, PUT, DELETE)
- **URL** - What resource you want
- **Headers** - Metadata about the request
- **Body** - Data being sent (for POST/PUT requests)

### Responses Include:
- **Status Code** - Did it work? (200 = success, 404 = not found, 500 = server error)
- **Headers** - Metadata about the response
- **Body** - The actual data you requested (HTML, JSON, images, etc.)

## HTTP: The Language of the Web

**HTTP** (HyperText Transfer Protocol) is the set of rules that clients and servers use to communicate.

Think of it as a language with a specific format. Just like you follow grammar rules when writing in English, programs follow HTTP rules when talking to each other.

Key points about HTTP:
- It's **stateless** - Each request is independent. The server doesn't remember previous requests.
- It's **text-based** - Requests and responses are readable text (though the body can be binary like images).
- It's **reliable** - Built on top of TCP, which ensures messages arrive correctly.

### HTTP vs HTTPS

You've probably seen both `http://` and `https://` URLs.

- **HTTP** - Regular HTTP, sent in plain text
- **HTTPS** - HTTP **Secure**, encrypted so nobody can read your messages

**Always use HTTPS for anything important!** All professional websites use HTTPS now.

The `S` means your data is encrypted using TLS/SSL. This is especially important for:
- Passwords
- Credit card information
- Personal data
- Any private information

## Comparison to C++

If you've written C++ programs, you might have used:
- `cin` to get input from the user
- `cout` to display output

Client-server is similar, but instead of input/output with a user at a terminal, it's communication between two programs over the network:
- Client sends input (request) over the network
- Server sends output (response) back over the network

The main difference is the programs are running on different computers, possibly on opposite sides of the world!

## Types of Clients and Servers

### Types of Clients
1. **Web Browsers** - Most common, render HTML/CSS/JavaScript
2. **Mobile Apps** - iOS/Android apps that connect to APIs
3. **Command-line Tools** - Like `curl` or custom scripts
4. **IoT Devices** - Smart home devices, wearables, etc.

### Types of Servers
1. **Web Servers** - Serve HTML pages (like Apache, Nginx)
2. **API Servers** - Serve data in JSON format (what you'll build!)
3. **Database Servers** - Store and retrieve data (PostgreSQL, MySQL)
4. **File Servers** - Store and serve files
5. **Game Servers** - Handle multiplayer game logic

For the sports coaching platform, you'll be building an **API server** that:
- Accepts requests from the website (the client)
- Fetches data from the database
- Sends back data in JSON format

## Real-World Example: Loading a Class Schedule

Let's see how the sports coaching platform might work:

1. **Student opens the website** (client)
2. **Browser requests the classes page** → `GET /classes`
3. **Server receives the request**
   - Queries the database for all classes
   - Formats the data as JSON
4. **Server sends response** with list of classes
5. **Browser displays the classes** in a nice table

If the student wants to enroll in a class:

1. **Student clicks "Enroll" button**
2. **Browser sends enrollment request** → `POST /enrollments`
   - Body includes student ID and class ID
3. **Server receives the request**
   - Validates the student can enroll
   - Adds enrollment to database
4. **Server sends success response**
5. **Browser shows confirmation message**

## Common Misconceptions

### "The server is a website"
**Wrong!** The server is a program that sends data. The website is what your browser creates using that data.

### "Requests happen one at a time"
**Wrong!** Browsers make many requests in parallel. Loading a single page might make 50+ requests for images, fonts, scripts, etc.

### "The server remembers me"
**Sort of!** HTTP is stateless, but servers use cookies or tokens to identify you across requests.

### "Fast internet = fast website"
**Partly!** Speed also depends on:
- How fast the server processes requests
- How much data is being sent
- How many requests are needed
- Geographic distance to the server

## Key Takeaways

- **Clients request, servers respond** - This is the fundamental pattern of the web
- **HTTP is the protocol** - A set of rules for formatting requests and responses
- **Request/response cycle** - Client sends request → Server processes → Server sends response
- **Stateless communication** - Each request is independent
- **Many types of clients and servers** - Browsers and web servers are just one example

## Check Your Understanding

Before moving on, make sure you can answer these questions:

1. What is the difference between a client and a server?
2. What are the main steps in the request/response cycle?
3. What is HTTP?
4. Why is HTTPS important?
5. What happens when you type a URL and hit Enter?

## What's Next?

In the next lesson, you'll learn about **HTTP methods and status codes** - the specific commands clients use to talk to servers, and how servers indicate success or failure.

## Further Reading

- [MDN: How the Web Works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- [Khan Academy: Internet 101](https://www.khanacademy.org/computing/code-org/computers-and-the-internet)
- [HTTP Crash Course Video](https://www.youtube.com/watch?v=iYM2zFP3Zn0)
