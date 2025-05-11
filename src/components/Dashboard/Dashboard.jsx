import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const { logout, user } = useContext(AuthContext);

  return (
    <div className="container mt-5">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h2>Welcome, {user?.username || 'Guest'}</h2>
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </header>
      <nav className="nav nav-pills mb-4">
        <NavLink className="nav-link" to="/dashboard/axios-menu">
          Axios Menu
        </NavLink>
        <NavLink className="nav-link" to="/dashboard/employee-list">
          Employee List
        </NavLink>
        <NavLink className="nav-link" to="/dashboard/redux-menu">
          Redux Menu
        </NavLink>
        <NavLink className="nav-link" to="/dashboard/react-query-menu">
          React Query Menu
        </NavLink>
        <NavLink className="nav-link" to="/dashboard/use-effect">
          UseEffect Demo
        </NavLink>
        <NavLink className="nav-link" to="/dashboard/custom-hook">
          Custom Hook
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;