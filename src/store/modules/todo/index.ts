/**
 * TODO Reducer
 */

import { combineReducers } from 'redux'
import todoList from './reducers/list'
import visibilityFilter from './reducers/visibilityFilter'

const todoApp = combineReducers({
    todoList,
    visibilityFilter
})

export default todoApp