import * as moment from 'moment'
/**
 * TODO Actions:
 */

const todoActions = {
    addTodo({
        content = '',
        createAt = moment().format('X'),
        isFinished = false
    }) {
        return {
            type: 'ADD_TODO',
            todo: {
                content,
                createAt,
                isFinished
            }
        }
    },
}

export default todoActions