import React from 'react'
import { store, expenseActions } from 'store/modules/expense'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        expenses: store.getState()
    }

    // increase = () => {
    //     store.dispatch({
    //         type: 'INCREMENT'
    //     })

    //     this.setState({
    //         value: store.getState()
    //     })
    // }

    // decrease = () => {
    //     store.dispatch({
    //         type: 'DECREMENT'
    //     })

    //     this.setState({
    //         value: store.getState()
    //     })
    // }

    render() {
        // store.dispatch(expenseActions.initExpense())
        let user = {
            name: 'Charlie',
            age: 26
        }
        console.log({...user})

        return (
            <div>
                <h1>Dashboard</h1>
                <input placeholder="what need to do?" type="text"/>
                <button>Add</button>
            </div>
        )
    }
}
