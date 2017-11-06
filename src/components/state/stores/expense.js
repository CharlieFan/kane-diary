import { createStore, combineReducers } from 'redux'
import moment from 'moment'
/**
 * Actions
 * 1. Expense Actions
 */

function getExpenses() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    amount: 30.00,
                    description: 'ramen',
                    createAt: 1509921071
                },
                {
                    amount: 1000.00,
                    description: 'rent',
                    createAt: 1509921093
                },                {
                    amount: 3.00,
                    description: 'coffee',
                    createAt: 1509921161
                }
            ])
        }, 2000)
    })
}

const expenseActions = {
    // async initExpense() {
    //     let res = await getExpenses()
    //     return {
    //         type: 'INIT_EXPENSE',
    //         expenses: res
    //     }
    // },

    addExpense({ description = '', amount = 0, createAt = moment().format('X') }) {
        if (typeof amount !== 'number') {
            amount = 0
        }

        return {
            type: 'ADD_EXPENSE',
            expense: {
                amount,
                description,
                createAt
            }
        }
    },
    
}

/**
 * 2. filters Actions
 */

/**
 * Expenses Reducer
 */
const defaultExpense = []
const expenseReducer = (state = defaultExpense, action) => {
    switch (action.type) {
        case 'INIT_EXPENSE':
            return [...state, ...action.expenses]
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        default:
            return state
    }
}

const defaultFilter = {
    sortBy: 'amount',
    text: '',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = defaultFilter, action) => {
    switch (action.type) {
        default:
            return state
    }
}

/**
 * Store
 */

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filter: filterReducer
    })
)

export { store, expenseActions }