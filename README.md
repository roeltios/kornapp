# Cornell Notes App

A minimalist web application for taking and organizing Cornell-style notes, with automatic Markdown conversion and GitHub integration.

## Features

- Clean, responsive UI built with React and Tailwind CSS
- Dark mode layout for comfortable note-taking
- Structured note format with sections for Notes, Keywords, and Summary
- Backend built with Flask, using the GitHub API to commit files
- Automatically names each note file with a timestamp
- Fully decoupled frontend and backend for flexible deployment

## Technologies Used

- Frontend: React, Tailwind CSS, Vite
- Backend: Flask, GitHub API, Flask-CORS, python-dotenv
- Hosting-ready: Compatible with Vercel, Netlify, and Render

## Getting Started

### 1. Clone the Repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

### 2. Set Up the Frontend
cd frontend
npm install
npm run dev

### 3. Set Up the Backend
cd ../backend
python -m venv .venv
source .venv/bin/activate        # On Windows: .venv\Scripts\activate
pip install -r requirements.txt

### 4. Configure Environment Variables
GITHUB_TOKEN=your_personal_access_token_here

### 5. Start the Backend Server
flask run

### Usage

Once both servers are running, access the frontend via http://localhost:5173. Fill in your notes and submit — the backend will convert your input to Markdown and push it directly to your GitHub repository under a notas/ folder.

### Folder Structure
mi-app-cornell/
├── frontend/
│   ├── src/
│   └── package.json
├── backend/
│   ├── app.py
│   ├── .env
│   ├── requirements.txt
│   └── .venv/

## License

This project is licensed under the GNU General Public License v3.0.  
See the [LICENSE](./LICENSE) file for details.
