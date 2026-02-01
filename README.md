# Task Management Application

A full-stack **Task Management Application** built using **Node.js, TypeScript, Prisma, PostgreSQL, and Next.js**.  
This project allows users to securely manage their personal tasks with complete CRUD functionality and authentication.

This application was built as part of a job assignment to demonstrate real-world full-stack development skills.

---

## 🚀 Live Demo

- **Frontend:** https://task-managment-smoky.vercel.app/  
- **Backend:** https://task-managment-q3jq.onrender.com  

---

## ✨ Features

### 🔐 Authentication
- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes (tasks are accessible only after login)

### 📝 Task Management
- Create new tasks
- View personal tasks
- Edit task titles
- Mark tasks as completed or pending
- Delete tasks
- Search tasks by title
- Filter tasks by status

### 🎨 User Interface
- Clean and responsive design
- Centered login, register, and dashboard layout
- Simple and intuitive task dashboard
- Works on desktop and mobile devices

---

## 🛠️ Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Custom CSS
- Fetch API

### Backend
- Node.js
- Express.js
- TypeScript
- Prisma ORM
- JWT Authentication

### Database
- PostgreSQL (Supabase)

### Deployment
- Frontend: **Vercel**
- Backend: **Render**
- Database: **Supabase**

---

## 📁 Project Structure

Task_managment/
├── backend/
│ ├── prisma/
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── middlewares/
│ │ └── server.ts
│ ├── .env
│ └── package.json
│
├── frontend/
│ ├── app/
│ ├── components/
│ ├── lib/
│ ├── styles/
│ ├── .env.local
│ └── package.json
│
└── README.md


---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Amanchahar1507/Task_managment.git
cd Task_managment

2️⃣ Backend Setup
cd backend
npm install

Create a .env file in the backend folder:
DATABASE_URL=postgresql://postgres:<PASSWORD>@localhost:5432/task_manager
JWT_SECRET=your_jwt_secret

Run Prisma migrations:
npx prisma migrate dev

Start backend server:
npm run dev

3️⃣ Frontend Setup
cd ../frontend
npm install

Create .env.local in the frontend folder:
NEXT_PUBLIC_API_URL=http://localhost:4000

Start frontend:
npm run dev


🔗 API Endpoints
Authentication

POST /auth/register

POST /auth/login

Tasks (Protected)

GET /tasks

POST /tasks

PATCH /tasks/:id

PATCH /tasks/:id/toggle

DELETE /tasks/:id

🧪 Testing

APIs tested using Postman

Database verified using Supabase SQL Editor

UI tested for responsiveness and usability

📦 Deployment Summary

PostgreSQL database hosted on Supabase

Prisma migrations applied to production database

Backend deployed on Render

Frontend deployed on Vercel

Environment variables managed securely on each platform

🎯 Key Learnings

Implemented secure authentication using JWT

Built REST APIs with proper authorization

Used Prisma ORM with PostgreSQL in production

Managed full-stack deployment with free cloud services

Followed clean project structure and best practices

👤 Author

Aman Chahar
Full-Stack Developer

GitHub: https://github.com/Amanchahar1507

LinkedIn: https://www.linkedin.com/in/aman-chahar-8445b0211/
