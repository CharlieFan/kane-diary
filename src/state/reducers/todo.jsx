/**
 * TODO Reducer
 */
// const defaultTodo = [
//     {
//         content: 'First thing to do',
//         createAt: 1510092325,
//         isFinished: false
//     }
// ]
const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo]
        default:
            return state
    }
}

export default todoReducer