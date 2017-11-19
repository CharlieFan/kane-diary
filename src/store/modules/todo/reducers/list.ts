/**
 * TODO List Reducer
 */

type ActionType = 'ADD_TODO' | 'EDIT_TODO' | 'REMOVE_TODO'

const todoReducer = (state: Types.Todo.base[] = [], action: {
    type: ActionType
    todo: Types.Todo.base
}) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.todo
            ]
        default:
            return state
    }
}

export default todoReducer