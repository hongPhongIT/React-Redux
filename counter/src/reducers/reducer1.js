const reducer1 = (state = 0, action) => {
    switch (action.type) {
        case 'CONG':
            return 'cong' + (state + 1)
        case 'TRU':
            return state - 1
        case 'NHAN':
            return state * 2
        case 'CHIA':
            return state / 2
        default:
            return state
    }
}

export default reducer1;