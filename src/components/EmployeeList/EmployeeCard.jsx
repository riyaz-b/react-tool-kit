import React from 'react';
import './EmployeeList.css';

const EmployeeCard = ({ employee, onEdit }) => {
  return (
    <div className="employee-card">
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Role:</strong> {employee.role}</p>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};

export default EmployeeCard;