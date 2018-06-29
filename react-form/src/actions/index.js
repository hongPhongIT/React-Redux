let nextId = 0

export const addTodo = (name, username, email) => {
    return {
        type: 'ADD_TODO',
        id: nextId++,
        name,
        username,
        email
    }
}

export const destroyTodo = id => {
    return {
        type: 'DESTROY_TODO',
        id
    }
}
