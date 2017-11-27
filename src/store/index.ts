import { combineReducers } from 'redux'
import { createStore } from 'redux'


// Reducers:
import todoReducer from './modules/todo'

const reducers = combineReducers({
    todo: todoReducer
})

const stores = createStore(reducers)

export default stores