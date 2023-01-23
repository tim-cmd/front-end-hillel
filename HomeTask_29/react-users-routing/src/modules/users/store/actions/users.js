import api from '../../../../api';

function createAction(type) {
  console.log('createAction:', type);
  return (payload) => ({ type, payload });
}
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const ACTION_SET_USERS = 'ACTION_SET_USERS';
export const ACTION_SET_EDIT_USER = 'ACTION_SET_EDIT_USER';
export const ACTION_PUSH = 'ACTION_PUSH';
export const ACTION_UPDATE = 'ACTION_UPDATE';
export const ACTION_REMOVE = 'ACTION_REMOVE';

export const setIsLoading = createAction(SET_IS_LOADING);

export const setUsers = createAction(ACTION_SET_USERS);
export function getList() {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    api.get('users').then(({ data }) => {
      dispatch(setUsers(data));
      dispatch(setIsLoading(false));
    });
  };
}

export function saveUser(user) {
  return isNaN(user.id) ? createUser(user) : editUser(user);
}

export const updateUser = createAction(ACTION_UPDATE);
export function editUser(user) {
  return (dispatch) => {
    console.log('editUser',user);

    api.put('users/' + user.id, user)
      .then(({ data }) => dispatch(updateUser(data)));
  };
}

export const removeUser = createAction(ACTION_REMOVE);
export function deleteUser(id) {
  return (dispatch) => {
    api.delete('users/' + id).then(() => dispatch(removeUser(id)));
  };
}

export const pushUser = createAction(ACTION_PUSH);
export function createUser(newUser) {
  return (dispatch) => {
    api
      .post('users', {
        ...newUser,
        isDone: false,
      })
      .then(({ data }) => dispatch(pushUser(data)));
  };
}

export const setEditingUser = createAction(ACTION_SET_EDIT_USER);
export function getOne(Id) {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    api.get('users/' + Id).then(({ data }) => {
      dispatch(setEditingUser(data));
      dispatch(setIsLoading(false));
    });
  };
}

export function changeUser(changes) {
  console.log('changeUser',changes);
  return (dispatch, getState) => {
    const user = {...getState().editingUser, ...changes};
    console.log('user',user);
    dispatch(setEditingUser(user));
    
  };
}
