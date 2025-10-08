# SQL Reference

Essential SQL commands for working with PostgreSQL in this curriculum.

## Basic Queries

### SELECT - Retrieve Data

```sql
-- Get all columns from a table
SELECT * FROM users;

-- Get specific columns
SELECT name, email FROM users;

-- Get unique values
SELECT DISTINCT role FROM users;

-- Limit results
SELECT * FROM users LIMIT 10;
```

### WHERE - Filter Results

```sql
-- Exact match
SELECT * FROM users WHERE role = 'admin';

-- Numeric comparison
SELECT * FROM users WHERE age >= 18;
SELECT * FROM users WHERE age BETWEEN 13 AND 17;

-- Text patterns (LIKE)
SELECT * FROM users WHERE name LIKE 'John%';  -- Starts with 'John'
SELECT * FROM users WHERE email LIKE '%@gmail.com';  -- Ends with
SELECT * FROM users WHERE name LIKE '%smith%';  -- Contains 'smith'

-- Multiple conditions
SELECT * FROM users WHERE role = 'student' AND age >= 15;
SELECT * FROM users WHERE role = 'admin' OR role = 'teacher';

-- IN operator
SELECT * FROM users WHERE role IN ('admin', 'teacher', 'staff');

-- NULL checks
SELECT * FROM users WHERE age IS NULL;
SELECT * FROM users WHERE age IS NOT NULL;

-- NOT operator
SELECT * FROM users WHERE NOT role = 'guest';
```

### ORDER BY - Sort Results

```sql
-- Ascending (default)
SELECT * FROM users ORDER BY name;
SELECT * FROM users ORDER BY name ASC;

-- Descending
SELECT * FROM users ORDER BY age DESC;

-- Multiple columns
SELECT * FROM users ORDER BY role ASC, name ASC;
```

### LIMIT and OFFSET - Pagination

```sql
-- Get first 10 results
SELECT * FROM users LIMIT 10;

-- Skip first 10, get next 10 (page 2)
SELECT * FROM users LIMIT 10 OFFSET 10;

-- Skip first 20, get next 10 (page 3)
SELECT * FROM users LIMIT 10 OFFSET 20;
```

## Inserting Data

### INSERT - Add New Records

```sql
-- Insert single row
INSERT INTO users (name, email, role)
VALUES ('John Doe', 'john@example.com', 'student');

-- Insert multiple rows
INSERT INTO users (name, email, role)
VALUES
  ('Jane Doe', 'jane@example.com', 'student'),
  ('Bob Smith', 'bob@example.com', 'teacher');

-- Insert all columns (must match table order)
INSERT INTO users
VALUES (1, 'Alice', 'alice@example.com', 'admin', 25);

-- Return inserted row
INSERT INTO users (name, email, role)
VALUES ('John Doe', 'john@example.com', 'student')
RETURNING *;
```

## Updating Data

### UPDATE - Modify Existing Records

```sql
-- Update single field
UPDATE users
SET email = 'newemail@example.com'
WHERE id = 1;

-- Update multiple fields
UPDATE users
SET email = 'new@example.com', role = 'admin'
WHERE id = 1;

-- Update all rows (dangerous!)
UPDATE users SET role = 'user';

-- Update with calculation
UPDATE users SET age = age + 1;

-- Update based on condition
UPDATE users
SET role = 'admin'
WHERE email LIKE '%@company.com';

-- Return updated rows
UPDATE users
SET role = 'admin'
WHERE id = 1
RETURNING *;
```

## Deleting Data

### DELETE - Remove Records

```sql
-- Delete specific row
DELETE FROM users WHERE id = 1;

-- Delete multiple rows
DELETE FROM users WHERE role = 'guest';

-- Delete all rows (dangerous!)
DELETE FROM users;

-- Return deleted rows
DELETE FROM users
WHERE id = 1
RETURNING *;
```

## Table Operations

### CREATE TABLE - Define New Table

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  age INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- With foreign key
CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  class_id INTEGER REFERENCES classes(id),
  enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### ALTER TABLE - Modify Table

```sql
-- Add column
ALTER TABLE users ADD COLUMN phone VARCHAR(20);

-- Drop column
ALTER TABLE users DROP COLUMN phone;

-- Rename column
ALTER TABLE users RENAME COLUMN name TO full_name;

-- Change column type
ALTER TABLE users ALTER COLUMN age TYPE SMALLINT;

-- Add constraint
ALTER TABLE users ADD CONSTRAINT email_unique UNIQUE (email);
```

### DROP TABLE - Delete Table

```sql
-- Delete table
DROP TABLE users;

-- Delete if exists (no error if doesn't exist)
DROP TABLE IF EXISTS users;

-- Delete with dependent tables
DROP TABLE users CASCADE;
```

## Relationships and Joins

### INNER JOIN

```sql
-- Get users with their enrollments
SELECT users.name, classes.title
FROM users
INNER JOIN enrollments ON users.id = enrollments.user_id
INNER JOIN classes ON enrollments.class_id = classes.id;
```

### LEFT JOIN

```sql
-- Get all users, even those without enrollments
SELECT users.name, classes.title
FROM users
LEFT JOIN enrollments ON users.id = enrollments.user_id
LEFT JOIN classes ON enrollments.class_id = classes.id;
```

### Multiple Joins

```sql
SELECT
  users.name AS student_name,
  classes.title AS class_title,
  instructors.name AS instructor_name
FROM users
INNER JOIN enrollments ON users.id = enrollments.user_id
INNER JOIN classes ON enrollments.class_id = classes.id
INNER JOIN instructors ON classes.instructor_id = instructors.id
WHERE users.role = 'student';
```

## Aggregate Functions

