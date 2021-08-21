const init = {
    data : []
  };
  
  const itemReducer = (state = init, action) => {
    const {type, payload} = action;

    switch (type) {
      case "GET_DATA_ITEM_BY_MARKET_ID":
        return {
          ...state,
          data: payload,
        };
      default:
        return state;
    }
  };
  
  export default itemReducer;
  