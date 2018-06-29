import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = (todos) => {
    // const {todos, destroyTodo} = this.todos
    return (
        <div>
           
            {todos.users.map(todo =>
            <div key={todo.id} >
             {/* {console.log(todos.destroyTodo(todo.id))} */}
                <Todo {...todo} onClick={() =>todos.destroyTodo(todo.id)}/>
            </div>
            )}
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}

export default TodoList