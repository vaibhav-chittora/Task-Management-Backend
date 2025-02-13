# Task Management Backend API

A robust REST API backend service for managing tasks and todos efficiently. Built with Node.js and Express.js following clean code principles and MVC architecture pattern.

## Features

- RESTful API endpoints for task management
- MongoDB database integration
- Clean code architecture with MVC pattern
- Input validation and error handling
- CORS enabled for cross-origin requests
- Express middleware implementation

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose ODM for Database Interaction
- CORS
- JWT Authentication
- Bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB installed locally or MongoDB Atlas account
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/vaibhav-chittora/Task-Management-Backend.git
```

2. Navigate to the project directory

```bash
cd Task-Management-Backend
```

3. Install dependencies

```bash
npm install
```

4. Create a .env file in the root directory and add the following environment variables:

```bash
PORT=3000
DB_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret

```

5. Start the server

```bash
npm start
```

The API will be accessible at

```bash
LIVE URL - https://task-management-backend-qgen.onrender.com
```

OR

```bash
LOCALHOST -  http://localhost:3000/api/v1/
```

# API Endpoints

## Auth -

| Method | Endpoint      | Description         |
| ------ | ------------- | ------------------- |
| POST   | `user/signup` | Register a new User |
| POST   | `user/signin` | Login User          |

## Tasks -

| Method | Endpoint                         | Description              |
| ------ | -------------------------------- | ------------------------ |
| POST   | `task/create-task`               | Create new task          |
| GET    | `task/all-tasks`                 | Get all tasks            |
| GET    | `task/important-tasks`           | Get important tasks      |
| GET    | `task/pending-tasks`             | Get pending tasks        |
| GET    | `task/completed-tasks`           | Get completed tasks      |
| PUT    | `task/update-task/:id`           | Update task by ID        |
| PUT    | `task/update-task/important/:id` | Update task as important |
| PUT    | `/task/update-task/status/:id`   | Update task status by ID |
| DELETE | `task/delete-task/:id`           | Delete task by ID        |

## Architecture & Design Patterns

✨ **MVC Pattern**

- Separation of concerns with Models, Views (API responses), and Controllers

🔧 **Service Layer**

- Business logic abstraction

📦 **Repository Pattern**

- Data access layer abstraction

⚡ **Middleware**

- Request processing
- Validation
- Error handling

🏗️ **REST Architecture**

- Standard HTTP methods
- Appropriate status codes

## Best Practices

✅ Input validation and sanitization

✅ Error handling middleware

✅ Environment configuration

✅ Code modularity

✅ Async/await patterns

✅ Standard naming conventions

✅ API versioning ready
