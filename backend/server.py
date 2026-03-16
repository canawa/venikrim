from fastapi import FastAPI, Request, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from sql_tables import create_table
from validation import Login, Product
from auth import Auth
from auth import create_jwt
from auth import verify_jwt
import sqlite3 as sq
from datetime import datetime
from pathlib import Path
import shutil
from fastapi.staticfiles import StaticFiles
from uuid import uuid4
create_table()

app = FastAPI()

origins = [
    "https://venikrim.ru",
    "https://www.venikrim.ru",
    "http://localhost:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # не "*", а конкретный фронт
    allow_credentials=True,      # если куки / авторизация
    allow_methods=["*"],         # все HTTP методы
    allow_headers=["*"],         # все заголовки
)



app.mount("/images", StaticFiles(directory=Path(__file__).resolve().parent.parent), name="images")


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


        cur = con.cursor()
        cur.execute("INSERT INTO products (created_at, name, description, price, picture) VALUES (?, ?, ?, ?, ?)", (datetime.now(), name, description, price, relative_path))
        con.commit()
    return {'status': 'success', 'message': 'Product added'}
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
async def add_product(
    request: Request,
    name: str = Form(...),
    description: str = Form(...),
    price: int = Form(...),
    picture: UploadFile = File(...)
):
    token = request.cookies.get('token')

    if not verify_jwt(token):
        return {'status': 'error', 'message': 'Invalid token'}

    if picture.content_type != 'image/webp':
        return {'status': 'error', 'message': 'Можно загружать только WEBP файлы'}

    base_dir = Path(__file__).resolve().parent.parent
    images_dir = base_dir / "images"
    images_dir.mkdir(parents=True, exist_ok=True)

    filename = f"{uuid4().hex}.webp"
    file_path = images_dir / filename

    with file_path.open("wb") as buffer:
        shutil.copyfileobj(picture.file, buffer)

    relative_path = f"images/{filename}"

    with sq.connect("venikrim.db") as con:
        cur = con.cursor()
        cur.execute(
            "INSERT INTO products (created_at, name, desciption, price, picture) VALUES (?, ?, ?, ?, ?)",
            (datetime.now(), name, description, price, relative_path),
        )
        con.commit()

    return {'status': 'success', 'message': 'Product added'}

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
