from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


students = [
    {
        "id": 1,
        "name": "Nguyễn Văn A",
        "class_name": "12A1"
    },
    {
        "id": 2,
        "name": "Trần Văn B",
        "class_name": "12A2"
    }
]


class Student(BaseModel):
    name: str
    class_name: str


@app.get("/")
def home():
    return {
        "message": "Hello Backend!"
    }


@app.get("/students")
def get_students():
    return students


@app.post("/students")
def create_student(student: Student):
    new_student = {
        "id": len(students) + 1,
        "name": student.name,
        "class_name": student.class_name
    }

    students.append(new_student)

    return new_student