import * as React from 'react'

interface ItodoListProps {
    todoList: Types.Todo.Base[]
}

const TodoList: React.SFC<ItodoListProps> = (props) => {
    const items = props.todoList
    const listItems = items.map((item) => {
        return <li key={item.createAt}>{item.content}</li>
    })

    return (
        <ul>{listItems}</ul>
    )
}

export default TodoList