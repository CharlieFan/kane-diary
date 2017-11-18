/**
 * TODO List Actions
 */
import * as moment from 'moment'

type FilterType = 'SHOW_COMPLETED' | 'SHOW_UNCOMPLETED' | 'SHOW_ALL'

interface Filters {
    type: string
    filter: FilterType
}

export const addTodo = (content: string) => {
    let todo: Types.Todo.Base = {
        content: content,
        createAt: Number(moment().format('X')),
        isFinished: false
    }
    return {
        type: 'ADD_TODO',
        todo
    }
}


export const filter = (filterType: FilterType) => {
    return {
    type: 'SET_VISIBILITY_FILTER',
        filter: filterType
    }
}
