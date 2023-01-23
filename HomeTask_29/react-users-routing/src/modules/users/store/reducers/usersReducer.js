import {
  ACTION_PUSH,
  ACTION_REMOVE,
  ACTION_SET_EDIT_USER,
  ACTION_SET_USERS,
  ACTION_UPDATE,
  SET_IS_LOADING,
} from '../actions/users';

const INITIAL_STATE = {
  isLoading: false,
  users: [],
  editingUser: {
    name: '',
    username: '',
    email: '',
  },
};

export default function usersReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case ACTION_UPDATE:
      return {
        ...state,
        users: state.users.map((item) =>
          item.id === payload.id ? payload : item
        ),
        editingUser: INITIAL_STATE.editingUser,
      };

    case ACTION_REMOVE:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== payload),
      };

    case ACTION_PUSH:
      return {
        ...state,
        users: [...state.users, payload],
        editingUser: INITIAL_STATE.editingUser,
      };

    case ACTION_SET_USERS:
      return {
        ...state,
        users: payload,
      };
    case ACTION_SET_EDIT_USER:
      return {
        ...state,
        editingUser: { ...state.editingUser, ...payload },
      };
    default:
      return state;
  }
}
