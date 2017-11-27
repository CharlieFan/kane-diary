import * as React from 'react'
import Router from 'router/Router'
import { Provider } from 'react-redux'
import store from 'store'
// console.log(store)

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}
