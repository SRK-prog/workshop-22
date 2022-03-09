import { combineReducers } from "redux";
import User from "./signupReducers";
import userData from "./userReducers";

export default combineReducers({
  User: User,
  userData: userData,
});
