from pydantic import BaseModel, Field
class AdminLogin(BaseModel):
    login: str
    password: str
