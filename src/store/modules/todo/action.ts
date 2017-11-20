/**
 * TODO List Actions
 */
import * as moment from 'moment'

let initId = 0

type FilterType = 'SHOW_COMPLETED' | 'SHOW_UNCOMPLETED' | 'SHOW_ALL'

interface Filters {
    type: string
    filter: FilterType
}

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

export const editTodo = (id: number, content: string) => {
    let todo: Types.Todo.Base = {id, content}
    return {
        type: 'EDIT_TODO',
        todo
    }
}

export const toggleTodo = (id: number) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}


export const filter = (filterType: FilterType) => {
    return {
    type: 'SET_VISIBILITY_FILTER',
        filter: filterType
    }
}
