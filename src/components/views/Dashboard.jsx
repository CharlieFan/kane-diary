import React from 'react'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
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
        return (
            <div>
                <h1>Dashboard</h1>
                <input placeholder="what need to do?" type="text"/>
                <button>Add</button>
            </div>
        )
    }
}
