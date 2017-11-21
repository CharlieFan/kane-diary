import * as React from 'react'
import * as styles from './TodoList.scss'

// Components:
import TodoItem from './TodoItem'

// console.log(styles)

interface ItodoListProps {
    className?: string
    todoList: Types.Todo.Base[]
    editTodo(todo: Types.Todo.Base): void
}

interface ItodoListStates {
    todoList: Types.Todo.Base[]
}

export default class TodoList extends React.Component<ItodoListProps, ItodoListStates> {
    state = {
        todoList: this.props.todoList.map(todo => {
            return {
                ...todo,
                isEdit: false
            }
        }),
    }

    componentWillReceiveProps(nextProps: ItodoListProps) {
        this.setState({
            todoList: nextProps.todoList.map(todo => {
                return {
                    ...todo,
                    isEdit: false
                }
            })
        })
    }

    render() {
        return (
            <ul className={styles['todo-list']}>
                <li className={styles['header']}>
                    <span>Content</span>
                    <span>Created Time</span>
                    <span>Action</span>
                </li>
                {
                    this.props.todoList.map(item => {
                        return (
                            <TodoItem
                                editTodo={this.props.editTodo}
                                todo={item} key={item.id}></TodoItem>
                        )
                    })
                }
            </ul>
        )
    }
}