from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.api.routes.categories import router as categories_router
from app.api.routes.health import router as health_router
from app.api.routes.service_requests import router as service_requests_router
from app.core.config import settings
from app.db.init_db import init_db


@asynccontextmanager
async def lifespan(_: FastAPI):
    init_db()
    yield


app = FastAPI(
    title=settings.project_name,
    version="0.1.0",
    description="Portfolio-safe FastAPI backend example for a generic service platform project.",
    lifespan=lifespan,
)

app.include_router(health_router, prefix=settings.api_v1_prefix, tags=["health"])
app.include_router(
    categories_router,
    prefix=settings.api_v1_prefix,
    tags=["categories"],
)
app.include_router(
    service_requests_router,
    prefix=settings.api_v1_prefix,
    tags=["service-requests"],
)
