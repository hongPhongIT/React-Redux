const todos = (state = [], action) => {
    switch (action.type){
        case 'GET_DATA':
            return [...state]
        default:
            return state
    }
}

export default todos