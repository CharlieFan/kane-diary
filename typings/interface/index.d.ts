/**
 * Project Type declarations
 */

export as namespace Types

export * from './todo.d'

export interface Store {
    todo?: Types.Todo.State
}

export interface IPlainObject {
    [key: string]: any
}