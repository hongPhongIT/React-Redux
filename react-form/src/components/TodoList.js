import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = (todos) => (

    <ul>
        {console.log(todos)}
        {todos.map(todo => 
            <Todo key={todo.id} {...todo}/>
        )}
    </ul>

)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired 
        })
    )
}

export default TodoList