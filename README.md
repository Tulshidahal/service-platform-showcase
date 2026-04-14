# Service Platform Showcase

This repository is a simplified portfolio project derived from a larger real-world system. It has been reduced for demonstration purposes so it can be shared publicly with recruiters and employers.

Sensitive details, internal workflows, and production-level business logic have been removed. The goal of this repo is to show practical frontend and backend implementation choices in a clear, readable way.

## What This Project Demonstrates

- building a responsive marketing site with Next.js
- structuring reusable React components with TypeScript
- creating typed form flows with validation
- writing simple API routes for request and contact handling
- organizing metadata and route structure
- separating public frontend work from a backend API example

## Technologies Used

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Zod

### Backend API Example

- FastAPI
- SQLAlchemy
- PostgreSQL
- Pydantic

## Portfolio Scope

This repo intentionally includes:

- public-safe UI and frontend architecture
- example API request handling
- a simplified backend example with CRUD structure
- clean project documentation

This repo intentionally does not include:

- private customer data
- real credentials or production secrets
- internal business documents
- private pricing tools
- proprietary or production-only automation logic

## Frontend Highlights

- multi-page frontend built with the Next.js App Router
- reusable components for layout, hero sections, and forms
- contact and request flows with schema validation
- sitemap, robots, and social metadata support
- mobile-focused layout and CTA handling

## Backend Showcase

The folder [`backend-example/`](./backend-example) contains a separate FastAPI backend example for recruiters to review.

It includes:

- basic API structure
- example `GET`, `POST`, `PATCH`, and `DELETE` endpoints
- PostgreSQL-ready SQLAlchemy models
- CRUD helper functions
- database session dependency
- clean folder structure

This backend is intentionally not wired into the live site. It exists to show backend fundamentals in a simple and professional way.

## Project Structure

```text
service-platform-showcase/
├── backend-example/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── crud/
│   │   ├── db/
│   │   ├── models/
│   │   └── schemas/
│   ├── tests/
│   ├── .env.example
│   ├── pyproject.toml
│   └── README.md
├── docs/
│   └── portfolio-architecture.md
├── public/
├── src/
│   ├── app/
│   ├── components/
│   └── lib/
├── .env.example
├── package.json
├── README.md
└── tsconfig.json
```

## Running The Frontend Locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open:

- `http://localhost:3000`

## Running The Backend Example

```bash
cd backend-example
pip install -e .[dev]
cp .env.example .env
uvicorn app.main:app --reload
```

Open:

- `http://127.0.0.1:8000/docs`

## Notes For Reviewers

- This is a portfolio-safe demo based on a real project.
- Backend logic is intentionally simplified to focus on structure, clarity, and code organization.
