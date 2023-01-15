import React from 'react';
import TodoForm from './components/TodoForm';
import TodosList from './components/TodosList';

export default function App() {
    return (
        <div className="container">
            <TodosList />
            <TodoForm />
        </div>
    );
}
