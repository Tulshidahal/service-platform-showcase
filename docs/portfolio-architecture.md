# Portfolio Architecture Notes

This project is presented as two public-safe pieces:

## 1. Frontend Site

The main application is a Next.js site that demonstrates:

- App Router page structure
- reusable UI components
- form validation
- lightweight API routes
- SEO-focused content and metadata
- responsive layout decisions

Key areas:

- `src/app/`
- `src/components/`
- `src/lib/validation.ts`
- `src/app/api/contact/route.ts`
- `src/app/api/request/route.ts`

## 2. Backend API Example

The `backend-example` folder is separate so reviewers can scan backend work quickly without digging through frontend files.

It demonstrates:

- layered FastAPI structure
- SQLAlchemy models
- Pydantic schemas
- CRUD helpers
- dependency-based session handling
- simple example routes

## Why It Is Structured This Way

The original project had more private and operations-specific logic. For a public portfolio repo, the better choice is to keep the code that shows implementation ability while removing anything that should not be exposed.

That is why this version is:

- simpler than the live system
- safer to publish
- clearer for recruiters to review
