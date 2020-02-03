import React from 'react';
import back from '../../assets/back.jpg';

function TodoListContainer(props) {
    const {todoList} = props; //array of todo's
    return (
        <div style={{
                position: 'relative',
                background: `url(${back})`,
                height: '100vh'
        }}
        >
            {
                !!todoList.length
                && (
                    todoList.map(todo => (
                        <div key={todo.id}
                            style={{
                                display: 'flex',
                                border: '10'

                            }}
                            
                            
                            
                        
                        >{todo.title}</div>
                    ))
                )

            }

        </div>

    );

}

export default TodoListContainer;