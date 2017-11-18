/**
 * Visibility filter reducer
 */

const filterReducer = (state: string = 'SHOW_ALL', action: {
    type: 'SET_VISIBILITY_FILTER'
    filter: string
}) => {
    if (action.type === 'SET_VISIBILITY_FILTER') {
        return action.filter
    } else {
        return state
    }
}

export default filterReducer