import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './sections/Home.jsx';
import About from './sections/About.jsx';
import Portfolio from './sections/Portfolio.jsx';
import Testimonial from './sections/Testimonial.jsx';
import Service from './sections/Service.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';

import Login from './sections/Login.jsx';
import Dashboard from './sections/Dashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Booking from './sections/Booking.jsx';

function App() {
  return (
    <Routes>
      {/* Public elements */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <About />
            <Service />
            <Portfolio />
            <Booking/>
            <Testimonial />
            <Contact />
            <Footer />
          </>
        }
      />

      {/* Admin routes */}
      <Route path="/admin/login" element={<Login />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;