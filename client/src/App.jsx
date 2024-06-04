import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegisterForm from './Component/RegisterForm';
import LoginForm from './Component/Login';
import UserTable from './Component/Table';
import { users } from './Component/Data';

const App = () => {
  

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/users" element={<UserTable users={users} />} />
        <Route path="/" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
};

export default App;
