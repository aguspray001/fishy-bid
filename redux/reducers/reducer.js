import { combineReducers } from "redux";
import marketReducer from './market'
import authReducer from './auth'
import itemReducer from './item'

const reducer = combineReducers({
    authReducer,
    marketReducer,
    itemReducer
});

export default reducer;
