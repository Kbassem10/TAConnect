# 🛠️ TAConnect Project Guide

## 🚀 Quick Start

### Prerequisites
- **Docker & Docker Compose** – [Install Docker](https://docs.docker.com/get-docker/)
- **Git** – [Install Git](https://git-scm.com/downloads)

### Setup with Docker (Recommended)

```bash
git clone https://github.com/Kbassem10/TAConnect.git
cd TAConnect
docker compose up --build
```

Access Points:
- Frontend → http://localhost:3000
- Backend API → http://localhost:8000
- Swagger Docs → http://localhost:8000/docs/
- Django Admin → http://localhost:8000/admin/

---

## 🧰 Manual Setup (Alternative)

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend
```bash
cd frontend
npm install
npm run dev
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

## 📝 Code of Conduct

Please read our Code of Conduct to understand community expectations and maintain a respectful, collaborative environment.

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

## 🧱 Development Workflow

- Parallel development via separate frontend and backend branches.
- Every backend endpoint is documented automatically in Swagger.
- Docker Compose ensures a consistent local and production-like environment.
- GitHub Actions runs builds, tests, and linting.

---

## 🧬 Continuous Integration (CI)

GitHub Actions runs backend and frontend test suites automatically on every PR and on pushes to main.

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

## 🧩 Folder Structure

```
TAConnect/
│
├── backend/
│   ├── ta_connect/             # Django project root
│   │   ├── accounts/           # Django app: user accounts
│   │   ├── scheduler/          # Django app: scheduling logic
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── settings_test.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   ├── asgi.py
│   │   └── ...
│   ├── requirements.txt
│   ├── manage.py
│   ├── .env.example
│   └── Dockerfile
│
├── frontend/
│   ├── ta_connect/             # React app root (Vite)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── contexts/
│   │   │   ├── pages/
│   │   │   ├── config/
│   │   │   └── index.css
│   │   ├── public/
│   │   ├── package.json
│   │   ├── tailwind.config.js
│   │   ├── postcss.config.js
│   │   ├── vite.config.js
│   │   ├── Dockerfile
│   │   └── ...
│   └── ...
│
├── docker-compose.yml
├── TAConnect_full_project_plan.csv
├── README.md
├── PROJECT_GUIDE.md
├── LICENSE.md
└── ...
```
