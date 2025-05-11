import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import AxiosMenu from './components/AxiosMenu/AxiosMenu';
import EmployeeList from './components/EmployeeList/EmployeeList';
import ReduxMenu from './components/ReduxMenu/ReduxMenu';
import ReactQueryMenu from './components/ReactQueryMenu/ReactQueryMenu';
import UseEffectDemo from './components/UseEffectDemo/UseEffectDemo';
import CustomHookDemo from './components/CustomHookDemo/CustomHookDemo';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="axios-menu" element={<AxiosMenu />} />
            <Route path="employee-list" element={<EmployeeList />} />
            <Route path="redux-menu" element={<ReduxMenu />} />
            <Route path="react-query-menu" element={<ReactQueryMenu />} />
            <Route path="use-effect" element={<UseEffectDemo />} />
            <Route path="custom-hook" element={<CustomHookDemo />} />
          </Route>
          <Route path="*" element={<Login />} /> {/* Redirect unknown routes to login */}
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;