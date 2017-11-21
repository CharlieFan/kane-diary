import * as React from 'react'
import * as styles from './TodoList.scss'

interface ITodoItemProps {
    todo: Types.Todo.Base
    key: number
    editTodo(todo: Types.Todo.Base): void
}

interface ITodoItemStates extends Types.Todo.Base {
    editFlag: boolean
}

export default class TodoItem extends React.Component<ITodoItemProps, ITodoItemStates> {
    state = {
        content: this.props.todo.content,
        isFinished: this.props.todo.isFinished,
        editFlag: false
    }

    componentWillReceiveProps(nextProps: ITodoItemProps) {
        this.setState({
            content: nextProps.todo.content,
            isFinished: nextProps.todo.isFinished
        })
    }

    handleChange(value: string) {
        this.setState({
            content: value
        })
    }

    toggleCompeled() {
        let data = {
            ...this.props.todo,
            isFinished: !this.props.todo.isFinished
        }

        this.props.editTodo(data)
        return false
    }

    handleSave() {
        // TODO: dispatch edit
        let data = {
            ...this.props.todo,
            content: this.state.content
        }
        this.props.editTodo(data)
        this.disableEdit()
        return false
    }

    disableEdit() {
        this.setState({
            editFlag: false
        })
    }

    enableEdit() {
        this.setState({
            editFlag: true
        })
        return false
    }

    render() {
        return (
            <li>
                <span>
                    {
                        this.state.editFlag ? (
                            <input type="text" maxLength={24}
                                value={this.state.content}
                                onChange={(e) => {
                                    this.handleChange(e.target.value)
                                }} />
                        ) : (
                            <a href="javascript:void(0)"
                                className={this.props.todo.isFinished ? styles['finished'] : ''}
                                onClick={(e) => {
                                    this.toggleCompeled()
                                }}>
                                {this.state.content}
                            </a>
                        )
                    }
                </span>
                <span>
                    {this.props.todo.createAt}
                </span>
                <span>
                    {
                        this.state.editFlag ? (
                            <button onClick={(e) => {
                                this.handleSave()
                            }}>save</button>
                        ) : (
                            <button onClick={(e) => {
                                this.enableEdit()
                            }}>edit</button>
                        )
                    }
                </span>
            </li>
        )
    }
}