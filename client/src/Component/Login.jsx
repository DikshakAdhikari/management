import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    photo: null,
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'photo') {
      setFormData({ ...formData, photo: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);

      const token = data.token; 
      localStorage.setItem('token', token);

      if (localStorage.getItem("token")) {
        navigate('/users');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <div style={{ maxWidth: '400px', width: '100%', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
        <h2 style={{ marginTop: '0', textAlign: 'center', fontSize: '24px', color: '#333' }}>Login</h2>
        <form onSubmit={handleSubmit}>
       <div style={{ textAlign: 'center', marginBottom: '20px' }}>
  <input
    type="file"
    accept="image/*"
    name="photo"
    id="photoInput"
    onChange={handleChange}
    style={{ display: 'none' }}
  />
  <label htmlFor="photoInput" style={{ display: 'inline-block', position: 'relative', cursor: 'pointer', marginBottom: '10px' }}>
    <div style={{ width: '120px', height: '120px', border: '2px dashed #ccc', borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
      <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'block', width: '60px', height: '60px', background: 'url("https://via.placeholder.com/60") center center no-repeat', backgroundSize: '50%' }}></span>
    </div>
    <span style={{ display: 'block', fontSize: '16px', color: '#555' }}>Choose File</span>
  </label>
</div>


          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={{  width: 'calc(100% - 16px)', padding: '8px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              style={{  width: 'calc(100% - 16px)', padding: '8px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', fontSize: '18px', cursor: 'pointer' }}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
