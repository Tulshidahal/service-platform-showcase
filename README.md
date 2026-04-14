# Service Platform Showcase

This is a simplified full-stack portfolio project I put together from a larger real-world system.

I did not want to post the original project publicly because it had business-specific logic and private internal details in it. So this version is stripped down on purpose. The idea here is to show how I structure a frontend app, how I handle forms and API routes, and how I think about backend organization without exposing anything sensitive.

## What I Wanted This Repo To Show

- a clean Next.js frontend
- reusable React components
- typed form validation
- simple API routes
- a separate FastAPI backend example
- code that is readable and not overengineered

## Tech Used

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Zod

### Backend Example

- FastAPI
- SQLAlchemy
- PostgreSQL
- Pydantic

## What Is In Here

### Frontend app

The frontend is a small demo app with:

- a homepage
- a features page
- a request form
- a contact form
- shared validation
- basic API routes
- metadata, sitemap, robots, and social image routes

### Backend example

Inside [`backend-example/`](./backend-example) I added a separate FastAPI project to show backend structure more clearly.

That part includes:

- example `GET`, `POST`, `PATCH`, and `DELETE` endpoints
- PostgreSQL-ready models
- CRUD helpers
- schema files
- database session setup
- a simple test

I kept it simple on purpose. No auth, no real business rules, no secrets.

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

## Run The Frontend

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open:

- `http://localhost:3000`

## Run The Backend Example

```bash
cd backend-example
pip install -e .[dev]
cp .env.example .env
uvicorn app.main:app --reload
```

Then open:

- `http://127.0.0.1:8000/docs`

## Notes

- This repo is meant for public review.
- The original project was more complex than this.
- I removed sensitive and production-level logic on purpose.
- The code here is meant to feel practical and readable, not flashy.
