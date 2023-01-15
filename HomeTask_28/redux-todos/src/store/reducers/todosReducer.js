import { ACTION_DELETE, ACTION_TOGGLE } from '../actions/todos';

const INITIAL_STATE = {
    todos: [
        { id: 1, title: 'ITEM 1', isDone: false },
        { id: 2, title: 'ITEM 2', isDone: true },
        { id: 3, title: 'ITEM 3', isDone: false },
        { id: 4, title: 'ITEM 4', isDone: true },
    ],
};

export default function todosReducer(state = INITIAL_STATE, { type, payload }) {
    console.log('reducer fired', state, type, payload);

    switch (type) {
        case ACTION_TOGGLE:
            return {
                ...state,
                todos: state.todos.map((item) =>
                    item.id !== payload
                        ? item
                        : {
                              ...item,
                              isDone: !item.isDone,
                          }
                ),
            };

        case ACTION_DELETE:
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== payload),
            };
        default:
            return state;
    }
}
