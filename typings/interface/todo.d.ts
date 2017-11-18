/**
 * Todo type
 */

export namespace Todo {
    interface Base {
        content: string
        createAt: number
        isFinished: boolean
    }

    interface ItodoStore {
        todoList: Base[]
        visibilityFilter: string
    }

    interface ItodoAction {
        type: string
        todo: Base
    }
}
