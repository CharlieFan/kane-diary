/**
 * TODO Reducer
 */
const defaultTodo = []
const todoReducer = (state = defaultTodo, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo]
        default:
            return state
    }
}

export default todoReducer