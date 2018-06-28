const todos = (state = [{id: 1, text: 'phong'}], action) => {
    switch (action.type){
        case 'ADD_TODO':
        return [
            ...state,{
                id: action.id,
                text: action.text
            }
        ]
        default:
        return state
    }
}

export default todos