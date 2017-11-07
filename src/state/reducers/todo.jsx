/**
 * TODO Reducer
 */
const defaultTodo = [
    {
        id: 1,
        content: 'First thing to do',
        createAt: 1510092325,
        isFinished: false
    }
]
const todoReducer = (state = defaultTodo, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo]
        default:
            return state
    }
}

export default todoReducer