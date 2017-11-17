import * as React from 'react'
import Router from 'router/Router'
// import { Provider } from 'react-redux'
// import store from 'state/store/store'

export class App extends React.Component<{}, {}> {
    render() {
        return (
            // <Provider>
                <Router />
            // </Provider>
        )
    }
}
