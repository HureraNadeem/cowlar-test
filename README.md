# Cowlar Test

A dockerized Full-Stack Todo App where users can signup or use a test account to add todos, complete and delete them.
A dockerized full-stack movie watching application where user can signup to watch movies, add their own movies and reviews the movies.

## Requirements for Running this project

- Docker - https://docs.docker.com/engine/install/

## Setting up the Project Locally

1. Clone the project

```bash
  git clone https://github.com/HureraNadeem/cowlar-test
```

2. Go to the project directory

```bash
  cd cowlar-test
```

3. Build and Run the Docker Container

Either:

```bash
  docker-compose up --build
```

Or:

```bash
  docker compose up --build
```

## Use your App

App will be accessible at:

```bash
http://localhost:5173/
```

By the way, Backend is hosted on the port

```bash
http://localhost:5000/
```

# Working of the App:

- You can visit the app as guest user without logging in, this includes watching movies and their reviews.
- But to add movies and reviews, you have to sign up on the signup page.
- After signing in, you will be redirected to the home page where you can view all the available movies sorted on the basic of ratings (top-rated as listed above), add movies, and go to your own added movies.
- By selecting a movie, you can view the details, watch the movie, view and add your review.

## Running Tests

To run tests, you have to go to the terminal of each `frontend` and `backend`, and run the test command there.

### FRONTEND TESTING

- Open Docker Desktop App
- Check the `cowlar-test` network
- Open the `frontend` container
- Click on Terminal to access the bash.
- Run the following

```bash
  npm run test
```

### BACKEND TESTING

- Open Docker Desktop App
- Check the `cowlar-test` network
- Open the `backend` container
- Click on Terminal to access the bash.
- Run the following

```bash
  npm run test
```

## Tech Stack

**DOCKERIZED APP**

**Frontend:** React, Typescript, Vite, TailwindCSS, Axios, React Testing Library, Jest, React Router Dom, React Hook Form

**Backend:** Node, Express, Typescript, Mongoose, JWT, Brcypt, Jest, SuperTest

**Database:** MongoDB
