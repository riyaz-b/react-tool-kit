import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AxiosMenu from './components/AxiosMenu/AxiosMenu';
import EmployeeList from './components/EmployeeList/EmployeeList';
import ProtectedRoute from './components/ProtectedRoute'; // Correct path if it's directly in components
import PaginationMenu from './components/PaginationMenu/PaginationMenu';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={['admin', 'user']}>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route
              path="axios-menu"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AxiosMenu />
                </ProtectedRoute>
              }
            />
            <Route
              path="employee-list"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <EmployeeList />
                </ProtectedRoute>
              }
            />
            <Route
              path="pagination-menu"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <PaginationMenu />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;