from .database import Base
from sqlalchemy import Column, String, Boolean, Integer

class Todo(Base):
    __tablename__ = "todos"
    
    id = Column(Integer, primary_key=True, index=True)
    task= Column(String, nullable= False,)
    description = Column(String, default = False)
    completed= Column(Boolean, default= False)
    

    
