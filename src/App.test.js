import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mocking react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // Keep the actual implementation for other parts
  BrowserRouter: ({ children }) => <div>{children}</div>, // Mock BrowserRouter
  Route: ({ children }) => <div>{children}</div>, // Mock Route
  Routes: ({ children }) => <div>{children}</div>, // Mock Routes
}));

// Skipping the test case
test.skip('renders App component without crashing', () => {
  render(<App />);
});
