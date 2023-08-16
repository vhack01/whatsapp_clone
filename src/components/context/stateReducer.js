export const ACTION_TYPES = {
  LOGIN_START: "LOGIN_START",
  SET_USER: "SET_USER",
};

export const INITIAL_STATE = {
  user: null,
  loading: false,
};

function stateReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_START:
      return { ...state, loading: true };
    case ACTION_TYPES.SET_USER:
      return { ...state, loading: false, user: action.payload.value };
    default:
      return state;
  }
}

export default stateReducer;
