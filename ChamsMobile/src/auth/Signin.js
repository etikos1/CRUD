import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateEmail, updatePassword } from './actions';
import './Signin.css';
import axios from 'axios';

function SigninForm() {
  const [error, setError] = useState(null);
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/signin', { email, password });
      // If the response status is 200, set the user's session and redirect to the profile page
      if (response.status === 200) {
        history.push('/profile');
      }
    } catch (err) {
      // Handle sign-in error
      setError(err.response.data.error);
    }
  };

  const handleBackClick = () => {
    history.goBack();
  };

  const handleEmailChange = (event) => {
    dispatch(updateEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(updatePassword(event.target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div className="error">{error}</div>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleBackClick}>Back</button>
    </form>
  );
}

export default SigninForm;
