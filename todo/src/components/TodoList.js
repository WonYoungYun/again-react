import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onCheck, onRemove }) => (
    <>
        {
            todos.map(todo =>
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    checked={todo.checked}
                    text={todo.text}
                    onCheck={onCheck}
                    onRemove={onRemove}
                    todo={todo}
                />
            )}
    </>
);

export default TodoList;