import React from 'react';
import back from '../../assets/back.jpg';
import TodoComponent from "./TodoComponent";

function TodoListContainer(props) {
    const {todoList, updateTodo, deleteTodoById, onOpenModal} = props; //array of todo's
    return (
        <div style={{
                position: 'relative',
                background: `url(${back})`,
                height: '100vh',
                padding: '10px'
        }}
        >
            {
                !!todoList.length
                && (
                    todoList.map(todo => (
                        <TodoComponent key={todo.id}
                                todo={todo}
                                updateTodo={updateTodo}
                                deleteTodoById={deleteTodoById}
                                onOpenModal={onOpenModal}
                                style={{
                                    display: 'flex',
                                    border: '10'
                            }}
                        />
                    ))
                )
            }
        </div>
    );

}

export default TodoListContainer;