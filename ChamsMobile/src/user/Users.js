import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch the logged-in user's information
    axios.get('/users/:id')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleBackClick = () => {
    history.goBack();
  };

  const handleEditClick = () => {
    // logic for editing profile
  };

  const handleDeleteClick = () => {
    // logic for deleting profile
  };

  return (
    <div className="container" style={{ backgroundColor: '#f5f5f5' }}>
      <h1 className="title">Welcome to My Profile page<p>My Name is {user.firstName}</p></h1>
      <a href="/users" className="link">See all users</a>
      <div className="buttons">
        <button onClick={handleEditClick} className="edit-button">Edit</button>
        <button onClick={handleDeleteClick} className="delete-button">Delete</button>
        <button onClick={handleBackClick} className="back-button">Back</button>
      </div>
    </div>
  );
};

export default ProfilePage;
