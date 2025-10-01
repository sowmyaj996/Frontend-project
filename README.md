# 📋 User Submission Form Application

This project is a **full-stack application** that allows users to submit their details through a frontend form, with backend validation and database storage.

It demonstrates:

* Form input handling (name, email, skills, location).
* **Email uniqueness validation** (handled by backend).
* Success/error handling in the frontend.
* REST API integration between frontend and backend.

---

## 🚀 Project Structure

```
app/
 ├── index.html        # Frontend form UI
 ├── style.css         # Styling for the form
 ├── script.js         # Handles form submission & API calls
 └── (Backend handled separately)
```

---

## 🎨 Frontend (Form Application)

* **Tech Stack**: HTML, CSS, JavaScript
* **Features**:

  * Collects user data: `name`, `email`, `location`, `skills`.
  * Sends data to backend API (`/submit-form`).
  * Displays success/error messages dynamically.
  * Validates that fields are not empty before submission.

---

## ⚙️ Backend (API Service)

The backend handles **storage, validation, and retrieval** of submissions.
Refer to [User-Form API Documentation](./User-Form%20API%20Documentation.pdf) for detailed specs.

### Available Endpoints

#### 1️⃣ Submit Form

* **Endpoint**: `POST /submit-form`
* **Purpose**: Accept user data and store it in the database.
* **Validations**:

  * `name`: required, string
  * `location`: required, string
  * `email`: required, must be unique
  * `skills`: required, array of strings

**Request Example**

```json
{
  "name": "Alice Johnson",
  "location": "New York",
  "email": "alice.johnson@example.com",
  "skills": ["Python", "React", "FastAPI"]
}
```

**Response Examples**
✅ Success:

```json
{ "message": "Form submitted successfully!" }
```

❌ Error (Email exists):

```json
{ "error": "Email already existed" }
```

---

#### 2️⃣ Fetch Submissions

* **Endpoint**: `GET /submissions`
* **Purpose**: Retrieve all stored submissions.

**Response Example**

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

---

## 🔗 Frontend ↔ Backend Integration

* Frontend sends **POST** requests to `/submit-form`.
* Backend checks email uniqueness and responds with success/error.
* Frontend displays result messages accordingly.
* Users can fetch all submissions via **GET** `/submissions`.

---

## 🛠️ Setup & Usage

### Frontend

1. Open `index.html` in your browser.
2. Fill in details and click **Submit**.
3. Messages will display based on backend response.

### Backend

1. Run backend server (FastAPI/Node/etc. depending on implementation).
2. Ensure API is accessible at the expected base URL.
3. Connect with database for persistence.

---

## ✅ Summary

* **Frontend**: Collects and sends user data.
* **Backend**: Validates, stores, and retrieves submissions.
* **Key Rule**: Email must be unique.
* **Techs Used**: HTML, CSS, JS (Frontend) + REST API (Backend).


Do you want me to also **add step-by-step setup instructions for backend (FastAPI/Node)** or keep it **generic** since backend team handles it?
