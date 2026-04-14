from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.crud.service_request import (
    create_service_request,
    delete_service_request,
    get_service_request,
    list_service_requests,
    update_service_request,
)
from app.schemas.service_request import (
    ServiceRequestCreate,
    ServiceRequestRead,
    ServiceRequestUpdate,
)

router = APIRouter()


@router.get("/service-requests", response_model=list[ServiceRequestRead])
def list_service_requests_endpoint(
    limit: int = Query(default=20, ge=1, le=100),
    db: Session = Depends(get_db),
) -> list[ServiceRequestRead]:
    return list_service_requests(db, limit=limit)


@router.post(
    "/service-requests",
    response_model=ServiceRequestRead,
    status_code=status.HTTP_201_CREATED,
)
def create_service_request_endpoint(
    payload: ServiceRequestCreate,
    db: Session = Depends(get_db),
) -> ServiceRequestRead:
    return create_service_request(db, payload)


@router.get("/service-requests/{request_id}", response_model=ServiceRequestRead)
def get_service_request_endpoint(
    request_id: UUID,
    db: Session = Depends(get_db),
) -> ServiceRequestRead:
    service_request = get_service_request(db, request_id)
    if service_request is None:
        raise HTTPException(status_code=404, detail="Service request not found.")
    return service_request


@router.patch("/service-requests/{request_id}", response_model=ServiceRequestRead)
def update_service_request_endpoint(
    request_id: UUID,
    payload: ServiceRequestUpdate,
    db: Session = Depends(get_db),
) -> ServiceRequestRead:
    service_request = update_service_request(db, request_id, payload)
    if service_request is None:
        raise HTTPException(status_code=404, detail="Service request not found.")
    return service_request


@router.delete(
    "/service-requests/{request_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_service_request_endpoint(
    request_id: UUID,
    db: Session = Depends(get_db),
) -> None:
    deleted = delete_service_request(db, request_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Service request not found.")
