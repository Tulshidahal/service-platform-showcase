from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.crud.category import create_category, get_categories, get_category
from app.schemas.category import CategoryCreate, CategoryRead

router = APIRouter()


@router.get("/categories", response_model=list[CategoryRead])
def list_categories(db: Session = Depends(get_db)) -> list[CategoryRead]:
    return get_categories(db)


@router.post(
    "/categories",
    response_model=CategoryRead,
    status_code=status.HTTP_201_CREATED,
)
def create_category_endpoint(
    payload: CategoryCreate,
    db: Session = Depends(get_db),
) -> CategoryRead:
    return create_category(db, payload)


@router.get("/categories/{category_id}", response_model=CategoryRead)
def get_category_endpoint(
    category_id: UUID,
    db: Session = Depends(get_db),
) -> CategoryRead:
    category = get_category(db, category_id)
    if category is None:
        raise HTTPException(status_code=404, detail="Category not found.")
    return category
