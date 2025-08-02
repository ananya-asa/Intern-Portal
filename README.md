# Intern Portal

A simple full-stack intern dashboard with React frontend and Node.js/Express backend.

---

## Features

- Dummy login/signup pages (no real auth)
- Dashboard: intern name, referral code, donations, rewards
- Leaderboard of top donors
- Dark mode toggle
- Responsive UI

---

## Tech Stack

- Frontend: React, React Router, CSS variables
- Backend: Node.js + Express
- HTTP Client: Axios

---

## Setup Instructions

### 1. Clone the repo

$ git clone https://github.com/ananya-asa/Intern-Portal.git
$ cd intern-portal

---

### 2. Install backend dependencies

$ cd backend
$ npm install

---

### 3. Install frontend dependencies (in a new terminal window/tab)

$ cd frontend
$ npm install

---

## Running the Project

### Option 1: Run backend and frontend separately

Open two terminal windows:

**Backend**

$ cd backend
$ npm start

Starts backend API on: http://localhost:5000

---

**Frontend**

$ cd frontend
$ npm start

Starts React app on: http://localhost:5173

---

### Option 2: Run both concurrently (optional)

From the root project folder, install `concurrently` globally if you haven’t:

$ npm install -g concurrently

Run both servers together:

$ concurrently "npm start --prefix backend" "npm start --prefix frontend"

---

## API Endpoint

- GET /api/intern/:referralCode  
Returns dummy intern data { name, referralCode, donations }

---

## Usage

- Visit http://localhost:5173 for the homepage
- Use Signup/Login to simulate access
- View Dashboard & Leaderboard
- Toggle dark mode via navbar

---

## Screenshots



./screenshots/home.png
./screenshots/dashboard.png
./screenshots/leaderboard.png
./screenshots/login.png
./screenshots/signup.png
./screenshots/darkmode.png

---

## Deployment Guide

### Backend Deployment

You can deploy your backend on:

- Heroku (https://heroku.com)
- Render (https://render.com)
- Railway (https://railway.app)

Steps:

$ # Push backend code to GitHub
$ # Connect GitHub repo to your hosting platform
$ # Set start command to: node server.js (or your entry file)
$ # Deploy and get your backend URL

---

### Frontend Deployment

Use platforms like:

- Netlify (https://netlify.com)
- Vercel (https://vercel.com)
- GitHub Pages

Steps:

$ cd frontend
$ npm run build
$ # Upload /frontend/build folder contents to hosting service

Make sure your frontend API URLs point to the deployed backend.

---

## .gitignore

Add these to ignore node_modules and logs:

node_modules
dist
logs
*.log
.env

---

## Contributing

Feel free to submit issues or pull requests!

---

## License

Open source project.

---

## Author

Ananya
