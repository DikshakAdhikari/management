import React from 'react';
import { FaEdit, FaTrash, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const UserTable = ({ users }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    marginTop: '20px', // Added margin top
  };

  const headingStyle = {
    marginBottom: '20px', // Added margin bottom
  };

  const tableStyle = {
    width: '80%',
    borderCollapse: 'collapse',
    margin: '20px 0',
    fontSize: '18px',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
    height:"80%"
  };

  const thTdStyle = {
    padding: '12px 15px',
    border: '1px solid #ddd',
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: '#f2f2f2',
    color: '#333',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  const trEvenStyle = {
    backgroundColor: '#f9f9f9',
  };

  const statusIconStyle = {
    fontSize: '20px',
    marginRight: '5px',
  };

  const actionIconStyle = {
    fontSize: '20px',
    marginRight: '10px',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  const statusColors = {
    Active: '#28a745',
    Suspended: '#dc3545',
    Inactive: '#6c757d',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>User's Dashboard</h1> {/* Moved heading above the table */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>#</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Date Created</th>
            <th style={thStyle}>Role</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} style={index % 2 === 0 ? trEvenStyle : {}}>
              <td style={thTdStyle}>{index + 1}</td>
              <td style={thTdStyle}>{user.name}</td>
              <td style={thTdStyle}>{user.dateCreated}</td>
              <td style={thTdStyle}>{user.role}</td>
              <td style={thTdStyle}>
                {user.status === 'Active' && (
                  <FaCheckCircle style={{ ...statusIconStyle, color: statusColors.Active }} />
                )}
                {user.status === 'Suspended' && (
                  <FaTimesCircle style={{ ...statusIconStyle, color: statusColors.Suspended }} />
                )}
                {user.status === 'Inactive' && (
                  <FaTimesCircle style={{ ...statusIconStyle, color: statusColors.Inactive }} />
                )}
              </td>
              <td style={thTdStyle}>
                <FaEdit style={{ ...actionIconStyle, color: '#007bff' }} />
                <FaTrash style={{ ...actionIconStyle, color: '#dc3545' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
