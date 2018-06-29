import React from 'react'
import { connect } from 'react-redux'
import {addTodo}  from '../actions'

const AddTodo = ({ dispatch }) => {
    // let input
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (!e.target.name.value.trim()||!e.target.email.value.trim()||!e.target.username.value.trim()) {
                    return
                }
                dispatch(addTodo(e.target.name.value, e.target.username.value, e.target.email.value))
            }}>
                <label>Name</label><br/>
                <input  name="name" /><br/>
                <label>User Name</label><br/>
                <input name="username"/><br/>
                <label>Email</label><br/>
                <input name="email"/><br/>
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)