# EasyNotes Frontend

EasyNotes is a simple note-taking application built with React.
This repository contains the frontend code for the EasyNotes application.

## Features

- User authentication (signup and login)
- Dashboard to view and manage notes
- Modal for creating and editing notes
- Routing with React Router

## Prerequisites

- Node.js
- npm or yarn

## Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/easynotes-frontend.git
cd easynotes-frontend
```


2. Install the dependencies:

```sh
npm install
# or
yarn install
```

3. Start the development server:

```sh
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```plaintext
easynotes-frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Note/
│   │   └── ...
│   ├── pages/
│   │   ├── Home/
│   │   ├── Login/
│   │   └── SignUp/
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
```

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
