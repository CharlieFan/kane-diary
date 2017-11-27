import * as React from 'react'
import * as styles from './TodoList.scss'

// Redux:
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { editTodo } from 'store/modules/todo/action'

// Components:
import TodoItem from './TodoItem'

interface ItodoListProps {
    className?: string
    todoList: Types.Todo.Base[]
    visibilityFilter: string
    editTodo(todo: Types.Todo.Base): void
}

interface ItodoListStates {
    todoList: Types.Todo.Base[]
}

class TodoList extends React.Component<ItodoListProps, ItodoListStates> {
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

const mapStateToProps = (state: Types.Store) => {
    return {
        todoList: state.todo.todoList,
        visibilityFilter: state.todo.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Types.Store>) => {
    return {
        editTodo: (todo: Types.Todo.Base) => {
            dispatch(editTodo(todo))
        }
    }
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodoListContainer