import * as React from 'react'
import * as styles from './Dashboard.scss'

// Components:
import TodoList from './todoList/TodoList'

interface ITodoProps {
    todoList: Types.Todo.Base[]
    addTodo(content: string): void
}

interface ITodoStates {
    newTodo: string
}

export default class Dashboard extends React.Component<ITodoProps, ITodoStates> {
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
        this.props.addTodo(this.state.newTodo)
        this.setState({
            newTodo: ''
        })
        return
    }

    render() {
        let todoListVar = null
        if (this.props.todoList.length > 0) {
            todoListVar = <TodoList/>
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