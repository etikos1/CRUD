import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const EditProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put('/users/:id', formData);
      history.push('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <div className="container">
      <h1 className="title">Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="buttons">
          <button type="submit" className="submit-button">Save Changes</button>
          <button onClick={handleBackClick} className="back-button">Back</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
