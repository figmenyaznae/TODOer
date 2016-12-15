from flask_sqlalchemy import SQLAlchemy
import json

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True)
    
    def __repr__(self):
        return '<User(username={}, email={})>'.format(self.username, self.email)

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String)
    complete = db.Column(db.Boolean)
    parent_id = db.Column(db.Integer, db.ForeignKey('task.id'))
    parent = db.relationship('Task', remote_side=[id],
        backref=db.backref('subtasks', lazy='dynamic'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User',
        backref=db.backref('tasks'))
    
    def __repr__(self):
        return '<Task(text={}, complete = (), parent={}, user={})>'\
            .format(self.text, self.complete, self.parent_id, self.user_id)
            
            
class CustomEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, User):
            return {
                'username':obj.username,
                'email': obj.email
            }            
        
        if isinstance(obj, Task):
            return {
                'text':obj.text,
                'complete': obj.complete
            }
            
        # Let the base class default method raise the TypeError
        return json.JSONEncoder.default(self, obj)