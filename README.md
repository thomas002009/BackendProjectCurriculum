# Backend Development Curriculum

An interactive, self-paced curriculum for learning backend web development. This repository is designed to take students from basic programming knowledge to building production-ready REST APIs with modern backend technologies.

## Course Overview

This curriculum teaches backend development specifically for building a sports coaching platform. You'll learn how to create APIs that power real web applications, working with databases, authentication, and modern backend frameworks.

**Target Audience:** 7th and 9th grade students with basic programming experience (C++) but no web development experience
**Duration:** 16 weeks total (8 weeks curriculum + 8 weeks real project work)
**Format:** Self-paced modules with automated testing and weekly 1.5-hour instruction sessions

## Technology Stack

### Core Technologies
- **Node.js** - JavaScript runtime for building server-side applications
- **TypeScript** - Typed superset of JavaScript for safer, more maintainable code
- **Nest.js** - Modern backend framework for building scalable APIs
- **Prisma** - Next-generation ORM for database operations
- **PostgreSQL** - Powerful relational database (via Supabase)
- **Express** - HTTP server framework (included with Nest.js)

### Testing & Development Tools
- **Jest** - Testing framework for unit and integration tests
- **Supertest** - HTTP assertion library for API testing
- **ESLint** - Code linting for consistency
- **Prettier** - Code formatting
- **GitHub Actions** - Automated testing on every commit

## Prerequisites

- Basic programming knowledge (variables, functions, loops, conditionals, classes from C++)
- No web development experience required
- No prior JavaScript or TypeScript knowledge required
- Git and GitHub account (setup instructions in [SETUP.md](./SETUP.md))

## Getting Started

### 1. Fork and Clone

1. Fork this repository to your own GitHub account (click "Fork" button)
2. Clone your forked repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/backend-curriculum.git
   cd backend-curriculum
   ```

### 2. Install Dependencies

```bash
npm install
```

### 3. Complete Setup

Follow the detailed setup instructions in [SETUP.md](./SETUP.md) to:
- Install required software (Node.js, Git, VS Code)
- Set up your Supabase database
- Configure environment variables
- Verify your installation

## Module Overview

| Module | Title | Topics | Estimated Time |
|--------|-------|--------|----------------|
| 01 | Git, Environment & Node.js | Version control, terminal basics, Node.js intro | 1-2 weeks |
| 02 | JavaScript Fundamentals | Variables, functions, async/await, JSON | 1-2 weeks |
| 03 | TypeScript Basics | Type safety, interfaces, type annotations | 1 week |
| 04 | HTTP & REST APIs | Client-server architecture, HTTP methods, REST principles | 1 week |
| 05 | Nest.js Part 1 | Controllers, services, dependency injection, DTOs | 2 weeks |
| 06 | Databases & SQL | Relational databases, SQL queries, PostgreSQL | 1-2 weeks |
| 07 | Prisma ORM | Schema definition, CRUD operations, migrations | 1 week |
| 08 | Nest.js Part 2 | Database integration, error handling, testing, CI/CD | 2 weeks |

**Total:** ~8-12 weeks for core curriculum

After completing the modules, you'll spend 8 weeks working on the production sports coaching platform backend.

## How the Testing System Works

Each module includes homework assignments with automated tests. This lets you check your own work immediately without waiting for manual review.

### Running Tests

```bash
# Run all tests
npm test

# Run tests for a specific module
npm test:module-01
npm test:module-02
# ... etc

# Run tests in watch mode (re-runs on file changes)
npm test:watch

# Run tests with coverage report
npm test:cov
```

### Understanding Test Results

- ✅ **Green (Passing)** - Your implementation is correct
- ❌ **Red (Failing)** - Something needs to be fixed, read the error message for guidance
- Test error messages are designed to help you understand what's wrong and guide you to solutions

### Development Workflow

1. Read the module lessons
2. Complete exercises for practice
3. Start the homework assignment
4. Write code to complete the TODOs
5. Run tests to check your work
6. Fix any failing tests
7. Commit and push to your fork
8. Move to the next module when all tests pass

## Assessment Criteria

You're ready to move to the next module when:
- ✅ All homework tests pass
- ✅ You understand the core concepts (not just copy-pasting)
- ✅ You can explain your code in your own words
- ✅ You've experimented with bonus challenges (optional but encouraged)

## Final Project Phase (Weeks 9-16)

After completing all 8 modules, you'll transition to working on the production sports coaching platform backend. You'll:

- Work on real features used by actual users
- Follow professional development practices (code review, testing, documentation)
- Start with beginner-friendly tasks and gradually take on more complex features
- Collaborate with other developers
- Build a portfolio of real-world contributions

See [final-project/README.md](./final-project/README.md) for more details.

## Resources

- [**Cheat Sheets**](./resources/cheatsheets/) - Quick references for Git, JavaScript, TypeScript, etc.
- [**Common Errors Guide**](./resources/common-errors.md) - Troubleshooting help organized by module
- [**Glossary**](./resources/glossary.md) - Definitions of technical terms
- [**Helpful Links**](./resources/helpful-links.md) - Curated external learning resources

## Getting Help

### During Development
1. Read error messages carefully - they often tell you exactly what's wrong
2. Check the [Common Errors Guide](./resources/common-errors.md)
3. Review lesson materials and code examples
4. Experiment and try different approaches

### If You're Stuck
1. Attend office hours for live help
2. Ask questions during weekly class sessions
3. Review the troubleshooting section in SETUP.md
4. Check module-specific resources and tips

## Learning Objectives

By the end of this curriculum, you will be able to:

- ✅ Build RESTful APIs with Nest.js
- ✅ Design and query relational databases with Prisma and PostgreSQL
- ✅ Write TypeScript with proper type safety
- ✅ Validate and transform data with DTOs
- ✅ Handle errors gracefully in backend applications
- ✅ Write tests for your API endpoints
- ✅ Use Git for version control and collaboration
- ✅ Set up CI/CD with GitHub Actions
- ✅ Read and understand existing backend codebases
- ✅ Contribute features to a production application

## What You'll Build

Throughout this curriculum, you'll build increasingly complex APIs for a sports coaching platform:

- User management system (registration, profiles, roles)
- Class listing and filtering
- Enrollment system
- Parent-student relationships
- Instructor scheduling
- And more in the final project phase!

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (for testing your APIs)
npm run start:dev

# Run tests
npm test

# Lint your code
npm run lint

# Format your code
npm run format

# Open Prisma Studio (database GUI)
npx prisma studio
```

## License

This curriculum is for educational purposes. All module content and exercises are designed for learning backend development.

---

**Ready to start?** Head to [SETUP.md](./SETUP.md) to get your development environment ready, then dive into [Module 01](./module-01-git-environment-nodejs/README.md)!
