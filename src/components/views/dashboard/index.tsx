/**
 * DashBord main container
 */

import * as React from 'react'

// Components:
import Dashboard from './Dashboard'

// Redux:
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addTodo } from 'store/modules/todo/action'

const mapStateToProps = (state: Types.Store) => {
    return {
        todoList: state.todo.todoList
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Types.Store>) => {
    return {
        addTodo: (content: string) => {
            dispatch(addTodo(content))
        }
    }
}

const DashboardComponent = connect(
    mapStateToProps, mapDispatchToProps)(Dashboard)
export default DashboardComponent
