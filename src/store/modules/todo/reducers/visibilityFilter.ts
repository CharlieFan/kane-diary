/**
 * Visibility filter reducer
 */

const filterReducer = (state: Types.Todo.FilterType = 'SHOW_ALL', action: {
    type: Types.Todo.ActionType
    filter: Types.Todo.FilterType
}) => {
    if (action.type === 'SET_VISIBILITY_FILTER') {
        return action.filter
    } else {
        return state
    }
}

export default filterReducer