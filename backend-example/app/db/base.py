from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass


from app.models.category import Category  # noqa: E402,F401
from app.models.service_request import ServiceRequest  # noqa: E402,F401
