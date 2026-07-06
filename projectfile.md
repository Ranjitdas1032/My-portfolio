# AI Portfolio OS - Project Context

## Project Goal

Build a modern AI-powered portfolio website that demonstrates:

* React
* Django
* DRF
* Redux
* Docker
* CI/CD
* RAG
* AI Integration
* Testing
* Production Deployment

The project must be:

* Professional
* Recruiter Friendly
* Open Source
* Generic and reusable for other developers
* Free to deploy

---

# Current Stack

Frontend

* React (Vite)
* React Router
* Redux Toolkit
* Axios
* Framer Motion
* React Icons
* CSS (Component-based architecture)

Backend

* Django
* Django REST Framework

Future

* PostgreSQL
* Docker
* GitHub Actions
* RAG
* LangChain
* Gemini / Groq / OpenAI
* Cypress

---

# Major Features

## Portfolio Website

Single Page Application

Sections:

* Header
* Hero
* About
* Skills
* Projects
* AI Journey
* Resume
* Contact

---

## AI Chatbot

Purpose:

Allow recruiters and developers to ask questions about:

* Experience
* Projects
* Skills
* Tech Stack
* Resume

Future Implementation:

RAG + Portfolio Knowledge Base

---

## Job Description Analyzer

Flow:

1. User clicks "Add Job Description"
2. Modal opens
3. User uploads PDF
4. Backend extracts text
5. AI analyzes against profile
6. Returns:

* Match Score
* Strengths
* Missing Skills
* Recommendations

---

## Contact System

User submits:

* Name
* Email
* Company
* Message

Backend sends:

1. Email to owner
2. Confirmation email to sender

---

# Frontend Architecture

src/

components/
pages/
redux/
services/
styles/
assets/

CSS Structure:

Each component contains:

Component.jsx
Component.css

Global styles:

styles/

* global.css
* variables.css
* animations.css
* responsive.css

---

# Development Roadmap

Phase 1
✔ Project Setup

Phase 2
✔ Vite Setup
✔ React Setup
✔ CSS Architecture
✔ Header
✔ Hero

Phase 3
⬜ Premium UI
⬜ Framer Motion
⬜ Responsive Design

Phase 4
⬜ About Section
⬜ Skills Section
⬜ Projects Section

Phase 5
⬜ Django Backend

Phase 6
⬜ Contact API

Phase 7
⬜ Chatbot API

Phase 8
⬜ RAG Integration

Phase 9
⬜ Job Description Analyzer

Phase 10
⬜ Docker

Phase 11
⬜ CI/CD

Phase 12
⬜ Deployment

---

# Design Principles

* Dark Modern Theme
* Smooth Animations
* Professional
* Minimal
* Fast
* Mobile First

---

# Status

Current Phase: 10C

Completed:
- Phase 10A: Dockerized Django backend
- Phase 10B: Dockerized React frontend
- Frontend Dockerfile
- Frontend .dockerignore
- React/Vite running inside Docker

Next Task:
- Phase 10C: Docker Compose for frontend + backend

Pending:
- Docker Compose
- PostgreSQL
- Production config
- CI/CD
- Deployment