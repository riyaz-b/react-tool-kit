import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/'); // Navigate to the login page
  };

  if (!user) {
    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <h2>You are logged out</h2>
          <button onClick={handleLogin} className="login-button">
            Login
          </button>
        </header>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Welcome, {user.username}</h2>
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      </header>
      <nav className="dashboard-menu">
        <NavLink to="/dashboard/axios-menu" activeClassName="active-link">
          Axios Menu
        </NavLink>
        <NavLink to="/dashboard/employee-list" activeClassName="active-link">
          Employee List
        </NavLink>
        <NavLink to="/dashboard/redux-menu" activeClassName="active-link">
          Redux Menu
        </NavLink>
        <NavLink to="/dashboard/react-query-menu" activeClassName="active-link">
          React Query Menu
        </NavLink>
      </nav>
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;