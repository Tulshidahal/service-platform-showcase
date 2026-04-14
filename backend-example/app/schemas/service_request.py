from uuid import UUID

from pydantic import BaseModel, ConfigDict, EmailStr


class ServiceRequestBase(BaseModel):
    customer_name: str
    email: EmailStr
    city: str
    service_type: str
    notes: str | None = None


class ServiceRequestCreate(ServiceRequestBase):
    pass


class ServiceRequestUpdate(BaseModel):
    status: str | None = None
    notes: str | None = None


class ServiceRequestRead(ServiceRequestBase):
    id: UUID
    status: str

    model_config = ConfigDict(from_attributes=True)
