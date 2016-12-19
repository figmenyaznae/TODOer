from flask import Flask
import json
from models import *

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    return app

app = create_app()
    
@app.route('/')
def main():
    with open('templates/main.html') as f:
        s = f.read()
    return s
    
@app.route('/getdata')
@app.route('/getdata/<parent_id>')
def data(parent_id=None):
    tasks = Task.query.filter(Task.parent_id==parent_id).all()
    return json.dumps(tasks, cls=CustomEncoder)
    
@app.route('/<file>')
def file(file):
    with open('templates/'+file) as f:
        s = f.read()
    return s