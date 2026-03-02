import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('adminToken'); // replace with real auth check
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}