from fastapi import FastAPI
from .database import engine, Base
from .routes.todo_route import router

app = FastAPI(title="FastAPI Todo App")

Base.metadata.create_all(bind=engine)

app.include_router(router)

@app.get("/")
def home():
    return {"message": "FastAPI Todo Server Running 🚀"}
