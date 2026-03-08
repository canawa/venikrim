import sqlite3 as sq
import jwt
from datetime import datetime, timezone, timedelta
import os
from dotenv import load_dotenv
from fastapi import Response
load_dotenv()
private_key = os.getenv('SECRET_KEY')
algorithm = 'HS256'

def Auth(login, password):
    with sq.connect("venikrim.db") as con:
        cur = con.cursor()
        cur.execute("SELECT * FROM users WHERE username = ? AND password = ?", (login, password))
        return cur.fetchone()

def create_jwt(username, role):
    header = {
        "alg": algorithm,
        "typ": "JWT"
    }
    payload = {
        'username': username,
        'role': role,
        'exp': datetime.now(timezone.utc) + timedelta(minutes=30) # будем делать так чтобы было действительно только 30 минут
    }
    token = jwt.encode(payload, private_key, algorithm=algorithm, headers=header) # кодируем payload и header в JWT
    
    response = Response() # создаем ответ
    response.set_cookie(key='token', 
                        value=token, 
                        httponly=True, 
                        samesite='Lax',
                        ) # устанавливаем куку
    return response # возвращаем ответ

    

def verify_jwt(token):
    try:
        payload = jwt.decode(token, private_key, algorithms=[algorithm])
        return payload
    except jwt.ExpiredSignatureError: # если exp истек
        return {'status': 'error', 'message': 'Token expired'}
    except jwt.InvalidTokenError: # если токен не валидный
        return {'status': 'error', 'message': 'Invalid token'}
    except Exception as e: # если произошла ошибка
        return {'status': 'error', 'message': str(e)}

