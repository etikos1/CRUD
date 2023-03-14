import axios from 'axios';

const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`http://localhost:3000/users/${userId}`);
    console.log(response.data); // handle successful response
  } catch (error) {
    console.log(error); // handle error
  }
};
// eslint-disable-next-line no-unused-vars
const handleDeleteClick = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your profile? This action cannot be undone.");
    if (confirmDelete) {
      // eslint-disable-next-line no-undef
      deleteUser(userId);
      // logic to redirect to home or login page
    }
  };
  