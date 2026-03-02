

# Mini-CRM Frontend

Welcome to the **Mini-CRM Frontend**, the user-facing part of a customer relationship management system designed to streamline client management for small businesses. This React-based application provides a responsive and interactive interface for both public users and administrators.

---

## Table of Contents

- Overview
- Features
- Tech Stack
- Getting Started
- Prerequisites
- Installation
- Running the Application
- Folder Structure
- Future Enhancements
- Contributing
- License

---

## Overview

The frontend of Mini-CRM is built using React and styled with TailwindCSS and MOTION to provide a modern and user-friendly interface. It includes:
- A public-facing website for users to explore services, view portfolios, and book appointments.
- A secure admin dashboard for managing client bookings and inquiries.

This project is designed to demonstrate my skills in frontend development, including routing, state management, and API integration.

---

## Features

### Public Website
- Home Page: A welcoming landing page with an overview of the business.
- About Section: Information about the company and its mission.
- Services: A detailed list of services offered.
- Portfolio: Showcases previous work or projects.
- Testimonials: Displays client feedback.
- Booking: Allows users to book services directly.
- Contact Form: Enables users to send inquiries or messages.

### Admin Panel
- Login Page: Secure login for administrators.
- Dashboard: A protected route where admins can:
  - View client bookings.
  - Update booking statuses (e.g., Booked, Rejected, Completed).

### Additional Featur
- Responsive Design: Optimized for both desktop and mobile devices.
- Smooth Animations: Powered by **Framer Motion** for a polished user experience.
- Protected Routes: Ensures only authorized users can access admin features.

---

## Tech Stack

## Frontend
- React: JavaScript library for building user interfaces.
- React Router: For handling navigation and routing.
- TailwindCSS: Utility-first CSS framework for styling.
- Framer Motion: For animations and transitions.

### Build Tools
- Vite: A fast build tool for modern web applications.

---

## Getting Started

Follow these steps to set up and run the frontend locally.

### Prerequisites
Make sure you have the following installed:
- Node.js (v16 or higher)
- npm (Node Package Manager) 

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/miniCrm-Frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd miniCrm-Frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
  

### Running the Application
1. Start the development server:
   ```bash
   npm run dev
   ```
   
2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Folder Structure

Here’s an overview of the key folders and files:

```
src/
├── assets/               # Static assets (images, icons, etc.)
├── components/           # Reusable components (e.g., ProtectedRoute)
├── sections/             # Page sections (e.g., Home, About, Dashboard)
├── App.jsx               # Main application file with routes
├── main.jsx              # Entry point for React
├── App.css               # Global styles
└── index.html            # HTML template
```



## Future Enhancements

Here are some planned improvements for the frontend:

- State Management: Integrate Redux or Context API for better state handling.
- Testing: Add unit and integration tests using Jest and React Testing Library.
- Accessibility: Ensure the application meets WCAG standards.
- Dark Mode: Add a toggle for light and dark themes.

---

## Contributing

Contributions are welcome! If you’d like to improve this project, please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project as long as proper credit is given.

