import './TodosListItem.css';

import { deleteTodo, toggleTodo } from '../store/actions/todos';

import React from 'react';
import classNames from '../common/utils/classnames';
import { useDispatch } from 'react-redux';

function TodosListItem({ todo: { id, title, isDone } }) {
    const dispatch = useDispatch();

    function onToggleClick() {
        dispatch(toggleTodo(id));
    }

    function onDeleteClick(e) {
        e.stopPropagation();
        dispatch(deleteTodo(id));
    }

    return (
        <div
            className={classNames('u-full-width', 'todo-item', {
                done: isDone,
            })}
            onClick={onToggleClick}
        >
            {title}
            <span className="delete-btn" onClick={onDeleteClick}>
                X
            </span>
        </div>
    );
}

export default TodosListItem;
