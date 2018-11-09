import React from 'react';

const UserTable = props => (
  <table className="table">
    <thead className="text-white" style={{ background: '#333' }}>
      <tr>
        <th scope="col">Company</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Comments</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <th scope="row">{user.company}</th>
            <td>{user.name}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
            <td>{user.comments}</td>
            <td>
              <button
                type="button"
                className="btn btn-outline-primary mr-2"
                onClick={() => props.editRow(user)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td className="text-uppercase font-weight-bold">No Customers</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
