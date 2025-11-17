from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from .. import schema
from ..controller import todo_controller

router = APIRouter(prefix="/todos", tags=["Todos"])

@router.post("/", response_model=schema.TodoResponse)
def create(todo: schema.TodoCreate, db: Session = Depends(get_db)):
    return todo_controller.create_todo(db, todo)

@router.get("/", response_model=list[schema.TodoResponse])
def get_all(db: Session = Depends(get_db)):
    return todo_controller.get_all_todos(db)

@router.get("/{id}", response_model=schema.TodoResponse)
def get_one(id: int, db: Session = Depends(get_db)):
    todo = todo_controller.get_one(db, id)
    if not todo:
        raise HTTPException(404, "Todo Not Found")
    return todo

@router.put("/{id}")
def update(id: int, data: schema.TodoUpdate, db: Session = Depends(get_db)):
    updated = todo_controller.update(db, id, data)
    if not updated:
        raise HTTPException(404, "Todo Not Found")
    return updated

@router.delete("/{id}")
def delete(id: int, db: Session = Depends(get_db)):
    deleted = todo_controller.delete(db, id)
    if not deleted:
        raise HTTPException(404, "Todo Not Found")
    return {"message": "Deleted Successfully"}
