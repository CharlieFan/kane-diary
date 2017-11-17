/**
 * Visibility filter reducer
 */

type FilterType = 'SHOW_COMPLETED' | 'SHOW_UNCOMPLETED' | 'SHOW_ALL'

const filterReducer = (state: FilterType = 'SHOW_ALL', action: {
    type: 'SET_VISIBILITY_FILTER'
    filter: FilterType
}) => {
    if (action.type === 'SET_VISIBILITY_FILTER') {
        return action.filter
    } else {
        return state
    }
}

export default filterReducer