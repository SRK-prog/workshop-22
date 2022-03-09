import { USER_LOGIN, USER_REGISTER } from "../types";
import axios from "axios";
import history from "../../history";

export const userRegister = (userCredential) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/create-user",
      userCredential
    );
    dispatch({ type: USER_REGISTER, payload: res });
    history.push("/login");
  } catch (err) {
    console.log(err);
  }
};

export const userLogin = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:5000/login-user", user);
    dispatch({ type: USER_LOGIN, payload: data });
    history.push("/user-details");
  } catch (err) {
    console.log(err);
  }
};
