import { USER_LOGIN } from "../types";

export default function userData(state = {}, action) {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;
    default:
      return state;
  }
}
