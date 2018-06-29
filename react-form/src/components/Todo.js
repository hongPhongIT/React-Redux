import React from 'react'
import PropTypes from 'prop-types'

const Todo = (todo, onClick) => {
    console.log(onClick)
    return (
        <ul>
            <li>{todo.id}</li>
            <li>{todo.name}</li>
            <li>{todo.username}</li>
            <li>{todo.email}</li>
            <li onClick={onClick}>delete</li>
        </ul>
    )
}

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default Todo
