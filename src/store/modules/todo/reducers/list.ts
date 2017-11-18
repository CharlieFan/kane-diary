/**
 * TODO List Reducer
 */

type ActionType = 'ADD_TODO' | 'EDIT_TODO' | 'REMOVE_TODO'

const todoReducer = (state: Types.Todo.Base[] = [], action: {
    type: ActionType
    todo: Types.Todo.Base
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