```sql
-- Count rows
SELECT COUNT(*) FROM users;
SELECT COUNT(*) FROM users WHERE role = 'student';

-- Count non-null values
SELECT COUNT(age) FROM users;

-- Sum
SELECT SUM(age) FROM users;

-- Average
SELECT AVG(age) FROM users;

-- Min and Max
SELECT MIN(age), MAX(age) FROM users;

-- Multiple aggregates
SELECT
  COUNT(*) AS total_users,
  AVG(age) AS average_age,
  MIN(age) AS youngest,
  MAX(age) AS oldest
FROM users;
```

## GROUP BY

```sql
-- Count users by role
SELECT role, COUNT(*) AS count
FROM users
GROUP BY role;

-- Average age by role
SELECT role, AVG(age) AS avg_age
FROM users
GROUP BY role;

-- Multiple grouping
SELECT role, COUNT(*) AS count
FROM users
GROUP BY role
ORDER BY count DESC;

-- HAVING (filter after grouping)
SELECT role, COUNT(*) AS count
FROM users
GROUP BY role
HAVING COUNT(*) > 5;
```

## Data Types

### Common PostgreSQL Data Types

| Type | Description | Example |
|------|-------------|---------|
| `SERIAL` | Auto-incrementing integer | `id SERIAL PRIMARY KEY` |
| `INTEGER` | Whole number | `age INTEGER` |
| `BIGINT` | Large whole number | `population BIGINT` |
| `DECIMAL(p,s)` | Exact decimal | `price DECIMAL(10,2)` |
| `VARCHAR(n)` | Variable-length string | `name VARCHAR(255)` |
| `TEXT` | Unlimited text | `description TEXT` |
| `BOOLEAN` | True/false | `is_active BOOLEAN` |
| `DATE` | Date only | `birth_date DATE` |
| `TIMESTAMP` | Date and time | `created_at TIMESTAMP` |
| `JSON` | JSON data | `metadata JSON` |
| `JSONB` | Binary JSON (faster) | `settings JSONB` |

## Constraints

```sql
CREATE TABLE users (
  -- Primary key
  id SERIAL PRIMARY KEY,

  -- Not null
  name VARCHAR(255) NOT NULL,

  -- Unique
  email VARCHAR(255) UNIQUE,

  -- Default value
  role VARCHAR(50) DEFAULT 'user',

  -- Check constraint
  age INTEGER CHECK (age >= 0 AND age <= 150),

  -- Multiple constraints
  username VARCHAR(50) NOT NULL UNIQUE,

  -- Foreign key
  parent_id INTEGER REFERENCES users(id)
);
```

## Indexes

```sql
-- Create index (speeds up queries)
CREATE INDEX idx_users_email ON users(email);

-- Create unique index
CREATE UNIQUE INDEX idx_users_username ON users(username);

-- Multi-column index
CREATE INDEX idx_enrollments_user_class ON enrollments(user_id, class_id);

-- Drop index
DROP INDEX idx_users_email;
```

## Transactions

```sql
-- Start transaction
BEGIN;

-- Make changes
UPDATE users SET balance = balance - 100 WHERE id = 1;
UPDATE users SET balance = balance + 100 WHERE id = 2;

-- Commit (save changes)
COMMIT;

-- Or rollback (cancel changes)
ROLLBACK;
```

## Common Patterns for This Curriculum

### Create User Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(50) DEFAULT 'student',
  age INTEGER CHECK (age >= 0),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Create Classes Table
```sql
CREATE TABLE classes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  instructor_id INTEGER REFERENCES users(id),
  max_students INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Create Enrollments (Many-to-Many)
```sql
CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  class_id INTEGER REFERENCES classes(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, class_id)  -- Prevent duplicate enrollments
);
```

### Get User's Classes
```sql
SELECT classes.*
FROM classes
INNER JOIN enrollments ON classes.id = enrollments.class_id
WHERE enrollments.user_id = 1;
```

### Get Class Students
```sql
SELECT users.name, users.email
FROM users
INNER JOIN enrollments ON users.id = enrollments.user_id
WHERE enrollments.class_id = 1;
```

### Search Users
```sql
SELECT * FROM users
WHERE name ILIKE '%john%'  -- Case-insensitive search
ORDER BY name
LIMIT 20;
```

### Paginate Results
```sql
-- Page 1 (items 1-10)
SELECT * FROM users ORDER BY name LIMIT 10 OFFSET 0;

-- Page 2 (items 11-20)
SELECT * FROM users ORDER BY name LIMIT 10 OFFSET 10;

-- Page 3 (items 21-30)
SELECT * FROM users ORDER BY name LIMIT 10 OFFSET 20;
```

## Best Practices

1. **Always use WHERE** with UPDATE and DELETE (unless you really want to affect all rows)
2. **Use transactions** for related changes that should succeed or fail together
3. **Create indexes** on columns you frequently search or join on
4. **Use LIMIT** when testing queries to avoid overwhelming results
5. **Use meaningful names** for tables and columns
6. **Normalize your data** - avoid duplicating information
7. **Use foreign keys** to maintain referential integrity
8. **Add constraints** to ensure data validity
9. **Use SERIAL** for primary keys
10. **Test destructive queries** on sample data first!

## Useful Commands

```sql
-- Show all tables
\dt

-- Describe table structure
\d users

-- Show current database
\l

-- Connect to database
\c database_name

-- Execute SQL file
\i /path/to/file.sql

-- Show query execution plan
EXPLAIN SELECT * FROM users WHERE age > 18;

-- Show table size
SELECT pg_size_pretty(pg_total_relation_size('users'));
```

## Additional Resources

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [SQL Tutorial](https://www.sqltutorial.org/)
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
- [SQL Fiddle](http://sqlfiddle.com/) - Practice SQL in browser
