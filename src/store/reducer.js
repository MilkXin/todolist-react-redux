const defaultState = {
    inputValue: '',
    list: ['吃饭', '喝水', '睡觉']
}

export default (state = defaultState, action) => {
    if (action.type === 'changeValue') {
        let newState = {...state}
        newState.inputValue = action.value
        return newState
    }
    
    if (action.type === 'add') {
        let newState = {...state}
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    
    if (action.type === 'del') {
        let newState = {...state}
        newState.list.splice(action.index, 1)
        return newState
    }

    return state
}