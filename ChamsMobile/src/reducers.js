const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  
  const formReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'UPDATE_FORM_DATA':
        return {
          ...state,
          ...action.payload
        };
      case 'SUBMIT_FORM':
        // Handle form submission logic here
        return state;
      case 'GO_BACK':
        return state;
      default:
        return state;
    }
  }
  
  export default formReducer;
  