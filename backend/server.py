from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3 as sq
import os
from sql_tables import create_table
from validation import AdminLogin
from auth import admin_auth

create_table()

app = FastAPI()
# Если клиент и сервер на разных доменах, то нужно добавить middleware для CORS (Cross-Origin Resource Sharing)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # ПОМЕНЯТЬ В ПРОДАКШЕНЕ
    allow_credentials=True, # позволяет отправлять cookies и другие аутентификационные данные
    allow_methods=["*"], # позволяет использовать все методы HTTP
    allow_headers=["*"], # позволяет использовать все заголовки
)



        
@app.post('/login/admin_login/')
def admin_login(data: AdminLogin):
    if admin_auth(data.login, data.password):
        return {'status': 'success'}
    else:
        return {'status': 'error'}


if __name__ == '__main__':
    create_table()
