import * as React from 'react'
import * as styles from './Dashboard.scss'

// Components:
import TodoList from './todoList/TodoList'

// Redux:
import { Dispatch } from 'redux'
import { addTodo, editTodo } from 'store/modules/todo/action'

interface ITodoProps {
    todoList: Types.Todo.Base[]
    visibilityFilter: string
    submitTodo(content: string): void
    toggleCompleted(id: number): void
    editTodo(todo: Types.Todo.Base): void
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
                editTodo={this.props.editTodo}
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