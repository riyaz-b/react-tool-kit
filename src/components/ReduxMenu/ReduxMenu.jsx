import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectEmployee,
  updateEmployee,
  clearSelectedEmployee,
  removeEmployee,
} from '../../redux/employeeSlice'; // Corrected path
import './ReduxMenu.css'; // Corrected path

/**
 * ReduxMenu Component
 * Displays a list of employees and allows editing or removing them.
 */
const ReduxMenu = () => {
  // Accessing employees and selectedEmployee from the Redux store
  const employees = useSelector((state) => state.employee.employees);
  const selectedEmployee = useSelector((state) => state.employee.selectedEmployee);
  const dispatch = useDispatch();

  /**
   * Handles the "Edit" button click
   * @param {number} id - The ID of the employee to edit
   */
  const handleEdit = (id) => {
    dispatch(selectEmployee(id)); // Dispatch action to select an employee
  };

  /**
   * Handles the "Save" button click in the edit form
   */
  const handleSave = () => {
    dispatch(updateEmployee(selectedEmployee)); // Dispatch action to update the employee
    dispatch(clearSelectedEmployee()); // Clear the selected employee
  };

  /**
   * Handles the "Remove" button click
   * @param {number} id - The ID of the employee to remove
   */
  const handleRemove = (id) => {
    dispatch(removeEmployee(id)); // Dispatch action to remove the employee
  };

  return (
    <div className="employee-list">
      <h2>Redux Employee List</h2>
      <div className="employee-row">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Role:</strong> {employee.role}</p>
            <button onClick={() => handleEdit(employee.id)}>Edit</button>
            <button onClick={() => handleRemove(employee.id)} className="remove-button">
              Remove
            </button>
          </div>
        ))}
      </div>

      {selectedEmployee && (
        <div className="edit-form">
          <h3>Edit Employee</h3>
          <input
            type="text"
            value={selectedEmployee.name}
            onChange={(e) =>
              dispatch(
                updateEmployee({
                  ...selectedEmployee,
                  name: e.target.value,
                })
              )
            }
          />
          <input
            type="text"
            value={selectedEmployee.role}
            onChange={(e) =>
              dispatch(
                updateEmployee({
                  ...selectedEmployee,
                  role: e.target.value,
                })
              )
            }
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => dispatch(clearSelectedEmployee())}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ReduxMenu;