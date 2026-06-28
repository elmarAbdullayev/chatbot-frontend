# Chatbot Frontend

A modern React application that provides a user interface for an AI-powered chatbot. The frontend communicates with a FastAPI backend, allowing users to register, log in securely, and interact with an AI assistant through a clean web interface.

> **Note:** This repository contains only the frontend. The FastAPI backend is maintained in a separate repository.

---

## Features

* User registration
* Secure user login
* JWT-based authentication
* AI chatbot interface
* Real-time messaging
* Responsive user interface
* React Router navigation
* REST API integration
* Docker support
* Ready for Firebase Hosting

---

## Technologies

* React
* React Router DOM
* Axios
* JavaScript (ES6+)
* CSS3
* Docker
* Firebase Hosting

---

## Project Structure

```text
chatbot-frontend/
│
├── src/
│   ├── components/
│   │   ├── Form.jsx
│   │   ├── Register.jsx
│   │   └── Profil.jsx
│   │
│   ├── css/
│   │   └── FormCss.css
│   │
│   ├── App.js
│   └── index.js
│
├── Dockerfile
├── firebase.json
├── package.json
└── README.md
```

---

## Features Overview

### Authentication

* User registration
* Login using email and password
* JWT token storage
* Protected user session

### AI Chat

* Send messages to an AI assistant
* Receive AI-generated responses
* Loading indicator while waiting for responses
* Chat history during the session

### Navigation

* Login page
* Registration page
* Chat page

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/yourusername/chatbot-frontend.git
cd chatbot-frontend
```

---

### Install dependencies

```bash
npm install
```

---

### Start the development server

```bash
npm start
```

The application will run at

```text
http://localhost:3000
```

---

## Backend Connection

The frontend communicates with a FastAPI backend through REST API endpoints.

Current endpoints include:

| Method | Endpoint    | Description                    |
| ------ | ----------- | ------------------------------ |
| POST   | `/register` | Register a new user            |
| POST   | `/login`    | Authenticate user              |
| POST   | `/chatbot`  | Send prompts to the AI chatbot |

---

## Docker

Build the Docker image

```bash
docker build -t chatbot-frontend .
```

Run the container

```bash
docker run -p 3000:3000 chatbot-frontend
```

---

## Learning Objectives

This project was developed to improve practical skills in:

* React development
* Component-based architecture
* React Hooks
* Routing with React Router
* REST API communication
* Authentication workflows
* State management
* Docker containerization
* Frontend and backend integration

---

## Future Improvements

* Responsive mobile layout
* Dark mode
* Typing animation
* Chat history persistence
* Markdown support
* User profile page
* Better error handling
* Token refresh
* Environment variable configuration
* Unit testing with Jest

---

## Author

Developed as a personal learning project to improve frontend development skills using React while integrating a custom FastAPI backend.
