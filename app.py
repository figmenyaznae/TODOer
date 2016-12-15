from flask import Flask
from flask import render_template
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
    return render_template('main.html')
    
@app.route('/getdata')
def data():
    tasks = Task.query.all()
    print tasks
    return json.dumps(tasks, cls=CustomEncoder)