export const ACTION_TOGGLE = 'ACTION_TOGGLE';
export function toggleTodo(payload) {
  return { type: ACTION_TOGGLE, payload };
}

export const ACTION_DELETE = 'ACTION_DELETE';
export function deleteTodo(payload) {
  return { type: ACTION_DELETE, payload };
}

export const ACTION_CREATE = 'ACTION_CREATE';
export function createTodo(payload) {
  return { type: ACTION_CREATE, payload };
}
