/**
 * TODO List Actions
 */
import * as moment from 'moment'

let initId = 0

export const addTodo = (content: string) => {
    let todo: Types.Todo.Base = {
        id: initId++,
        content: content,
        createAt: Number(moment().format('X')),
        isFinished: false
    }
    return {
        type: 'ADD_TODO',
        todo
    }
}

export const editTodo = (newTodo: Types.Todo.Base) => {
    return {
        type: 'EDIT_TODO',
        todo: newTodo
    }
}

export const filter = (filterType: Types.Todo.FilterType) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: filterType
    }
}
