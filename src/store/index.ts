import { createStore } from 'redux'

// Actions:

// Reducers:
import todoReducer from './modules/todo'

// Stores:
const stores = {
    todoStore: createStore(todoReducer)
}

const actions = {

}

export {
    stores,
    actions
}