import React, { useState, useEffect } from 'react';

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(
    () => {
      setUser(props.currentUser);
    },
    [props]
  );

  const handleInputChange = e => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        props.updateUser(user.id, user);
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
      <button className="btn btn-primary mr-2">Update Customer</button>
      <button
        type="button"
        onClick={() => props.setEditing(false)}
        className="btn btn-danger"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
