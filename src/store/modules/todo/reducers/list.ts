/**
 * TODO List Reducer
 */

type ActionType = 'ADD_TODO' | 'EDIT_TODO' | 'REMOVE_TODO' | 'TOGGLE_TODO'

const todoReducer = (state: Types.Todo.Base[] = [], action: {
    type: ActionType
    todo?: Types.Todo.Base
    id?: number
}) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.todo
            ]
        case 'EDIT_TODO':
            return state.map((todo) => {
                if (todo.id === action.todo.id) {
                    return {
                        ...todo,
                        content: action.todo.content
                    }
                } else {
                    return todo
                }
            })
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        isFinished: !todo.isFinished
                    }
                } else {
                    return todo
                }
            })
        default:
            return state
    }
}

export default todoReducer