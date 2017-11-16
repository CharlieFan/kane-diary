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
const todoReducer = (state: {
    content: string
    createAt: number
    isFinished: boolean
}[] = [], action: {
    type: string
    todo: {
        content: string
        createAt: number
        isFinished: boolean 
    }
}) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo]
        default:
            return state
    }
}

export default todoReducer