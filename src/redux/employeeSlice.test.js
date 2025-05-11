import employeeReducer, {
  selectEmployee,
  updateEmployee,
  clearSelectedEmployee,
} from './employeeSlice';

describe('employeeSlice', () => {
  // Updated initial state to match the actual state in employeeSlice.js
  const initialState = {
    employees: [
      { id: 1, name: 'John Doe', role: 'Developer' },
      { id: 2, name: 'Jane Smith', role: 'Designer' },
      { id: 3, name: 'Alice Johnson', role: 'Manager' },
      { id: 4, name: 'John Doe', role: 'Developer' },
      { id: 5, name: 'Jane Smith', role: 'Designer' },
      { id: 6, name: 'Alice Johnson', role: 'Manager' },
    ],
    selectedEmployee: null,
  };

  it('should return the initial state when no action is passed', () => {
    const result = employeeReducer(undefined, { type: undefined });
    expect(result).toEqual(initialState);
  });

  it('should select an employee by ID', () => {
    const action = selectEmployee(2);
    const result = employeeReducer(initialState, action);
    expect(result.selectedEmployee).toEqual({
      id: 2,
      name: 'Jane Smith',
      role: 'Designer',
    });
  });

  it("should update an employee's details", () => {
    const action = updateEmployee({ id: 2, name: 'Jane Doe', role: 'Lead Designer' });
    const result = employeeReducer(initialState, action);
    expect(result.employees).toEqual([
      { id: 1, name: 'John Doe', role: 'Developer' },
      { id: 2, name: 'Jane Doe', role: 'Lead Designer' },
      { id: 3, name: 'Alice Johnson', role: 'Manager' },
      { id: 4, name: 'John Doe', role: 'Developer' },
      { id: 5, name: 'Jane Smith', role: 'Designer' },
      { id: 6, name: 'Alice Johnson', role: 'Manager' },
    ]);
  });

  it('should clear the selected employee', () => {
    const stateWithSelectedEmployee = {
      ...initialState,
      selectedEmployee: { id: 2, name: 'Jane Smith', role: 'Designer' },
    };
    const action = clearSelectedEmployee();
    const result = employeeReducer(stateWithSelectedEmployee, action);
    expect(result.selectedEmployee).toBeNull();
  });
});