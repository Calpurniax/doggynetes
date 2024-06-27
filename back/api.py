from typing import List
from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware


from dog import BaseDog, Dog
from db import add_dog, get_dogs

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/healthz")
def healthz():
    return {"status": "OK"}

@app.get("/ready")
def ready():
    return {"status": "OK"}

@app.get("/dogs")
def list_all() -> List[Dog]:
    results = get_dogs()  
    return results    

@app.post("/dogs", status_code=status.HTTP_201_CREATED)
def create_dog(dog:BaseDog) -> Dog:
    created_dog = dog.model_dump()
    created_dog["id"]= add_dog(dog)
    return created_dog


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("api:app", reload=True, port=8080)