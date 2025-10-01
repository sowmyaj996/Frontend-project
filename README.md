# 📌 User Submissions API

This backend service provides endpoints for handling user form submissions and retrieving stored submissions.  
It validates email uniqueness before storing data.

---

## 🚀 Overview

- **Submit Form (POST /submit-form)** → Accepts user details and stores them in the database (with email uniqueness check).  
- **Fetch Submissions (GET /submissions)** → Retrieves all stored submissions.

---

## 📂 Endpoints

### 1️⃣ Submit Form

**Endpoint:**  
```
POST /submit-form
```

**Purpose:**  
Receive user data and store it in the database. The email must be unique.

**Request Body Example:**
```json
{
  "name": "Alice Johnson",
  "location": "New York",
  "email": "alice.johnson@example.com",
  "skills": ["Python", "React", "FastAPI"]
}
```

**Validation Rules:**
- `name` → string, required  
- `location` → string, required  
- `email` → string, required, **must be unique**  
- `skills` → array of strings, required  

**Success Response (200):**
```json
{
  "message": "Form submitted successfully!"
}
```

**Error Responses:**
- Email already exists:
```json
{
  "error": "Email already existed"
}
```
- Invalid request format (missing fields):
```json
{
  "error": "Invalid request data"
}
```

---

### 2️⃣ Fetch Submissions

**Endpoint:**  
```
GET /submissions
```

**Purpose:**  
Retrieve all stored submissions.

**Success Response Example (200):**
```json
[
  {
    "name": "Bob Smith",
    "location": "London",
    "email": "bob.smith@example.com",
    "skills": ["JavaScript", "NodeJS"]
  },
  {
    "name": "Clara Lee",
    "location": "Toronto",
    "email": "clara.lee@example.com",
    "skills": ["Java", "Spring Boot"]
  }
]
```

**Error Response Example (500):**
```json
{
  "error": "Unable to fetch submissions"
}
```

---

## ⚙️ Notes for Frontend Team

- All requests must be sent in **JSON format**.  
- Required header:
  ```
  Content-Type: application/json
  ```
- Backend enforces **email uniqueness** → frontend only needs to handle error messages.  
- Success messages only return confirmation, not the submitted data.

---

## 📖 Summary

- **POST /submit-form** → Submit user data (with email uniqueness check).  
- **GET /submissions** → Fetch all stored submissions.  
- Responses are simple JSON with success or error messages for easy frontend integration.  

---

✅ Ready for integration with frontend clients.
