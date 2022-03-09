import { USER_REGISTER } from "../types";

export default function User(state = {}, action) {
  switch (action.type) {
    case USER_REGISTER:
      return action.payload;
    default:
      return state;
  }
}
