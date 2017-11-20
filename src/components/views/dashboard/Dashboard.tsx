import * as React from 'react'
import * as styles from './Dashboard.scss'

// Components:
import TodoList from './todoList/TodoList'

// Redux:
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addTodo, toggleCompleted } from 'store/modules/todo/action'

interface TodoProps {
    todoList: Types.Todo.Base[]
    visibilityFilter: string
    submitTodo(content: string): void
    toggleCompleted(id: number): void
}

interface TodoStates {
    newTodo: string
}

class Dashboard extends React.Component<TodoProps, TodoStates> {
    state = {
        newTodo: ''
    }

    handleChange(value: string) {
        this.setState({
            newTodo: value
        })
        return
    }

    handleSubmit() {
        if (!this.state.newTodo) return
        this.props.submitTodo(this.state.newTodo)
        this.setState({
            newTodo: ''
        })
        return
    }

    render() {
        let todoListVar = null
        if (this.props.todoList.length > 0) {
            todoListVar = <TodoList
                toggleCompleted={this.props.toggleCompleted}
                todoList={this.props.todoList} />
        }


        return (
            <div className={styles['view-dashboard']}>
                <h1>Dashboard</h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.handleSubmit()
                }}>
                    <label>
                        <input type="text"
                            maxLength={24}
                            value={this.state.newTodo}
                            onChange={(e) => {
                                this.handleChange(e.target.value)
                            }} />
                    </label>
                    <button type="submit">Add</button>
                </form>

                {todoListVar}
            </div>
        )
    }
}

const mapStateToProps = (state: Types.Store) => {
    return {
        todoList: state.todo.todoList,
        visibilityFilter: state.todo.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Types.Store>) => {
    return {
        submitTodo: (content: string) => {
            dispatch(addTodo(content))
        },
        toggleCompleted: (id: number) => {
            dispatch(toggleCompleted(id))
        }
    }
}

const DashboardComponent = connect(
    mapStateToProps, mapDispatchToProps)(Dashboard)
export default DashboardComponent
