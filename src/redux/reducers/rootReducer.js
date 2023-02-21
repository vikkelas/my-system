import {combineReducers} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import formAuthorizationSlice from "./formAuthorizationSlice";

const rootReducer = combineReducers({
    formAuthorization: formAuthorizationSlice,
    auth: authSlice,
})
export default rootReducer;