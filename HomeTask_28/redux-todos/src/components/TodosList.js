import React from 'react';
import TodosListItem from './TodosListItem';
import { selectTodos } from '../store/selectors/todos';
import { useSelector } from 'react-redux';

function TodosList() {
    const list = useSelector(selectTodos);

    return (
        <div className="row">
            <div className="twelve columns">
                {list.map((item) => (
                    <TodosListItem key={item.id} todo={item} />
                ))}
            </div>
        </div>
    );
}

export default TodosList;
