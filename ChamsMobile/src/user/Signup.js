import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const SignupForm = (props) => {
  const { firstName, lastName, email, password, updateFormData, goBack, history } = props;

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send POST request to server to create new user
      const response = await axios.post('/users', {
        firstName,
        lastName,
        email,
        password,
      });

      if (response.status === 201) {
        // User created successfully, navigate to profile page
        history.push('/profile');
      } else {
        // Unexpected response status code
        setError('Unexpected error occurred. Please try again.');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange = (event) => {
    updateFormData({
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = () => {
    history.goBack();
    goBack();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      {error && <div className="error">{error}</div>}
      <button type="submit">Submit</button>
      <button type="button" onClick={handleBackClick}>
        Back
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  firstName: state.firstName,
  lastName: state.lastName,
  email: state.email,
  password: state.password,
});

const mapDispatchToProps = (dispatch) => ({
  updateFormData: (data) => dispatch({ type: 'UPDATE_FORM_DATA', payload: data }),
  submitForm: () => dispatch({ type: 'SUBMIT_FORM' }),
  goBack: () => dispatch({ type: 'GO_BACK' }),
});

const SignupFormConnected = connect(mapStateToProps, mapDispatchToProps)(withRouter(SignupForm));

export default SignupFormConnected;
