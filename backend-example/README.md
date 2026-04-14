# Service Platform API Demo

This is a simplified FastAPI backend example included with the portfolio repo.

It is intentionally limited to public-safe example code:

- no real production pricing logic
- no authentication
- no third-party integrations
- no sensitive business rules

## Technologies Used

- FastAPI
- SQLAlchemy
- PostgreSQL
- Pydantic
- Uvicorn
- Pytest

## What It Shows

- basic API structure
- example endpoints
- PostgreSQL-ready models
- CRUD helpers
- dependency-based session handling
- clear folder organization

## Folder Structure

```text
backend-example/
├── app/
│   ├── api/
│   │   ├── deps.py
│   │   └── routes/
│   │       ├── categories.py
│   │       ├── health.py
│   │       └── service_requests.py
│   ├── core/
│   │   └── config.py
│   ├── crud/
│   │   ├── category.py
│   │   └── service_request.py
│   ├── db/
│   │   ├── base.py
│   │   ├── init_db.py
│   │   └── session.py
│   ├── models/
│   │   ├── category.py
│   │   └── service_request.py
│   ├── schemas/
│   │   ├── category.py
│   │   └── service_request.py
│   └── main.py
├── tests/
│   └── test_health.py
├── .env.example
├── pyproject.toml
└── README.md
```

## Example Endpoints

- `GET /api/v1/health`
- `GET /api/v1/categories`
- `POST /api/v1/categories`
- `GET /api/v1/service-requests`
- `POST /api/v1/service-requests`
- `GET /api/v1/service-requests/{request_id}`
- `PATCH /api/v1/service-requests/{request_id}`
- `DELETE /api/v1/service-requests/{request_id}`

## Run Locally

```bash
cd backend-example
pip install -e .[dev]
cp .env.example .env
uvicorn app.main:app --reload
```

Open:

- `http://127.0.0.1:8000/docs`
