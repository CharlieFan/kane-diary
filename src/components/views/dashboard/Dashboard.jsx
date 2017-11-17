import React from 'react'
import { connect } from 'react-redux'
import actions from 'state/actions/todo'

const mapStateToProps = ({todos}) => {
    return {todos}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNew: (content) => {
            dispatch(actions.addTodo({
                content: content
            }))
        }
    }
}

const TodoList = ({todos}) => (
    <ul>
        {
            todos.map((thing) => (
                <li key={thing.createAt}>{thing.content}</li>
            ))
        }
    </ul>
)

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        newTodoItem: ''
    }

    submit() {
        if (!this.state.newTodoItem) return false
        this.props.addNew(this.state.newTodoItem)
        this.state.newTodoItem = ''
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <input placeholder="what need to do?"
                    value={this.state.newTodoItem}
                    onInput={(e) => {
                        this.setState({
                            newTodoItem: e.target.value
                        })
                    }}
                    type="text"/>
                <button onClick={() => {
                    this.submit()
                }}>Add</button>
                <TodoList todos={this.props.todos} />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)