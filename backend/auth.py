import sqlite3 as sq
def admin_auth(login, password):
    with sq.connect("venikrim.db") as con:
        cur = con.cursor()
        cur.execute("SELECT * FROM users WHERE username = ? AND password = ?", (login, password))
        return cur.fetchone()
