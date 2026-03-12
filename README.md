# 🚀 Om's Developer Portfolio

![Java](https://img.shields.io/badge/Java-Backend-orange?style=for-the-badge\&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-Framework-green?style=for-the-badge\&logo=springboot)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?style=for-the-badge\&logo=postgresql)
![Vercel](https://img.shields.io/badge/Vercel-Frontend-black?style=for-the-badge\&logo=vercel)
![Render](https://img.shields.io/badge/Render-Backend-purple?style=for-the-badge\&logo=render)

---

## 🌐 Live Demo

**Frontend:**
https://om-folio.vercel.app

**Backend API:**
https://om-portfolio-r0oa.onrender.com

---

## 📌 Project Overview

This is a **full-stack developer portfolio** designed to showcase projects, skills, and provide a functional contact system.

Visitors can explore projects and submit messages through the **contact form**, which are processed by a **Spring Boot REST API** and securely stored in a **PostgreSQL database**.

The project demonstrates **full-stack integration, REST API design, validation, and cloud deployment**.

---

## 🧠 Architecture

```text
Frontend (Vercel)
        ↓
Spring Boot API (Render)
        ↓
PostgreSQL Database (Render)
```

This architecture separates the **presentation layer**, **business logic**, and **data layer** for scalability and maintainability.

---

## 🛠 Tech Stack

### **Frontend**

* HTML5
* CSS3
* Vanilla JavaScript

### **Backend**

* Java
* Spring Boot
* Spring Security
* REST APIs
* Maven

### **Database**

* PostgreSQL

### **Deployment**

* **Vercel** – Frontend hosting
* **Render** – Backend service + PostgreSQL database

---

## ✨ Features

✔ Responsive modern portfolio UI
✔ Projects showcase with GitHub repository links
✔ Contact form integrated with backend API
✔ Server-side validation using **Spring Boot Validation**
✔ Secure REST API structure
✔ Messages stored in **PostgreSQL database**
✔ Fully deployed **cloud-based full-stack architecture**

---

## 🔗 API Endpoint

### **Submit Contact Message**

```
POST /api/contact
```

**Example Request Body**

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "subject": "Portfolio Inquiry",
  "message": "Hello, I liked your portfolio."
}
```

The backend validates the input and stores the message in the database.

---

## 📂 Project Structure

```
Om_Portfolio
│
├── Portfolio
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── Portfolio_backend
    ├── src
    ├── pom.xml
    └── Dockerfile
```

* **Portfolio** → Frontend application
* **Portfolio_backend** → Spring Boot backend service

---

## ⚙️ Running Locally

### Clone the repository

```
git clone https://github.com/Om12s/Om_Portfolio.git
```

---

### Run Backend

```
cd Portfolio_backend
mvn spring-boot:run
```

Backend will run on:

```
http://localhost:8080
```

---

### Run Frontend

Open `index.html` in a browser
or run using **VS Code Live Server**.

---

## 📸 Screenshots

<img width="1898" height="868" alt="home" src="https://github.com/user-attachments/assets/ec5dea58-465d-484c-8c9e-1e9f8a5270b1" />

<img width="1903" height="870" alt="projects" src="https://github.com/user-attachments/assets/5704057f-f350-4948-a602-dab925d2c7b0" />

<img width="1897" height="874" alt="contact" src="https://github.com/user-attachments/assets/fcfbb337-5463-4121-96f5-e13ce251b716" />


## 👨‍💻 Author

**Om**
*Java Backend Developer*

GitHub
https://github.com/Om12s

LinkedIn
www.linkedin.com/in/omsood

---

## ⭐ If you found this project useful

Consider **starring the repository** to support the project.
