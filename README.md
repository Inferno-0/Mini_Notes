# Mini Notes App (MERN Stack)

A beginner-friendly MERN Stack project for creating, viewing, and deleting notes.

## 1) Project Overview
Mini Notes App is a lightweight full-stack project designed for academic lab submissions. It demonstrates frontend-backend integration, REST APIs, MongoDB Atlas cloud database usage, environment variable handling, and deployment readiness.

## 2) Features
- Add a note (title + content)
- View all notes
- Delete a note
- REST API integration between React frontend and Express backend
- MongoDB Atlas data storage

## 3) Tech Stack
- **Frontend:** React.js + Vite + Plain CSS
- **Backend:** Node.js + Express.js
- **Database:** MongoDB Atlas + Mongoose
- **Deployment:** Vercel (frontend) + Render (backend)

## 4) Folder Structure
```bash
Mini_Notes/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NoteForm.jsx
│   │   │   └── NoteList.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example
│   └── package.json
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── noteController.js
│   ├── models/
│   │   └── Note.js
│   ├── routes/
│   │   └── noteRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── README.md
```

## 5) Installation Steps
```bash
git clone <your-repo-url>
cd Mini_Notes
```

## 6) Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in `server/` using:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start backend:
```bash
npm run dev
```

## 7) Frontend Setup
```bash
cd client
npm install
```

Create a `.env` file in `client/` using:
```env
VITE_API_URL=http://localhost:5000
```

Start frontend:
```bash
npm run dev
```

## 8) Environment Variable Setup
- Backend uses `process.env.PORT` and `process.env.MONGO_URI`
- Frontend uses `import.meta.env.VITE_API_URL`
- Never hardcode credentials in source files

## 9) MongoDB Atlas Setup
1. Create a MongoDB Atlas account.
2. Create a new cluster.
3. Create a database user.
4. Allow your IP in Network Access (or `0.0.0.0/0` for testing).
5. Copy the connection string and paste it into `server/.env` as `MONGO_URI`.

## 10) Running Locally
Open two terminals:

**Terminal 1 (Backend)**
```bash
cd server
npm run dev
```

**Terminal 2 (Frontend)**
```bash
cd client
npm run dev
```

Open the shown Vite URL (usually `http://localhost:5173`).

## 11) Deployment Instructions
### Frontend on Vercel
1. Import the `client` folder as a Vercel project.
2. Add env var:
   - `VITE_API_URL=https://your-render-backend-url`
3. Deploy.

### Backend on Render
1. Create a new **Web Service** from the `server` folder.
2. Build command: `npm install`
3. Start command: `npm start`
4. Add env vars:
   - `PORT=5000`
   - `MONGO_URI=your_mongodb_connection_string`
5. Deploy.

### Database
Use MongoDB Atlas connection string in Render environment variables.

## 12) API Endpoints
Base URL: `http://localhost:5000`

- `GET /notes` → Fetch all notes
- `POST /notes` → Create a note
  - Body:
    ```json
    {
      "title": "Sample title",
      "content": "Sample content"
    }
    ```
- `DELETE /notes/:id` → Delete a note by ID

## 13) Screenshots (Placeholders)
- Home page with note form and notes list: `docs/screenshots/home.png`
- Add note example: `docs/screenshots/add-note.png`
- Delete note example: `docs/screenshots/delete-note.png`

## 14) Future Enhancements
- Edit/update note feature
- Search/filter notes
- Pagination for large note lists
- Improved validation messages
