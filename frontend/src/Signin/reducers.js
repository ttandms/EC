import { GET_USER_INFO } from "./actions";

const initialState = { user: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case "@@redux/INIT": {
      return state;
    }
    case GET_USER_INFO: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
