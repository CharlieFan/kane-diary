import * as React from 'react'
import * as styles from './TodoList.scss'

console.log(styles)


interface ItodoListProps {
    className?: string
    todoList: Types.Todo.Base[]
    toggleCompleted(id: number): void
}

interface ItodoListStates {
    todoList: Types.Todo.Base[]
}

// class EditInput extends React.Component<{ value: string }, { content: string }> {
//     state = {
//         content: this.props.value
//     }

//     handleChange(value: string) {
//         this.setState({
//             content: value
//         })
//     }

//     render() {
//         return (
//             <input type="text" maxLength={24}
//                 value={this.state.content}
//                 onChange={(e) => {
//                     this.handleChange(e.target.value)
//                 }} />
//         )
//     }
// }

export default class TodoList extends React.Component<ItodoListProps, ItodoListStates> {
    state = {
        todoList: this.props.todoList
    }

    componentWillReceiveProps(nextProps: ItodoListProps) {
        this.setState({
            todoList: nextProps.todoList
        })
    }

    handleToggle(id: number) {
        // console.log(id)
        this.props.toggleCompleted(id)
    }

    initStateList(list: Types.Todo.Base[]) {
        let todoMap: {
            [key: number]: string
        }

        list.forEach(todo => {
            todoMap[todo.id] = todo.content
        })

        console.log(todoMap)
        return todoMap
    }

    handleChange(value: string, id: number) {
        console.log(value)
        this.setState((preState: ItodoListStates) => {
            let newList = preState.todoList.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        content: value
                    }
                } else {
                    return todo
                }
            })

            return {
                todoList: newList
            }
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
                    this.state.todoList.map(item => {
                        return (
                            <li
                                key={item.id}>
                                <span>
                                    <a className={item.isFinished ? styles['finished'] : ''}
                                        href="javascript:void(0)"
                                        onClick={(e) => {
                                            this.handleToggle(item.id)
                                        }}>
                                        {item.content}
                                    </a>
                                    <input type="text"
                                        maxLength={24}
                                        value={item.content}
                                        onChange={(e) => {
                                            this.handleChange(e.target.value, item.id)
                                        }}/>
                                </span>
                                <span>
                                    {item.createAt}
                                </span>
                                <span>
                                    <button>edit</button>
                                </span>
                             </li>
                        )
                    })
                }
            </ul>
        )
    }
}