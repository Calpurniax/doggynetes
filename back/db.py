import firebase_admin
from firebase_admin import firestore, credentials

cred = credentials.Certificate(".env/credentials.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
dogs_ref = db.collection('dogs')

def add_dog(data):   
    date_ref, doc_ref = dogs_ref.add(data.model_dump())
    return doc_ref.id           

def get_dogs():
    list_result=list()
    results = dogs_ref.stream()
    for result in results:
        dog = result.to_dict()
        dog["id"]=result.id
        list_result.append(dog)
    return list_result