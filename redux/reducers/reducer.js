import { combineReducers } from "redux";
import marketReducer from './market'
import authReducer from './auth'

const reducer = combineReducers({
    authReducer,
    marketReducer
});

export default reducer;
