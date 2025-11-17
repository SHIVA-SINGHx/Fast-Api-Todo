from pydantic import BaseModel

class TodoBase(BaseModel):
    task: str
    completed: bool = False

class TodoCreate(TodoBase):
    pass

class TodoResponse(TodoBase):
    id: int

    class Config:
        orm_mode = True
