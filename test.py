import sys
from flask import Flask

app = Flask('app')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
from models import *
db.init_app(app)

if len(sys.argv)>1 and sys.argv[1]=='-c':
    with app.app_context():
        db.create_all()
        user = User(username = 'test', email = 'test@test.com')
        print user
        db.session.add(user)
        task = Task(text = 'test task text', user = user)
        db.session.add(task)
        
        db.session.add_all([
            Task(text = 'test subtask 1 text', parent = task, user = user),
            Task(text = 'test subtask 2 text', parent = task, user = user)
        ])
        db.session.commit()
        
import sqlite3
conn = sqlite3.connect('test.db')

c = conn.cursor()

c.execute('select name from sqlite_master where type=\'table\';')
tables = c.fetchall()
for table in tables:
    print table[0]
    c.execute('PRAGMA table_info({});'.format(table[0]))
    print '\t'.join([str(field[1]) for field in c.fetchall()])
    c.execute('SELECT * from {};'.format(table[0]))
    for rec in c.fetchall():
        print '\t'.join([str(field) for field in rec])
