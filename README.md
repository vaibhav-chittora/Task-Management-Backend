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
- Mongoose ODM
- CORS
- Other dependencies (express-validator, etc.)

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
 http://localhost:3000
```

## API Endpoints

## API Endpoints

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| GET    | `/api/v1/tasks`     | Get all tasks     |
| POST   | `/api/v1/tasks`     | Create new task   |
| GET    | `/api/v1/tasks/:id` | Get specific task |
| PUT    | `/api/v1/tasks/:id` | Update task       |
| DELETE | `/api/v1/tasks/:id` | Delete task       |

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
