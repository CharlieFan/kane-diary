import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    finishIt(id) {
        console.log(id)
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

                <ul>
                    {
                        this.props.todos.map((thing) => (
                            <li onClick={(e) => {this.finishIt(thing.id)}}
                                key={thing.id}>{thing.content}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Dashboard)