from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
import models, schema

router = APIRouter(prefix="/todos", tags=["Todos"])

@router.post("/", response_model=schema.TodoResponse)
def create(todo: schema.TodoCreate, db: Session = Depends(get_db)):
    new_todo = models.Todo(task=todo.task)
    db.add(new_todo)
    db.commit()
    db.refresh(new_todo)
    return new_todo


@router.get("/", response_model=list[schema.TodoResponse])
def get_all(db: Session = Depends(get_db)):
    return db.query(models.Todo).all()
