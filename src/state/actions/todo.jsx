import moment from 'moment'
/**
 * TODO Actions:
 */

const todoActions = {
    addTodo({
        content = '',
        createAt = moment().format('X'),
        id = 111,
        isFinished = false
    }) {
        return {
            type: 'ADD_TODO',
            todo: {
                id,
                content,
                createAt,
                isFinished
            }
        }
    },
}

export default todoActions