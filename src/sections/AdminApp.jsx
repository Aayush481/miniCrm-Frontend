import { Routes, Route } from 'react-router-dom';
import Login from "./Login.jsx"
import Dashboard from './Dashboard.jsx';
import ProtectedRoute from '../components/ProtectedRoute.jsx';

export default function AdminApp() {
  return (
    <Routes>
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