```markdown
# EasyNotes

EasyNotes is a simple note-taking application built with Node.js, Express, MongoDB, and React.
It allows users to create, edit, and manage their notes.

## Features

- User authentication (signup and login)
- Create, edit, and delete notes
- JWT-based authentication
- RESTful API

## Prerequisites

- Node.js {express}
- MongoDB
```
## Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/easynotes.git
cd easynotes
```

2. Install the dependencies:

```sh
npm install
```

3. Create a `.env` file in the root directory and add your MongoDB connection string and JWT secret:

```env
MONGODB_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret
```

4. Start the server:

```sh
npm start
```

## API Endpoints



###

 User Authentication

- **Create Account**: `POST /create-account`
  - Request Body: `{ "username": "your_username", "email": "your_email", "password": "your_password" }`
  - Response: `{ "message": "Account created successfully" }`

- **Login**: `POST /login`
  - Request Body: `{ "email": "your_email", "password": "your_password" }`
  - Response: `{ "accessToken": "your_jwt_token" }`

### Notes

- **Create Note**: `POST /add-note`
  - Request Body: `{ "title": "note_title", "content": "note_content", "tags": ["tag1", "tag2"] }`
  - Response: `{ "message": "Note added successfully", "note": { ... } }`

- **Edit Note**: `POST /edit-note`
  - Request Body: `{ "noteId": "note_id", "title": "new_title", "content": "new_content", "tags": ["new_tag1", "new_tag2"], "isPinned": true }`
  - Response: `{ "message": "Note edited successfully", "note": { ... } }`

- **Delete Note**: `DELETE /delete-note`
  - Request Body: `{ "noteId": "note_id" }`
  - Response: `{ "message": "Note deleted successfully" }`

## Middleware

- **authenticateToken**: Middleware to authenticate JWT tokens.

## Models

### User Model

- **Fields**: `username`, `email`, `password`

### Note Model

- **Fields**: `title`, `content`, `tags`, `userId`, `isPinned`
