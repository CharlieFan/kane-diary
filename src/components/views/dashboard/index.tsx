import * as React from 'react'

// Components:
import Dashboard from './Dashboard'

// Redux:
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addTodo, editTodo } from 'store/modules/todo/action'

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
        editTodo: (todo: Types.Todo.Base) => {
            dispatch(editTodo(todo))
        }
    }
}

const DashboardComponent = connect(
    mapStateToProps, mapDispatchToProps)(Dashboard)
export default DashboardComponent
