import * as React from 'react'
import Router from 'router/Router'
import { Provider } from 'react-redux'
import { stores } from 'store'

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store={stores.todoStore}>
                <Router />
            </Provider>
        )
    }
}
