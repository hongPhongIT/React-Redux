import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = (props) => {
    const {users , destroyTodo } = props
    return (
        <div>
             {console.log(users)}
            {users.map(todo =>
                    <Todo key={todo.id} {...todo} onClick={() => destroyTodo(todo.id)}/>
            )}
        </div>
    )
}

TodoList.propTypes = {
    props: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}

export default TodoList