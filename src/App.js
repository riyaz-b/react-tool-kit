import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './redux/store';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AxiosMenu from './components/AxiosMenu';
import EmployeeList from './components/EmployeeList';
import ReduxMenu from './components/ReduxMenu';
import ReactQueryMenu from './components/ReactQueryMenu';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}>
              {/* Nested routes under /dashboard */}
              <Route path="axios-menu" element={<AxiosMenu />} />
              <Route path="employee-list" element={<EmployeeList />} />
              <Route path="redux-menu" element={<ReduxMenu />} />
              <Route path="react-query-menu" element={<ReactQueryMenu />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;