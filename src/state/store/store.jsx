import { createStore, combineReducers } from 'redux'
import todoReducer from 'state/reducers/todo'

// function getExpenses() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve([
//                 {
//                     amount: 30.00,
//                     description: 'ramen',
//                     createAt: 1509921071
//                 },
//                 {
//                     amount: 1000.00,
//                     description: 'rent',
//                     createAt: 1509921093
//                 },                {
//                     amount: 3.00,
//                     description: 'coffee',
//                     createAt: 1509921161
//                 }
//             ])
//         }, 2000)
//     })
// }
/**
 * Store
 */

const store = createStore(
    combineReducers({
        todos: todoReducer,
    })
)

export default store