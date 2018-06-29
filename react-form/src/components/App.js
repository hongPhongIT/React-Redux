import React from 'react'
import Visible from '../containers/visibilityTodo'
import AddToDo from '../containers/addTodo'

const App = () => {
    return(
        <div>
            <Visible/>
            <AddToDo/>
        </div>
    )
}

export default App