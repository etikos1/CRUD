export const toggleEditMode = () => ({
    type: 'TOGGLE_EDIT_MODE',
    });
    
    export const fetchUsers = () => {
    return (dispatch) => {
    dispatch({ type: 'FETCH_USERS_REQUEST' });
    fetch('/api/users')
    .then((res) => res.json())
    .then((users) => {
    dispatch({
    type: 'FETCH_USERS_SUCCESS',
    payload: users,
    });
    })
    .catch((error) => {
    dispatch({
    type: 'FETCH_USERS_FAILURE',
    payload: error.message,
    });
    });
    };
    };
    
    export const createProfile = (data) => {
    return (dispatch) => {
    dispatch({ type: 'CREATE_PROFILE_REQUEST' });
    fetch('/api/profiles', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json',
    },
    })
    .then((res) => res.json())
    .then((profile) => {
    dispatch({
    type: 'CREATE_PROFILE_SUCCESS',
    payload: profile,
    });
    })
    .catch((error) => {
    dispatch({
    type: 'CREATE_PROFILE_FAILURE',
    payload: error.message,
    });
    });
    };
    };
    
    export const updateProfile = (data) => {
    return (dispatch) => {
    dispatch({ type: 'UPDATE_PROFILE_REQUEST' });
    fetch('/api/profiles', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json',
    },
    })
    .then((res) => res.json())
    .then((profile) => {
    dispatch({
    type: 'UPDATE_PROFILE_SUCCESS',
    payload: profile,
    });
    })
    .catch((error) => {
    dispatch({
    type: 'UPDATE_PROFILE_FAILURE',
    payload: error.message,
    });
    });
    };
    };