import { createStore, combineReducers } from 'redux'
import todoReducer from 'state/reducers/todo'

/**
 * Store
 */

const store = createStore(
    combineReducers({
        todos: todoReducer,
    })
)

export default store