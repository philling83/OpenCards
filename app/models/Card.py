from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.dialects import postgresql
from sqlalchemy.orm import relationship
import Deck_card

class Card(db.Model):
  __tablename__ = 'cards'

  id = db.Column(db.Integer, primary_key = True)
  title = db.Column(db.String(80), nullable = False)
  subject = db.Column(db.String(40), nullable = False)
  possible_answers = db.Column(postgresql.ARRAY(db.String))
  answer = db.Column(db.String(80))
  image = db.Column(db.String())
  created_by = db.Column(db.String, nullable = False, db.ForeignKey('teacher.id'))
  teacher = relationship('Teacher', back_populates='cards')
  decks = relationship('Deck', secondary=deck_cards, back_populates='cards')

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "subject": self.subject,
      "possible_answers": self.possible_answers,
      "answer": self.answer,
      "image": self.image,
      "created_by": self.created_by,
      "teacher": self.teacher,
      "decks": self.decks
    }
