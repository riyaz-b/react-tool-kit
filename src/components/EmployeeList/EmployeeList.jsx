import React, { useState } from 'react';
import './EmployeeList.css';
import EmployeeCard from './EmployeeCard';
import EditEmployeeForm from './EditEmployeeForm';

const initialEmployees = [
  { id: 1, name: 'John Doe', role: 'Developer' },
  { id: 2, name: 'Jane Smith', role: 'Designer' },
  { id: 3, name: 'Alice Johnson', role: 'Manager' },
];

const EmployeeList = () => {
  const [employees, setEmployees] = useState(initialEmployees); // Manage employees in state
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEdit = (employee) => {
    setSelectedEmployee(employee); // Set the selected employee for editing
  };

  const handleSave = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setSelectedEmployee(null); // Close the edit form after saving
  };

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <div className="employee-row">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onEdit={() => handleEdit(employee)}
          />
        ))}
      </div>

      {selectedEmployee && (
        <EditEmployeeForm
          employee={selectedEmployee}
          onSave={handleSave}
          onCancel={() => setSelectedEmployee(null)}
        />
      )}
    </div>
  );
};

export default EmployeeList;