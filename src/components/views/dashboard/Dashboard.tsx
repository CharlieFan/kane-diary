import * as React from 'react'
import * as styles from './Dashboard.scss'
import { connect } from 'react-redux'

interface Props {
    todoList: Types.Todo.base[]
}

const mapStateToProps = (state: {
    todos: Types.Todo.base[]
    // visibilityFilter: string
}) => {
    return {
        todos: state.todos
    }
}

export default class DashboardComponent extends React.Component<Props> {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
            </div>
        )
    }
}

// const Dashboard = connect(mapStateToProps)(DashboardComponent)
// export default Dashboard
