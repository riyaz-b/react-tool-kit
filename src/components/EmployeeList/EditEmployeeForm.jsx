import React, { useState } from 'react';
import './EmployeeList.css';

const EditEmployeeForm = ({ employee, onSave, onCancel }) => {
  const [name, setName] = useState(employee.name);
  const [role, setRole] = useState(employee.role);

  const handleSave = () => {
    onSave({ ...employee, name, role }); // Pass the updated employee to the parent
  };

  return (
    <div className="edit-form">
      <h3>Edit Employee</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditEmployeeForm;