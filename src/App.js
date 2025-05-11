import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AxiosMenu from './components/AxiosMenu/AxiosMenu';
import EmployeeList from './components/EmployeeList/EmployeeList';
import ReduxMenu from './components/ReduxMenu/ReduxMenu';
import ReactQueryMenu from './components/ReactQueryMenu/ReactQueryMenu';
import UseEffectDemo from './components/UseEffectDemo/UseEffectDemo';
import CustomHookDemo from './components/CustomHookDemo/CustomHookDemo';
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
            <Route
              path="redux-menu"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <ReduxMenu />
                </ProtectedRoute>
              }
            />
            <Route
              path="react-query-menu"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <ReactQueryMenu />
                </ProtectedRoute>
              }
            />
            <Route
              path="use-effect"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <UseEffectDemo />
                </ProtectedRoute>
              }
            />
            <Route
              path="custom-hook"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <CustomHookDemo />
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