import React, { useState } from 'react';

const AddUserForm = props => {
  const initialFormState = {
    id: '',
    company: '',
    name: '',
    address: '',
    phone: '',
    comments: ''
  };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const [showForm, isShowForm] = useState(false);

  return (
    <React.Fragment>
      <h2>
        Add Customer{' '}
        <i
          className="fas fa-user-plus"
          onClick={isShowForm}
          style={{ cursor: 'pointer' }}
        />
      </h2>
      <form
        className={showForm ? 'd-block' : 'd-none'}
        onSubmit={e => {
          e.preventDefault();
          if (!user.company || !user.name) return;

          props.addUser(user);
          setUser(initialFormState);
        }}
      >
        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            className="form-control"
            placeholder="Company Name"
            name="company"
            value={user.company}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            name="address"
            value={user.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Comments</label>
          <input
            type="text"
            className="form-control"
            placeholder="Comments"
            name="comments"
            value={user.comments}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default AddUserForm;
