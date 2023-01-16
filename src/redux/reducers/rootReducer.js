import {combineReducers} from "@reduxjs/toolkit";
import formAuthorizationSlice from "./formAuthorizationSlice";

const rootReducer = combineReducers({
    formAuthorization: formAuthorizationSlice,
})
export default rootReducer;