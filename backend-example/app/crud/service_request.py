from uuid import UUID

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.service_request import ServiceRequest
from app.schemas.service_request import ServiceRequestCreate, ServiceRequestUpdate


def list_service_requests(db: Session, limit: int = 20) -> list[ServiceRequest]:
    statement = (
        select(ServiceRequest)
        .order_by(ServiceRequest.created_at.desc())
        .limit(limit)
    )
    return list(db.scalars(statement).all())


def get_service_request(db: Session, request_id: UUID) -> ServiceRequest | None:
    return db.get(ServiceRequest, request_id)


def create_service_request(
    db: Session,
    payload: ServiceRequestCreate,
) -> ServiceRequest:
    service_request = ServiceRequest(**payload.model_dump())
    db.add(service_request)
    db.commit()
    db.refresh(service_request)
    return service_request


def update_service_request(
    db: Session,
    request_id: UUID,
    payload: ServiceRequestUpdate,
) -> ServiceRequest | None:
    service_request = get_service_request(db, request_id)
    if service_request is None:
        return None

    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(service_request, field, value)

    db.add(service_request)
    db.commit()
    db.refresh(service_request)
    return service_request


def delete_service_request(db: Session, request_id: UUID) -> bool:
    service_request = get_service_request(db, request_id)
    if service_request is None:
        return False

    db.delete(service_request)
    db.commit()
    return True
