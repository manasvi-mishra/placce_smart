# PlaceSmart – AI Powered Placement Platform

A hackathon-ready placement ecosystem connecting Students, Recruiters and Placement Cell Coordinators.

## Stack
- Frontend: React + Vite + Tailwind CSS + React Router + Recharts + Lucide React
- Backend: Node.js + Express
- Database: optional MongoDB; the demo works with in-memory data so no database/API key is required

## Run locally

### 1. Frontend
```bash
cd frontend
npm install
npm run dev
```
Open the URL printed by Vite (normally http://localhost:5173).

### 2. Backend
In another terminal:
```bash
cd backend
npm install
npm run dev
```
Backend normally runs at http://localhost:3001.

The frontend automatically uses the backend when it is available and falls back to local demo data if it is not.

### Optional MongoDB
Copy `backend/.env.example` to `backend/.env` and set:
```env
PORT=3001
MONGODB_URI=mongodb://127.0.0.1:27017/placesmart
```
The current prototype keeps its demo data in memory; MongoDB is prepared as the next persistence layer.

## Demo roles
The role selector gives access to:
- Student
- Placement Cell Coordinator
- Recruiter

No login credentials are required in this prototype.

## Important AI note
Resume parsing and matching are local prototype/rule-based features. They are deliberately labelled as prototype AI assistance rather than claiming a real trained model. The service layer is structured so a real AI provider can be plugged in later.
