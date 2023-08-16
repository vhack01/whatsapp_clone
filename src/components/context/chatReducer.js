export const CHAT_ACTION_TYPE = {
  SET_CHAT: "SET_CHAT",
  REMOVE_CHAT: "REMOVE_CHAT",
};

export const CHAT_INITIAL_STATE = {
  users: [],
};

function chatReducer(state, action) {
  switch (action.type) {
    case CHAT_ACTION_TYPE.SET_CHAT:
      return { ...state, users: [...state.users, action.payload.value] };
    default:
      return state;
  }
}

export default chatReducer;
