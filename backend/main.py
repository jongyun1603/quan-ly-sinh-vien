from fastapi import FastAPI
from pydantic import BaseModel
import psycopg2
from psycopg2.extras import RealDictCursor

app = FastAPI()


students = [
    {
        "name": "Nguyễn Văn A",
        "class_name": "12A1"
    },
    {
        "name": "Trần Văn B",
        "class_name": "12A2"
    }
]


class Student(BaseModel):
    name: str
    class_name: str

DB_CONFIG = {
    "host": "localhost",
    "database": "postgres",
    "user": "postgres",
    "password": "qlsv2026.db",
    "port": 5432
}

@app.post("/students")
def add_student(student: Student):
    conn = psycopg2.connect(**DB_CONFIG, cursor_factory=RealDictCursor)
    cur = conn.cursor()
    
    sql = """
        INSERT INTO students (name,class_name)
        VALUES (%s, %s)
        RETURNING id, name, class_name;
    """
    try:
        cur.execute(sql, (student.name, student.class_name))
        new_student = cur.fetchone()
        conn.commit()
        return {"status": "success", "data": new_student}
        
    except psycopg2.IntegrityError:
        conn.rollback()
        raise HTTPException(status_code=400, detail="Email này đã tồn tại!")
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cur.close()
        conn.close()


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