from pydantic import BaseModel, Field
class Login(BaseModel):
    login: str
    password: str
class Product(BaseModel):
    name: str
    description: str
    price: int
    picture: str