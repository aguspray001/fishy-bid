const initState = {
    user: "",
    isLogin: false,
    token: "",
  };
  
  const authReducer = (state = initState, action) => {
    switch (action.type) {
      case "SIGN_IN":
        return {
          ...state,
          token: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  