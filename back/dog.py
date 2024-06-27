from typing import Optional
from pydantic import BaseModel

class BaseDog(BaseModel):
    name:str
    age:int
    breed:Optional[str]


class Dog(BaseDog):
    id:str