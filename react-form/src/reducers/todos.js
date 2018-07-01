const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    id: action.id,
                    name: action.name,
                    username: action.username,
                    email: action.email
                }
            ]
        // case 'CHANGE_NAME':
        //     return action.name
        // case 'CHANGE_EMAIL':
        //     return action.email
        // case 'CHANGE_USER_NAME':
        //     return action.username
        case 'DESTROY_TODO':
        console.log('action.id=', action.id)
            console.log('[state.splice(action.id, 1)]:',[...state, state.splice(action.id, 1)])
            return 
        default:
            return state
    }
}

export default todos