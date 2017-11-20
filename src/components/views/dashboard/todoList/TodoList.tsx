import * as React from 'react'
import * as styles from './TodoList.scss'


interface ItodoListProps {
    className?: string
    todoList: Types.Todo.Base[]
}

export default class TodoList extends React.Component<ItodoListProps, {}> {
    render() {
        return (
            <ul className={styles['todo-list']}>
                {
                    this.props.todoList.map(item => {
                        return (
                            <li key={item.createAt}>
                                <a href="javascript:void(0)">
                                    {item.content}
                                </a>
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