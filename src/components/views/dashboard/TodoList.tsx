import * as React from 'react'


interface ItodoListProps {
    className?: string
    todoList: Types.Todo.Base[]
}

export default class TodoList extends React.Component<ItodoListProps, {}> {
    render() {
        return (
            <ul className={this.props.className || ''}>
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