import sqlite3 as sq
def create_table():
    # со здание таблицы для пользователей
    with sq.connect("venikrim.db") as con:
        cur = con.cursor() # создание курсора для выполнения запросов
        cur.execute("""CREATE TABLE IF NOT EXISTS products (
            created_at TEXT,
            name TEXT,
            desciption TEXT,
            price INTEGER,
            picture TEXT )""")
        cur.execute("""CREATE TABLE IF NOT EXISTS users (
            username TEXT,
            age INTEGER,
            city TEXT,
            role TEXT DEFAULT 'user',
            password TEXT NOT NULL
        
        )""")