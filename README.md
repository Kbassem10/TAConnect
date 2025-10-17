# 🎓 TAConnect – Smart Office Hours & Scheduling Platform (Demo - Under Development)

[![Project Status: Active](https://img.shields.io/badge/Project%20Status-Active-green.svg)](https://github.com/Kbassem10/TAConnect)
[![License](https://img.shields.io/badge/License-Dual-blue.svg)](LICENSE)

Simplify academic life with **TAConnect** — an open-source web platform that helps **Teaching Assistants (TAs)** and **students** manage **office hours**, **bookings**, and **feedback** with ease.  

Built with **Django** and **React**, TAConnect offers a smooth, conflict-free scheduling experience, powerful analytics, and a beautiful, modern UI — all while remaining secure and scalable through Docker and JWT authentication.

## Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Technology Stack](#technology-stack)
- [Quick Start](#quick-start)
- [Manual Setup (Alternative)](#manual-setup-alternative)
- [Environment Variables](#environment-variables)
- [API Documentation (Swagger)](#api-documentation-swagger)
- [Testing](#testing)
- [Continuous Integration (CI)](#continuous-integration-ci)
- [Contributing](#contributing)
- [Development Workflow](#development-workflow)
- [Project Team](#project-team)
- [Future Roadmap](#future-roadmap)
- [Folder Structure](#folder-structure)
- [Code of Conduct](#code-of-conduct)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## 🗓️ Features

### 🎓 Core Scheduling System
- **TA Office Hours Management** – TAs can create, edit, and organize office hour slots with buffer times.  
- **Conflict-Free Booking** – Prevents overlapping or double-booked sessions using intelligent backend logic.  
- **Role-Based Dashboards** – TAs and students see customized dashboards and functionalities.  
- **Booking System** – Students can easily book, modify, and cancel office hour appointments.  

### 💬 Feedback & Communication
- **Post-Session Feedback** – Students can provide session feedback directly after each booking.  
- **TA Analytics Dashboard** – TAs can view aggregated feedback and attendance stats to improve sessions.  

### 📈 Analytics & Insights
- **Booking Analytics** – Visual reports showing most booked times, attendance patterns, and student engagement.  
- **Feedback Analysis** – Aggregated student feedback insights to enhance teaching quality.  

### ⚙️ Efficiency & Usability
- **Smart Conflict Detection** – Automatically prevents time overlap for both TAs and courses.  
- **Interactive Calendar View** – Calendar interface (FullCalendar) for intuitive booking and management.  
- **Swagger API Documentation** – Every backend endpoint automatically published and versioned for frontend use.  

### 🔐 Security & Reliability
- **JWT Authentication** – Secure and stateless authentication for all users.  
- **Dockerized Setup** – One-command deployment and development setup with Docker Compose.  
- **PostgreSQL Database** – Stable and production-ready relational database for all app data.

---

## 🖼️ Screenshots

<div align="center">
  <img width="1730" height="889" src="https://github.com/user-attachments/assets/example1.png" />
  <p><em>Dashboard with TA and Student roles</em></p>

  <img width="1727" height="969" src="https://github.com/user-attachments/assets/example2.png" />
  <p><em>Office hour scheduling and management</em></p>

  <img width="1727" height="969" src="https://github.com/user-attachments/assets/example3.png" />
  <p><em>Student booking and feedback flow</em></p>

  <img width="1727" height="969" src="https://github.com/user-attachments/assets/example4.png" />
  <p><em>Analytics dashboard with TA insights</em></p>
</div>

---

## 🔧 Technology Stack

- **Frontend**: React, Vite, Tailwind CSS, FullCalendar, Recharts  
- **Backend**: Django REST Framework, JWT Authentication, drf-spectacular (Swagger Docs)  
- **Database**: PostgreSQL  
- **Deployment**: Docker, Docker Compose  
- **Testing**: Pytest (backend), React Testing Library (frontend)

---

## 🚀 Quick Start

### Prerequisites
- **Docker & Docker Compose** – [Install Docker](https://docs.docker.com/get-docker/)
- **Git** – [Install Git](https://git-scm.com/downloads)

### Setup with Docker (Recommended)

```bash
# 1. Clone the repository
git clone https://github.com/Kbassem10/TAConnect.git
cd TAConnect

# 2. Build and launch with Docker
docker compose up --build

# 3. Apply database migrations and create a superuser
docker compose exec backend python manage.py migrate
docker compose exec backend python manage.py createsuperuser
```

This command will:
- Start the PostgreSQL database
- Launch the Django backend API
- Launch the React frontend
- Enable hot reloading for live development

Access Points:
- Frontend → http://localhost:3000
- Backend API → http://localhost:8000
- Swagger Docs → http://localhost:8000/docs/
- Django Admin → http://localhost:8000/admin/

---

## 🧰 Manual Setup (Alternative)

### 1) Clone repository
```bash
git clone https://github.com/TAConnect-Team/TAConnect.git
cd TAConnect
```

### 2) Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 3) Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## ⚙️ Environment Variables

Make sure to configure .env files for both the backend and frontend.

Backend (.env):
```
# Option A: Single DATABASE_URL
DATABASE_URL=postgres://ta_connect_user:ta_connect_password@localhost:5432/ta_connect_db

# Or Option B: Separate DB vars (used by Docker)
DB_HOST=db
DB_PORT=5432
DB_NAME=ta_connect_db
DB_USER=ta_connect_user
DB_PASSWORD=ta_connect_password

SECRET_KEY=change-me
JWT_SECRET=change-me
DEBUG=1
ALLOWED_HOSTS=*
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

Frontend:
```
# Vite projects use VITE_*
VITE_API_URL=http://localhost:8000

# If you’re using CRA, use:
REACT_APP_API_URL=http://localhost:8000
```

---

## 📘 API Documentation (Swagger)

TAConnect automatically generates Swagger/OpenAPI docs for every backend endpoint.

- Interactive Docs: http://localhost:8000/docs/
- Raw Schema: http://localhost:8000/schema.yml

### JWT Authorization in Swagger
1) Click “Authorize” in Swagger UI.  
2) Enter your token as:
```
Bearer <your_access_token>
```
Tokens are obtained via:
- POST /api/auth/login/

All new endpoints appear in Swagger automatically after commits.

---

## 🧪 Testing

Backend:
```bash
pytest
# or
python manage.py test
```

Frontend:
```bash
npm test
```

---

## 🧬 Continuous Integration (CI)

GitHub Actions runs backend and frontend test suites automatically on every PR and on pushes to main.

---

## 👥 Contributing

We welcome contributions!

Steps to Contribute:
```bash
# Create a feature branch
git checkout -b feature/new-feature

# Implement and test your changes

# Commit
git commit -m "Add: new scheduling feature"

# Push
git push origin feature/new-feature
```
- Open a Pull Request describing your changes.

Branch naming:
- Backend → feature/backend/<name>
- Frontend → feature/frontend/<name>

---

## 🧱 Development Workflow

- Parallel development via separate frontend and backend branches.
- Every backend endpoint is documented automatically in Swagger.
- Docker Compose ensures a consistent local and production-like environment.
- GitHub Actions runs builds, tests, and linting.

---

## 🧑‍💻 Project Team

Role | Members
--- | ---
Backend Developers | 2
Frontend Developers | 2
Project Manager | 1 (rotating)

---

## 🛣️ Future Roadmap

- 📅 Calendar Integrations – Google Calendar & Outlook sync  
- 🔔 Smart Notifications – Email and push reminders  
- 📱 Mobile Optimization – Better responsiveness & UX  
- 🧠 AI Scheduling Assistant – Suggest optimal time slots  
- 🧩 University Integrations – LMS and academic APIs

---

## 🧩 Folder Structure

```
TAConnect/
│
├── backend/
│   ├── ta_connect/             # Django project root
│   ├── accounts/
|   ├── scheduler/
│   ├── requirements.txt
│   ├── manage.py
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   └── utils/
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
├── LICENSE
└── README.md
```

---

## 📝 Code of Conduct

Please read our Code of Conduct to understand community expectations and maintain a respectful, collaborative environment.

---

## 📄 License

This project uses a dual-license model:
- AGPL-3.0 for academic and non-commercial use
- Commercial License for enterprise/proprietary usage

For commercial inquiries: taconnect.team@outlook.com

---

## 🌟 Acknowledgments

- Built with ❤️ by the TAConnect Development Team  
- Inspired by the need for simpler academic scheduling  
- Thanks to our mentors and peers for feedback and testing

> “Connect better. Schedule smarter. Teach easier.” — TAConnect Team
