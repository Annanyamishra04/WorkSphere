WorkSphere --- Employee Management System

WorkSphere is a full-stack Employee Management System (EMS) built
with the MERN stack --- MongoDB, Express.js, React.js, and Node.js.

The application provides separate role-based experiences for Admin
and Employee users, with features for employee management,
attendance, leave management, payslips, profiles, authentication,
dashboard statistics, background jobs, and email-related functionality.

Live Demo

Live Link:

https://work-sphere-mgza-63xz9jr1r-annanya2.vercel.app/

Features

Admin

Admin login and authentication

Admin dashboard

Employee management

View employee information

Attendance overview

Leave management

Payslip management

Payslip generation

Payslip printing

Profile management

Change password

Logout

Employee

Employee login and authentication

Employee dashboard

Attendance management

Leave management

View payslips

Print payslips

Profile management

Change password

Logout

Role-Based Access

The application supports two user roles:

ADMIN
EMPLOYEE

The available navigation and functionality change according to the
authenticated user's role.

Admin Navigation

Dashboard
Employees
Leave
Payslips
Settings

Employee Navigation

Dashboard
Attendance
Leave
Payslips
Settings

Tech Stack

Frontend

React.js

Vite

React Router DOM

Tailwind CSS

Axios

Lucide React

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT

bcrypt

Multer

Inngest

Nodemailer

Project Architecture

WorkSphere
│
├── Frontend
│   ├── React
│   ├── React Router
│   ├── Tailwind CSS
│   ├── Axios
│   └── Components / Pages / Context
│
└── Backend
    ├── Express.js
    ├── MongoDB / Mongoose
    ├── Controllers
    ├── Routes
    ├── Middleware
    ├── Authentication
    ├── Inngest
    └── Nodemailer

Main Modules

1. Authentication

Users can log in using their credentials.

Authentication uses:

JWT

bcrypt

Protected Express routes

Role-based access

Login:

POST /api/auth/login

Session:

GET /api/auth/session

Change password:

POST /api/auth/change-password

2. Employee Management

Administrators can access the employee management section.

API:

/api/employees

3. Attendance Management

Employees can access attendance functionality.

API:

/api/attendance

4. Leave Management

The application provides leave management functionality for employees
and administrators.

API:

/api/leave

5. Payslip Management

The application supports payslip generation, viewing, and printing.

API:

/api/payslips

6. Dashboard

The dashboard provides an overview of important employee-management
information and statistics.

API:

/api/dashboard

7. Profile Management

Users can view and update their profile.

Endpoints:

GET  /api/profile
POST /api/profile

Profile information can also be displayed in the application sidebar.

8. Change Password

Users can change their password from Settings.

The frontend sends:

{
  "currentPassword": "current-password",
  "newPassword": "new-password"
}

The backend verifies the existing password using bcrypt before storing
the new hashed password.

9. Inngest

Inngest is integrated for background jobs and scheduled/event-driven
functionality.

Endpoint:

/api/inngest

10. Nodemailer

Nodemailer is integrated for email-related functionality.

API Routes

The main API routes are:

/api/auth
/api/employees
/api/profile
/api/attendance
/api/leave
/api/payslips
/api/dashboard
/api/inngest

Environment Variables

Create a .env file in the backend project.

Example:

PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Add any other environment variables required by the project.

Do not commit .env files, database credentials, JWT secrets, or
other private keys to GitHub.

Installation

1. Clone the repository

git clone YOUR_GITHUB_REPOSITORY_URL
cd WorkSphere

2. Install backend dependencies

cd server
npm install

3. Configure environment variables

Create the backend .env file and add the required MongoDB, JWT, and
other service credentials.

4. Start the backend

npm run dev

The backend runs on:

http://localhost:4000

5. Install frontend dependencies

Open a new terminal:

cd client
npm install

6. Start the frontend

npm run dev

Open the local URL displayed by Vite.

Database

The application uses MongoDB with Mongoose.

The database contains models for areas including:

Users

Employees

Attendance

Leave

Payslips

Authentication Flow

User
  ↓
Login Form
  ↓
POST /api/auth/login
  ↓
Express Authentication Controller
  ↓
MongoDB User
  ↓
Password verification with bcrypt
  ↓
JWT generated
  ↓
Authenticated user
  ↓
Role-based application access

Profile Flow

Sidebar / Profile
      ↓
GET /api/profile
      ↓
Authentication middleware
      ↓
Profile Controller
      ↓
MongoDB
      ↓
Profile data

Change Password Flow

Settings
   ↓
Change Password Modal
   ↓
Current Password + New Password
   ↓
POST /api/auth/change-password
   ↓
Authentication middleware
   ↓
bcrypt password verification
   ↓
New password hashed
   ↓
Password updated

Deployment

Before deploying the application:

Configure the production MongoDB database.

Configure production environment variables.

Set a secure JWT secret.

Configure CORS for the production frontend.

Configure the frontend API URL.

Deploy the backend.

Deploy the frontend.

Test authentication and all major modules.

Add the final production URL to the Live Demo section.

Deployment Checklist

MongoDB production database configured

Environment variables configured

JWT secret configured

Backend deployed

Frontend deployed

Frontend API URL configured

CORS configured

Admin login tested

Employee login tested

Employee management tested

Attendance tested

Leave management tested

Payslip generation tested

Payslip printing tested

Profile update tested

Change password tested

Live link added

Learning Outcomes

This project demonstrates practical experience with:

MERN stack development

React component architecture

React Router

REST API development

Express.js routing

MongoDB and Mongoose

JWT authentication

Password hashing with bcrypt

Protected routes

Role-based access

CRUD operations

Employee management workflows

Attendance management

Leave management

Payslip generation

Background jobs

Email integration

Frontend/backend integration

Full-stack deployment

Future Improvements

Possible improvements include:

Employee search and filtering

Advanced attendance reports

Improved dashboard analytics

Email notifications

Automated payroll calculations

More granular permissions

Exportable reports

Cloud file storage

Improved responsive design

Automated CI/CD deployment
