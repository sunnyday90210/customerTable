import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
// import axios from 'axios';

const App = () => {
  const usersData = [
    {
      id: 1,
      company: 'test company',
      name: 'Mark Test',
      address: '1500 Test ave',
      phone: '111-111-1111',
      comments: 'Mark is one of the best customers'
    },
    {
      id: 2,
      company: 'pepsi',
      name: 'tom tom',
      address: '70 lexinton ave',
      phone: '222-222-2222',
      comments: 'tom is a great customer'
    }
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: null,
    company: '',
    name: '',
    address: '',
    phone: '',
    comments: ''
  };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = user => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      company: user.company,
      name: user.name,
      address: user.address,
      phone: user.phone,
      comments: user.comments
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-sm navbar-dark mb-3 py-0"
        style={{ background: 'tomato' }}
      >
        <div className="container">
          <a href="/" className="navbar-brand">
            Vision
            <span>Pro</span>
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link text-white">
                  <i className="fas fa-question" /> Help
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link text-white">
                  <i className="fas fa-cog" /> Settings
                  <i
                    className="fas fa-sort-down"
                    style={{ float: 'right', padding: '1px' }}
                  />
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link text-white">
                  <i className="fas fa-user" /> Amin.Eshaq(demo)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <h1>Customer Center</h1>
        <div className="card card-body mb-3">
          {editing ? (
            <React.Fragment>
              <h2>Edit Customer</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* <h2>
                Add Customer{' '}
                <i
                  className="fas fa-user-plus"
                  onClick={showForm}
                  style={{ cursor: 'pointer' }}
                />
              </h2> */}
              <AddUserForm addUser={addUser} />
            </React.Fragment>
          )}
        </div>
        <div className="card card-body mb-3">
          <h2>View Customer</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
