from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sql_tables import create_table
from validation import Login, Product
from auth import Auth
from auth import create_jwt
from fastapi import Request
from auth import verify_jwt
import sqlite3 as sq
from datetime import datetime
create_table()

app = FastAPI(redirect_slashes=False)

origins = [
    "https://venikrim.ru",
    "https://www.venikrim.ru",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # не "*", а конкретный фронт
    allow_credentials=True,      # если куки / авторизация
    allow_methods=["*"],         # все HTTP методы
    allow_headers=["*"],         # все заголовки
)


@app.get('/get_products/{product_id}')
def get_products_id(product_id: int):
    with sq.connect("venikrim.db") as con:
        cur = con.cursor()
        cur.execute("SELECT rowid as id, rowid as key, * FROM products WHERE rowid = ?", (product_id,))
        row = cur.fetchone()
        if not row:
            from fastapi import HTTPException
            raise HTTPException(status_code=404, detail="Product not found")
        columns = ['key', 'id', 'created_at', 'name', 'description', 'price', 'image']
        return dict(zip(columns, row))


@app.get('/get_products/')
def get_products():
    with sq.connect("venikrim.db") as con:
        cur = con.cursor()
        cur.execute("SELECT rowid as id, rowid as key, * FROM products")
        columns = ['key', 'id', 'created_at', 'name', 'desciption', 'price', 'image']
        
        execution = cur.fetchall()
        data = []
        for i in range(len(execution)):
            data.append(dict(zip(columns, execution[i])))
        print(data)
        return data


# ADMIN PANEL
@app.post('/add_product/')
def add_product(request: Request, data: Product):
    token = request.cookies.get('token')
    if verify_jwt(token):
        with sq.connect("venikrim.db") as con:
            cur = con.cursor()
            cur.execute("INSERT INTO products (created_at, name, desciption, price, picture) VALUES (?, ?, ?, ?, ?)", (datetime.now(), data.name, data.description, data.price, data.picture))
            con.commit()
            return {'status': 'success', 'message': 'Product added'}
    else:
        return {'status': 'error', 'message': 'Invalid token'}

# AUTHENTICATION
        
@app.post('/login/admin_login/')
def login(data: Login):
    if Auth(data.login, data.password):
        return create_jwt(data.login, 'admin')
    else:
        return {'status': 'error', 'message': 'Invalid login or password'}

@app.get('/admin_login_check/')
def admin_login_check(request: Request):
    token = request.cookies.get('token')
    if token:
        return {'status': 'success', 'payload': verify_jwt(token), 'message': 'Token is valid'}
    else:
        return {'status': 'error', 'message': 'Token is invalid'}

if __name__ == '__main__':
    create_table()
