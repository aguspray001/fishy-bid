const init = {
    data : []
  };
  
  const marketReducer = (state = init, action) => {
    const {type, payload} = action;

    switch (type) {
      case "GET_DATA_ALL_MARKET":
        return {
          ...state,
          data: payload,
        };
      default:
        return state;
    }
  };
  
  export default marketReducer;
  