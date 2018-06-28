export const todos = (state = [], action) => {
    switch (action.type){
        case 'ADD_TODO':[
            ...state,{
                id: action.id,
                text: text
            }
        ]
    }
}