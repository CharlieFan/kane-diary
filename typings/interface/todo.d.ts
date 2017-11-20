/**
 * Todo type
 */

export namespace Todo {
    type ActionType = 'ADD_TODO' | 'EDIT_TODO' | 'REMOVE_TODO' | 'TOGGLE_COMPLETED' | 'SET_VISIBILITY_FILTER'

    type FilterType = 'SHOW_COMPLETED' | 'SHOW_UNCOMPLETED' | 'SHOW_ALL'

    interface Base {
        id?: number
        content: string
        createAt?: number
        isFinished?: boolean
    }

    interface State {
        todoList: Base[]
        visibilityFilter: string
    }

    interface Action {
        type: ActionType
        todo?: Base
    }
}
