from fastapi import FastAPI
from database import engine, Base
from routes.todo_route import router

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(router)

@app.get("/")
def home():
    return {"message": "Todo API is Running 🚀"}
