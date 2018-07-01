import React from 'react'
import PropTypes from 'prop-types'

const Todo = (props) => {
    console.log(props)
    const {id, name, username, email, onClick} = props
    return (
        <ul key={id}> 
            <li>{id}</li>
            <li>{name}</li>
            <li>{username}</li>
            <li>{email}</li>
            <button onClick={() => onClick(id)}>delete</button>
        </ul>
    )
}

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Todo
